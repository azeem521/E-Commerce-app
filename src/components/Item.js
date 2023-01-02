import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';

const Item = (props) => {

    const title=props.title;
    const img=props.img;
    const price=props.price


  return (
   <>
    <Card.Title style={{ textAlign:'center' }}  className='mb-3'>{title}</Card.Title>
    <Card  style={{ width: '18rem',border:'none' }}>
    <Card.Img variant="top" src={img} />
    <Card.Body style={{display:'flex', justifyContent:'space-between'}}>
    <Card.Title>
   {price}
    </Card.Title>
    <Button variant="primary">ADD TO CART</Button>
    </Card.Body>
    </Card>
    </>
    
  )
}

export default Item