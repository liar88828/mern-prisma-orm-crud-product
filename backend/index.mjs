import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import ProductRoute from './routes/ProductRoute.mjs'

dotenv.config()

const app = express()
const port = process.env.APP_PORT

app.use(express.json())
app.use(cors())
app.use(ProductRoute)
app.listen(port, () => {
	console.log('SERVER UP RUNNING', port)
})