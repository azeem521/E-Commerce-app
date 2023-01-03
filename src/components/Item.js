import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import cartContext from '../store/cart-context';

const Item = (props) => {

    const crtCtx=useContext(cartContext)

    const title=props.title;
    const img=props.img;
    const price=props.price;

    const addtoCartHandler =(e)=>{
        e.preventDefault();
        crtCtx.addItem({
          title:props.title,
          img:props.img,
          price:props.price
        })
        console.log(crtCtx);
    }


  return (
   <>
    <Card.Title style={{ textAlign:'center' }}  className='mb-3'>{title}</Card.Title>
    <Card  style={{ width: '18rem',border:'none' }}>
    <Card.Img variant="top" src={img} />
    <Card.Body style={{display:'flex', justifyContent:'space-between'}}>
    <Card.Title>
   {price}
    </Card.Title>
    <Button type='submit' onClick={addtoCartHandler}  variant="primary">ADD TO CART</Button>
    </Card.Body>
    </Card>
    </>
    
  )
}

export default Item