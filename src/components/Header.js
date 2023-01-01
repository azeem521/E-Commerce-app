import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

const Header = () => {
  return (
    <Container fluid className=' bg-secondary bg-gradient' style={{height:200}}>
      <Row className="text-center">
        <Col style={{fontSize:100, fontWeight:'bold'}}>The Generics</Col>
      </Row>
    </Container>
  )
}

export default Header