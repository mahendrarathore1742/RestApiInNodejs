const express=require('express');
const router = new express.Router();
const Student= require('../models/students')

router.get('/',async (req,res) =>{

	try{
		const studentdata = await Student.find();
		res.send(studentdata);

	}

catch(e){

	console.log(e);

		}
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
router.post('/student',async (req,res) => {
	const user = new Student(req.body);
	const userdata = await user.save();
	res.send(userdata);
})


router.get('/student', async (req,res) =>{
	try{
		const studentdata = await Student.find();
		res.send(studentdata);
	}
	catch(e){
		res.send(e);
	}
} )

//get single data 
router.get('/student/:id', async (req,res) =>{
	try{
		const _id=req.params.id;
		const studentdata= await Student.findById(_id);
		res.send(studentdata);
	}
	catch(e){
		res.send(e);
	}
})

router.patch('/student/:id', async (req,res) =>{
	try{
		const _id=req.params.id;
		const studentdata= await Student.findByIdAndUpdate(_id,req.body);
		res.send(studentdata);
	}
	catch(e){
		res.send(e);
	}
})

router.delete('/student/:id', async (req,res) =>{
	try{
		const _id=req.params.id;
		const deleteId= await Student.findByIdAndDelete(_id);
		res.send(studentdata);
	}
	catch(e){
		res.send(e);
	}
})




module.exports= router;
