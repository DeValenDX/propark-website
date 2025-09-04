import React from 'react'
import { Target, Eye, Heart, Settings, BarChart3, Users } from 'lucide-react'

export default function WhoWeAre() {
	return (
		<div className="min-h-screen flex flex-col">
			{/* Hero Section */}
			<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
				{/* Background Image */}
				<div className="absolute inset-0 bg-[url('/parking-places/DSC02498.JPG')] bg-cover bg-center" />

				{/* Enhanced Overlay */}
				<div className="absolute inset-0 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] opacity-85" />
				<div className="absolute inset-0 backdrop-blur-[1px]" />

				{/* Geometric Accent */}
				<div className="absolute top-20 right-20 w-32 h-32 border border-white/20 rotate-45 opacity-30 hidden lg:block" />
				<div className="absolute bottom-32 left-16 w-24 h-24 border border-white/15 rotate-12 opacity-40 hidden lg:block" />

				{/* Main Content */}
				<div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
					{/* Header */}
					<div className="text-center mb-16">
						<h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
							¿Quiénes <span className="text-[#0191bb]">somos</span>?
						</h1>
						<div className="w-24 h-1 bg-gradient-to-r from-[#0191bb] to-[#00bcd4] mx-auto mb-8" />
						<p className="max-w-4xl mx-auto text-lg md:text-xl text-white/90 leading-relaxed font-light">
							Pro Park es una empresa mexicana creada por un grupo de especialistas en gestión y operación eficiente de
							estacionamientos. Nuestro objetivo es ofrecer soluciones innovadoras y sostenibles que mejoren la experiencia
							de los usuarios y optimicen el uso de los espacios de estacionamiento.
						</p>
					</div>

					{/* Mission, Vision, Values - Enhanced */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
						<div className="group relative">
							{/* Floating background effect */}
							<div className="absolute -inset-1 bg-gradient-to-r from-[#0191bb] to-[#00bcd4] rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500" />
							<div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/95 to-white/90 rounded-3xl shadow-2xl group-hover:shadow-[0_20px_60px_rgba(1,145,187,0.3)] transition-all duration-500" />

							<div className="relative p-8 text-center">
								{/* Icon container with floating effect */}
								<div className="relative mx-auto mb-6 w-20 h-20">
									<div className="absolute inset-0 bg-gradient-to-br from-[#0191bb] to-[#00bcd4] rounded-2xl transform group-hover:rotate-12 transition-transform duration-500" />
									<div className="absolute inset-0.5 bg-white rounded-2xl" />
									<div className="relative w-full h-full flex items-center justify-center">
										<Target size={36} className="text-[#0191bb] group-hover:scale-110 transition-transform duration-300" />
									</div>
									{/* Floating dots */}
									<div className="absolute -top-2 -right-2 w-3 h-3 bg-[#00bcd4] rounded-full opacity-60 group-hover:animate-pulse" />
									<div className="absolute -bottom-2 -left-2 w-2 h-2 bg-[#0191bb] rounded-full opacity-40 group-hover:animate-pulse delay-150" />
								</div>

								<h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4 group-hover:from-[#0191bb] group-hover:to-[#00bcd4] transition-all duration-300">Misión</h3>
								<p className="text-gray-600 text-base leading-relaxed group-hover:text-gray-700 transition-colors">
									Liderar el cambio hacia una movilidad más inteligente y sostenible, transformando los espacios urbanos.
								</p>
							</div>
						</div>

						<div className="group relative">
							<div className="absolute -inset-1 bg-gradient-to-r from-[#00bcd4] to-[#0191bb] rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500" />
							<div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/95 to-white/90 rounded-3xl shadow-2xl group-hover:shadow-[0_20px_60px_rgba(0,188,212,0.3)] transition-all duration-500" />

							<div className="relative p-8 text-center">
								<div className="relative mx-auto mb-6 w-20 h-20">
									<div className="absolute inset-0 bg-gradient-to-br from-[#00bcd4] to-[#0191bb] rounded-2xl transform group-hover:-rotate-12 transition-transform duration-500" />
									<div className="absolute inset-0.5 bg-white rounded-2xl" />
									<div className="relative w-full h-full flex items-center justify-center">
										<Eye size={36} className="text-[#00bcd4] group-hover:scale-110 transition-transform duration-300" />
									</div>
									<div className="absolute -top-2 -left-2 w-3 h-3 bg-[#0191bb] rounded-full opacity-60 group-hover:animate-pulse delay-75" />
									<div className="absolute -bottom-2 -right-2 w-2 h-2 bg-[#00bcd4] rounded-full opacity-40 group-hover:animate-pulse delay-200" />
								</div>

								<h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4 group-hover:from-[#00bcd4] group-hover:to-[#0191bb] transition-all duration-300">Visión</h3>
								<p className="text-gray-600 text-base leading-relaxed group-hover:text-gray-700 transition-colors">
									Ser la empresa de referencia en soluciones de estacionamiento a nivel nacional e internacional.
								</p>
							</div>
						</div>

						<div className="group relative">
							<div className="absolute -inset-1 bg-gradient-to-r from-[#0191bb] via-[#00bcd4] to-[#0191bb] rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500" />
							<div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/95 to-white/90 rounded-3xl shadow-2xl group-hover:shadow-[0_20px_60px_rgba(1,145,187,0.3)] transition-all duration-500" />

							<div className="relative p-8 text-center">
								<div className="relative mx-auto mb-6 w-20 h-20">
									<div className="absolute inset-0 bg-gradient-to-br from-[#0191bb] via-[#00bcd4] to-[#0191bb] rounded-2xl transform group-hover:rotate-6 transition-transform duration-500" />
									<div className="absolute inset-0.5 bg-white rounded-2xl" />
									<div className="relative w-full h-full flex items-center justify-center">
										<Heart size={36} className="text-[#0191bb] group-hover:scale-110 transition-transform duration-300 group-hover:text-red-500" />
									</div>
									<div className="absolute -top-2 -right-2 w-3 h-3 bg-red-400 rounded-full opacity-60 group-hover:animate-pulse delay-100" />
									<div className="absolute -bottom-2 -left-2 w-2 h-2 bg-[#0191bb] rounded-full opacity-40 group-hover:animate-pulse delay-300" />
									<div className="absolute top-0 left-0 w-1.5 h-1.5 bg-[#00bcd4] rounded-full opacity-50 group-hover:animate-pulse delay-200" />
								</div>

								<h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4 group-hover:from-red-500 group-hover:to-[#0191bb] transition-all duration-300">Valores</h3>
								<p className="text-gray-600 text-base leading-relaxed group-hover:text-gray-700 transition-colors">
									Innovación, Compromiso e Integridad son los pilares que guían nuestro trabajo diario.
								</p>
							</div>
						</div>
					</div>

					{/* Services Section - Redesigned */}
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
							Nuestros <span className="text-[#0191bb]">Servicios</span>
						</h2>
						<div className="w-20 h-1 bg-gradient-to-r from-[#0191bb] to-[#00bcd4] mx-auto" />
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
						<div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl hover:bg-white/15 transition-all duration-300 group">
							<div className="w-12 h-12 bg-[#0191bb]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#0191bb]/30 transition-colors">
								<Settings size={24} color="#0191bb" />
							</div>
							<h3 className="text-xl font-semibold text-white mb-3">Operación y Administración</h3>
							<p className="text-white/80 text-sm leading-relaxed">
								Gestión integral de estacionamientos con tecnología avanzada y personal especializado.
							</p>
						</div>

						<div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl hover:bg-white/15 transition-all duration-300 group">
							<div className="w-12 h-12 bg-[#0191bb]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#0191bb]/30 transition-colors">
								<BarChart3 size={24} color="#0191bb" />
							</div>
							<h3 className="text-xl font-semibold text-white mb-3">Auditoría y Reportes</h3>
							<p className="text-white/80 text-sm leading-relaxed">
								Análisis detallado y métricas de uso para optimizar la eficiencia operativa.
							</p>
						</div>

						<div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl hover:bg-white/15 transition-all duration-300 group">
							<div className="w-12 h-12 bg-[#0191bb]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#0191bb]/30 transition-colors">
								<Users size={24} color="#0191bb" />
							</div>
							<h3 className="text-xl font-semibold text-white mb-3">Consultoría y Gestión</h3>
							<p className="text-white/80 text-sm leading-relaxed">
								Asesoramiento especializado para maximizar el potencial de sus espacios.
							</p>
						</div>
					</div>

					{/* CTA Section - Enhanced */}
					<div className="text-center">
						<div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-3xl mx-auto">
							<h3 className="text-2xl font-bold text-white mb-4">¿Listo para transformar tu estacionamiento?</h3>
							<p className="text-white/80 mb-6">Descubre cómo nuestras soluciones inteligentes pueden optimizar tu espacio y mejorar la experiencia de tus usuarios.</p>
							<button className="bg-gradient-to-r from-[#0191bb] to-[#00bcd4] text-white font-semibold px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg">
								Conócenos más
							</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}