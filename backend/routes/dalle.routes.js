import express from "express";
import * as dotenv from 'dotenv'
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();


const router = express.Router()
//migrate!!--------
const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(config)
//------------

router.route('/').get((req,res) => {
    res.status(200).json({ message: "hello from ROUTES"  })
})

export default router