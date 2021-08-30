import React, { useEffect, useState } from 'react'
import {  Button,Form,Input} from 'semantic-ui-react'

import axios from 'axios';
import { Helmet } from 'react-helmet';
const CREATE_DOCTOR={
  
  Fname:'',
  Email:'',
  phone_Number:'',
  File_Number:0,
  Lname:'',
  Mname:'',
  Rank:'',
  Contract_Type:''
  
}
const Doctors=()=>{
  
  const [create_doc,set_create_doc]=useState(CREATE_DOCTOR);
  
 
  
  useEffect(()=>{
    axios.get('http://localhost:4000')
    .then((res)=>{
      console.log(res)
    })
    .catch(err=>{
      console.log(err)
    })
  })
  const handleInput=(e)=>{
    const {name,value}=e.target;
    console.log(e);
    set_create_doc(prev=>({...prev,[name]:value}));//spread operator
  }
  const handleSubmit=()=>{
   //const Doctor={info:{fname,email,phone,fnumber,lname,mname,rank,contract_type}}
    axios.post('http://localhost:4000',create_doc)
    .then((res)=>{
      console.log(res)
    })
    .catch(err=>{
      console.log(err)
    })
  }
    return(
      <div>
        <Helmet>
        <title>Doctors | Create</title>
      </Helmet>
      
    
    <div>

    <Form  onSubmit={handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Field
          
          value={CREATE_DOCTOR.Fname}
          >
            <label>First Name</label>
            <Input    
             required       
            placeholder='First Name'
            name='Fname'
            onChange={handleInput} />
          </Form.Field>
          

          <Form.Field
            value={CREATE_DOCTOR.Mname}
           
          >
            <label> Middle Name</label>
          <Input required name="Mname" onChange={handleInput}  placeholder="Middle Name"/>
          </Form.Field>


          <Form.Field
          
            
            value={CREATE_DOCTOR.Lname}
           
          >
            <label>Last Name:</label>
            <Input
            required
            placeholder='Last Name'
            name="Lname"
            onChange={handleInput} />

          </Form.Field>
          
        </Form.Group>



        <Form.Group widths='3'>

        <Form.Field
            value={CREATE_DOCTOR.Email}
          >
             <label>Email</label>
            <Input 
            required
              type="email"
              control={Input}
              placeholder='Email'
              name="Email"
              onChange={handleInput}
              />
           
            </Form.Field>
          </Form.Group>

          <Form.Group
            
          >
          <Form.Field
            value={CREATE_DOCTOR.phone_Number}
          >
            <label>Phone Number</label>
            <Input
            required
            align="center"
            width='4'
            placeholder='Phone Number'
            name="phone_Number"
            onChange={handleInput} />
            </Form.Field>


          <Form.Field
            value={CREATE_DOCTOR.File_Number}
          >
            <label>File Number</label>
            <Input
            required
            type='number'
            name="File_Number"
            onChange={handleInput} 
            width='4'
            placeholder='File Number'/>
            </Form.Field>

          <Form.Field
            value={CREATE_DOCTOR.Rank}
          >
            <label>Rank</label>
            <Input
            required
            placeholder='Rank'
            name="Rank"
             onChange={handleInput}
            />
            </Form.Field>

          <Form.Field
            
            value={CREATE_DOCTOR.Contract_Type}
           
          >
          <label>Contract Type</label>
          <Input
            required
            control={Input}
            placeholder='Contract Type'
            name="Contract_Type"
            onChange={handleInput}/>
            </Form.Field>
          </Form.Group>
        <Form.Field>
        <Button color="red">Create</Button>
        </Form.Field>
        
      </Form>
    </div>
    </div>
    
    )
}
export default Doctors;