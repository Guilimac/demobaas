const express = require('express');
const app = express();


let port = process.env.PORT || 3030

app.get('/', (req,res)=>{
    res.send('hello word');
})

app.listen(port,()=>{
    console.log(`app listen on port: ${port}`);
})