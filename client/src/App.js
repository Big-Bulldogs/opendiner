import "./App.css";
import Appbar from "./components/Appbar";
import Home from './pages/Home'
import OrderForm from './pages/OrderPage'
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
     <Route path='/order' component={OrderForm}></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
