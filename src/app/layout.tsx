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
  title: "Ponto e Vírgula | Sites institucionais para pequenos negócios",
  description:
    "Desenvolvemos sites institucionais modernos, rápidos e focados em conversão para pequenos negócios e autônomos.",
  metadataBase: new URL("https://ponto-e-virgula.vercel.app"),
  openGraph: {
    title: "Ponto e Vírgula | Sites institucionais",
    description:
      "Sites institucionais com foco em WhatsApp, performance e design que converte.",
    type: "website",
    images: [
      {
        url: "/ponto-virgula-P-editada.png",
        width: 1200,
        height: 630,
        alt: "Ponto e Vírgula",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-white text-slate-950 font-sans">{children}</body>
    </html>
  );
}
