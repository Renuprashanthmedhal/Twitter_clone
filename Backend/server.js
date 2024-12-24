import express from 'express';
import authRoutes from './routes/authRoutes.js';

const app = express()

app.use("/api/auth", authRoutes)

app.get("/", (req, res) => {
    res.json({
        success: true
    })
})

app.listen(5000, () => {
    console.log("Listening to port 5000")
})