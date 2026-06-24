const stats = [
  { value: "4 + 3", label: "Véhicules", sub: "4 boîtes manuelles · 3 boîtes auto" },
  { value: "Dès 15 ans", label: "Conduite accompagnée", sub: "AAC disponible" },
  { value: "CPF", label: "Financement accepté", sub: "Permis 1€ aussi" },
  { value: "02 32 39 26 98", label: "Appelez-nous", sub: "Mar–Sam" },
];

export default function ChiffresKeys() {
  return (
    <section className="bg-[#2D2D2D] py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              {i === 3 ? (
                <a
                  href="tel:0232392698"
                  className="block text-[#E91E8C] font-bold text-2xl md:text-3xl leading-tight hover:text-[#f04dab] transition-colors"
                >
                  {s.value}
                </a>
              ) : (
                <p className="text-[#E91E8C] font-bold text-3xl md:text-5xl leading-tight">
                  {s.value}
                </p>
              )}
              <p className="text-white font-semibold text-sm md:text-base mt-2">{s.label}</p>
              <p className="text-gray-400 text-xs md:text-sm mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
