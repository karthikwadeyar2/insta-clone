import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import connectDB from './utils/db.js'

dotenv.config({})

const app = express()

const PORT = process.env.PORT || 3000;

app.get('/', (_, res) => {
    return res.status(200).json({
        message: 'Hello World',
        success: true
    })
})

// middlewares
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
}
app.use(cors(corsOptions))



app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`)
})