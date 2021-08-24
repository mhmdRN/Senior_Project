import 'semantic-ui-css/semantic.min.css'
import {Switch,BrowserRouter,Route} from 'react-router-dom'
import Doctor from './Doctor'
function App() {
  return (
   <BrowserRouter>
   <Switch>
   <Route  path='/' component={Doctor} />
   </Switch>
   </BrowserRouter>
  );
}

export default App;
