import express from "express"
import { AppInit } from './init/initialConfig.js'

const app = express();
AppInit(app)

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log("Escuchando en puerto: "+ PORT);
})