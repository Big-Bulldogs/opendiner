import './App.css';
import Appbar from './components/Appbar'
import {Row, Col } from 'reactstrap';
import Map from './components/map'
function App() {
  
  return (
    <div className="App">
      <Appbar />
     <div className="restaurants">
     <Row>
        <Col xs="4">.col-3</Col>
        <Col xs="4">.col-auto - variable width content</Col>
        
        <Col xs="4">
          
            <Map/>
          
        </Col>
      </Row>
     </div>
    </div>
  );
}

export default App;
