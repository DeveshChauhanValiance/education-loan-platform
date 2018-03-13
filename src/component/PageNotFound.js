import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class PageNotFound extends React.Component {
  render() {
    return (
      <Container>
        <Row className="dashboard">
          <Col>
            <h1 style={{"fontSize":"10em"}}>404</h1>
            <p style={{"fontSize":"4em"}}>Page not found</p>
          </Col>
        </Row>
      </Container>
    );
  }
}