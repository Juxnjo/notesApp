import express from "express";
import morgan from "morgan";

import noteRoutes from "./routes/note.routes.js";
import userRoutes from "./routes/user.routes.js";

const app = express()

// Middleware para analizar el cuerpo de las solicitudes HTTP en formato JSON
app.use(express.json());

//Nos permite ver en consola las peticiones HTTP que hagan a nuestros servicios del API
app.use( morgan( 'dev' ) )

app.use("/servicio/api_notes_app", noteRoutes)
app.use("/servicio/api_notes_app", userRoutes)

export default app 