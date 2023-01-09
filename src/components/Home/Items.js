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
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        
        },
        
        {
        
        title: 'Blue Color',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        },
        
        ];

        const even=productsArr.filter((item)=>productsArr.indexOf(item)%2===0);

        const odd=productsArr.filter((item)=>productsArr.indexOf(item)%2!==0);
        

        
  const prdList = (
    <ul>
      {even.map((e) => (
        <Item title={e.title} img={e.imageUrl} price={e.price} />
      ))}
    </ul>
  );

  const prdList2 = (
    <ul>
      {odd.map((e) => (
        <Item title={e.title} img={e.imageUrl} price={e.price} />
      ))}
    </ul>
  );


// const prdList=<ul>
//     {
//         productsArr.map((e)=>(

//                 <Item title={e.title} img={e.imageUrl} price={e.price} />
            
//         ))
//     }
// </ul>




  return (
    <Container>
      <Row>
        <Col>
            {prdList}
        </Col>
        <Col>
            {prdList2}
        </Col>
      </Row>
    </Container>
  );
};

export default Items;