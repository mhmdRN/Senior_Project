import React, { useEffect } from 'react'
import {Menu,Icon} from 'semantic-ui-react'
import {Link, useLocation} from 'react-router-dom'
import axios from 'axios';

const Doctors=()=>{
 const Location=useLocation();
  const isactive=(url)=>{
    return url===Location.pathname;
  }
  useEffect(()=>{
    axios.get('http://localhost:4000')
    .then((res)=>{
      console.log(res)
    })
    .catch(err=>{
      console.log(err)
    })
  })
    return(
      <div>
        
      <Menu pointing secondary >
        <Link to='/'>
      <Menu.Item
        name='Account'
        active={isactive('/')}
        
      >
      <Icon size="large" name="user"/>
      Account
      </Menu.Item>
      </Link>
      <Link to='/courses'>
      <Menu.Item
        name='Courses'
        active={isactive('/courses')}
       
      >
         <Icon size="large" name="book"/>
      Courses
        </Menu.Item>

      </Link>
      <Link to='/mail'>
      <Menu.Item
        name='Mails'
        active={isactive('/mail')}
        
      >
         <Icon size="large" name="mail"/>
      Mail
        </Menu.Item>
      </Link>
     
      <Menu.Menu position='right'>
      <Link to="/logout">
        <Menu.Item
          name='logout'
          active={isactive('/logout')}
   
        />
        </Link>
      </Menu.Menu>
     
    </Menu>

   
    </div>
    )
}
export default Doctors;