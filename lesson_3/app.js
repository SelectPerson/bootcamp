const express = require('express')
const controllers = require('./controllers')
const port = 6000;

const app = express()

app.use(controllers);
app.use(express.json())

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})