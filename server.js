const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors=require("cors")
const dburl= "mongodb+srv://mohammad:sa1234@cluster0.ofxqg.mongodb.net/course-distribution?retryWrites=true&w=majority";
mongoose.connect(dburl)
.then(res=>{
    app.listen(4000);
    console.log('connected')
})
.catch((err)=>{
    console.log(err);
})
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    const data={
        name:"mhmd"
    }
    res.json(data);
})