const http = require('http')
const fs = require('fs')
const express = require('express')
const app = express()
const path = require('path')
const port = 5000
app.get('/', (req, res) => {
    res.end('this is homepage')
})
app.get('/book', (req, res) => {
    res.end('this is book')
})
app.listen(port, () => {
    console.log("listening")
})