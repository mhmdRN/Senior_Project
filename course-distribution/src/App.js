import 'semantic-ui-css/semantic.min.css'
import {Switch,BrowserRouter,Route} from 'react-router-dom'
import Doctor from './Doctor'
import Course from './Course';
import Navbar from './Admin-Components/Navbar';
import Registration from './Registration';
function App() {
  return (
   <BrowserRouter>
    <Navbar />
   <Switch>
   <Route exact path='/' component={Doctor} />
   <Route path='/courses' component={Course} />
   <Route path='/registration' component={Registration} />
     
   </Switch>
   </ BrowserRouter>
  );
}

export default App;
