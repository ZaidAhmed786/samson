import React from 'react';
import { Carousel, Container, Form, FormControl, Button } from 'react-bootstrap';

const MyCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item style={{ backgroundImage: 'url("/slide4.jpg")', backgroundSize: 'cover', height: '75vh' }}>
        <Container className="d-flex align-items-center justify-content-center h-100">
          <Form className="w-50">
            <FormControl type="text" placeholder="Discover Your Dream Home" className="mr-sm-2 w-100 search-bar" />
          </Form>
        </Container>
      </Carousel.Item>
      <Carousel.Item style={{ backgroundImage: 'url("/slide5.jpg")', backgroundSize: 'cover', height: '75vh' }}>
        <Container className="d-flex align-items-center justify-content-center h-100">
          <Form className="w-50">
            <FormControl type="text" placeholder="Discover Your Dream Home" className="mr-sm-2 w-100 search-bar" />
          </Form>
        </Container>
      </Carousel.Item>
      <Carousel.Item style={{ backgroundImage: 'url("/slide6.jpg")', backgroundSize: 'cover', height: '75vh' }}>
        <Container className="d-flex align-items-center justify-content-center h-100">
          <Form className="w-50">
            <FormControl type="text" placeholder="Discover Your Dream Home" className="mr-sm-2 w-100 search-bar" /> 
          </Form>
        </Container>
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
