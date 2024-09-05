import 'dotenv/config'
import express from 'express'
import userRouter from './routes/user.route.js' // exportacion default

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true})) // enviar solicitudes de form html
app.use('/api/v1/users',userRouter) //usar middlewards en express
const PORT = process.env.PORT || 3000;

app.listen( PORT, () => console.log("Servidor escuchando en el puerto: "+ PORT))