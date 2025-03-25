const express = require('express')
const app = express()
const PORT = 3568

let data = ['Vlad']

app.use(express.json())

app.get('/', (req, res) => {
    console.log('the method is:', req.method)
    res.send(`<h1>${JSON.stringify(data)}</h1><a href="/api/data">User list</a>`)
})

app.get('/dashboard', (req, res) => {
    res.send(`<h1>Dashboard by method: ${req.method}</h1>`)
})

app.get('/api/data', (req, res) => {
    res.send(`<h1>Users list</h1><p>${data}</p><a href="/">Home</a>`)
    console.log(data)
})

app.post('/api/data', (req, res) => {
    const newEntry = req.body
    data.push(newEntry.name)
    res.sendStatus(201)
})

app.delete('/api/data', (req, res) => {
    data.pop()
    res.sendStatus(203)
})

app.listen(PORT, () => console.log(`Server: ${PORT}`))