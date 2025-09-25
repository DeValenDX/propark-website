import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/email";
import { validateEmail } from "@/utils/validation";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nombre, correo, asunto, mensaje } = body;

    // Validación del lado del servidor
    if (!nombre || !correo || !asunto || !mensaje) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios" },
        { status: 400 }
      );
    }

    if (!validateEmail(correo)) {
      return NextResponse.json(
        { error: "El correo electrónico no es válido" },
        { status: 400 }
      );
    }

    // Enviar email
    const result = await sendContactEmail({
      nombre: nombre.trim(),
      correo: correo.trim(),
      asunto: asunto.trim(),
      mensaje: mensaje.trim(),
    });

    if (result.success) {
      return NextResponse.json(
        { message: "Mensaje enviado correctamente" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: "Error al enviar el mensaje" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error en API de contacto:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
