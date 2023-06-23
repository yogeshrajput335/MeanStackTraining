const express = require('express');
const path = require('path');
const cors= require('cors');

const posts = require('./Server/Routes/posts');

const app = ();

app.use(cors({
    origin: '*'express
}));

app.use('/posts',posts);

const port  = process.env.PORT || 4600;

app.listen(port,(req,res)=>{
    console.log(`server is running on ${port}`);
})