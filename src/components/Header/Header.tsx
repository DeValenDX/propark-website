"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
	{ name: "Inicio", href: "/" },
	{ name: "Quienes Somos", href: "/quienes-somos" },
	{ name: "Servicios", href: "/services" },
	{ name: "Estacionamientos", href: "/estacionamientos" },
	{ name: "Contacto", href: "/contacto" },
	{ name: "Bolsa de trabajo", href: "/bolsa-trabajo" },
	{ name: "Facturación", href: "/billing" },
];

// Definir el orden y las letras del logo
const logoLetters = [
	{ id: 'P1', file: '/animated-logo/P1.svg', delay: 0 },
	{ id: 'R1', file: '/animated-logo/R1.svg', delay: 200 },
	{ id: 'O', file: '/animated-logo/O.svg', delay: 400 },
	{ id: 'P2', file: '/animated-logo/P2.svg', delay: 600 },
	{ id: 'A', file: '/animated-logo/A.svg', delay: 800 },
	{ id: 'R2', file: '/animated-logo/R2.svg', delay: 1000 },
	{ id: 'K', file: '/animated-logo/K.svg', delay: 1200 },
];

export const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [logoLoaded, setLogoLoaded] = useState(false);

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
	const closeMenu = () => setIsMenuOpen(false);

	useEffect(() => {
		// Activar la animación después de un pequeño delay
		const timer = setTimeout(() => {
			setLogoLoaded(true);
		}, 500);

		return () => clearTimeout(timer);
	}, []);

	return (
		<header className="bg-white shadow-sm border-b border-gray-100 pt-6 pb-4">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">

					<div className="flex-shrink-0">
						<Link href="/">
							<div className="flex flex-col items-start">
								{/* Texto superior "ESTACIÓNATE AQUÍ" */}
								<div className="text-[#008FBE] text-xs font-medium uppercase tracking-wider mb-1">
									Estaciónate Aquí
								</div>
								
								{/* Logo principal con letras animadas individualmente */}
								<div className="flex items-center h-14">
									{logoLetters.map((letter) => (
										<div
											key={letter.id}
											className={`transition-all duration-1000 ease-out ${
												logoLoaded 
													? 'opacity-100 translate-y-0 scale-100' 
													: 'opacity-0 translate-y-8 scale-75'
											}`}
											style={{
												transitionDelay: `${letter.delay}ms`,
											}}
										>
											<Image
												src={letter.file}
												alt={`ProPark Logo Letter ${letter.id}`}
												width={28}
												height={56}
												className="h-14 w-auto"
												priority
											/>
										</div>
									))}
								</div>
							</div>
						</Link>
					</div>

					<nav className="hidden md:flex space-x-8">
						{menuItems.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className="text-[#008FBE] hover:text-[#006d94] transition-colors duration-200 font-medium cursor-pointer"
							>
								{item.name}
							</Link>
						))}
					</nav>

					<button
						onClick={toggleMenu}
						className="md:hidden text-[#008FBE] hover:text-[#006d94] focus:outline-none focus:text-[#006d94] transition-colors duration-200"
						aria-label="Toggle menu"
					>
						<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							{isMenuOpen ? (
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							) : (
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
							)}
						</svg>
					</button>
				</div>

				<div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
					isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
				}`}>
					{menuItems.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							className="block px-3 py-2 text-[#008FBE] hover:text-[#006d94] hover:bg-gray-50 rounded-md text-base font-medium cursor-pointer transition-colors duration-200"
							onClick={closeMenu}
						>
							{item.name}
						</Link>
					))}
				</div>
			</div>
		</header>
	);
};
