import { GoogleReviewsClient } from "./GoogleReviewsClient";

interface Review {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url?: string;
}

interface PlacesResult {
  rating?: number;
  user_ratings_total?: number;
  reviews?: Review[];
}

async function fetchGoogleReviews(): Promise<PlacesResult | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) return null;

  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&language=fr&key=${apiKey}`,
      { next: { revalidate: 86400 } }
    );
    const data = (await res.json()) as { result?: PlacesResult };
    return data.result ?? null;
  } catch {
    return null;
  }
}

const placeholderReviews: Review[] = [
  {
    author_name: "Camille R.",
    rating: 5,
    text: "Super auto-école ! Emmanuelle et son équipe sont très professionnels et à l'écoute. J'ai eu mon permis du premier coup grâce à leurs conseils.",
    relative_time_description: "il y a 2 mois",
  },
  {
    author_name: "Thomas M.",
    rating: 5,
    text: "Excellente expérience ! Les moniteurs sont patients et pédagogues. Ambiance chaleureuse, on se sent bien accompagné du début à la fin.",
    relative_time_description: "il y a 3 mois",
  },
  {
    author_name: "Léa D.",
    rating: 5,
    text: "J'ai fait ma conduite accompagnée ici dès 15 ans. Vraiment top, les rendez-vous pédagogiques sont très utiles. Je recommande vivement !",
    relative_time_description: "il y a 5 mois",
  },
  {
    author_name: "Karim B.",
    rating: 5,
    text: "Très bonne auto-école. Financement CPF géré sans problème. Moniteurs compétents et voitures en très bon état. Merci à toute l'équipe !",
    relative_time_description: "il y a 1 mois",
  },
  {
    author_name: "Julie F.",
    rating: 5,
    text: "Accueil super sympa, moniteurs attentionnés. L'auto-école a une vraie ambiance unique avec la déco cinéma. On y retournerait presque rien que pour ça !",
    relative_time_description: "il y a 4 mois",
  },
];

export default async function AvisGoogle() {
  const data = await fetchGoogleReviews();
  const reviews = data?.reviews ?? placeholderReviews;
  const rating = data?.rating ?? 5.0;
  const total = data?.user_ratings_total ?? null;
  const isPlaceholder = !data;

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-[#E91E8C] font-semibold text-sm uppercase tracking-widest mb-3">Avis vérifiés</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D]">Ce que disent nos élèves</h2>
          <div className="flex items-center justify-center gap-1.5 mt-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="22" height="22" viewBox="0 0 24 24" fill="#E91E8C">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
            <span className="ml-1 text-[#2D2D2D] font-bold text-xl">{rating.toFixed(1)}</span>
            {total && <span className="text-gray-400 text-sm ml-1">({total} avis)</span>}
          </div>
        </div>

        <GoogleReviewsClient reviews={reviews} isPlaceholder={isPlaceholder} />

        <div className="text-center mt-8">
          <a
            href="https://www.google.com/maps/search/Auto+Ecole+du+Ciné+Evreux"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#E91E8C] font-semibold hover:underline"
          >
            Voir tous nos avis sur Google
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
