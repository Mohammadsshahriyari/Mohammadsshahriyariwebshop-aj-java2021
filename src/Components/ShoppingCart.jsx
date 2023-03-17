import React from "react";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const ShoppingCart = (cartItems) => {
    const navigate = useNavigate();
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    if (isEmpty) return (<div><NavBar />
        <h1 className="py-4 container content-block">Your cart is Empty</h1></div>)
    return (
        <div><NavBar />
            <section className="py-4 container content-block">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <h5>Cart Products: {totalUniqueItems} total Items: {totalItems}</h5>
                        <table className="table table-light table-hover m-0">
                            <tbody>
                                {items.map((item, index) => {
                                    return (<tr key={index}>
                                        <td>
                                            <img src={item.img} style={{ height: "6rem" }} />
                                        </td>
                                        <td>
                                            {item.heading}
                                        </td>
                                        <td>{item.price}</td>
                                        <td>Quantity ({item.quantity})</td>
                                        <td>
                                            <button className="btn btn-info  ms-2"
                                                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                            <button className="btn btn-info nav-margin ms-2"
                                                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                            <button className="btn btn-danger nav-margin ms-2" onClick={() => removeItem(item.id)}>Remove Item</button>

                                        </td>
                                    </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-auto ms-auto">
                        <h2>Total Price: ${cartTotal}</h2>
                    </div>
                    <button className="btn btn-danger m-2" onClick={() => emptyCart()}>Clear Cart</button>
                    <button className="btn btn-info m-2" onClick={() => {
                        navigate("/");
                        emptyCart();
                        alert("Your order has been placed successfully! Thank you!"
                        )
                    }}>Pay Now</button>
                </div>
            </section>
        </div>
    )
}

export default ShoppingCart;