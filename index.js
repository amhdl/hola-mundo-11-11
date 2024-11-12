const express = require('express');
const path = require('path');
const app = express();

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
