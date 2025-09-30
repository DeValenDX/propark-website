import "./globals.css";
import "leaflet/dist/leaflet.css";
import type { Metadata } from "next";

import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";

export const metadata: Metadata = {
  title: "ProPark - Estacionamientos Inteligentes",
  description:
    "Sistema de estacionamientos inteligentes y gestión de servicios",
  icons: {
    icon: "/assets/PP.png",
    shortcut: "/assets/PP.png",
    apple: "/assets/PP.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX" className="h-full overflow-x-hidden">
      <body className="min-h-screen flex flex-col overflow-x-hidden">
        <Header />
        <main className="flex-grow overflow-x-hidden w-full">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
