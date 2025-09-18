import Image from "next/image";
import Link from "next/link";

export default function Invoices() {
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
					<form className="space-y-6">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Estacionamiento<span className="text-red-500">*</span>
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
								type="number"
								className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00d4ff] focus:outline-none"
								required
								placeholder="0.00"
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
						<div>
							<button
								type="submit"
								className="w-full bg-gradient-to-r from-[#00d4ff] to-[#0099ff] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:scale-[1.02] transform transition"
							>
								Enviar
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}
