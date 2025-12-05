import "./globals.css";
import Navigation from "@/components/Navigation";
import AccessibilityControls from "@/components/AccessibilityControls";
import ClientLayout from "@/components/ClientLayout";
import Footer from "@/components/Footer";
import SkipLink from "@/components/SkipLink";

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
          <SkipLink />
          <Navigation />
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
          <Footer />
          <AccessibilityControls />
        </ClientLayout>
      </body>
    </html>
  );
}
