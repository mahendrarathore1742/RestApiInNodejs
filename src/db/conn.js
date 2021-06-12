const mongoose=require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/student",{ useNewUrlParser: true,useUnifiedTopology: true })
.then(() =>{
	console.log("connections done");
})
.catch((e) =>{
	console.log('connection error');
})