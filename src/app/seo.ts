import type { Metadata } from "next";

const SITE_URL = "https://dhruvkjain.vercel.app";
const SITE_NAME = "Dhruv's Portfolio";
const DEFAULT_OG = "/images/dhruvkjain.jpeg";

export function createMetadata({
  title,
  description,
  canonicalPath = "/",
  ogImage = DEFAULT_OG,
  type = "website",
}: {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
  type?: "website" | "article";
}): Metadata {
//   const fullTitle = title.includes("Dhruv Jain")
//     ? title
//     : `${title} | Dhruv Jain`;
    const fullTitle = title;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE_URL),

    alternates: {
      canonical: canonicalPath,
    },

    openGraph: {
      title: fullTitle,
      description,
      url: SITE_URL + canonicalPath,
      siteName: SITE_NAME,
      images: [ogImage],
      type,
      locale: "en_US",
    },

    twitter: {
      card: "summary_large_image",
      creator: "@dhruvkjain",
      site: "@dhruvkjain",
      images: [ogImage],
    },

    robots: {
      index: true,
      follow: true,
    },

    authors: [{ name: "Dhruv Jain" }],
    themeColor: "#0a0a0a",
  };
}
