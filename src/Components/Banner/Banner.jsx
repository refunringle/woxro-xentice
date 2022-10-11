import React from 'react';
import { Container, Card, Button, Form } from "react-bootstrap";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner">
      <Container className="m-auto" >
        <Card className='mt-5 card-style'>
          <Card.Body>
            <Card.Title as="h3" className="fw-bold">              
            Choose from 25,00+ Spaces for your Business
            </Card.Title>
            <Card.Text className="mt-3">
              Get inspired and find your perfect place
            </Card.Text>
            <form className="mt-3">
              <Form.Select className="mt-3">
                <option>Looking for</option>
                <option>Commercial Shop</option>
                <option>Commercial Office</option>
                <option>Commercial Land</option>
                <option>Commercial Building</option>
                <option>Industrial Land</option>
                <option>Co-working Space</option>
                <option>Private Office</option>
                <option>Meeting Room</option>
              </Form.Select>
              <Form.Select className="mt-3">
                <option>Select City</option>
                <option>Delhi</option>
                <option>Noida</option>
                <option>Hydrabad</option>
                <option>Mumbai</option>
                <option>Cochin</option>
                <option>Bangalore</option>
                <option>Chennai</option>
              </Form.Select>
            </form>

            <Button variant="primary" className="mt-2 search">
              Search
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}

export default Banner