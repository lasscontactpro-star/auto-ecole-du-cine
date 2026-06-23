import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { nom, telephone, email, message, objet } = await req.json() as {
      nom: string;
      telephone: string;
      email?: string;
      message: string;
      objet?: string;
    };

    if (!nom || !telephone || !message) {
      return Response.json({ error: "Champs manquants" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL ?? "autoecoleducine@orange.fr";

    if (!apiKey) {
      console.error("RESEND_API_KEY manquante");
      return Response.json({ error: "Configuration serveur manquante" }, { status: 500 });
    }

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "Auto École du Ciné <onboarding@resend.dev>",
      to: toEmail,
      ...(email ? { replyTo: email } : {}),
      subject: `✉️ ${nom} — ${telephone}${objet ? ` — ${objet}` : ""}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #E91E8C;">Nouveau message depuis le site</h2>
          <table style="border-collapse: collapse; width: 100%;">
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee; width: 120px;">Nom</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${nom}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Téléphone</td><td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="tel:${telephone}" style="color: #E91E8C; font-weight: bold;">${telephone}</a></td></tr>
            ${email ? `<tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Email</td><td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #E91E8C;">${email}</a></td></tr>` : ""}
            ${objet ? `<tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Objet</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${objet}</td></tr>` : ""}
            <tr><td style="padding: 8px; font-weight: bold;">Message</td><td style="padding: 8px;">${message.replace(/\n/g, "<br>")}</td></tr>
          </table>
          <p style="margin-top: 16px; font-size: 12px; color: #999;">
            ${email ? `Répondez directement à cet email pour contacter ${nom}.` : `Pas d'email fourni — contactez par téléphone : <a href="tel:${telephone}" style="color: #E91E8C;">${telephone}</a>`}
          </p>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("Erreur envoi email:", err);
    return Response.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
