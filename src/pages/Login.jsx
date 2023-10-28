import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const handelChange = (e) => {
    const{name,value} = e.target;
    setFormData({...formData,
        [name]:value
    })
  };

  return (
    <Container>
      <h1>Login Form</h1>
      <Form onSubmit={handelSubmit}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handelChange}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handelChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
};
export default Login;
