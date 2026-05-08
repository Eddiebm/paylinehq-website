import type { Metadata } from "next";
import { Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const SITE = "https://paylinehq-website.vercel.app";
const TITLE = "PayLineHQ — Stop your NIH grant from getting triaged";
const DESCRIPTION =
  "Three reviewer simulations, three-pass quality review, and competitive impact scoring — before NIH does it. Built by a biotech founder for biotech founders.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { default: TITLE, template: "%s — PayLineHQ" },
  description: DESCRIPTION,
  applicationName: "PayLineHQ",
  keywords: [
    "NIH grant writer",
    "NIH SBIR Phase I",
    "NIH grant peer review",
    "NIH grant scoring",
    "study section simulation",
    "STTR grant writer",
    "R01 grant writer",
    "biotech grant writing",
    "Done For You NIH grant",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "PayLineHQ",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
