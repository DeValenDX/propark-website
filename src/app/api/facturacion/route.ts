import mysql from 'mysql2/promise';
import { NextRequest, NextResponse } from 'next/server';

// Configuración de la base de datos usando solo variables de entorno
const dbConfig = {
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '3306'),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

// Función para crear la tabla si no existe
async function createTableIfNotExists(connection: mysql.Connection) {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS facturacion_prueba (
      id INT AUTO_INCREMENT PRIMARY KEY,
      estacionamiento VARCHAR(255) NOT NULL,
      no_recibo VARCHAR(255) NOT NULL,
      fecha DATE NOT NULL,
      persona_fisica_moral VARCHAR(50) NOT NULL,
      rfc VARCHAR(20) NOT NULL,
      razon_social VARCHAR(255) NOT NULL,
      correo VARCHAR(255) NOT NULL,
      repetir_correo VARCHAR(255) NOT NULL,
      direccion TEXT NOT NULL,
      numero_ext VARCHAR(20) NOT NULL,
      numero_int VARCHAR(20),
      colonia VARCHAR(255) NOT NULL,
      ciudad VARCHAR(255) NOT NULL,
      codigo_postal VARCHAR(10) NOT NULL,
      pais VARCHAR(100) NOT NULL,
      forma_pago VARCHAR(100) NOT NULL,
      estado VARCHAR(100) NOT NULL,
      regimen_fiscal VARCHAR(100) NOT NULL,
      uso_cfdi VARCHAR(100) NOT NULL,
      importe DECIMAL(10,2) NOT NULL,
      foto_ticket_filename VARCHAR(255),
      foto_ticket_data LONGBLOB,
      constancia_filename VARCHAR(255),
      constancia_data LONGBLOB,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
  `;
  
  await connection.execute(createTableQuery);
}

export async function POST(request: NextRequest) {
  let connection: mysql.Connection | null = null;
  
  try {
    // Verificar que las variables de entorno estén configuradas
    if (!process.env.DB_HOST || !process.env.DB_USER || !process.env.DB_PASSWORD || !process.env.DB_NAME) {
      console.error('❌ Variables de entorno de base de datos no configuradas');
      return NextResponse.json(
        { error: 'Configuración de base de datos no encontrada' },
        { status: 500 }
      );
    }

    // Debug: Mostrar configuración (sin contraseña)
    console.log('🔍 Conectando a base de datos:');
    console.log('Host:', process.env.DB_HOST);
    console.log('Puerto:', process.env.DB_PORT);
    console.log('Usuario:', process.env.DB_USER);
    console.log('Base de datos:', process.env.DB_NAME);

    // Crear conexión a la base de datos
    connection = await mysql.createConnection(dbConfig);
    console.log('✅ Conexión a base de datos establecida');
    
    // Crear tabla si no existe
    await createTableIfNotExists(connection);
    console.log('✅ Tabla facturacion_prueba verificada/creada');
    
    // Obtener datos del formulario
    const formData = await request.formData();
    
    // Extraer datos del formulario
    const estacionamiento = formData.get('estacionamiento') as string;
    const noRecibo = formData.get('no_recibo') as string;
    const fecha = formData.get('fecha') as string;
    const personaFisicaMoral = formData.get('persona_fisica_moral') as string;
    const rfc = formData.get('rfc') as string;
    const razonSocial = formData.get('razon_social') as string;
    const correo = formData.get('correo') as string;
    const repetirCorreo = formData.get('repetir_correo') as string;
    const direccion = formData.get('direccion') as string;
    const numeroExt = formData.get('numero_ext') as string;
    const numeroInt = formData.get('numero_int') as string;
    const colonia = formData.get('colonia') as string;
    const ciudad = formData.get('ciudad') as string;
    const codigoPostal = formData.get('codigo_postal') as string;
    const pais = formData.get('pais') as string;
    const formaPago = formData.get('forma_pago') as string;
    const estado = formData.get('estado') as string;
    const regimenFiscal = formData.get('regimen_fiscal') as string;
    const usoCfdi = formData.get('uso_cfdi') as string;
    const importe = formData.get('importe') as string;
    
    // Archivos
    const fotoTicket = formData.get('foto_ticket') as File;
    const constancia = formData.get('constancia_situacion_fiscal') as File;
    
    // Validaciones básicas
    if (!estacionamiento || !noRecibo || !fecha || !rfc || !razonSocial || !correo || !importe) {
      return NextResponse.json(
        { error: 'Los campos obligatorios son requeridos' },
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
    
    // Validación de correos coincidentes
    if (correo !== repetirCorreo) {
      return NextResponse.json(
        { error: 'Los correos electrónicos no coinciden' },
        { status: 400 }
      );
    }
    
    // Procesar archivos
    let fotoTicketData = null;
    let fotoTicketFilename = null;
    let constanciaData = null;
    let constanciaFilename = null;
    
    if (fotoTicket && fotoTicket.size > 0) {
      fotoTicketData = Buffer.from(await fotoTicket.arrayBuffer());
      fotoTicketFilename = fotoTicket.name;
    }
    
    if (constancia && constancia.size > 0) {
      constanciaData = Buffer.from(await constancia.arrayBuffer());
      constanciaFilename = constancia.name;
    }
    
    // Insertar datos en la base de datos
    const insertQuery = `
      INSERT INTO facturacion_prueba (
        estacionamiento, no_recibo, fecha, persona_fisica_moral, rfc, razon_social,
        correo, repetir_correo, direccion, numero_ext, numero_int, colonia, ciudad,
        codigo_postal, pais, forma_pago, estado, regimen_fiscal, uso_cfdi, importe,
        foto_ticket_filename, foto_ticket_data, constancia_filename, constancia_data
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    
    const values = [
      estacionamiento, noRecibo, fecha, personaFisicaMoral, rfc, razonSocial,
      correo, repetirCorreo, direccion, numeroExt, numeroInt, colonia, ciudad,
      codigoPostal, pais, formaPago, estado, regimenFiscal, usoCfdi, parseFloat(importe),
      fotoTicketFilename, fotoTicketData, constanciaFilename, constanciaData
    ];
    
    const [result] = await connection.execute(insertQuery, values);
    
    // Obtener el ID del registro insertado
			const insertId = (result as mysql.ResultSetHeader).insertId;
    
    console.log('✅ Datos guardados en base de datos con ID:', insertId);
    
    return NextResponse.json({
      success: true,
      message: 'Solicitud de facturación guardada correctamente',
      id: insertId,
      data: {
        estacionamiento,
        noRecibo,
        fecha,
        rfc,
        razonSocial,
        correo,
        importe
      }
    }, { status: 200 });
    
  } catch (error) {
    console.error('❌ Error en API de facturación:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor. Por favor, intenta nuevamente.' },
      { status: 500 }
    );
  } finally {
    if (connection) {
      await connection.end();
      console.log('🔌 Conexión a base de datos cerrada');
    }
  }
}

export async function GET() {
  return NextResponse.json("API de facturación ProPark funcionando correctamente");
}
