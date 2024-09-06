import express from "express";
import "dotenv/config"

const app = express()


//cross origin 
import cors from 'cors'
app.use(cors())

//Accept json data
app.use(express.json({ limit: '100kb' }))

app.get("/", (req, res) => {
    res.send("Hello World!")
})

//user route
import userRoutes from './routes/user.routes.js'
app.use('/api/v1/user', userRoutes)

//idea route
import ideaRoutes from './routes/idea.routes.js'
app.use('/api/v1/idea', ideaRoutes)

export default app