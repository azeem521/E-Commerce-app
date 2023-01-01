import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Cards = () => {
  return (
    <Container>
      <Row>
        <Col>
            <Container>
            <Row>
        <Col>
        <Card.Title style={{ textAlign:'center' }}  className='mb-3'>Album 1</Card.Title>
        <Card  style={{ width: '18rem',border:'none' }}>
        <Card.Img variant="top" src="https://prasadyash2411.github.io/ecom-website/img/Album%204.png" />
        <Card.Body style={{display:'flex', justifyContent:'space-between'}}>
        <Card.Title>
        $12.99
        </Card.Title>
        <Button variant="primary">ADD TO CART</Button>
        </Card.Body>
        </Card>
        </Col>
      </Row>
            </Container>
        </Col>
        <Col>
        <Container>
            <Row>
        <Col>
        <Card.Title style={{ textAlign:'center' }}  className='mb-3'>Album 2</Card.Title>
        <Card  style={{ width: '18rem',border:'none' }}>
        <Card.Img variant="top" src="https://prasadyash2411.github.io/ecom-website/img/Album%202.png" />
        <Card.Body style={{display:'flex', justifyContent:'space-between'}}>
        <Card.Title>
        $14.99
        </Card.Title>
        <Button variant="primary">ADD TO CART</Button>
        </Card.Body>
        </Card>
        </Col>
      </Row>
            </Container>
            </Col>
      </Row>
      <Row>
        <Col>
        <Container>
            <Row>
        <Col>
        <Card.Title style={{ textAlign:'center' }}  className='mb-3'>Album 3</Card.Title>
        <Card  style={{ width: '18rem',border:'none' }}>
        <Card.Img variant="top" src="https://prasadyash2411.github.io/ecom-website/img/Album%203.png" />
        <Card.Body style={{display:'flex', justifyContent:'space-between'}}>
        <Card.Title>
        $9.99
        </Card.Title>
        <Button variant="primary">ADD TO CART</Button>
        </Card.Body>
        </Card>
        </Col>
      </Row>
            </Container>
        </Col>
        <Col>
        <Container>
            <Row>
        <Col>
        <Card.Title style={{ textAlign:'center' }}  className='mb-3'>Album 4</Card.Title>
        <Card  style={{ width: '18rem',border:'none' }}>
        <Card.Img variant="top" src="https://prasadyash2411.github.io/ecom-website/img/Album%204.png" />
        <Card.Body style={{display:'flex', justifyContent:'space-between'}}>
        <Card.Title>
        $19.99
        </Card.Title>
        <Button variant="primary">ADD TO CART</Button>
        </Card.Body>
        </Card>
        </Col>
      </Row>
            </Container>
        </Col>
        
      </Row>
      <Row>
        <Col>
        <Container>
            <Row>
        <Col>
        <Card.Title style={{ textAlign:'center' }}  className='mb-3'>Album 5</Card.Title>
        <Card  style={{ width: '18rem',border:'none' }}>
        <Card.Img variant="top" src="https://prasadyash2411.github.io/ecom-website/img/Album%202.png" />
        <Card.Body style={{display:'flex', justifyContent:'space-between'}}>
        <Card.Title>
        $18.99
        </Card.Title>
        <Button variant="primary">ADD TO CART</Button>
        </Card.Body>
        </Card>
        </Col>
      </Row>
            </Container>
        </Col>
        <Col>
        <Container>
            <Row>
        <Col>
        <Card.Title style={{ textAlign:'center' }}  className='mb-3'>Album 6</Card.Title>
        <Card  style={{ width: '18rem',border:'none' }}>
        <Card.Img variant="top" src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png" />
        <Card.Body style={{display:'flex', justifyContent:'space-between'}}>
        <Card.Title>
        $17.99
        </Card.Title>
        <Button variant="primary">ADD TO CART</Button>
        </Card.Body>
        </Card>
        </Col>
      </Row>
            </Container>
        </Col>
       
      </Row>
    </Container>
  )
}

export default Cards