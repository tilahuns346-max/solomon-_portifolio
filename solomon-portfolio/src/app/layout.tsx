import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

export const metadata: Metadata = {
  metadataBase: new URL("https://solomontilahun.dev"),
  title: "Solomon Tilahun | Software Engineering Student & Full-Stack Developer",
  description:
    "Personal portfolio of Solomon Tilahun, a Software Engineering student at Wollo University and aspiring Full-Stack Developer skilled in Next.js, React, Node.js, Django, and modern cloud technologies.",
  keywords: [
    "Solomon Tilahun",
    "Full-Stack Developer",
    "Software Engineering Student",
    "Wollo University",
    "Next.js Developer",
    "React.js Developer",
    "Django Developer",
    "Ethiopian Developer",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Solomon Tilahun", url: "https://github.com/solomontilahun411" }],
  creator: "Solomon Tilahun",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://solomontilahun.dev",
    title: "Solomon Tilahun | Software Engineering Student & Full-Stack Developer",
    description:
      "Explore the software engineering projects, technical skills, and academic achievements of Solomon Tilahun.",
    siteName: "Solomon Tilahun Portfolio",
    images: [
      {
        url: "/solomon.jpg",
        width: 800,
        height: 800,
        alt: "Solomon Tilahun - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solomon Tilahun | Full-Stack Developer Portfolio",
    description:
      "Software Engineering student at Wollo University building modern web apps.",
    images: ["/solomon.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#090d16",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className="min-h-screen bg-slate-50 dark:bg-dark-950 text-slate-900 dark:text-slate-100 antialiased selection:bg-emerald-500/20 selection:text-emerald-400">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
            <BackToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
