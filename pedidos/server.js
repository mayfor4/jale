const express = require('express');
const app = express();

const port = 2000;

// Rutas
app.get('/', (req, res) => {
    res.send('Microservicios Pedidos');
});

app.get('/lista-pedidos', (req, res) => {
    let resp = {
        data: {
            items: [
                { id: 1, nombre: 'pedido 1' },
                { id: 2, nombre: 'pedido 2' }
            ]
        }
    };
    res.status(200).json(resp);
});

// Escuchar en puerto
app.listen(port, () => {
    console.log(`Servicio Microservicios Pedidos escuchando en localhost:${port}`);
});