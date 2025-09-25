import nodemailer from "nodemailer";

// Configuración del transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || "465"),
  secure: true, // true para puerto 465, false para otros puertos
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Tipos para los datos de los formularios
interface ContactFormData {
  nombre: string;
  correo: string;
  asunto: string;
  mensaje: string;
}

interface JobFormData {
  nombre: string;
  correo: string;
  telefono: string;
  experiencia: string;
  mensaje: string;
}

interface InvoiceFormData {
  estacionamiento: string;
  fecha: string;
  monto: string;
  nombre: string;
  correo: string;
  telefono: string;
  mensaje: string;
}

// Función para enviar email de contacto
export async function sendContactEmail(formData: ContactFormData) {
  const { nombre, correo, asunto, mensaje } = formData;

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: "contacto@ppark.mx", // Email de destino
    subject: `Nuevo mensaje de contacto: ${asunto}`,
    html: `
      <h2>Nuevo mensaje de contacto</h2>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Email:</strong> ${correo}</p>
      <p><strong>Asunto:</strong> ${asunto}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${mensaje}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: "Email enviado correctamente" };
  } catch (error) {
    console.error("Error enviando email:", error);
    return { success: false, message: "Error al enviar email" };
  }
}

// Función para enviar email de bolsa de trabajo
export async function sendJobEmail(formData: JobFormData) {
  const { nombre, correo, telefono, experiencia, mensaje } = formData;

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: "contacto@ppark.mx",
    subject: `Nueva solicitud de empleo: ${nombre}`,
    html: `
      <h2>Nueva solicitud de empleo</h2>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Email:</strong> ${correo}</p>
      <p><strong>Teléfono:</strong> ${telefono}</p>
      <p><strong>Experiencia:</strong> ${experiencia}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${mensaje}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: "Solicitud enviada correctamente" };
  } catch (error) {
    console.error("Error enviando email:", error);
    return { success: false, message: "Error al enviar solicitud" };
  }
}

// Función para enviar email de facturación
export async function sendInvoiceEmail(formData: InvoiceFormData) {
  const { estacionamiento, fecha, monto, nombre, correo, telefono, mensaje } =
    formData;

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: "facturacion@ppark.mx",
    subject: `Nueva solicitud de facturación: ${estacionamiento}`,
    html: `
      <h2>Nueva solicitud de facturación</h2>
      <p><strong>Estacionamiento:</strong> ${estacionamiento}</p>
      <p><strong>Fecha:</strong> ${fecha}</p>
      <p><strong>Monto:</strong> $${monto}</p>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Email:</strong> ${correo}</p>
      <p><strong>Teléfono:</strong> ${telefono}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${mensaje}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      success: true,
      message: "Solicitud de facturación enviada correctamente",
    };
  } catch (error) {
    console.error("Error enviando email:", error);
    return { success: false, message: "Error al enviar solicitud" };
  }
}
