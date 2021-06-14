const express=require('express');
require('./db/conn');
const Student= require('./models/students')
const app= express();

const port = process.env.PORT || 4000;
app.use(express.json());

app.get('/',(req,res) =>{
	res.send("Home");
})

// app.post("/student",(req,res) =>{
// 	const user= new Student(req.body);
// 	user.save()
// 	.then(() =>{
// 		res.send(user)
// 	})
// 	.catch((e) =>{
// 		console.log(e);
// 	})
// })

// insert data in database using api
app.post('/student',async (req,res) => {
	const user = new Student(req.body);
	const userdata = await user.save();
	res.send(userdata);
})


app.get('/student', async (req,res) =>{
	try{
		const studentdata = await Student.find();
		res.send(studentdata);
	}
	catch(e){
		res.send(e);
	}
} )

//get single data 
app.get('/student/:id', async (req,res) =>{
	try{
		const _id=req.params.id;
		const studentdata= await Student.findById(_id);
		res.send(studentdata);
	}
	catch(e){
		res.send(e);
	}
})

app.patch('/student/:id', async (req,res) =>{
	try{
		const _id=req.params.id;
		const studentdata= await Student.findByIdAndUpdate(_id,req.body);
		res.send(studentdata);
	}
	catch(e){
		res.send(e);
	}
})

app.listen(port,() =>{
	console.log('its successfull running')
})