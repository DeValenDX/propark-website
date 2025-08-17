
import "./globals.css";
import type { Metadata } from "next";

import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

export const metadata: Metadata = {
	title: "ProPark - Estacionamientos Inteligentes",
	description: "Sistema de estacionamientos inteligentes y gestión de servicios",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es-MX" className="h-full">
			<body className="min-h-screen flex flex-col">
				{/* Header */}
				<Header />
				{/* Contenido principal (flex-grow para empujar el footer) */}
				<main className="bg-red-100 flex-grow">
					{children}
				</main>
				{/* Footer */}
				<Footer />
				{/* <footer className="h-16 bg-gray-800 flex items-center justify-center text-white">
				</footer> */}
			</body>
		</html>




	);
}

{/* <Header />
				<main className="min-h-screen bg-green-100">
					{children}
				</main> */}