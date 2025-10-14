const https = require("https");

const url = "https://naydreams.onrender.com/ping"; // Cambia esto por tu URL de Render

function keepAlive() {
  https
    .get(url, (res) => {
      console.log(
        `[${new Date().toISOString()}] Ping enviado - Status: ${res.statusCode}`
      );
    })
    .on("error", (err) => {
      console.error(
        `[${new Date().toISOString()}] Error al hacer ping:`,
        err.message
      );
    });
}

// Hacer ping cada 10 minutos (600000 ms)
setInterval(keepAlive, 600000);

// Hacer ping inicial
keepAlive();

console.log("Servicio de keep-alive iniciado. Ping cada 10 minutos.");
