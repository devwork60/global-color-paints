import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import BrandDirectory from "@/components/pages/brand-directory/BrandDirectory";
import Header from "@/components/pages/navbar/Header";
import { BrandDirectoryProvider } from "@/context/BrandDirectoryContext";
import "./globals.css";

// The optical-size and width axes give the tighter, more characterful display shapes at large sizes.
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: "variable",
  axes: ["opsz", "wdth"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const TITLE = "Global Colors Company | HomeStyle Paints";
const DESCRIPTION =
  "Global Colors Company has made paint in Pakistan since 1992 through five brands: HomeStyle Paints, BestWall, Tylac, Expresso and IBEX.";

export const metadata: Metadata = {
  // Set NEXT_PUBLIC_SITE_URL to the live domain so share-image URLs are absolute.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Global Colors Company",
    type: "website",
    locale: "en_PK",
    images: [{ url: "/assets/images/hero/room-hero.jpg", alt: "A bedroom with a ruby red feature wall" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export const viewport: Viewport = {
  themeColor: "#262322",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bricolage.variable} ${manrope.variable}`}>
      <body>
        <noscript>
          <style>{"[data-reveal]{opacity:1!important;transform:none!important}"}</style>
        </noscript>
        <BrandDirectoryProvider>
          <Header />
          {children}
          <BrandDirectory />
        </BrandDirectoryProvider>
      </body>
    </html>
  );
}
