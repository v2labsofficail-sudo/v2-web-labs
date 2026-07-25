import type { Metadata } from "next";
import { Montserrat, Inter, Outfit, Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleTagManager from "@/components/GoogleTagManager";
import { buildOgImageUrl, siteConfig, structuredData } from "@/lib/seo";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const defaultOgImage = buildOgImageUrl(
  "AI Solutions, Web Development and Branding",
  siteConfig.defaultDescription,
);

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.defaultTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.defaultDescription,
  keywords: [...siteConfig.defaultKeywords],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Technology",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: siteConfig.url,
    languages: {
      "en-US": siteConfig.url,
      "en-GB": siteConfig.url,
      "en-CA": siteConfig.url,
      "en-IN": siteConfig.url,
      "x-default": siteConfig.url,
    },
  },
  openGraph: {
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.defaultTitle} open graph image`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    creator: "@v2labsglobal",
    site: "@v2labsglobal",
    images: [defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "google-site-verification-placeholder-1234567890",
  },
  other: {
    "geo.region": siteConfig.region,
    "geo.placename": `${siteConfig.city}, Maharashtra, India`,
    "geo.position": `${siteConfig.latitude};${siteConfig.longitude}`,
    ICBM: `${siteConfig.latitude}, ${siteConfig.longitude}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      structuredData.organization,
      structuredData.professionalService,
      structuredData.website,
    ],
  };

  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable} ${outfit.variable} ${poppins.variable}`}>
      <head>
        <GoogleTagManager gtmId={gtmId} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaGraph).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        {gtmId ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        ) : null}
        <Navbar />
        <main style={{ flex: 1 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}