import "./App.css";
import Appbar from "./components/Appbar";

import { Row, Col } from "reactstrap";
import Map from "./components/map";
import SimpleList from "./components/Applist";
import AppCard from "./components/Appcard";

function App() {
  return (
    <div className="App">
      <Appbar />
      <div className="restaurants">
        <Row>
          <Col xs="4">
            <SimpleList />
          </Col>
          <Col xs="4">
            <Appcard />
          </Col>
          <Col xs="4">
            <Map />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
