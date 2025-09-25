import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nombre, correo, asunto, mensaje } = body;

    // Validación básica
    if (!nombre || !correo || !asunto || !mensaje) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
      return NextResponse.json(
        { error: 'El formato del email no es válido' },
        { status: 400 }
      );
    }

    // Envío del email
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL_CONTACT || 'Formulario_Contacto <onboarding@resend.dev>',
      to: [process.env.RESEND_TO_EMAIL || 'factura@ppark.mx'],
      subject: `Contacto desde sitio web: ${asunto}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #008FBE; border-bottom: 2px solid #008FBE; padding-bottom: 10px;">
            Nuevo mensaje de contacto - ProPark
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Detalles del contacto:</h3>
            
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Email:</strong> ${correo}</p>
            <p><strong>Asunto:</strong> ${asunto}</p>
            
            <div style="margin-top: 20px;">
              <strong>Mensaje:</strong>
              <div style="background-color: white; padding: 15px; border-radius: 5px; margin-top: 10px; border-left: 4px solid #008FBE;">
                ${mensaje.replace(/\n/g, '<br>')}
              </div>
            </div>
          </div>
          
          <div style="color: #666; font-size: 12px; text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p>Este mensaje fue enviado desde el formulario de contacto del sitio web de ProPark.</p>
            <p>Fecha: ${new Date().toLocaleString('es-MX', { 
              timeZone: 'America/Mexico_City',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Error enviando email:', error);
      return NextResponse.json(
        { error: 'Error al enviar el mensaje. Por favor, intenta nuevamente.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Mensaje enviado correctamente. Te contactaremos pronto.',
        emailId: data?.id 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error en API:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor. Por favor, intenta nuevamente.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json("API de contacto ProPark funcionando correctamente");
}
