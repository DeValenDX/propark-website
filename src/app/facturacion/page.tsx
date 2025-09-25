"use client";

import Image from "next/image";
import SendButton from "@/components/Buttons/Send";
import MathCaptcha from "@/components/forms/MathCaptcha";
import { useState } from "react";

export default function Invoices() {
	const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
	const [message, setMessage] = useState({ type: "", text: "" });

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
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		
		// Validar CAPTCHA
		if (!isCaptchaVerified) {
			setMessage({
				type: "error",
				text: "Por favor, completa la verificación de seguridad.",
			});
			return;
		}

		// Si el CAPTCHA es válido, proceder con el envío
		setMessage({
			type: "success",
			text: "Solicitud de facturación enviada correctamente.",
		});
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
				<div className="w-full  bg-white rounded-2xl shadow-xl overflow-hidden p-8">
					<h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
						Formulario de facturación
					</h2>
					<form onSubmit={handleSubmit} className="space-y-6">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Estacionamiento<span className="text-red-500">*</span>
								</label>
								<select
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
									className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00d4ff] focus:outline-none"
									required
								>
									<option value="">-</option>
								</select>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Rfc<span className="text-red-500">*</span>
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
									Razon social<span className="text-red-500">*</span>
								</label>
								<input
									type="text"
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
									className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00d4ff] focus:outline-none"
									required
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700">
									País<span className="text-red-500">*</span>
								</label>
								<select
									className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00d4ff] focus:outline-none"
									required
								>
									<option value="">-</option>
								</select>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Forma de pago<span className="text-red-500">*</span>
								</label>
								<select
									className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00d4ff] focus:outline-none"
									required
								>
									<option value="">-</option>
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
									className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00d4ff] focus:outline-none"
									required
								>
									<option value="">-</option>
								</select>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Uso de CFDI<span className="text-red-500">*</span>
								</label>
								<select
									className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00d4ff] focus:outline-none"
									required
								>
									<option value="">-</option>
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
				</div>
			</div>
		</section>
	);
}
