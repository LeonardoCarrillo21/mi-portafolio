"use server";
import { Resend } from 'resend';

// Process.env busca la llave en tu archivo .env.local de forma secreta
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  try {
    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>', // Resend te da este por defecto al inicio
      to: 'carrillomartinezleonardojavier@gmail.com',
      subject: `Nuevo mensaje de ${name}`,
      text: `De: ${email}\n\nMensaje: ${message}`,
    });
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}