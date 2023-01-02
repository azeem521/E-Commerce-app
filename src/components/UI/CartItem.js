import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Card from 'react-bootstrap/Card';

const CartItem = (props) => {
  return (
    <Container style={{width:'20',height:'20'}}>
    
    <Row  style={{width:'20',height:'20'}}>
      <Col>
      <Row>
        <Col>{props.title}</Col>
        <Col>
        <Card.Img variant="top" src={props.img} />
        </Col>
      </Row>
      </Col>
      <Col>{props.qty}

      </Col>
      <Col>{props.price}</Col>
      <Col>
      <Button variant="primary" type="submit">
        REMOVE
      </Button>
      </Col>
    </Row>
  </Container>
  )
}

export default CartItem