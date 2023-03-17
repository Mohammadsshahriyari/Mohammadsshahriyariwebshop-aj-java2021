import React from "react";
import ProductList from "./ProductList";
import NavBar from "./NavBar";

const ShopPage = (props) => {
  return (
    <div>
      <NavBar />
      <div className="content-block">
        <h3 className="text-center">Welcome, {props.username}</h3>
        <ProductList />
      </div>
    </div>
  )
}

export default ShopPage;