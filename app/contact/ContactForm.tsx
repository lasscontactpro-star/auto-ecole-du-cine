"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

interface FormData {
  nom: string;
  telephone: string;
  email?: string;
  objet: string;
  message: string;
}

export default function ContactForm() {
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

  if (sent) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-6">
        <p className="font-bold text-green-800 mb-1">✓ Message envoyé !</p>
        <p className="text-green-700 text-sm">Nous vous recontacterons très rapidement.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      <div>
        <label className="block text-sm font-semibold text-[#2D2D2D] mb-1.5">Votre nom *</label>
        <input
          {...register("nom", { required: "Ce champ est requis" })}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#2D2D2D] focus:outline-none focus:border-[#E91E8C] transition-colors"
          placeholder="Ex : Marie Dupont"
        />
        {errors.nom && <p className="text-[#E91E8C] text-xs mt-1">{errors.nom.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-semibold text-[#2D2D2D] mb-1.5">Téléphone *</label>
        <input
          {...register("telephone", { required: "Ce champ est requis" })}
          type="tel"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#2D2D2D] focus:outline-none focus:border-[#E91E8C] transition-colors"
          placeholder="06 XX XX XX XX"
        />
        {errors.telephone && <p className="text-[#E91E8C] text-xs mt-1">{errors.telephone.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-semibold text-[#2D2D2D] mb-1.5">
          Email <span className="text-gray-400 font-normal">(optionnel)</span>
        </label>
        <input
          {...register("email")}
          type="email"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#2D2D2D] focus:outline-none focus:border-[#E91E8C] transition-colors"
          placeholder="votre@email.fr"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-[#2D2D2D] mb-1.5">Objet</label>
        <select
          {...register("objet")}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#2D2D2D] focus:outline-none focus:border-[#E91E8C] transition-colors bg-white"
        >
          <option value="">Sélectionner un objet</option>
          <option value="Permis B">Permis B</option>
          <option value="Conduite accompagnée">Conduite accompagnée (AAC)</option>
          <option value="CPF / Financement">CPF / Financement</option>
          <option value="Permis 1€">Permis 1€/jour</option>
          <option value="Autre">Autre question</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold text-[#2D2D2D] mb-1.5">Message *</label>
        <textarea
          {...register("message", { required: "Ce champ est requis" })}
          rows={4}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#2D2D2D] focus:outline-none focus:border-[#E91E8C] transition-colors resize-none"
          placeholder="Votre question..."
        />
        {errors.message && <p className="text-[#E91E8C] text-xs mt-1">{errors.message.message}</p>}
      </div>
      {error && <p className="text-red-500 text-sm">Erreur. Merci d'appeler directement.</p>}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#E91E8C] text-white font-bold py-3.5 rounded-xl hover:bg-[#c91578] transition-colors disabled:opacity-60"
      >
        {isSubmitting ? "Envoi..." : "Envoyer le message"}
      </button>
    </form>
  );
}
