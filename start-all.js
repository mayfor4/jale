const { exec } = require("child_process");

const services = ["api-gateway", "pagos", "pedidos"];  // Elimina "inventario" si no existe

services.forEach(service => {
    exec(`cd ${service} && npm start`, (err, stdout, stderr) => {
        if (err) {
            console.error(`Error en ${service}:`, err);
            return;
        }
        console.log(`Output de ${service}:\n`, stdout);
        if (stderr) console.error(`Errores en ${service}:\n`, stderr);
    });
});
