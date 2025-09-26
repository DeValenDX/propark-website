"use client";

import Image from "next/image";
import SendButton from "@/components/Buttons/Send";
import MathCaptcha from "@/components/forms/MathCaptcha";
import { useState } from "react";

export default function Invoices() {
	const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
	const [message, setMessage] = useState({ type: "", text: "" });
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		
		// Validación especial para el campo de importe
		if (name === 'importe') {
			// Solo permitir números y un punto decimal
			let cleanValue = value.replace(/[^0-9.]/g, '');
			
			// No permitir múltiples puntos - mantener solo el primero
			const firstDotIndex = cleanValue.indexOf('.');
			if (firstDotIndex !== -1) {
				cleanValue = cleanValue.substring(0, firstDotIndex + 1) + 
							cleanValue.substring(firstDotIndex + 1).replace(/\./g, '');
			}
			
			// Limitar a 2 decimales después del punto
			const parts = cleanValue.split('.');
			if (parts[1] && parts[1].length > 2) {
				cleanValue = parts[0] + '.' + parts[1].substring(0, 2);
			}
			
			// Actualizar el valor limpio
			e.target.value = cleanValue;
		}
		
		// Validación para RFC: máximo 13 caracteres
		if (name === 'rfc') {
			if (value.length > 13) {
				e.target.value = value.substring(0, 13);
			}
		}
		
		// Validación para código postal: solo números, máximo 5
		if (name === 'codigo_postal') {
			// Solo permitir números
			let cleanValue = value.replace(/[^0-9]/g, '');
			// Limitar a 5 caracteres
			if (cleanValue.length > 5) {
				cleanValue = cleanValue.substring(0, 5);
			}
			e.target.value = cleanValue;
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		
		// Validar CAPTCHA
		if (!isCaptchaVerified) {
			setMessage({
				type: "error",
				text: "Por favor, completa la verificación de seguridad.",
			});
			return;
		}

		// Crear FormData con todos los campos del formulario
		const formData = new FormData(e.target as HTMLFormElement);
		const rfc = formData.get('rfc') as string;
		const codigoPostal = formData.get('codigo_postal') as string;

		// Validar RFC
		if (!rfc || rfc.length < 1 || rfc.length > 13) {
			setMessage({
				type: "error",
				text: "El RFC debe tener entre 1 y 13 caracteres.",
			});
			return;
		}

		// Validar código postal
		if (!codigoPostal || codigoPostal.length !== 5 || !/^[0-9]{5}$/.test(codigoPostal)) {
			setMessage({
				type: "error",
				text: "El código postal debe tener exactamente 5 dígitos numéricos.",
			});
			return;
		}
		
		try {
			// Enviar datos a la API
			const response = await fetch('/api/facturacion', {
				method: 'POST',
				body: formData,
			});

			if (response.ok) {
				// Éxito: mostrar mensaje de agradecimiento
				setIsFormSubmitted(true);
			} else {
				// Error: mostrar mensaje de error
				const errorData = await response.json();
				setMessage({
					type: "error",
					text: errorData.error || "Error al enviar la solicitud. Por favor, intenta nuevamente.",
				});
			}
		} catch (error) {
			setMessage({
				type: "error",
				text: "Error de conexión. Por favor, verifica tu internet e intenta nuevamente.",
			});
		}
	};

	return (
		<section className="min-h-screen w-screen">
			<div className="relative w-full h-96 flex items-center justify-center">
				<Image
					src="/assets/invoices.jpg"
					alt="Imagen de estacionamiento"
					fill
					className="object-cover object-center"
					priority
					sizes="100vw"
					placeholder="blur"
					blurDataURL="/parking-places/PARKING-blur.jpg"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 to-gray-800/70 flex flex-col items-center justify-center">
					<div>
						<span className="relative text-5xl font-semibold text-white z-10">
							FACTURACIÓN
						</span>
					</div>
					<div className="flex items-center justify-center mt-4 px-4">
						<span className="text-white text-center max-w-2xl text-xl font-extralight">
							Estimado cliente, Para emitir su{" "}
							<span className="font-semibold text-[#00d4ff]">factura</span>, es
							necesario completar todos los siguientes campos con la información
							impresa en tu{" "}
							<span className="font-semibold text-[#00d4ff]">recibo</span>,
							posteriormente le enviaremos a su correo electrónico el archivo{" "}
							<span className="font-semibold text-[#00d4ff]">PDF</span> y{" "}
							<span className="font-semibold text-[#00d4ff]">XML</span>.
							<br />
							<span className="font-semibold text-[#00d4ff]">
								Dudas o Aclaraciones:
							</span>
							En caso que no reciba su factura en un tiempo de{" "}
							<span className="font-semibold text-[#00d4ff]">20 minutos</span>,
							o si tiene alguna duda o comentario puede contactarnos al correo:
							<a
								href="mailto:facturacion@propark.com"
								className="font-semibold text-[#00d4ff]"
							>
								facturacion@propark.com
							</a>
							O también dar clic en el botón flotante de{" "}
							<span className="font-semibold text-[#00d4ff]">Whatsapp</span> de
							la derecha de esta pagina para contactar a nuestra área de{" "}
							<span className="font-semibold text-[#00d4ff]">facturación</span>.
						</span>
					</div>
				</div>
			</div>

			<div className="flex flex-1 items-center justify-center py-8 px-8 bg-gray-50">
				<div className="w-full bg-white rounded-2xl shadow-xl overflow-hidden p-8 relative">
					{/* Marca de agua de fondo - solo se muestra si no se ha enviado el formulario */}
					{!isFormSubmitted && (
						<div className="absolute inset-0 opacity-15 pointer-events-none">
							<Image
								src="/map-icons/PP.jpg"
								alt="Marca de agua ProPark"
								fill
								className="object-contain"
								priority
							/>
						</div>
					)}
					
					{/* Mostrar mensaje de éxito o formulario */}
					{isFormSubmitted ? (
						<div className="text-center py-12">
							<div className="mb-8">
								<Image
									src="/logo estatico.png"
									alt="ProPark Logo"
									width={400}
									height={133}
									className="mx-auto h-32 w-auto"
									priority
								/>
							</div>
							<h2 className="text-3xl font-bold text-gray-800 mb-4">
								¡Muchas gracias!
							</h2>
							<p className="text-xl text-gray-600 mb-6">
								Tu factura será enviada pronto
							</p>
							<p className="text-gray-500">
								Recibirás un correo electrónico con tu factura en formato PDF y XML.
							</p>
						</div>
					) : (
						<>
							<h2 className="text-2xl font-bold text-gray-800 mb-6 text-center relative z-10">
								Formulario de facturación
							</h2>
							<form onSubmit={handleSubmit} className="space-y-6 relative z-10">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Estacionamiento<span className="text-red-500">*</span>
								</label>
								<select
									name="estacionamiento"
									className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00d4ff] focus:outline-none"
									required
								>
									<option value="">Selecciona un estacionamiento</option>
										<option value="02 - TORRES LINDAVISTA">02 - TORRES LINDAVISTA</option>
										<option value="03 - LUNA PARC">03 - LUNA PARC</option>
										<option value="04 - YUFIKA">04 - YUFIKA</option>
										<option value="05 - AVERANDA">05 - AVERANDA</option>
										<option value="07 - INFINITI CENTER">07 - INFINITI CENTER</option>
										<option value="08 - PLAZA DEL PARQUE">08 - PLAZA DEL PARQUE</option>
									<option value="11 - PASEO MOLINO">11 - PASEO MOLINO</option>
									<option value="14 - WALMART BALBUENA">14 - WALMART BALBUENA</option>
									<option value="16 - DIAGONAL">16 - DIAGONAL</option>
									<option value="18 - ALTAVISTA 147">18 - ALTAVISTA 147</option>
									<option value="22 - CHAPULTEPEC UNO">22 - CHAPULTEPEC UNO</option>
									<option value="25 - PLAZA JUÁREZ 70">25 - PLAZA JUÁREZ 70</option>
									<option value="28 - SUPERAMA HOMERO">28 - SUPERAMA HOMERO</option>
									<option value="29 - WALMART VISTAHERMOSA">29 - WALMART VISTAHERMOSA</option>
									<option value="31 - WALMART EXPRESS ZAPATA">31 - WALMART EXPRESS ZAPATA</option>
									<option value="35 - B.A 8 DE JULIO">35 - B.A 8 DE JULIO</option>
									<option value="36 - WALMART CUITLAHUAC">36 - WALMART CUITLAHUAC</option>
									<option value="38 - LA GRAN PLAZA GDL">38 - LA GRAN PLAZA GDL</option>
									<option value="39 - INTERLOMAS">39 - INTERLOMAS</option>
									<option value="42 - WALMART ECHEGARAY">42 - WALMART ECHEGARAY</option>
									<option value="43 - COMBO METEPEC">43 - COMBO METEPEC</option>
									<option value="44 - TORRE REFORMA">44 - TORRE REFORMA</option>
									<option value="45 - DEL PUENTE">45 - DEL PUENTE</option>
									<option value="46 - AXOMIATLA">46 - AXOMIATLA</option>
									<option value="47 - PUNTA ZERO">47 - PUNTA ZERO</option>
									<option value="48 - ESPACIO LOMAS">48 - ESPACIO LOMAS</option>
									<option value="49 - PLAZA IKON">49 - PLAZA IKON</option>
									<option value="51 - WALMART EXPRESS GEORGIA">51 - WALMART EXPRESS GEORGIA</option>
									<option value="52 - WALMART JARDINES DE LA MONTAÑA">52 - WALMART JARDINES DE LA MONTAÑA</option>
									<option value="53 - WALMART EXPRESS REVOLUCIÓN">53 - WALMART EXPRESS REVOLUCIÓN</option>
									<option value="54 - WALMART EXPRESS PACHUCA">54 - WALMART EXPRESS PACHUCA</option>
									<option value="55 - PARQUE VIA VALLEJO">55 - PARQUE VIA VALLEJO</option>
									<option value="56 - PLAZA CUARZO">56 - PLAZA CUARZO</option>
									<option value="57 - CENTRUM PARK">57 - CENTRUM PARK</option>
									<option value="63 - INTERGRAFIK">63 - INTERGRAFIK</option>
									<option value="65 - BA INSURGENTES SUR">65 - BA INSURGENTES SUR</option>
									<option value="66 - W.E CHURUBUSCO">66 - W.E CHURUBUSCO</option>
									<option value="67 - LA GRAN PLAZA MAZATLAN">67 - LA GRAN PLAZA MAZATLAN</option>
									<option value="68 - IGLESIA 270">68 - IGLESIA 270</option>
									<option value="69 - HD ACAPULCO">69 - HD ACAPULCO</option>
									<option value="70 - HD CUERNAVACA">70 - HD CUERNAVACA</option>
									<option value="71 - HD CELAYA">71 - HD CELAYA</option>
									<option value="73 - HD TOLUCA">73 - HD TOLUCA</option>
									<option value="74 - HD METEPEC">74 - HD METEPEC</option>
									<option value="75 - HD ECATEPEC">75 - HD ECATEPEC</option>
									<option value="77 - HD IZTAPALAPA">77 - HD IZTAPALAPA</option>
									<option value="78 - HD CENTRO">78 - HD CENTRO</option>
									<option value="79 - HD TLATILCO">79 - HD TLATILCO</option>
									<option value="80 - HD PERINORTE">80 - HD PERINORTE</option>
									<option value="81 - HD TLALNEPANTLA">81 - HD TLALNEPANTLA</option>
									<option value="82 - HD LOMAS VERDES">82 - HD LOMAS VERDES</option>
									<option value="83 - HD NAUCALPAN">83 - HD NAUCALPAN</option>
									<option value="84 - SAMS SALAMANCA">84 - SAMS SALAMANCA</option>
									<option value="85 - BODEGA AURRERA DOCTORES">85 - BODEGA AURRERA DOCTORES</option>
									<option value="86 - WALMART EXPRESS TAXQUEÑA">86 - WALMART EXPRESS TAXQUEÑA</option>
									<option value="87 - BODEGA AURRERA SANTA FE">87 - BODEGA AURRERA SANTA FE</option>
									<option value="88 - SAMS SATELITE">88 - SAMS SATELITE</option>
									<option value="89 - WALMART EXPRESS LINDAVISTA">89 - WALMART EXPRESS LINDAVISTA</option>
									<option value="90 - WE MANUEL ACUÑA">90 - WE MANUEL ACUÑA</option>
									<option value="91 - SODIMAC CUERNAVACA">91 - SODIMAC CUERNAVACA</option>
									<option value="92 - CORPORATIVO NEUCHATEL">92 - CORPORATIVO NEUCHATEL</option>
									<option value="93 - HD PUERTO VALLARTA">93 - HD PUERTO VALLARTA</option>
									<option value="95 - SORIANA ALAMEDAS">95 - SORIANA ALAMEDAS</option>
									<option value="96 - SORIANA LAS AMERICAS">96 - SORIANA LAS AMERICAS</option>
									<option value="97 - TORRE ALTIVA">97 - TORRE ALTIVA</option>
									<option value="98 - DOMINGO DIEZ">98 - DOMINGO DIEZ</option>
									<option value="99 - BA UNIVERSIDAD ACAPULCO">99 - BA UNIVERSIDAD ACAPULCO</option>
									<option value="100 - WE TOLUCA">100 - WE TOLUCA</option>
								</select>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700">
									No. Recibo<span className="text-red-500">*</span>
								</label>
								<input
									type="text"
									name="no_recibo"
									className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00d4ff] focus:outline-none"
									required
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Fecha<span className="text-red-500">*</span>
								</label>
								<input
									type="date"
									name="fecha"
									className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00d4ff] focus:outline-none"
									required
								/>
							</div>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Persona Física, Persona Moral
									<span className="text-red-500">*</span>
								</label>
								<select
									name="persona_fisica_moral"
									className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00d4ff] focus:outline-none"
									required
								>
									<option value="">Selecciona una opción</option>
									<option value="Persona Física">Persona Física</option>
									<option value="Persona Moral">Persona Moral</option>
								</select>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Rfc<span className="text-red-500">*</span>
								</label>
								<input
									type="text"
									name="rfc"
									onChange={handleInputChange}
									className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00d4ff] focus:outline-none"
									required
									minLength={1}
									maxLength={13}
									title="Ingresa un RFC válido (mínimo 1, máximo 13 caracteres)"
								/>
							</div>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Razon social<span className="text-red-500">*</span>
								</label>
								<input
									type="text"
									name="razon_social"
									className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00d4ff] focus:outline-none"
									required
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Correo<span className="text-red-500">*</span>
								</label>
								<input
									type="email"
									name="correo"
									className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00d4ff] focus:outline-none"
									required
								/>
							</div>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Repetir correo<span className="text-red-500">*</span>
								</label>
								<input
									type="email"
									name="repetir_correo"
									className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00d4ff] focus:outline-none"
									required
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Dirección<span className="text-red-500">*</span>
								</label>
								<input
									type="text"
									className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00d4ff] focus:outline-none"
									required
								/>
							</div>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Numero Ext<span className="text-red-500">*</span>
								</label>
								<input
									type="text"
									className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00d4ff] focus:outline-none"
									required
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Numero Int
								</label>
								<input
									type="text"
									className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00d4ff] focus:outline-none"
								/>
							</div>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Colonia<span className="text-red-500">*</span>
								</label>
								<input
									type="text"
									className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00d4ff] focus:outline-none"
									required
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Ciudad<span className="text-red-500">*</span>
								</label>
								<input
									type="text"
									className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00d4ff] focus:outline-none"
									required
								/>
							</div>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Código Postal<span className="text-red-500">*</span>
								</label>
								<input
									type="text"
									name="codigo_postal"
									onChange={handleInputChange}
									className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00d4ff] focus:outline-none"
									required
									pattern="[0-9]{5}"
									title="Ingresa un código postal válido de 5 dígitos"
									maxLength={5}
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700">
									País<span className="text-red-500">*</span>
								</label>
								<select
									name="pais"
									className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00d4ff] focus:outline-none"
									required
								>
									<option value="">Selecciona un país</option>
									<option value="México">México</option>
								</select>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Forma de pago<span className="text-red-500">*</span>
								</label>
								<select
									name="forma_pago"
									className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00d4ff] focus:outline-none"
									required
								>
									<option value="">Selecciona una forma de pago</option>
									<option value="01 - EFECTIVO">01 - EFECTIVO</option>
									<option value="02 - CHEQUE NOMINATIVO">02 - CHEQUE NOMINATIVO</option>
									<option value="03 - TRANSFERENCIA ELECTRÓNICA DE FONDOS">03 - TRANSFERENCIA ELECTRÓNICA DE FONDOS</option>
									<option value="04 - TARJETA DE CREDITO">04 - TARJETA DE CREDITO</option>
									<option value="05 - MONEDERO ELECTRÓNICO">05 - MONEDERO ELECTRÓNICO</option>
									<option value="06 - DINERO ELECTRÓNICO">06 - DINERO ELECTRÓNICO</option>
									<option value="08 - VALES DE DESPENSA">08 - VALES DE DESPENSA</option>
									<option value="12 - DACIÓN EN PAGO">12 - DACIÓN EN PAGO</option>
									<option value="13 - PAGO POR SUBROGACIÓN">13 - PAGO POR SUBROGACIÓN</option>
									<option value="14 - PAGO POR CONSIGNACIÓN">14 - PAGO POR CONSIGNACIÓN</option>
									<option value="15 - CONDONACIÓN">15 - CONDONACIÓN</option>
									<option value="17 - COMPENSACIÓN">17 - COMPENSACIÓN</option>
									<option value="23 - NOVACIÓN">23 - NOVACIÓN</option>
									<option value="24 - CONFUSIÓN">24 - CONFUSIÓN</option>
									<option value="25 - REMISIÓN DE DEUDA">25 - REMISIÓN DE DEUDA</option>
									<option value="26 - PRESCRIPCIÓN O CADUCIDAD">26 - PRESCRIPCIÓN O CADUCIDAD</option>
									<option value="27 - A SATISFACCIÓN DEL ACREEDOR">27 - A SATISFACCIÓN DEL ACREEDOR</option>
									<option value="28 - TARJETA DE DEBITO">28 - TARJETA DE DEBITO</option>
									<option value="29 - TARJETA DE SERVICIOS">29 - TARJETA DE SERVICIOS</option>
									<option value="30 - APLICACIÓN DE ANTICIPOS">30 - APLICACIÓN DE ANTICIPOS</option>
									<option value="31 - INTERMEDIARIO PAGOS">31 - INTERMEDIARIO PAGOS</option>
									<option value="99 - POR DEFINIR">99 - POR DEFINIR</option>
								</select>
							</div>
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700">
								Estado<span className="text-red-500">*</span>
							</label>
							<input
								type="text"
								className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00d4ff] focus:outline-none"
								required
							/>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Régimen Fiscal<span className="text-red-500">*</span>
								</label>
								<select
									name="regimen_fiscal"
									className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00d4ff] focus:outline-none"
									required
								>
									<option value="">Selecciona un régimen fiscal</option>
									<option value="601 - General de Ley Personas Morales">601 - General de Ley Personas Morales</option>
									<option value="603 - Personas Morales con Fines no Lucrativos">603 - Personas Morales con Fines no Lucrativos</option>
									<option value="605 - Sueldos y Salarios e Ingresos Asimilados a Salarios">605 - Sueldos y Salarios e Ingresos Asimilados a Salarios</option>
									<option value="606 - Arrendamiento">606 - Arrendamiento</option>
									<option value="608 - Demás ingresos">608 - Demás ingresos</option>
									<option value="610 - Residentes en el Extranjero sin Establecimiento Permanente en México">610 - Residentes en el Extranjero sin Establecimiento Permanente en México</option>
									<option value="611 - Ingresos por Dividendos (socios y accionistas)">611 - Ingresos por Dividendos (socios y accionistas)</option>
									<option value="612 - Personas Físicas con Actividades Empresariales y Profesionales">612 - Personas Físicas con Actividades Empresariales y Profesionales</option>
									<option value="614 - Ingresos por intereses">614 - Ingresos por intereses</option>
									<option value="615 - Régimen de los ingresos por obtención de premios">615 - Régimen de los ingresos por obtención de premios</option>
									<option value="616 - Sin obligaciones fiscales">616 - Sin obligaciones fiscales</option>
									<option value="620 - Sociedades Cooperativas de Producción que optan por diferir sus ingresos">620 - Sociedades Cooperativas de Producción que optan por diferir sus ingresos</option>
									<option value="621 - Incorporación Fiscal">621 - Incorporación Fiscal</option>
									<option value="622 - Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras">622 - Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras</option>
									<option value="623 - Opcional para Grupos de Sociedades">623 - Opcional para Grupos de Sociedades</option>
									<option value="624 - Coordinados">624 - Coordinados</option>
									<option value="625 - Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas">625 - Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas</option>
									<option value="626 - Régimen Simplificado de Confianza">626 - Régimen Simplificado de Confianza</option>
								</select>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Uso de CFDI<span className="text-red-500">*</span>
								</label>
								<select
									name="uso_cfdi"
									className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00d4ff] focus:outline-none"
									required
								>
									<option value="">Selecciona un uso de CFDI</option>
									<option value="G01 - Adquisición de mercancías">G01 - Adquisición de mercancías</option>
									<option value="G02 - Devoluciones, descuentos o bonificaciones">G02 - Devoluciones, descuentos o bonificaciones</option>
									<option value="G03 - Gastos en general">G03 - Gastos en general</option>
									<option value="I01 - Construcciones">I01 - Construcciones</option>
									<option value="I02 - Mobilario y equipo de oficina por inversiones">I02 - Mobilario y equipo de oficina por inversiones</option>
									<option value="I03 - Equipo de transporte">I03 - Equipo de transporte</option>
									<option value="I04 - Equipo de computo y accesorios">I04 - Equipo de computo y accesorios</option>
									<option value="I05 - Dados, troqueles, moldes, matrices y herramental">I05 - Dados, troqueles, moldes, matrices y herramental</option>
									<option value="I06 - Comunicaciones telefónicas">I06 - Comunicaciones telefónicas</option>
									<option value="I07 - Comunicaciones satelitales">I07 - Comunicaciones satelitales</option>
									<option value="I08 - Otra maquinaria y equipo">I08 - Otra maquinaria y equipo</option>
									<option value="D01 - Honorarios médicos, dentales y gastos hospitalarios">D01 - Honorarios médicos, dentales y gastos hospitalarios</option>
									<option value="D02 - Gastos médicos por incapacidad o discapacidad">D02 - Gastos médicos por incapacidad o discapacidad</option>
									<option value="D03 - Gastos funerales">D03 - Gastos funerales</option>
									<option value="D04 - Donativos">D04 - Donativos</option>
									<option value="D05 - Intereses reales efectivamente pagados por créditos hipotecarios (casa habitación)">D05 - Intereses reales efectivamente pagados por créditos hipotecarios (casa habitación)</option>
									<option value="D06 - Aportaciones voluntarias al SAR">D06 - Aportaciones voluntarias al SAR</option>
									<option value="D07 - Primas por seguros de gastos médicos">D07 - Primas por seguros de gastos médicos</option>
									<option value="D08 - Gastos de transportación escolar obligatoria">D08 - Gastos de transportación escolar obligatoria</option>
									<option value="D09 - Depósitos en cuentas para el ahorro, primas que tengan como base planes de pensiones">D09 - Depósitos en cuentas para el ahorro, primas que tengan como base planes de pensiones</option>
									<option value="D10 - Pagos por servicios educativos (colegiaturas)">D10 - Pagos por servicios educativos (colegiaturas)</option>
									<option value="P01 - Por definir">P01 - Por definir</option>
								</select>
							</div>
						</div>
						<div className="w-full mb-4">
							<label className="block text-sm font-medium text-gray-700">
								Importe (MXN)<span className="text-red-500">*</span>
							</label>
							<input
								type="text"
								name="importe"
								onChange={handleInputChange}
								className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00d4ff] focus:outline-none"
								required
								placeholder="0.00"
								pattern="^\d+(\.\d{1,2})?$"
								title="Ingresa un monto válido (ej: 452.25)"
							/>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Foto ticket(s)<span className="text-red-500">*</span>
								</label>
								<input
									type="file"
									name="foto_ticket"
									className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-[#00d4ff] focus:outline-none"
									required
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Constancia de Situacion Fiscal
									<span className="text-red-500">*</span>
								</label>
								<input
									type="file"
									name="constancia_situacion_fiscal"
									className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-[#00d4ff] focus:outline-none"
									required
								/>
							</div>
						</div>
						
						{/* Mensaje de estado */}
						{message.text && (
							<div className={`p-4 rounded-lg mb-4 ${
								message.type === "error" 
									? "bg-red-100 text-red-700 border border-red-300" 
									: "bg-green-100 text-green-700 border border-green-300"
							}`}>
								{message.text}
							</div>
						)}
						
						{/* CAPTCHA */}
						<MathCaptcha onVerify={setIsCaptchaVerified} />
						
						<div>
							<SendButton
								isLoading={false}
								onLoadingComplete={() => {}}
								buttonText="Enviar"
								className="w-full bg-gradient-to-r from-[#00d4ff] to-[#0099ff] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:scale-[1.02] transform transition"
							/>
						</div>
					</form>
						</>
					)}
				</div>
			</div>
		</section>
	);
}
