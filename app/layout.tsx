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

export const metadata: Metadata = {
  metadataBase: new URL("https://your-portfolio-domain.vercel.app"),
  title: "Usman | Android Engineer",
  description: "Android Engineer specializing in Kotlin, Jetpack Compose, and Clean Architecture. Building scalable, real-world mobile applications.",
  keywords: [
    "Android Engineer",
    "Kotlin Developer",
    "Jetpack Compose Developer",
    "MVVM Architecture",
    "Retrofit",
    "Hilt Dependency Injection",
    "REST APIs",
    "Android App Development"
  ],
  authors: [{ name: "Usman" }],
  creator: "Usman",
  openGraph: {
    title: "Usman | Android Engineer",
    description: "Expert Android Engineer building high-performance, scalable mobile applications.",
    url: "https://your-portfolio-domain.vercel.app",
    siteName: "Usman Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Usman | Android Engineer",
    description: "Expert Android Engineer building high-performance, scalable mobile applications.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
