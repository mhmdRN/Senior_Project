import 'semantic-ui-css/semantic.min.css'
import {Switch,BrowserRouter,Route} from 'react-router-dom'
import Doctor from './Doctor'
import Course from './Course';
import Navbar from './Admin-Components/Navbar';
import Registration from './Registration';
import Signin from './Signin'
import React from 'react';
function App() {
  return (
   <BrowserRouter>
    <Navbar />
   <Switch>
   <Route path='/signin' component={Signin} />
   <Route exact path='/' component={Doctor} />
   <Route path='/courses' component={Course} />
   <Route path='/registration' component={Registration} />
     
   </Switch>
   </ BrowserRouter>
  );
}

export default App;
