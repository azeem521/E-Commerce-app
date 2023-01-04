import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

const Footer = () => {
  return (
    <Container fluid className=' bg-primary bg-gradient'  style={{height:100}}>
    <Row>
    <Col style={{fontSize:50, fontWeight:'bold',display:'flex',alignItems:'center', justifyContent:'center' }}>The Generics</Col>
      <Col style={{display:'flex',alignItems:'center', justifyContent:'center'}}>
      
      <Row>
        <Col>YouTube</Col>
        <Col>Facebook</Col>
        <Col>Instagram</Col>
      </Row>
      </Col>
    </Row>
    
  </Container>
  )
}

export default Footer