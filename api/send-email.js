// api/send-email.js
import { Resend } from 'resend';

const resend = new Resend('re_Rm3kxoac_6zNDW5Zr9kY9Xt2Tco8Poj5V');

export default async function handler(req, res) {
  try {
    const response = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'test-c1nbltltf@srv1.mail-tester.com',
      subject: 'Hola Mundo',
      html: '<h1>Hola desde Resend API</h1><p>Este es un mensaje enviado desde tu API.</p>',
    });

    res.json({ message: 'Correo enviado correctamente', data: response });
  } catch (error) {
    console.error('Error enviando correo:', error);
    res.status(500).json({ message: 'Error al enviar el correo', error: error.message });
  }
}
