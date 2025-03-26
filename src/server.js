import express from 'express'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import authRoutes from './routes/authRoutes.js'
import todoRoutes from './routes/todoRoutes.js'

const app = express()
const PORT = process.env.PORT || 3568

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

console.log(__filename)
console.log(__dirname)

//middleware
app.use(express.json())
app.use(express.static(path.join(__dirname, '../public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public', '/index.html'))
})

app.use('/auth', authRoutes)

app.listen(PORT, () => {
    console.log('Started ', PORT)
})