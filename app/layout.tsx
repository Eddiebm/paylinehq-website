import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE = "https://paylinehq-website.vercel.app";
const TITLE = "PayLineHQ — Stop your NIH grant from getting triaged";
const DESCRIPTION =
  "PayLineHQ peer-reviews your NIH application before NIH does — three reviewer simulations, three-pass quality check, citation verification, competitive impact scoring. Or we write the whole thing for you.";

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
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
