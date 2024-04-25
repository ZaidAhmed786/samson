import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Sales = () => {
  return (
    <div className='mb-4'>
      <Container style={{marginTop: '120px '}}>
        <h2 className='text-center font-weight-bold text-sales mb-4'>Recent Sales</h2>
        <Row>
          <Col md={6}>
            <Card>
              <Card.Img variant="top" src="/sales1.jpg" style={{ maxHeight: '280px' }}/>
              <Card.Body> 
                <Card.Text>
                <Row>
                  <Col className='font-weight-bold'>$410,000</Col>
                  <Col>3</Col>
                  <Col>2</Col>
                </Row>
                <Row>
                  <Col className='font-weight-bold'>HYATTSVILLE, MD</Col>
                  <Col>beds</Col>
                  <Col>baths</Col>
                </Row>
              </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card >
              <Card.Img variant="top" src="/sales2.jpg"  style={{ maxHeight: '280px' }}/>
              <Card.Body> 
                <Card.Text>
                <Row>
                  <Col className='font-weight-bold'>$410,000</Col>
                  <Col>3</Col>
                  <Col>2</Col>
                </Row>
                <Row>
                  <Col className='font-weight-bold'>HYATTSVILLE, MD</Col>
                  <Col>beds</Col>
                  <Col>baths</Col>
                </Row>
              </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className='pt-4'>
          <Col md={6}>
            <Card>
              <Card.Img variant="top" src="/sales4.jpg"  style={{ maxHeight: '280px' }}/>
              <Card.Body> 
                <Card.Text>
                <Row>
                  <Col className='font-weight-bold'>$410,000</Col>
                  <Col>3</Col>
                  <Col>2</Col>
                </Row>
                <Row>
                  <Col className='font-weight-bold'>HYATTSVILLE, MD</Col>
                  <Col>beds</Col>
                  <Col>baths</Col>
                </Row>
              </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Img variant="top" src="/sales3.jpg"  style={{ maxHeight: '280px' }}/>
              <Card.Body> 
                <Card.Text>
                <Row>
                  <Col className='font-weight-bold'>$410,000</Col>
                  <Col>3</Col>
                  <Col>2</Col>
                </Row>
                <Row>
                  <Col className='font-weight-bold'>HYATTSVILLE, MD</Col>
                  <Col>beds</Col>
                  <Col>baths</Col>
                </Row>
              </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Sales;
