// Habilita el modo de "Server Actions" para este archivo
"use server";

// Importa el cliente de Prisma para interactuar con la base de datos
import { PrismaClient } from "@/lib/prisma/generated/prisma";
// Importa la función para revalidar rutas en Next.js
import { revalidatePath } from "next/cache";
// Importa la librería de SendGrid para el envío de correos
import sgMail from '@sendgrid/mail';

// Configura la clave API de SendGrid al inicio del archivo.
// Esta clave se obtiene de las variables de entorno (tu archivo .env.local).
// Se usa 'as string' para asegurar a TypeScript que el valor será una cadena.
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

// Inicializa el cliente de Prisma
const prisma = new PrismaClient();

/**
 * Obtiene todas las solicitudes de acceso anticipado de la base de datos.
 * Las ordena por fecha de creación en orden descendente.
 * @returns Una lista de todas las solicitudes de acceso anticipado.
 */
export const getAllEarlyAccessRequests = async () => {
  const requests = await prisma.earlyAccessRequest.findMany({
    orderBy: { createdAt: "desc" }, // Ordena por fecha de creación descendente
  });
  return requests;
};

/**
 * Crea una nueva solicitud de acceso anticipado en la base de datos.
 * @param data Un objeto con todos los campos de la solicitud.
 */
export const createEarlyAccessRequest = async (data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  poolType: string;
  sensorOption: string;
  experience: string;
  motivation: string;
  acceptedTerms: boolean;
}) => {
  await prisma.earlyAccessRequest.create({
    data: {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      city: data.city,
      poolType: data.poolType,
      sensorOption: data.sensorOption,
      experience: data.experience,
      motivation: data.motivation,
      acceptedTerms: data.acceptedTerms,
    },
  });
};

/**
 * Elimina una solicitud de acceso anticipado de la base de datos por su ID.
 * Después de eliminar, revalida la ruta '/admin' para actualizar la UI.
 * @param id El ID de la solicitud a eliminar.
 */
export const deleteEarlyAccessRequest = async (id: string) => {
  await prisma.earlyAccessRequest.delete({
    where: { id },
  });

  revalidatePath("/admin"); // Revalida la ruta '/admin' para reflejar el cambio
};

/**
 * Actualiza el estado de una solicitud de acceso anticipado y notifica al usuario por correo electrónico.
 * Utiliza SendGrid para enviar el correo.
 * @param id El ID de la solicitud a actualizar.
 * @param status El nuevo estado de la solicitud ("aceptado" o "rechazado").
 * @returns La solicitud de acceso anticipado actualizada.
 */
export const updateEarlyAccessStatusAndNotify = async (
  id: string,
  status: "aceptado" | "rechazado"
) => {
  // Actualiza el estado de la solicitud en la base de datos
  const request = await prisma.earlyAccessRequest.update({
    where: { id },
    data: { status },
  });

  // --- Lógica de envío de correo a SENDGRID con mensajes profesionales ---
  const msg = {
    // Remitente del correo. EMAIL_USER debe ser tu dirección verificada en SendGrid (ahora alejoscarola@iresm.edu.ar).
    from: `"OCEAN Admin" <${process.env.EMAIL_USER}>`,
    // Destinatario del correo, tomado de la solicitud de la base de datos
    to: request.email,
    // Asunto del correo, cambia según el estado
    subject:
      status === "aceptado"
        ? "¡Excelente Noticia! Tu Solicitud de Acceso Anticipado a OCEAN ha sido Aceptada"
        : "Actualización sobre tu Solicitud de Acceso Anticipado a OCEAN",
    // Contenido HTML del correo, con estilos básicos y mensajes detallados
    html:
      status === "aceptado"
        ? `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h1 style="color: #0056b3;">¡Felicidades, ${request.firstName}! Tu viaje con OCEAN comienza ahora.</h1>
          <p>Nos complace enormemente informarte que tu solicitud de acceso anticipado a OCEAN ha sido <b>aceptada</b>.</p>
          <p>Estamos muy entusiasmados de tenerte a bordo y compartir contigo las innovaciones que OCEAN tiene para ofrecer en el monitoreo inteligente de piscinas.</p>
          <p>En los próximos días, nuestro equipo se pondrá en contacto contigo directamente a través de este correo electrónico o el número de teléfono que nos proporcionaste (${request.phone}) para brindarte todos los detalles sobre cómo acceder a la plataforma, los próximos pasos, y responder cualquier pregunta que puedas tener.</p>
          <p>Mientras tanto, te invitamos a visitar nuestro sitio web (si tienes uno) o nuestras redes sociales para mantenerte al tanto de las últimas novedades de OCEAN.</p>
          <p>¡Gracias por tu interés y por confiar en OCEAN!</p>
          <p>Atentamente,</p>
          <p>El Equipo de OCEAN</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 0.8em; color: #777;">Este es un correo automático, por favor no respondas a esta dirección.</p>
        </div>
        `
        : `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h1 style="color: #d9534f;">Actualización de tu Solicitud de Acceso Anticipado a OCEAN</h1>
          <p>Estimado/a ${request.firstName},</p>
          <p>Agradecemos sinceramente tu interés en OCEAN y el tiempo que tomaste para enviar tu solicitud de acceso anticipado.</p>
          <p>Hemos revisado cuidadosamente todas las solicitudes recibidas y, aunque valoramos enormemente tu entusiasmo, lamentamos informarte que en esta ocasión tu solicitud <b>no ha podido ser aceptada</b>.</p>
          <p>La fase de acceso anticipado de OCEAN cuenta con un número limitado de participantes, y la selección se basa en diversos criterios para asegurar la mejor experiencia inicial y retroalimentación.</p>
          <p>Tu interés es muy importante para nosotros. Te invitamos a seguir de cerca nuestras actualizaciones en nuestro sitio web (si tienes uno) y redes sociales. Habrá futuras oportunidades para unirte a la comunidad de OCEAN a medida que avancemos.</p>
          <p>¡Gracias nuevamente por tu comprensión y por ser parte de la comunidad de OCEAN!</p>
          <p>Saludos cordiales,</p>
          <p>El Equipo de OCEAN</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 0.8em; color: #777;">Este es un correo automático, por favor no respondas a esta dirección.</p>
        </div>
        `,
  };

  try {
    // Envía el correo usando SendGrid
    await sgMail.send(msg);
    console.log("Correo enviado con éxito usando SendGrid.");
  } catch (error: any) {
    // Captura y registra cualquier error que ocurra durante el envío del correo
    console.error("Error al enviar correo con SendGrid:", error.response?.body || error);
  }
  // --- FIN DE LÓGICA DE ENVÍO CON SENDGRID ---

  // Revalida la página '/admin' para actualizar los datos en la UI
  revalidatePath("/admin");

  return request;
};
