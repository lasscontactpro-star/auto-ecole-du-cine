"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

interface FormData {
  nom: string;
  telephone: string;
  email?: string;
  message: string;
}

export default function ContactRapide() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) setSent(true);
      else setError(true);
    } catch {
      setError(true);
    }
  };

  return (
    <section className="bg-[#2D2D2D] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-[#E91E8C] font-semibold text-sm uppercase tracking-widest mb-3">Contact</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Nous contacter</h2>

            {sent ? (
              <div className="bg-[#E91E8C]/20 border border-[#E91E8C]/40 rounded-xl p-6 text-white">
                <p className="font-bold text-lg mb-1">✓ Message envoyé !</p>
                <p className="text-white/80">Nous vous répondrons très rapidement. Vous pouvez aussi nous appeler.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Votre nom *</label>
                  <input
                    {...register("nom", { required: "Requis" })}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#E91E8C] transition-colors"
                    placeholder="Ex : Marie Dupont"
                  />
                  {errors.nom && <p className="text-[#E91E8C] text-xs mt-1">{errors.nom.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Téléphone *</label>
                  <input
                    {...register("telephone", { required: "Requis" })}
                    type="tel"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#E91E8C] transition-colors"
                    placeholder="06 XX XX XX XX"
                  />
                  {errors.telephone && <p className="text-[#E91E8C] text-xs mt-1">{errors.telephone.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Email <span className="text-white/40">(optionnel)</span></label>
                  <input
                    {...register("email")}
                    type="email"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#E91E8C] transition-colors"
                    placeholder="votre@email.fr"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Message *</label>
                  <textarea
                    {...register("message", { required: "Requis" })}
                    rows={4}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#E91E8C] transition-colors resize-none"
                    placeholder="Ex : Je voudrais des informations sur le Permis B..."
                  />
                  {errors.message && <p className="text-[#E91E8C] text-xs mt-1">{errors.message.message}</p>}
                </div>
                {error && <p className="text-red-400 text-sm">Une erreur est survenue. Merci d'appeler directement.</p>}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#E91E8C] text-white font-bold py-3.5 rounded-xl hover:bg-[#c91578] transition-colors disabled:opacity-60"
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                </button>
              </form>
            )}
          </div>

          <div className="flex flex-col justify-center gap-6">
            <div>
              <p className="text-gray-400 text-sm font-medium mb-2">Téléphone</p>
              <a href="tel:0232392698" className="text-[#E91E8C] font-bold text-2xl md:text-3xl hover:text-[#f04dab] transition-colors">
                02 32 39 26 98
              </a>
            </div>

            <div className="w-12 h-px bg-white/10" />

            <div>
              <p className="text-gray-400 text-sm font-medium mb-3">Horaires bureau & code</p>
              <div className="space-y-1 text-white text-sm">
                <p>Mar–Ven : 10h–12h / 14h–18h</p>
                <p>Sam : 14h–17h</p>
              </div>
            </div>

            <div>
              <p className="text-gray-400 text-sm font-medium mb-3">Horaires conduite</p>
              <div className="space-y-1 text-white text-sm">
                <p>Lun–Ven : 9h–19h</p>
                <p>Sam : 9h–17h</p>
              </div>
            </div>

            <div className="w-12 h-px bg-white/10" />

            <div>
              <p className="text-gray-400 text-sm font-medium mb-2">Adresse</p>
              <p className="text-white text-sm">28 rue de l'Horloge<br />27000 Évreux</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
