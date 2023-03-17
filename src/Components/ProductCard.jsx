import React, { useState } from "react";
import {
  Button, Card
} from "react-bootstrap";
import { useCart } from "react-use-cart";

function ProductCard(props) {
    const { addItem } = useCart();

    const [countNumber, setCountNumber] = useState(0);
    const handleItemNumber = (e) => {
        e.preventDefault();
        setCountNumber(countNumber + 1);
    }
    
  return (
    <div>
      <Card className="product-list-card">
        <Card.Img className="card-img" variant="top" src={props.img} />
        <Card.Body>
          <Card.Title><h5>{props.heading}</h5></Card.Title>
          <Card.Text className="award">
            {props.award}
          </Card.Text>
          <Card.Text className="price">
            ${props.price}
          </Card.Text>
          <Button className="form-btn" variant="warning" onClick={() => { addItem(props.item); handleItemNumber();} }>Add to Cart</Button>
        </Card.Body>
      </Card>
     
    </div>
  );
}

export default ProductCard;
