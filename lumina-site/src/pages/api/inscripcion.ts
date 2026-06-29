// Endpoint serverless (Vercel) para recibir inscripciones y mensajes de formularios.
// Envia el contenido por correo via Resend. Reemplaza el endpoint Supabase muerto.
// Variables de entorno (setear en Vercel):
//   RESEND_API_KEY    (obligatoria)  api key de Resend
//   LEADS_TO_EMAIL    (opcional)     correo destino; default jcepeda@luminaconsulting.ai
//   LEADS_FROM_EMAIL  (opcional)     remitente; default "Lumina <onboarding@resend.dev>"
//                                    (onboarding@resend.dev funciona sin verificar dominio,
//                                     enviando al correo de la cuenta Resend)
export const prerender = false;

import type { APIRoute } from 'astro';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function env(name: string): string | undefined {
  // En Vercel (runtime Node) las env vars viven en process.env; import.meta.env como respaldo.
  const fromProcess = (globalThis as any)?.process?.env?.[name];
  // @ts-ignore import.meta.env existe en Astro
  const fromMeta = import.meta.env?.[name];
  return fromProcess ?? fromMeta;
}

function esc(s: unknown): string {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

const json = (body: object, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

export const POST: APIRoute = async ({ request }) => {
  let data: Record<string, any> = {};
  try {
    data = await request.json();
  } catch {
    return json({ success: false, error: 'invalid_json' }, 400);
  }

  const userEmail = String(data.user_email || '').trim();
  const userName = String(data.user_name || '').trim();
  const subject = String(data.subject || 'Nuevo mensaje desde el sitio').trim();
  const message = String(data.message || '').trim();
  const pageContext = String(data.page_context || '').trim();

  if (!EMAIL_RE.test(userEmail)) {
    return json({ success: false, error: 'invalid_email' }, 400);
  }

  const apiKey = env('RESEND_API_KEY');
  const to = env('LEADS_TO_EMAIL') || 'jcepeda@luminaconsulting.ai';
  const from = env('LEADS_FROM_EMAIL') || 'Lumina <onboarding@resend.dev>';

  if (!apiKey) {
    return json({ success: false, error: 'server_not_configured' }, 500);
  }

  const html = `
    <div style="font-family:Arial,sans-serif;font-size:15px;color:#1a1a2e;line-height:1.6">
      <h2 style="color:#155E75;margin:0 0 12px">${esc(subject)}</h2>
      <p style="margin:0 0 4px"><strong>Nombre:</strong> ${esc(userName) || '(sin nombre)'}</p>
      <p style="margin:0 0 4px"><strong>Correo:</strong> ${esc(userEmail)}</p>
      ${pageContext ? `<p style="margin:0 0 12px"><strong>Origen:</strong> ${esc(pageContext)}</p>` : ''}
      <hr style="border:none;border-top:1px solid #e2e8f0;margin:12px 0">
      <pre style="white-space:pre-wrap;font-family:inherit;margin:0">${esc(message)}</pre>
    </div>`;

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: userEmail,
        subject,
        html,
      }),
    });

    if (!r.ok) {
      const detail = await r.text();
      console.error('Resend error', r.status, detail);
      return json({ success: false, error: 'email_provider', status: r.status }, 502);
    }

    // Correo de confirmacion al inscrito (solo para inscripciones de la clase).
    // Best-effort: si falla, la inscripcion igual queda capturada (ya se notifico a Lumina).
    if (pageContext === 'clase-ia') {
      const saludo = userName ? `Hola ${esc(userName.split(' ')[0])},` : 'Hola,';
      const confirmHtml = `
        <div style="font-family:Arial,sans-serif;font-size:15px;color:#1a1a2e;line-height:1.6">
          <p>${saludo}</p>
          <p>Gracias por inscribirte en la clase gratis
             <strong>"Claude en serio: IA para multiplicar tu productividad"</strong>.</p>
          <p>En los proximos dias te enviare un correo con el enlace y las instrucciones para
             sumarte a la clase.</p>
          <p>Ante cualquier duda quedo disponible en
             <a href="mailto:jcepeda@luminaconsulting.ai">jcepeda@luminaconsulting.ai</a>.</p>
          <p>Saludos,<br>Jorge Cepeda &middot; Lumina</p>
        </div>`;
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from,
            to: [userEmail],
            reply_to: to,
            subject: 'Quedaste inscrito: Claude en serio',
            html: confirmHtml,
          }),
        });
      } catch (e) {
        console.error('confirmation email failed', e);
      }
    }

    return json({ success: true });
  } catch (e) {
    console.error('inscripcion handler error', e);
    return json({ success: false, error: 'server' }, 500);
  }
};
