"use client";
import { useSprings, animated } from "@react-spring/web";
import { useEffect, useState } from "react";
import Image from "next/image";
import companiesData from "../../app/utils/companies.json";

const styles = {
	scroll: `
   @keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll 30s linear infinite;
}

  `,
};

export default function Carousel() {
	const [logoLoaded, setLogoLoaded] = useState(false);
	const companies = companiesData?.companies ?? [];
	const loop = [...companies, ...companies];

	const logoLetters = [
		{ id: "P1", file: "/animated-logo/P1.svg", delay: 0 },
		{ id: "R1", file: "/animated-logo/R1.svg", delay: 200 },
		{ id: "O", file: "/animated-logo/O.svg", delay: 400 },
		{ id: "P2", file: "/animated-logo/P2.svg", delay: 600 },
		{ id: "A", file: "/animated-logo/A.svg", delay: 800 },
		{ id: "R2", file: "/animated-logo/R2.svg", delay: 1000 },
		{ id: "K", file: "/animated-logo/K.svg", delay: 1200 },
	];

	const springs = useSprings(
		logoLetters.length,
		logoLetters.map((letter) => ({
			from: {
				opacity: 0,
				transform: "translateY(50px) scale(0.5)",
			},
			to: logoLoaded
				? {
					opacity: 1,
					transform: "translateY(0px) scale(1)",
				}
				: {
					opacity: 0,
					transform: "translateY(50px) scale(0.5)",
				},
			delay: letter.delay,
			config: {
				tension: 300,
				friction: 20,
				mass: 1,
			},
		}))
	);

	useEffect(() => {
		const styleSheet = document.createElement("style");
		styleSheet.textContent = styles.scroll;
		document.head.appendChild(styleSheet);

		return () => {
			document.head.removeChild(styleSheet);
		};
	}, []);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLogoLoaded(true);
		}, 500);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="h-screen flex flex-col relative">
			<section className="flex-[0.7] bg-[url('/parking-places/DSC02498.JPG')] bg-cover bg-center flex flex-col justify-center items-center text-center px-6 relative">
				<div className="absolute inset-0 backdrop-blur-[2px] z-0" />
				<div className="absolute inset-0 bg-gradient-to-b from-[#265b85]/80 to-[#1c3e5a]/90 z-0" />
				<div className="relative z-10 flex flex-col items-center w-full max-w-4xl mx-auto">
					<h1 className="text-white text-4xl md:text-6xl font-bold mb-4 leading-tight">
						Bienvenido a la nueva era <br /> de la movilidad urbana
					</h1>
					<div className="flex items-center justify-center">
						{logoLetters.map((letter, index) => (
							<animated.div
								key={letter.id}
								style={springs[index]}
								className="mx-1"
							>
								<Image
									src={letter.file}
									alt={`ProPark Logo Letter ${letter.id}`}
									width={96}
									height={96}
									className="h-16 md:h-20 lg:h-24 w-auto"
								/>
							</animated.div>
						))}
					</div>
					<p className="max-w-2xl text-sm md:text-lg text-white leading-relaxed">
						En <span className="font-semibold">Pro Park</span> somos
						especialistas en la <span className="font-semibold">gestión</span> y{" "}
						<span className="font-semibold">operación eficiente</span> de
						estacionamientos en toda la República Mexicana. Nuestra experiencia
						garantiza{" "}
						<span className="font-semibold">
							soluciones confiables e inteligentes
						</span>
						, optimizando cada espacio y brindando tranquilidad a nuestros
						clientes.
					</p>
				</div>
			</section>
			<div className="absolute left-1/2 -translate-x-1/2 top-[62%] z-20 w-full px-4 md:px-16">
				<div className="bg-white shadow-xl rounded-2xl px-6 md:px-10 py-8 w-full h-auto flex items-center justify-center overflow-hidden">
					<div className="overflow-hidden w-full">
						<div className="flex gap-2 w-max animate-scroll">
							{loop.map((company, index) => (
								<div
									key={index}
									className="flex-none w-60 h-48 flex items-center justify-center bg-white/10 rounded-xl backdrop-blur-sm p-2"
								>
									<Image
										src={company.path}
										alt={`Logo de ${company.path ?? `Compañía ${index + 1}`}`}
										width={180}
										height={180}
										className="object-contain max-h-full"
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="flex-[0.3] bg-white" />
		</div>
	);
}
