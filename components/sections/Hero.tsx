import Image from "next/image";
import { Button } from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center overflow-hidden">
      <Image
        src="/photos/20250417_135707.jpg"
        alt="Équipe Auto École du Ciné Évreux avec les Suzuki Swift"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#2D2D2D]/50" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-32 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-[#E91E8C]/20 backdrop-blur-sm border border-[#E91E8C]/40 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#E91E8C] animate-pulse" />
            <span className="text-white text-sm font-medium">CPF dès 16 ans · AAC dès 15 ans</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Auto École à<br />
            <span className="text-[#E91E8C]">Évreux</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-lg">
            Apprenez à conduire avec une équipe passionnée. Permis B, conduite accompagnée, financement CPF — sans surprise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              href="tel:0232392698"
              size="lg"
              variant="primary"
              className="justify-center"
            >
              <svg className="mr-2" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              Appeler : 02 32 39 26 98
            </Button>
            <Button
              href="/contact"
              size="lg"
              variant="ghost"
              className="justify-center"
            >
              Nous écrire
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs font-medium tracking-widest uppercase">Découvrir</span>
        <div className="w-px h-8 bg-white/30" />
      </div>
    </section>
  );
}
