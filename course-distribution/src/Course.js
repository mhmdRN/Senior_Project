import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import {Icon,Checkbox,  Button,Form,Input} from 'semantic-ui-react'
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
        console.log(e);
        set_create_course(prev=>({...prev,[name]:value}));
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
                <Input
                required
                type='number'
                placeholder='credits'
                name="credits"
                onChange={handleInput} />
                </Form.Field>
    
              <Form.Field 
                value={CREATE_COURSE.Semester_Nb}
              >
                <label>Semester Number</label>
                <Input
                required
                placeholder='Semester Number'
                name="Semester_Nb"
                 onChange={handleInput}
                />
                </Form.Field>
    
              <Form.Field
                value={CREATE_COURSE.Course_Type}
              >
              <label>Course Type</label>
              <Input
                required
                placeholder='Course Type'
                name="Course_Type"
                onChange={handleInput}/>
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