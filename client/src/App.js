import "./App.css";
import Appbar from "./components/Appbar";
import Home from './pages/Home'
import OrderForm from './pages/OrderPage'
import Reservation from './pages/Reservation'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
      <Appbar />
      <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route path='/signup' component={SignUp}></Route>
      <Route path='/signin' component={SignIn}></Route>
     <Route path='/order' component={OrderForm}></Route>
     <Route path='/reservation' component={Reservation}></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
