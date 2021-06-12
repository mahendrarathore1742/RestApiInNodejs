const express=require('express');
require('./db/conn');
const Student= require('./models/students')
const app= express();

const port = process.env.PORT || 4000;
app.use(express.json());

app.get('/',(req,res) =>{
	res.send("Home");
})

app.post("/student",(req,res) =>{

	console.log(req.body)
	const user= new Student(req.body);
	user.save()
	.then(() =>{
		res.send(user)
	})
	.catch((e) =>{
		console.log(e);
	})
})

app.listen(port,() =>{
	console.log('its successfull running')
})