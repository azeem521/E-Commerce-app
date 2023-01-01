import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

const SeeCard = () => {
  return (
    <Container className='mt-4 mb-3' fluid="md" style={{display:'flex',alignItems:'center', justifyContent:'center'}}>
    <Row>
      <Col>
      <Button className=' bg-secondary bg-gradient' style={{color:'white'}} variant="primary">
      See Cart
      </Button>
      </Col>
    </Row>
  </Container>
  )
}

export default SeeCard

{/*  */}