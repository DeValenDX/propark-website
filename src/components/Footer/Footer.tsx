import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
	return (
		<footer className="bg-[#434343] text-white w-full min-w-0">
			<div className="w-full min-w-0 px-2 sm:px-4 lg:px-8 py-12">
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

						{/* Logo y descripción */}
						<div className="lg:col-span-2">
							<div className="mb-4">
								<Image
									src="/img/logo.png"
									alt="ProPark Logo"
									width={120}
									height={40}
									className="h-10 w-auto"
								/>
							</div>
							<p className="text-gray-300 text-sm leading-relaxed max-w-md">
								La tecnología y el diseño son nuestro motor para perseguir la innovación en cada operación de nuestros estacionamientos.
							</p>
						</div>

						{/* Contacto */}
						<div>
							<h3 className="text-lg font-semibold mb-4 text-white">Contacto</h3>
							<div className="space-y-3 text-sm text-gray-300">
								<p className="leading-relaxed">
									Bosque de Radiatas, #10, Int 202,<br />
									Col. Bosques de las Lomas,<br />
									Cuajimalpa, CP 05120, CDMX
								</p>
								<p>
									<a href="mailto:contacto@ppark.mx" className="hover:text-blue-400 transition-colors duration-200">
										contacto@ppark.mx
									</a>
								</p>
								<p>
									<a href="tel:+525552590014" className="hover:text-blue-400 transition-colors duration-200">
										+52 1 55 52590014
									</a>
								</p>
							</div>
						</div>

						{/* Servicios */}
						<div>
							<h3 className="text-lg font-semibold mb-4 text-white">Servicios</h3>
							<div className="space-y-2 text-sm text-gray-300">
								<p>Operación y administración</p>
								<p>Auditoria y reportes</p>
								<p>Consultoria, asesoría y gestión</p>
								<p>Equipo y financiamiento</p>
								<p>Valet Parking, Floor Valet y Eventos Especiales</p>
							</div>
						</div>

						{/* Aviso de privacidad y Redes sociales */}
						<div className="space-y-6">
							{/* Aviso de privacidad */}
							<div>
								<h3 className="text-lg font-semibold mb-4 text-white">Aviso de privacidad</h3>
								<div className="space-y-2 text-sm text-gray-300">
									<Link 
										href="/aviso-privacidad" 
										className="hover:text-blue-400 transition-colors duration-200 block"
									>
										Consulta nuestro aviso de privacidad
									</Link>
								</div>
							</div>

							{/* Redes sociales */}
							<div>
								<h3 className="text-lg font-semibold mb-4 text-white">Redes sociales</h3>
								<div className="flex space-x-4">
									{/* Facebook */}
									<a 
										href="#" 
										className="group transition-all duration-300 hover:scale-110"
										aria-label="Síguenos en Facebook"
									>
										<Image
											src="/social-icons/fb.svg"
											alt="Facebook"
											width={32}
											height={32}
											className="w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
										/>
									</a>

									{/* X (Twitter) */}
									<a 
										href="#" 
										className="group transition-all duration-300 hover:scale-110"
										aria-label="Síguenos en X (Twitter)"
									>
										<Image
											src="/social-icons/X.svg"
											alt="X (Twitter)"
											width={32}
											height={32}
											className="w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity duration-200"
										/>
									</a>

									{/* Instagram */}
									<a 
										href="#" 
										className="group transition-all duration-300 hover:scale-110"
										aria-label="Síguenos en Instagram"
									>
										<Image
											src="/social-icons/ig.svg"
											alt="Instagram"
											width={32}
											height={32}
											className="w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity duration-200"
										/>
									</a>

									{/* TikTok */}
									<a 
										href="#" 
										className="group transition-all duration-300 hover:scale-110"
										aria-label="Síguenos en TikTok"
									>
										<Image
											src="/social-icons/tt.svg"
											alt="TikTok"
											width={32}
											height={32}
											className="w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity duration-200"
											style={{
												filter: 'none !important',
												WebkitFilter: 'none !important',
												MozFilter: 'none !important',
												msFilter: 'none !important',
												transform: 'none !important'
											}}
										/>
									</a>
								</div>
							</div>
						</div>
					</div>

					{/* Línea divisoria */}
					<div className="border-t border-gray-600 mt-8 pt-8">
						<div className="text-center text-sm text-gray-400">
							<p>&copy; 2024 ProPark. Todos los derechos reservados.</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
