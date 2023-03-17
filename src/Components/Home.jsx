import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Home = ({ chooseUsername }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const changeOnClick = e => {
    navigate("/shop");
  }

  return (
    <div className="login-box">
    <div className="login-form">
      <h4 className="login-title">Welcome Back!</h4>
      <Form className="form" onSubmit={changeOnClick} encType="multipart/form-data">
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Username</Form.Label>
          <Form.Control type="email" onChange={e => setUsername(e.target.value)} required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" onChange={e => setPassword(e.target.value)} required/>
        </Form.Group>
        <div className="content-justify">
        <Button className="form-btn" variant="warning" type="submit" onClick={() => chooseUsername(username)}>
        Log in
        </Button>
        </div>
      </Form>
    </div>
    </div>
  )
}

export default Home;