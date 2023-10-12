import express from "express";
import * as dotenv from 'dotenv'
import cors from 'cors'

import dalleRoutes from './routes/dalle.routes.js'

//setup evirement variable
dotenv.config();

const app = express();
app.use(cors()) 
app.use(express.json({ limit: "50mb" }))

app.use('/api/v1/dalle', dalleRoutes)

app.get('/', (req, res) => {
    res.status(200).json({ message: "hello from backend" })
})

app.listen(8080, () => console.log('Server running on prot 8080'))