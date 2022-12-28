const express = require('express'),
      app = express(),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      PORT = 3000
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))

app.get("/",(req,res)=>{
    res.send("teste")
})


app.listen(PORT,()=>console.log(`ouvindo em http://localhost:${PORT}`))