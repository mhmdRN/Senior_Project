const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors=require("cors");
const Doctor=require("./Modules/Doctors");
const Course=require("./Modules/Courses");
const Registration=require('./Modules/Registrations')

const dburl= "mongodb+srv://admin:sa1234@cluster0.wksmr.mongodb.net/course-distribution?retryWrites=true&w=majority";
mongoose.connect(dburl,{useNewUrlParser:true,useUnifiedTopology:true})
.then(res=>{
    app.listen(4000);
    console.log('connected')
    
})
.catch((err)=>{
    console.log(err);
})

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));

app.get('/registration',async (req,res)=>{
    const courses=await Course.find();
    const doctors=await Doctor.find();
    res.json({courses,doctors});
 })

app.post('/',(req,res)=>{
    
    const {Fname,Email,phone_Number,File_Number,Lname,Mname,Rank,Contract_Type}=req.body
    const data=new Doctor({
    Fname,
    Email,
    phone_Number,
    File_Number,
    Lname,
    Mname,
    Rank,
    Contract_Type
    })
    console.log(data)
    data.save()
    .then(res=>{
        console.log("saved");
    })
    .catch(err=>{
        console.log(err)
    })
    console.log(req.body)
})
app.post('/course',(req,res)=>{
    const {Course_code,course_name,Total_Hours,Description,credits,available,Semester_Nb,Course_Type,Course_hours,Lab_hours,Exercise_hours}=req.body;
    const data=new Course({
        Course_code,
      course_name,
      Total_Hours,
      Description,
      credits,
      available,
      Semester_Nb,
      Course_Type,
      Course_hours,
      Lab_hours,
      Exercise_hours
    })
    console.log(data);
    data.save().then(res=>console.log("saved")).catch(err=>console.log(err));
})
app.post('/registration',async(req,res)=>{
    console.log(req.body)
    const {Course_Code,DFile_number,Facility_year,EN_Section,FR_Section,Lab,Exercise,Course,Lab_hours,Exercise_hours,Course_hours,Section_ID}=req.body
    const doc=new Registration({
        Course_Code,
        DFile_number,
        Facility_year,
        EN_Section,
        FR_Section,
        Lab,
        Exercise,
        Course,
        Lab_hours,
        Exercise_hours,
        Course_hours,
        Section_ID
    });
    console.log(doc)
    doc.save()
    .then(()=>{
        console.log("doc saved")
    })
    .catch(err=>{
        console.log(err)
    })  
})