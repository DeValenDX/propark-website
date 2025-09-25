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
									<option value="ALTAVISTA 147">ALTAVISTA 147</option>
									<option value="AXOMIATLA">AXOMIATLA</option>
									<option value="AVERANDA">AVERANDA</option>
									<option value="BA INSURGENTES SUR">BA INSURGENTES SUR</option>
									<option value="BA UNIVERSIDAD ACAPULCO">BA UNIVERSIDAD ACAPULCO</option>
									<option value="B.A 8 DE JULIO">B.A 8 DE JULIO</option>
									<option value="BODEGA AURRERA DOCTORES">BODEGA AURRERA DOCTORES</option>
									<option value="BODEGA AURRERA SANTA FE">BODEGA AURRERA SANTA FE</option>
									<option value="CENTRUM PARK">CENTRUM PARK</option>
									<option value="CHAPULTEPEC UNO">CHAPULTEPEC UNO</option>
									<option value="COMBO METEPEC">COMBO METEPEC</option>
									<option value="CORPORATIVO NEUCHATEL">CORPORATIVO NEUCHATEL</option>
									<option value="DEL PUENTE">DEL PUENTE</option>
									<option value="DIAGONAL">DIAGONAL</option>
									<option value="DOMINGO DIEZ">DOMINGO DIEZ</option>
									<option value="ESPACIO LOMAS">ESPACIO LOMAS</option>
									<option value="HD ACAPULCO">HD ACAPULCO</option>
									<option value="HD CELAYA">HD CELAYA</option>
									<option value="HD CENTRO">HD CENTRO</option>
									<option value="HD CUERNAVACA">HD CUERNAVACA</option>
									<option value="HD ECATEPEC">HD ECATEPEC</option>
									<option value="HD ECHEGARAY">HD ECHEGARAY</option>
									<option value="HD IZTAPALAPA">HD IZTAPALAPA</option>
									<option value="HD LOMAS VERDES">HD LOMAS VERDES</option>
									<option value="HD METEPEC">HD METEPEC</option>
									<option value="HD NAUCALPAN">HD NAUCALPAN</option>
									<option value="HD PERINORTE">HD PERINORTE</option>
									<option value="HD PUERTO VALLARTA">HD PUERTO VALLARTA</option>
									<option value="HD TLALNEPANTLA">HD TLALNEPANTLA</option>
									<option value="HD TLATILCO">HD TLATILCO</option>
									<option value="HD TOLUCA">HD TOLUCA</option>
									<option value="IGLESIA 270">IGLESIA 270</option>
									<option value="INFINITI CENTER">INFINITI CENTER</option>
									<option value="INTERGRAFIK">INTERGRAFIK</option>
									<option value="INTERLOMAS">INTERLOMAS</option>
									<option value="LA GRAN PLAZA GDL">LA GRAN PLAZA GDL</option>
									<option value="LA GRAN PLAZA MAZATLAN">LA GRAN PLAZA MAZATLAN</option>
									<option value="LUNA PARC">LUNA PARC</option>
									<option value="PASEO MOLINO">PASEO MOLINO</option>
									<option value="PARQUE VIA VALLEJO">PARQUE VIA VALLEJO</option>
									<option value="PLAZA CUARZO">PLAZA CUARZO</option>
									<option value="PLAZA DEL PARQUE">PLAZA DEL PARQUE</option>
									<option value="PLAZA IKON">PLAZA IKON</option>
									<option value="PLAZA JUÁREZ 70">PLAZA JUÁREZ 70</option>
									<option value="PUNTA ZERO">PUNTA ZERO</option>
									<option value="SAMS SALAMANCA">SAMS SALAMANCA</option>
									<option value="SAMS SATELITE">SAMS SATELITE</option>
									<option value="SODIMAC CUERNAVACA">SODIMAC CUERNAVACA</option>
									<option value="SORIANA ALAMEDAS">SORIANA ALAMEDAS</option>
									<option value="SORIANA LAS AMERICAS">SORIANA LAS AMERICAS</option>
									<option value="SUPERAMA HOMERO">SUPERAMA HOMERO</option>
									<option value="TORRE ALTIVA">TORRE ALTIVA</option>
									<option value="TORRE REFORMA">TORRE REFORMA</option>
									<option value="TORRES LINDAVISTA">TORRES LINDAVISTA</option>
									<option value="W.E CHURUBUSCO">W.E CHURUBUSCO</option>
									<option value="WALMART BALBUENA">WALMART BALBUENA</option>
									<option value="WALMART CUITLAHUAC">WALMART CUITLAHUAC</option>
									<option value="WALMART ECHEGARAY">WALMART ECHEGARAY</option>
									<option value="WALMART EXPRESS GEORGIA">WALMART EXPRESS GEORGIA</option>
									<option value="WALMART EXPRESS LINDAVISTA">WALMART EXPRESS LINDAVISTA</option>
									<option value="WALMART EXPRESS PACHUCA">WALMART EXPRESS PACHUCA</option>
									<option value="WALMART EXPRESS REVOLUCIÓN">WALMART EXPRESS REVOLUCIÓN</option>
									<option value="WALMART EXPRESS TAXQUEÑA">WALMART EXPRESS TAXQUEÑA</option>
									<option value="WALMART EXPRESS ZAPATA">WALMART EXPRESS ZAPATA</option>
									<option value="WALMART JARDINES DE LA MONTAÑA">WALMART JARDINES DE LA MONTAÑA</option>
									<option value="WALMART VISTAHERMOSA">WALMART VISTAHERMOSA</option>
									<option value="WE MANUEL ACUÑA">WE MANUEL ACUÑA</option>
									<option value="WE TOLUCA">WE TOLUCA</option>
									<option value="YUFIKA">YUFIKA</option>
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
