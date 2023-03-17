import React from "react";
import {
    Button,Container, Nav, Navbar, 
} from "react-bootstrap";
import { useCart } from "react-use-cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavBar(cartItems) {
    const { 
        totalItems,
        emptyCart,
    } = useCart();
    return (
        <div className="navbar-div">
            <Navbar bg="light" className="main-navbar" expand="lg">
                <Container fluid className="d-flex">
                <Nav className="nav-bar mx-4 my-lg-0">
                    <Nav.Link href="/" className="navbar-item-align"><h4>Home</h4></Nav.Link>
                    <Nav.Link href="/shop" className="navbar-item-align nav-margin" ><h4>Products</h4></Nav.Link>
                    </Nav>
                    <Nav className="nav-bar mx-4 my-lg-0">
                        <Nav.Link href="/cart"><Button variant="lightk"><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> {totalItems}</Button></Nav.Link>
                        <Nav.Link href="/"><Button variant="warning" onClick={() => emptyCart()}>Log out</Button></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;
