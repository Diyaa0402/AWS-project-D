const express = require('express');
const ip = require('ip');
const app = express();

app.get('/ping' , (req , res) =>{
    return res.json({
        message: "ping",
        serverAddress:ip.address()
    })
})
app.listen(3000 , ()=>{
    console.log("SErver is running on port 3000")
});
