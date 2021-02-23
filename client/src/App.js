import "./App.css";
import Appbar from "./components/Appbar";
import Home from './pages/Home'
import OrderForm from './pages/OrderPage'
import Reservation from './pages/Reservation'
import Login from './pages/Login'
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
        
      <Route exact path='/' component={Login}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/signup" component={SignUp}></Route>
      <Route path="/home" component={Home}></Route>
     <Route path='/order' component={OrderForm}></Route>
     <Route path='/reservation' component={Reservation}></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
