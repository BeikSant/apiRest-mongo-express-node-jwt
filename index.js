import express from "express";
import 'dotenv/config';
import './database/configdb.js';
import authRouter from "./router/auth.route.js";


const app = express();
app.use(express.json()); //Sirve para leer las archivos json
app.use('/api/v1/', authRouter);

// Iniciando el puerto en el que va a ejecutar la aplicacion
const PORT = process.env.PORT || 8000;
app.listen(PORT, (err, res) => {
    console.log("Servidor Corriendo http://localhost:",PORT);
});

