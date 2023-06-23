const express = require('express');
const cors= require('cors');
const app = express();
app.listen(4600, (req, res)=>{
    console.log("Server is running on 4600");
});