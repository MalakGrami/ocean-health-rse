import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import AccessibilityControls from "@/components/AccessibilityControls";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "Carnet Santé Personnel - Plateforme RSE by Design",
  description: "Suivez votre santé de manière responsable et sécurisée. Plateforme conforme RGPD, accessible WCAG AAA, et éco-conçue selon le référentiel RGESN.",
  keywords: "santé numérique, RSE by design, RGPD, HDS, accessibilité, écoconception, RGESN, NUMIH France",
  authors: [{ name: "Équipe Carnet Santé RSE" }],
  openGraph: {
    title: "Carnet Santé Personnel - RSE by Design",
    description: "Une plateforme de santé éthique, accessible et responsable",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0066CC" />
      </head>
      <body className="antialiased">
        <ClientLayout>
          <a href="#main-content" className="skip-link">
            Aller au contenu principal
          </a>
          <Navigation />
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
          <footer className="bg-ocean-dark text-white py-8 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p className="mb-2 font-semibold">
                Construit avec les principes du RSE by Design
              </p>
              <p className="text-sm opacity-90 mb-3">
                Conforme RGPD • Aligné HDS • Accessible WCAG AAA • Éco-conçu RGESN
              </p>
              <p className="text-sm opacity-80">
                Aucun suivi • Code source ouvert • Accessible à tous • Minimal en carbone
              </p>
              <p className="text-xs opacity-60 mt-4">
                © 2025 Carnet Santé Personnel • Licence MIT • Projet de démonstration RSE by Design
              </p>
            </div>
          </footer>
          <AccessibilityControls />
        </ClientLayout>
      </body>
    </html>
  );
}
