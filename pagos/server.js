const express = require('express');
const app = express();

const port = 3002;

// Rutas
app.get('/', (req, res) => {
    res.send('Microservicios Pagos');
});

app.get('/lista-pagos', (req, res) => {
    let resp = {
        data: {
            items: [
                { id: 1, nombre: 'pago 1' },
                { id: 2, nombre: 'pago 2' }
            ]
        }
    };
    res.status(200).json(resp);
});

// Escuchar en puerto
app.listen(port, () => {
    console.log(` Microservicios Pagos escuchando en localhost:${port}`);
});