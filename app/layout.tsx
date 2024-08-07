import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { metadata as constants } from "../lib/constants";
import { Footer } from "./components/Layout";
import "./global.css";
import AppProvider from "./providers/AppProvider";

export const metadata: Metadata = {
  metadataBase: new URL(constants.links.website),
  title: {
    default: constants.title,
    template: `%s | ${constants.title}`,
  },
  alternates: {
    canonical: "/",
  },
  description: constants.description,
  applicationName: constants.title,
  openGraph: {
    title: constants.title,
    description: constants.description,
    url: constants.links.website,
    siteName: constants.title,
    locale: "en_US",
    images: [
      {
        url: `${constants.homeOgImage}`,
        width: 1920,
        height: 1080,
        alt: `${constants.title}' website preview`,
      },
    ],
    type: "website",
  },
  generator: constants.title,
  keywords: constants.tags,
  publisher: constants.title,
  creator: constants.title,
  manifest: "/brand/manifest.json",

  icons: {
    icon: [
      {
        url: "/brand/favicon.ico",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/brand/favicon_dark.svg",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: {
      url: "/brand/apple-touch-icon.png",
      type: "image/png",
      sizes: "180x180",
      color: "#b49cff",
      rel: "apple-touch-icon",
      media: "light",
      fetchPriority: "high",
    },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [
    {
      name: constants.title,
      url: constants.links.website,
    },
  ],

  twitter: {
    description: constants.description,
    creator: constants.creator.twitter,
    title: constants.title,
    card: "summary_large_image",
  },
  appleWebApp: {
    title: constants.title,
    statusBarStyle: "black-translucent",
    capable: true,
    startupImage: "/brand/apple_splash_2048.png",
  },
};
export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#b49cff" },
    { media: "(prefers-color-scheme: dark)", color: "#b49cff" },
  ],
  viewport: "width=device-width, initial-scale=1.0",
  colorScheme: "light dark",
};
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.className} `}>
      <head></head>
      <body className="antialiased mb-20 scroll-smooth text-secondary-900 bg-secondary-50 dark:text-secondary-50 dark:bg-secondary-900 justify-center flex-auto flex flex-col">
        <AppProvider>
          {children}
          <Footer />
        </AppProvider>
      </body>
      <SpeedInsights />
    </html>
  );
}
