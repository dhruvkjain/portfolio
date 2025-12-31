import { Bricolage_Grotesque } from 'next/font/google';
import { createMetadata } from "@/app/seo";
import "./globals.css";

export const metadata = createMetadata({
  title: "Dhruv's Portfolio",
  description: "Portfolio of Dhruv Jain | Rust Developer | Full-Stack Developer | Open Source Contributor | DAIICT'27 | ex-GDGC DAIICT",
  canonicalPath: "/",
});

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-bricolage',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bricolage.className}>
        <div className='text-[#DAD9D8]'>
          {children}
        </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Dhruv Jain",
            url: "https://dhruvkjain.vercel.app",
            sameAs: ["https://github.com/dhruvkjain"],
          }),
        }}
        />
      </body>
    </html>
  );
}
