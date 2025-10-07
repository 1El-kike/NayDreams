import { envs } from "./config/env.js";
import { server } from "./app.js";
//import registerEvents from "./sockets/events";

// Inicializar sockets
//registerEvents(io);

const port = envs.PORT;

server.listen(port, () => {
  console.log(`Escuchando en el puert ${port}`);
});
