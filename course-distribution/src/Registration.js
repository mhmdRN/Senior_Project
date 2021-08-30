import { useEffect, useState } from 'react'
import { Container, Form,Input ,Radio,Divider,Button} from 'semantic-ui-react'
import { Helmet } from 'react-helmet';
import axios from 'axios'
import React from 'react';
const REGISTRATION_INITIAL={
  Course_Code:"",
  DFile_number:"",
  Facility_year:"",
  EN_Section:false,
  FR_Section:false,
  Lab:false,
  Exercise:false,
  Course:false,
  Lab_hours:0,
  Exercise_hours:0,
  Course_hours:0,
  Section_ID:""
}

const Registration=()=>{

  const [Reg,setReg]=useState(REGISTRATION_INITIAL);
  var [Loading,setLoading]=useState(false);
  var [Crs,setCrs]=useState([]);
  var [Drs,setDrs]=useState([]);
  var [DLab,setDLab]=useState(false);
  var [DExc,setDExc]=useState(false);
  var [DCrs,setDCrs]=useState(false);
  

  useEffect(async ()=>{
    const data=await axios.get('http://localhost:4000/registration');
    const crs=data.data.courses.map((d,i)=>({
       key: d._id,
       value: d.Course_Code,
       text: d.Course_code
    }));
    const drs=data.data.doctors.map((d,i)=>({
      key: d._id,
      value: d.File_Number,
      text:  d.File_Number
   }));
    setCrs(crs);
    setDrs(drs);

   const handledisabled=()=>{
    (Reg.Course)?setDCrs(false):setDCrs(true);
    (Reg.Exercise)?setDExc(false):setDExc(true);
    (Reg.Lab)?setDLab(false):setDLab(true);
   }

   handledisabled();

  },[Reg.Course,Reg.Exercise,Reg.Lab]);

  const handleInput=(e)=>{
    const {name,value}=e.target;
    setReg(prev=>({...prev,[name]:value}));
    console.log(Reg);
  }

  const handlesubmit= ()=>{
  setLoading(true);
  axios.post('http://localhost:4000/registration',Reg)
  .then(res=>{
    setLoading(false);
  })
  .catch(err=>{
    console.log(err);
  })
  console.log("done");
  
  }

    return(
      <div>
        <Helmet>
        <title>Registration | Create</title>
      </Helmet>
      
        <Container style={{marginTop:'1.5em'}}>
            <Form>
    <Form.Group widths='equal'>
      <Form.Field value={Reg.Course_Code}  name="Course_Code" >
        <label>Course Code</label>
      
          <select onChange={handleInput} name="Course_Code" value={Reg.Course_Code}>
            {
              Crs.map((d,i)=>{
                return(
                <option value={d.value}>{d.text}</option>
                )
              })
            }
            </select>
     
      </Form.Field>
      <Form.Field value={Reg.DFile_number} >
        <label>DR. File Number</label>
        <select onChange={handleInput} name="Course_Code" value={Reg.Course_Code}>
            {
              Drs.map((d,i)=>{
                return(
                <option value={d.value}>{d.text}</option>
                )
              })
            }
            </select>
      </Form.Field>
      <Form.Field value={Reg.Facility_year}>
        <label>Facility Year</label>
        <Input 
        name="Facility_year"
        fluid
        placeholder='Year'
        onChange={handleInput}
        />
      </Form.Field>
    </Form.Group>
    <Divider section/>
    <Form.Group widths='equal'>
      <Form.Field value={Reg.EN_Section}>
        <label>EN section</label>
        <Radio 
        name="EN_Section" 
        toggle 
        onChange={handleInput}
        onClick={()=>{Reg.EN_Section=!Reg.EN_Section}}
        />
      </Form.Field>
      <Form.Field value={Reg.FR_Section}>
        <label>FR section</label>
        <Radio 
        name="FR_Section" 
        toggle 
        onChange={handleInput} 
        onClick={()=>{Reg.FR_Section=!Reg.FR_Section}}
        />
      </Form.Field>
    </Form.Group>
    <Divider section/>
    <Form.Group widths='equal'>
      <Form.Field value={Reg.Course}>
      <label>Course</label>
        <Radio 
        name="Course" 
        toggle 
        onChange={handleInput}
        onClick={()=>{Reg.Course=!Reg.Course}}
        />
      </Form.Field>
      <Form.Field value={Reg.Exercise}>
      <label>Excercise</label>
        <Radio 
        name="Exercise" 
        toggle 
        onChange={handleInput} 
        onClick={()=>{Reg.Exercise=!Reg.Exercise}}
        />
      </Form.Field>
      <Form.Field value={Reg.Lab} >
      <label>Lab</label>
        <Radio
         name="Lab"
         toggle
         onChange={handleInput} 
         onClick={()=>{Reg.Lab=!Reg.Lab}}
         />
      </Form.Field>
    </Form.Group>
    <Divider section/>
    <Form.Group widths='equal'>
      <Form.Field value={Reg.Course_hours}>
        <label>Course hours</label>
        <Input
        name="Course_hours" 
        type="Number" 
        fluid 
        placeholder='course hours'
        onChange={handleInput}
        disabled={DCrs}
        />
      </Form.Field>
      <Form.Field value={Reg.Exercise_hours}>
        <label>Exercise hours</label>
        <Input 
        name="Exercise_hours" 
        type="Number" 
        fluid 
        placeholder='exercise hours' 
        onChange={handleInput}
        disabled={DExc}
        />
      </Form.Field>
      <Form.Field value={Reg.Lab_hours}>
        <label>Lab hours</label>
        <Input
        name="Lab_hours" 
        type="Number" 
        fluid 
        placeholder='lab hours' 
        onChange={handleInput}
        disabled={DLab}
        />
      </Form.Field>
    </Form.Group>
    <Divider section/>
    <Form.Group widths='equal'>
      <Form.Field value={Reg.Section_ID}>
        <label>Section ID</label>
        <Input
        name="Section_ID" 
        fluid 
        placeholder="Section ID" 
        onChange={handleInput}
        />
      </Form.Field>
      
    </Form.Group>
      <Divider section hidden/>
      <Button 
      content="Add Registration"
      icon="add user"
      color="blue"
      floated="right"
      onClick={handlesubmit}
      loading={Loading}
    />
  </Form>
  
        </Container>
        </div>
    )
}
export default Registration;