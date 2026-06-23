import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { nom, telephone, message, objet } = await req.json() as {
      nom: string;
      telephone: string;
      message: string;
      objet?: string;
    };

    if (!nom || !telephone || !message) {
      return Response.json({ error: "Champs manquants" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL ?? "ema.saget@auto-ecole-cine-evreux.fr";

    if (!apiKey) {
      console.error("RESEND_API_KEY manquante");
      return Response.json({ error: "Configuration serveur manquante" }, { status: 500 });
    }

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "Auto École du Ciné <onboarding@resend.dev>",
      to: toEmail,
      subject: `Nouveau message de ${nom}${objet ? ` — ${objet}` : ""}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #E91E8C;">Nouveau message depuis le site</h2>
          <table style="border-collapse: collapse; width: 100%;">
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Nom</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${nom}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Téléphone</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${telephone}</td></tr>
            ${objet ? `<tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Objet</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${objet}</td></tr>` : ""}
            <tr><td style="padding: 8px; font-weight: bold;">Message</td><td style="padding: 8px;">${message.replace(/\n/g, "<br>")}</td></tr>
          </table>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("Erreur envoi email:", err);
    return Response.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
