import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY_JOBS);

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const nombre = formData.get('nombre') as string;
    const correo = formData.get('correo') as string;
    const telefono = formData.get('telefono') as string;
    const puesto = formData.get('puesto') as string;
    const experiencia = formData.get('experiencia') as string;
    const cvFile = formData.get('cv') as File;

    // Validación básica
    if (!nombre || !correo || !telefono || !puesto) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Validación específica del CV
    if (!cvFile) {
      return NextResponse.json(
        { error: 'El archivo CV es obligatorio' },
        { status: 400 }
      );
    }

    // Validación del archivo
    if (cvFile.size === 0) {
      return NextResponse.json(
        { error: 'El archivo CV es requerido' },
        { status: 400 }
      );
    }

    // Validación del tamaño del archivo (5MB máximo)
    if (cvFile.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'El archivo CV no puede ser mayor a 5MB' },
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

    // Convertir archivo a buffer para adjunto
    const cvBuffer = Buffer.from(await cvFile.arrayBuffer());

    // Envío del email
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL_JOBS || 'capitalhumano@ppark.mx',
      to: [process.env.RESEND_TO_EMAIL_JOBS || 'capitalhumano@ppark.mx'],
      subject: `Nueva solicitud de trabajo - ${puesto}`,
      attachments: [
        {
          filename: cvFile.name,
          content: cvBuffer,
          contentType: cvFile.type,
        },
      ],
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #008FBE; border-bottom: 2px solid #008FBE; padding-bottom: 10px;">
            Nueva solicitud de trabajo - ProPark
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Información del candidato:</h3>
            
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Email:</strong> ${correo}</p>
            <p><strong>Teléfono:</strong> ${telefono}</p>
            <p><strong>Puesto solicitado:</strong> ${puesto}</p>
            <p><strong>Experiencia:</strong> ${experiencia}</p>
            <p><strong>CV adjunto:</strong> ${cvFile.name} (${(cvFile.size / 1024).toFixed(1)} KB)</p>
          </div>
          
          <div style="color: #666; font-size: 12px; text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p>Esta solicitud fue enviada desde el formulario de bolsa de trabajo del sitio web de ProPark.</p>
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
        { error: 'Error al enviar la solicitud. Por favor, intenta nuevamente.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Solicitud enviada correctamente. Te contactaremos pronto.',
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
  return NextResponse.json("API de bolsa de trabajo ProPark funcionando correctamente");
}
