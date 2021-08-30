import React from 'react';
import {Menu,Icon} from 'semantic-ui-react'
import {Link, useLocation} from 'react-router-dom'

const Navbar=()=>{
 const Location=useLocation();
  const isactive=(url)=>{
    return url===Location.pathname;
  }
 
    return(
    
        
      <Menu pointing secondary stackable >
        <Link to='/'>
      <Menu.Item
        name='Account'
        active={isactive('/')}
        
      >
      <Icon size="large" name="user"/>
      Account
      </Menu.Item>
      </Link>
      <Link to="/courses">
        <Menu.Item
          name='Course'
          active={isactive('/courses')}
          >
            <Icon size="large" name="book"/>
            Course
        </Menu.Item>
      </Link>
      <Link to='/registration'>
      <Menu.Item
        name='Registration'
        active={isactive('/registration')}
       
      >
         <Icon size="large" name="book"/>
      Registration
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

   
    
    )
}
export default Navbar;