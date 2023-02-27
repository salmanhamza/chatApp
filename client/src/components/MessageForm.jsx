import React from "react";
import { Button, Col, Form, FormGroup, Row } from "react-bootstrap";
import "./MessageForm.css";

const MessageForm = () => {
  return (
    <>
      <div className="message-output"></div>
      <Form>
        <Row>
          <Col md={11}>
            <Form.Group>
              <Form.Control type="text" placeholder="your message..." />
            </Form.Group>
          </Col>
          <Col md={1}>
            <Button
              variant="primary"
              type="submit"
              style={{ backgroundColor: "orange", width: "100%" }}
            >
              <i className="fas fa-paper-plane"></i>
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default MessageForm;
