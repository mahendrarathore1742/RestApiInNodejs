const express=require('express');
require('./db/conn');
const Student= require('./models/students')
const app= express();
const router = require('./router/student');
const port = process.env.PORT || 4000;
app.use(express.json());



app.use(router);


app.listen(port,() =>{
	console.log('its successfull running')
})