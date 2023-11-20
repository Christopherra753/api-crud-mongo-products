import express from 'express'

// conexion a la base de datos
import { connectDB } from './database.js'

// rutas
import productRouter from './routes/product.routes.js'

const app = express()

// Permitimos el req.body
app.use(express.json())

// hacemos la conexion a la base de datos primero
connectDB()

// Utilizamos la ruta de productos
app.use('/api', productRouter)

// Utilizamos un puerto
app.listen(3000)

console.log('Aplicacion corriendo en el puerto 3000')
