import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Mailbox, Telephone } from "react-bootstrap-icons";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import "./Contact.css";

export class Contact extends Component {
  render() {
    return (
      <>
        <section className="newsletter">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="content">
                  <form>
                    <h2>ABONNEZ-VOUS À NOTRE NEWSLETTER</h2>
                    <div className="input-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                      />
                      <span className="input-group-btn">
                        <button className="btn" type="submit">
                          Abonnez-vous maintenant
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--Google map--> */}

        <div
          id="map-container-google-3"
          className="z-depth-1-half map-container-3"
        >
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.3925792431196!2d10.264573315291491!3d36.85702097993677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0!2zMzbCsDUxJzI1LjMiTiAxMMKwMTYnMDAuMyJF!5e0!3m2!1sfr!2stn!4v1596384160262!5m2!1sfr!2stn"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </div>
        <section id="contact">
          <div className="bg-dark ">
            <Container className="">
              <Row>
                <Col md className="p-5">
                  <h2 className="contact_header text-uppercase">
                    ABONNEZ-VOUS À NOTRE NEWSLETTER.
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
                  className="  bg-light rounded contactForm"
                  // style={{ marginTop: "-5em" }}
                >
                  <Form className="p-5 ">
                    <h3>NAZA Dev Solutions contact form</h3>
                    <Form.Group controlId="formGroupNom">
                      <Form.Label>Votre nom: </Form.Label>
                      <Form.Control type="text" placeholder="votre nom..." />
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                      <Form.Label>Votre adresse mail: </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="votre adresse électronique..."
                      />
                    </Form.Group>
                    <Form.Group controlId="formGroupMsg">
                      <Form.Label>Votre message: </Form.Label>
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
                <h5 className="copyright">
                  © 2020 Tous droits réservés, NAZA Dev Solutions
                </h5>
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
