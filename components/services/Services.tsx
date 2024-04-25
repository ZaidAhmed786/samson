import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Services = () => {
  return (
    <Container style = {{marginTop:'100px', marginBottom:'100px'}}>
      <Row className="mt-5 mb-5">
        <Col>
          <h2 className="mb-4">Your Local Real Estate Connection</h2>
          <ul>
            <li className="mb-2">
              <h6 className="text-sales">Trusted resource for answers about the process</h6>
            </li>
            <li className="mb-2">
              <h6 className="text-sales">Innovative marketing strategies</h6>
            </li>
            <li className="mb-2">
              <h6 className="text-sales">Expertise about neighborhood features</h6>
            </li>
            <li className="mb-2">
              <h6 className="text-sales">Ability to target home searches</h6>
            </li>
            <li className="mb-2">
              <h6 className="text-sales">Strong negotiation skills</h6>
            </li>
            <li className="mb-2">
              <h6 className="text-sales">Support through the closing and beyond</h6>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Services;
