"use client";
import React from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import slides from "@/utils/data.json";

export default function HeroCarousel() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [isAutoplay, setIsAutoplay] = useState(true);
	const [isTransitioning, setIsTransitioning] = useState(false);
	const [isPaused, setIsPaused] = useState(false);

	const AUTOPLAY_INTERVAL = 5000;
	const TRANSITION_DURATION = 500;

	const nextSlide = useCallback(() => {
		if (isTransitioning) return;
		setIsTransitioning(true);
		setCurrentSlide((prev) => (prev + 1) % slides.length);
		setTimeout(() => setIsTransitioning(false), TRANSITION_DURATION);
	}, [slides.length, isTransitioning]);

	const prevSlide = useCallback(() => {
		if (isTransitioning) return;
		setIsTransitioning(true);
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
		setTimeout(() => setIsTransitioning(false), TRANSITION_DURATION);
	}, [slides.length, isTransitioning]);

	const goToSlide = useCallback(
		(index: number) => {
			if (isTransitioning || index === currentSlide) return;
			setIsTransitioning(true);
			setCurrentSlide(index);
			setTimeout(() => setIsTransitioning(false), TRANSITION_DURATION);
		},
		[currentSlide, isTransitioning]
	);

	useEffect(() => {
		if (!isAutoplay || isPaused) return;

		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, AUTOPLAY_INTERVAL);

		return () => clearInterval(interval);
	}, [isAutoplay, isPaused, slides.length]);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "ArrowLeft") {
				e.preventDefault();
				prevSlide();
			}
			if (e.key === "ArrowRight") {
				e.preventDefault();
				nextSlide();
			}
			if (e.key === " ") {
				e.preventDefault();
				setIsAutoplay(!isAutoplay);
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [nextSlide, prevSlide, isAutoplay]);

	return (
		<div className="relative w-full h-screen overflow-hidden bg-gray-900">
			<div
				className="relative w-full h-full"
				onMouseEnter={() => setIsPaused(true)}
				onMouseLeave={() => setIsPaused(false)}
			>
				{slides.map((slide, index) => (
					<div
						key={slide.id}
						className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
							}`}
					>
						<div className="relative h-full">
							<img
								src={slide.image}
								alt={slide.title}
								className="absolute inset-0 w-full h-full object-cover brightness-110 contrast-105"
							/>

							<div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,15,35,0.35)] via-[rgba(0,30,60,0.2)] to-[rgba(0,0,0,0.4)]"></div>

							<div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.12)] via-[rgba(0,0,0,0.18)] to-[rgba(0,0,0,0.12)]"></div>

							<div className="relative z-20 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
								<div className="text-center text-white max-w-4xl mx-auto">
									<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-[0_4px_6px_rgba(0,0,0,0.9)]">
										{slide.title}
									</h1>
									<p className="text-lg sm:text-xl lg:text-2xl mb-8 leading-relaxed opacity-95 drop-shadow-[0_3px_5px_rgba(0,0,0,0.85)]">
										{slide.description}
									</p>
									<div className="flex flex-col sm:flex-row gap-4 justify-center">
										<button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
											Descubrir Más
										</button>
										<button className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition-all duration-300">
											Ver Demo
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}

				<button
					onClick={prevSlide}
					disabled={isTransitioning}
					className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 p-3 rounded-full bg-gray-700 bg-opacity-20 hover:bg-opacity-30 text-white transition-all duration-300 backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
					aria-label="Diapositiva anterior"
				>
					<ChevronLeft size={24} />
				</button>

				<button
					onClick={nextSlide}
					disabled={isTransitioning}
					className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 p-3 rounded-full bg-gray-700 bg-opacity-20 hover:bg-opacity-30 text-white transition-all duration-300 backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
					aria-label="Siguiente diapositiva"
				>
					<ChevronRight size={24} />
				</button>

				<div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
					{slides.map((_, index) => (
						<button
							key={index}
							onClick={() => goToSlide(index)}
							disabled={isTransitioning}
							className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
								? "bg-white scale-125"
								: "bg-white bg-opacity-50 hover:bg-opacity-75"
								} disabled:cursor-not-allowed`}
							aria-label={`Ir a diapositiva ${index + 1}`}
						/>
					))}
				</div>

				{isAutoplay && !isPaused && (
					<div className="absolute bottom-0 left-0 w-full h-1 bg-gray-800 bg-opacity-30 z-30">
						<div
							className="h-full bg-blue-500 transition-all ease-linear"
							style={{
								width: "0%",
								animation: `progress ${AUTOPLAY_INTERVAL}ms linear infinite`,
							}}
						/>
					</div>
				)}
			</div>

			<style jsx>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
		</div>
	);
}
