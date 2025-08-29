import "./globals.css";
import type { Metadata } from "next";

import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

export const metadata: Metadata = {
	title: "ProPark - Estacionamientos Inteligentes",
	description:
		"Sistema de estacionamientos inteligentes y gestión de servicios",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es-MX" className="h-full">
			<body className="min-h-screen flex flex-col">
				<Header />
				<main className=" flex-grow">{children}</main>
				<Footer />
			</body>
		</html>
	);
}

