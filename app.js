const express = require('express')
const port = 3001;

const app = express()

app.get('/', (req, res) => {
    res.send('Node.js app')
})

app.get('/about', (req, res) => {
    res.send('About this app...')
})

app.listen(port)