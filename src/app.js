import express from "express"
import MocksRouter from "./routes/mocks.router.js"

const app = express();
const PORT = 8080

app.use('/api/mocks', MocksRouter)

app.listen(PORT, () => {
    console.log("Escuchando en puerto: "+ PORT);
    
})