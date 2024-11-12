const express = require('express');
const path = require('path');
const { Resend } = require('resend');
const app = express();
const resend = new Resend('re_Rm3kxoac_6zNDW5Zr9kY9Xt2Tco8Poj5V');


// Endpoint para enviar un correo
app.get('/api/send-email', async (req, res) => {
  try {
    // Configura el correo electrónico
    const response1 = await resend.emails.send({
      from: 'onboarding@resend.dev',  // Reemplaza con tu correo de envío
      to: 'test-c1nbltltf@srv1.mail-tester.com',  // Reemplaza con el correo del destinatario
      subject: 'Hola Mundo',
      html: '<h1>Hola desde Resend API</h1><p>Este es un mensaje enviado desde tu API.</p>',
    });

    const response2 = await resend.emails.send({
      from: 'onboarding@resend.dev',  // Reemplaza con tu correo de envío
      to: 'test-c1nbltltf@srv1.mail-tester.com',  // Reemplaza con el correo del destinatario
      subject: 'Hola Mundo',
      html: '<h1>Hola desde Resend API</h1><p>Este es un mensaje enviado desde tu API.</p>',
    });

    console.log('Correo enviado.1:');

    res.json({ message: 'Correo enviado correctamente', data: response });
  } catch (error) {
    console.error('Error enviando correo:', error);
    res.status(500).json({ message: 'Error al enviar el correo', error: error.message });
  }
});



// Define la ruta de la API
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello World from API!' });
});

// Sirve el archivo HTML en la ruta raíz
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Inicia el servidor en el puerto 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
