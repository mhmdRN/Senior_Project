import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import {Checkbox,  Button,Form,Input} from 'semantic-ui-react'
import axios from 'axios'
const CREATE_COURSE={
    Course_code:'',
      course_name:'',
      Total_Hours:0,
      Description:'',
      credits:0,
      available:false,
      Semester_Nb:'',
      Course_Type:'',
      Course_hours:0,
      Lab_hours:0,
      Exercise_hours:0
}
const Courses = () => {
    const [create_course,set_create_course]=useState(CREATE_COURSE);
    const handleInput=(e)=>{
        const{name,value}=e.target;
       
        set_create_course(prev=>({...prev,[name]:value}));
        console.log(create_course);
    }
    const handleSubmit=async ()=>{
        await axios.post('http://localhost:4000/course',create_course);

    }
    
    return (  
        <div >
        <Helmet>
        <title>Courses | Create</title>
        </Helmet>
        
        <Form  method='POST' onSubmit={handleSubmit} >
            <Form.Group widths='equal'>
              <Form.Field
              value={CREATE_COURSE.Course_code}
              >
                <label>Course Code</label>
                <Input   
                required         
                placeholder='Course Code'
                name='Course_code'
                onChange={handleInput} />
              </Form.Field>
              <Form.Field
                value={CREATE_COURSE.course_name}
                >
                <label> Course Name</label>
              <Input required name="course_name" onChange={handleInput}  placeholder="Course Name"/>
              </Form.Field>
              <Form.Field
                value={CREATE_COURSE.Total_Hours}
              >
                <label>Total Hours</label>
                <Input
                required
                type='number'
                placeholder='Total Hours'
                name="Total_Hours"
                onChange={handleInput} />
              </Form.Field>
              <Form.Field
                value={CREATE_COURSE.Description}
              >
                 <label>Description</label>
                <Input 
                  required
                  placeholder='Description'
                  name="Description"
                  onChange={handleInput}
                  />
               
                </Form.Field>
            </Form.Group>
    
            
            <Form.Group widths='3' >
                <Form.Field
                value={CREATE_COURSE.available}>
                <Checkbox label='Available' name='available' checked={create_course.available} onChange={handleInput} onClick={()=>create_course.available=!create_course.available}/>
                </Form.Field>
              </Form.Group >
              <div className="create">
              <Form.Group >
              <Form.Field 
                
                value={CREATE_COURSE.credits}
              >
                <label>Credits</label>
                
                <input 
                name="credits"
                required 
                type="number" 
                min="0" max="30" 
                placeholder="0"
                onChange={handleInput} />
                
                
                </Form.Field>
    
              <Form.Field 
                value={CREATE_COURSE.Semester_Nb}
              >
                <label>Semester Number</label>
               

                <select name="Semester_Nb" value={create_course.Semester_Nb} onChange={handleInput}>
                  <option value="S1" >S1</option>
                  <option value="S2" >S2</option>
                  <option value="S3" >S3</option>
                  <option value="S4" >S4</option>
                  <option value="S5" >S5</option>
                  <option value="S6" >S6</option>
                  <option value="S7" >S7</option>
                  <option value="S8" >S8</option>
                  </select>
                </Form.Field>
    
              <Form.Field
                value={CREATE_COURSE.Course_Type}
                name="Course_Type"
              >
              <label>Course Type</label>   
          <select onChange={handleInput} name="Course_Type" value={create_course.Course_Type}>
                <option value="Obligatory">Obligatory</option>
                <option value="Elective">Elective</option>
          </select>
              
                </Form.Field>
              </Form.Group>
              </div>
              <Form.Group>
              <Form.Field
                value={CREATE_COURSE.Course_hours}
              >
              <label>Course Hours</label>
              <Input
              required
              type='number'
                placeholder='Course Hours'
                name="Course_hours"
                onChange={handleInput}/>
                </Form.Field>
                <Form.Field
                value={CREATE_COURSE.Lab_hours}
              >
              <label>Lab Hours</label>
              <Input
              required
              type='number'
                placeholder='Lab Hours'
                name="Lab_hours"
                onChange={handleInput}/>
                </Form.Field>
                <Form.Field
                value={CREATE_COURSE.Exercise_hours}
              >
              <label>Exercise Hours</label>
              <Input
              required
                type='number'
                placeholder='Exercise Hours'
                name="Exercise_hours"
                onChange={handleInput}/>
                </Form.Field>
                </Form.Group>
            <Form.Field>
             <Button color="red">Create</Button>
            </Form.Field>
            
          </Form>
          
        </div>
        
    )
}
 
export default Courses;