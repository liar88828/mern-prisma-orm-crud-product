import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.APP_PORT

app.use(cors())

app.listen(port, () => {
	console.log('SERVER UP RUNNING', port)
})