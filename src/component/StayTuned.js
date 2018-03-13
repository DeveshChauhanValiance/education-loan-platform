import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class StayTuned extends React.Component {
  render() {
    return (
      <Container>
        <Row className="dashboard">
          <Col>
            <h1 style={{"fontSize":"4em", "marginTop":"2em"}}>Coming Soon</h1>
            <p style={{"fontSize":"2em"}}>We're currently working on creating something fantastic.</p>
          </Col>
        </Row>
      </Container>
    );
  }
}