const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    res.send({data:"POST WORKS"});
});

router.get('/GetIdeas',(req,res)=>{
    res.send({data:"NEW IDEA"});
});

router.get('/PrimeVideo',(req,res)=>{
    res.send({data:"Prime Video"});
});


module.exports = router;