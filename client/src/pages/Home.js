import React from 'react'

import { Row, Col } from "reactstrap";
import Map from "../components/Map";
import SimpleList from "../components/Applist";
import AppCard from "../components/appcard";
const Home = (props) => {
    return(
<div className="restaurants">
        <Row>
          <Col xs="4">
            <SimpleList />
          </Col>
          <Col xs="4">
            <AppCard />
          </Col>
          <Col xs="4">
            <Map />
          </Col>
        </Row>
      </div>
    )
}

export default Home