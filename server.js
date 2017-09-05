const express = require('express');
const app = express();
const api = require('./api');
const db = require('./models');

let port = process.env.PORT || 3030

db.connect();

app.use('/api', api);
app.get('/', (req,res)=>{
    res.send('hello word');
})

app.listen(port,()=>{
    console.log(`app listen on port: ${port}`);
})