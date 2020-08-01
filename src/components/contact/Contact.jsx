import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Mailbox, Telephone } from "react-bootstrap-icons";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import "./Contact.css";

export class Contact extends Component {
  render() {
    return (
      <>
        <section id="contact">
          <div className="bg-dark mt-5">
            <Container className="mt-5">
              <Row>
                <Col md className="p-5">
                  <h2 className="contact_header text-uppercase">
                    Entrer en contact avec nous.
                  </h2>
                  <h4 className="contact_link">
                    <Mailbox color="#5DBFDF" size={32} className="mr-2" />
                    contact@NAZADev.com
                  </h4>
                  <h4 className="contact_link">
                    <Telephone color="#5DBFDF" size={32} className="mr-2" />
                    +216 55 222 999
                  </h4>
                </Col>
                <Col
                  md
                  className="shadow mb-3 bg-light rounded"
                  // style={{ marginTop: "-5em" }}
                >
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
                      Envoyer votre message
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        <footer>
          <Container>
            <Row>
              <Col className="p-2">
                <h4>© 2020 Tous droits réservés, NAZA Dev Solutions</h4>
              </Col>
              <Col className="text-right p-2">
                <FaFacebookF size="32" />
                <FaLinkedinIn size="32" />
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default Contact;
