const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000

app.get('/',(req,res) => {
    res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send("swapnil")
})

app.get("/login",(req,res)=>{
    res.send("<h1>Swapnil login please</h1>")
})

app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on porrt ${port}`)
})