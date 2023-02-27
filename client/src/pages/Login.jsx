import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";

const defaultValue = {
  name: "",
  email: "",
  password: "",
};
const Login = () => {
  const [user, setUser] = useState(defaultValue);

  const onValueChange = (e) => {};
  return (
    <Container>
      <Row>
        <Col md={5} className="login___bg"></Col>
        <Col
          md={7}
          className="d-flex align-items-center justify-content-center flex-diresction-column"
        >
          <Form style={{ width: "80%", minWidth: 500 }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={onValueChange}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={onValueChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
            <div className="py-4">
              <p className="text-center">
                Don't have an Account <Link to={"/signup"}>Sign Up</Link>
              </p>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
