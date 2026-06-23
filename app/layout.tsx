import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyCallBtn from "@/components/layout/StickyCallBtn";
import { localBusinessSchema } from "@/lib/schema";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.auto-ecole-cine-evreux.fr"),
  title: {
    template: "%s | Auto École du Ciné Évreux",
    default: "Auto École du Ciné Évreux | Permis B, AAC, CPF — 02 32 39 26 98",
  },
  description:
    "Auto école à Évreux. Permis B, conduite accompagnée dès 15 ans, financement CPF et Permis 1€. Appelez le 02 32 39 26 98.",
  openGraph: {
    siteName: "Auto École du Ciné Évreux",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Header />
        <main className="pb-16 md:pb-0">{children}</main>
        <Footer />
        <StickyCallBtn />
        <Analytics />
      </body>
    </html>
  );
}
