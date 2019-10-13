const express = require('express');
const app= express();
app.get('/',function(req,res){
res.send('ready Dog cat kutee billian//')
})
app.listen(9027,function(){
    console.log('Server ready2');
})