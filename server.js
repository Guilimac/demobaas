const express = require('express');
const app = express();
const api = require('./api');

let port = process.env.PORT || 3030


app.use('/api', api);
app.get('/', (req,res)=>{
    res.send('hello word');
})

app.listen(port,()=>{
    console.log(`app listen on port: ${port}`);
})