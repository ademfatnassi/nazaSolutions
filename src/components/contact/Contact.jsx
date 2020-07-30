import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export class Contact extends Component {
  render() {
    return (
      <div className="bg-dark mt-5">
        <Container>
          <Row>
            <Col md className="p-5">
              <h2 className=" text-uppercase mb-5">
                Entrer en contact avec nous.
              </h2>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
              <h4>contact@NAZADev.com</h4>
              <h4>+216 55 222 999</h4>
            </Col>
            <Col md className=" mb-3 bg-light" style={{ marginTop: "-5em" }}>
              <Form className="p-5 ">
                <h3>NAZA Dev Solutions contact form</h3>
                <Form.Group controlId="formGroupNom">
                  <Form.Label>Votre nom</Form.Label>
                  <Form.Control type="text" placeholder="votre nom..." />
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Votre adresse mail</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="votre adresse électronique..."
                  />
                </Form.Group>
                <Form.Group controlId="formGroupMsg">
                  <Form.Label>Votre message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="3"
                    placeholder="votre message..."
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Contact;
