import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Item from "./Item";

const Items = () => {


    const productsArr = [

        {
        
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        },
        
        {
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        },
        
        {
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        },
        
        {
        
        title: 'Blue Color',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        
        }
        
        ];


       const len=productsArr.length



const prdList=<ul>
    {
        productsArr.map((e)=>(

                <Item title={e.title} img={e.imageUrl} price={e.price} />
            
        ))
    }
</ul>




  return (
    <Container>
      <Row>
        <Col>
            {prdList}
        </Col>
        <Col>
            {prdList}
        </Col>
      </Row>
    </Container>
  );
};

export default Items;
