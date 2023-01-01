import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

const Main = () => {
  return (
    <Container>
      <Row className="text-center">
        <Col style={{fontSize:50, fontWeight:'bold', marginTop:15}}>Music</Col>
      </Row>
    </Container>
  )
}

export default Main