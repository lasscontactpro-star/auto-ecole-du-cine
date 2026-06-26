import Image from "next/image";

const photos = [
  {
    src: "/photos/20250417_135707.jpg",
    alt: "Équipe Auto École du Ciné Évreux devant les véhicules",
    className: "col-span-2 row-span-2",
  },
  {
    src: "/photos/lecon-conduite.jpg",
    alt: "Leçon de conduite avec un moniteur de l'Auto École du Ciné",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/photos/emma-bureau.jpg",
    alt: "Emma Saget, gérante de l'Auto École du Ciné Évreux",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/photos/eleve-fresque.jpg",
    alt: "Élève devant la fresque murale de l'Auto École du Ciné",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/photos/20250814_130031.jpg",
    alt: "Fresque murale cinéma Auto École du Ciné Évreux",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/photos/auto-ecole-du-cine-evreux.jpg",
    alt: "Façade Auto École du Ciné Évreux, 28 rue de l'Horloge",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/photos/20221223_171546.jpg",
    alt: "Élève souriante devant la fresque Auto École du Ciné",
    className: "col-span-1 row-span-1",
  },
];

export default function Galerie() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-[#E91E8C] font-semibold text-sm uppercase tracking-widest mb-3">En images</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D]">L'auto-école en images</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[180px] md:auto-rows-[200px]">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-xl group ${photo.className}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#2D2D2D]/0 group-hover:bg-[#2D2D2D]/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 border border-[#E91E8C] text-[#E91E8C] font-bold px-7 py-3 rounded-xl hover:bg-[#E91E8C] hover:text-white transition-colors"
          >
            Visiter l'auto-école
          </a>
        </div>
      </div>
    </section>
  );
}
