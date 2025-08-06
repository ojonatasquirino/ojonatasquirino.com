import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ojonatasquirino.com",
  description:
    "Construindo soluções viáveis com software e IA para modelos de negócios.",
  keywords: [
    "desenvolvedor",
    "react",
    "nextjs",
    "nodejs",
    "portfolio",
    "ia",
    "ai agents",
    "software",
  ],
  authors: [{ name: "Jônatas Quirino" }],
  creator: "Jônatas Quirino",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Jônatas Quirino",
    description:
      "Construindo soluções viáveis com software e IA para modelos de negócios.",
    siteName: "Jônatas Quirino",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jônatas Quirino",
    description:
      "Construindo soluções viáveis com software e IA para modelos de negócios.",
    creator: "@ojonatasquirino",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={inter.variable}>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
