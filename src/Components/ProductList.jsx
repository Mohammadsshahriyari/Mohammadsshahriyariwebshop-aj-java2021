/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import ProductCard from './ProductCard';
import Products from './Products';
import './Styles.css';

function ProductList() {
  return (
    <div>
      <Container className="product-list">
      <Row>
          { Products.map((product) => (
            <Col xl={3} lg={4} md={6} sm={12} className="product-list-row" key={product.id}>
              <ProductCard
                img={product.img}
                heading={product.heading}
                award={product.award}
                price={product.price}
                sale={product.sale}
                item={product}
                key={product.id}
              />
              </Col>
          ))}
         </Row>
      </Container>
    </div>

  );
}

export default ProductList;
