
const path =require('path');
const express=require('express');
const publicpath= path.join(__dirname,'../public');
const port= process.env.port || 3000;
console.log(__dirname);


console.log(publicpath);


var app=express();

app.use(express.static(publicpath));

app.listen(3000,()=>{

console.log(`server is running on port no ${port}`);

});

