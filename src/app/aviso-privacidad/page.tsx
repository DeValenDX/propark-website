import React from 'react';
import Image from 'next/image';

export default function AvisoPrivacidad() {
	return (
		<div className="w-full">
			{/* Cabecero rectangular con imagen de fondo */}
			<div className="relative w-full h-80">
				<Image
					src="/img/parking.jpg"
					alt="Estacionamiento ProPark"
					fill
					className="object-cover"
					priority
					sizes="100vw"
				/>
				
				{/* Título superpuesto */}
				<div className="absolute inset-0 flex items-center justify-center">
					<h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-blue-400 text-center drop-shadow-[0_4px_6px_rgba(0,0,0,0.9)] px-4">
						Aviso de Privacidad
					</h1>
				</div>
			</div>

			{/* Sección de contenido del aviso */}
			<div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-3xl font-bold text-center text-gray-900 mb-8 uppercase tracking-wide">
						AVISO DE PRIVACIDAD
					</h2>
					
					<div className="prose prose-lg max-w-none text-gray-700 space-y-6">
						<p className="leading-relaxed">
							En P PARK ADMINISTRACION S.A C.V. y/o PARK PRO ADMINISTRACIÓN MEXICO S DE R.L DE C.V (en adelante &quot;PRO PARK&quot;), valoramos la protección de tus datos personales y nos comprometemos a cumplir con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares. Este aviso tiene como objetivo informarte sobre qué datos recopilamos, cómo los utilizamos, manejamos y compartimos, y con quién lo hacemos de forma consensuada.
						</p>
						
						<p className="leading-relaxed">
							PRO PARK, con domicilio en Av. Pról. Paseo de la Reforma No. 379, Piso 10 Desp 7, Lomas de Santa Fe, Álvaro Obregón, Ciudad de México C.P. 01330, es responsable del uso y protección de tus datos personales.
						</p>
						
						<p className="leading-relaxed">
							Los datos personales, financieros y patrimoniales que solicitamos, así como los de carácter sensible, serán utilizados por PRO PARK y/o sus subsidiarias y/o terceros que, por la naturaleza de sus trabajos o funciones, necesiten utilizar tus datos para cumplir con las obligaciones derivadas de la relación jurídica existente entre tú como titular de los datos personales y PRO PARK.
						</p>
						
						<p className="leading-relaxed">
							PRO PARK podrá transferir los datos personales que obren en sus bases de datos a sus empresas subsidiarias e incluso a terceras personas, nacionales o extranjeras, salvo que manifiestes expresamente tu oposición, conforme a lo dispuesto por la Ley.
						</p>
						
						<p className="leading-relaxed">
							Como arrendatario, cliente, prestador de servicios o proveedor, PRO PARK podrá solicitar información personal, que varía según el caso, tal como:
						</p>
						
						<ul className="list-disc pl-8 space-y-2 text-gray-700">
							<li>Nombre, dirección, fecha de nacimiento.</li>
							<li>Correo electrónico y número telefónico.</li>
							<li>Datos patrimoniales (cuentas bancarias, créditos, bienes muebles e inmuebles, activos, pasivos, etc.).</li>
							<li>Documentos oficiales con que legítimamente se acredite tu identidad y la información que declaras, tales como credencial de elector, pasaporte, cédula profesional, forma migratoria o, en su caso, la representación legal del titular de los derechos u obligaciones (copia simple en formato impreso o electrónico de la carta poder simple con firma autógrafa del titular, el mandatario y sus correspondientes identificaciones oficiales).</li>
						</ul>
						
						<p className="leading-relaxed">
							Utilizamos tus datos personales para:
						</p>
						
						<ul className="list-disc pl-8 space-y-2 text-gray-700">
							<li>Corroborar tu identidad.</li>
							<li>Conocer tus necesidades comerciales.</li>
							<li>Otorgar seguridad y certeza jurídica a los actos que celebres con nosotros.</li>
							<li>Crear un Archivo de registros y expedientes de la relación contractual para la prestación de servicios futuros.</li>
							<li>Sustentar los actos jurídicos de tu interés.</li>
							<li>Cumplir con los requerimientos legales aplicables.</li>
							<li>Corroborar la información que nos proporcionas.</li>
							<li>Cumplir con las disposiciones relativas en la legislación vigente y aplicable.</li>
						</ul>
						
						<p className="leading-relaxed">
							Además, utilizaremos tus datos personales para conocer tus hábitos de consumo, gustos y preferencias, con el fin de ofrecerte productos que se adapten a ellos, así como para enviarte promociones y publicidad de nuestros servicios. También realizaremos estudios de mercadotecnia, segmentación de mercado y estadísticas, te invitaremos a participar en nuestros concursos y actividades en redes sociales.
						</p>
						
						<p className="leading-relaxed">
							Tienes derecho a expresar tu negativa para el tratamiento de tus datos personales dentro de los 5 días hábiles posteriores a la lectura de este aviso de privacidad. Puedes ejercer tu derecho de revocación enviando un correo electrónico a contacto@ppark.mx.
						</p>
						
						<p className="leading-relaxed">
							Tus datos personales serán tratados con base en los principios de licitud, consentimiento, información, calidad, finalidad, lealtad, proporcionalidad y responsabilidad según lo establecido por la legislación vigente. Garantizamos la confidencialidad de tus datos personales mediante la implementación efectiva de medidas de seguridad administrativas, técnicas y físicas para prevenir su daño, pérdida, alteración, destrucción, uso, acceso o divulgación indebida. En caso de una violación de seguridad en cualquier etapa del tratamiento de tus datos personales, PRO PARK lo comunicará a través de su página web www.ppark.mx, para que puedas tomar las medidas necesarias para proteger tus derechos.
						</p>
						
						<p className="leading-relaxed">
							Puedes limitar el uso y divulgación de tu información personal de las siguientes maneras:
						</p>
						
						<ul className="list-disc pl-8 space-y-2 text-gray-700">
							<li>Presentando tu solicitud personalmente en nuestro domicilio.</li>
							<li>Enviando un correo electrónico a contacto@ppark.mx.</li>
						</ul>
						
						<p className="leading-relaxed">
							Para ejercer tus derechos de acceso, rectificación, cancelación y oposición, así como la revocación del consentimiento, puedes presentar una solicitud por escrito en nuestro domicilio o vía correo electrónico. Sin embargo, una vez que estos derechos se hayan plasmado en un convenio, contrato u orden de compra, no podrás ejercerlos sobre los mismos, sino solamente respecto de los datos que se conservan en la base de datos de la empresa.
						</p>
						
						<p className="leading-relaxed">
							Este aviso de privacidad está sujeto a modificaciones, cambios o actualizaciones, por lo que nos comprometemos a informarte de cualquier cambio a través de nuestra página web, notificación por correo electrónico o en la primera comunicación que tengamos contigo después de la modificación.
						</p>
						
						<p className="leading-relaxed">
							Si tienes alguna pregunta sobre este aviso de privacidad, puedes contactarnos a través de:
						</p>
						
						<ul className="list-disc pl-8 space-y-2 text-gray-700">
							<li>Correo electrónico: contacto@ppark.mx.</li>
							<li>Teléfono: (55) 2167-0813.</li>
						</ul>
						
						<p className="leading-relaxed">
							Si tras ejercer tus derechos ARCO percibes que la respuesta ha sido insatisfactoria o incompleta, o si cuentas con evidencia de una posible violación a las disposiciones de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares en el tratamiento de tus datos personales, tienes la facultad de interponer una queja o denuncia ante la autoridad competente.
						</p>
					</div>
					
					{/* Línea separadora elegante */}
					<div className="mt-12 pt-8 border-t-2 border-blue-400 w-24 mx-auto"></div>
				</div>
			</div>
		</div>
	);
}
