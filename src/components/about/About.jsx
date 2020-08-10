import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css";
import aboutImg from "../../assets/images/nazadevsolutions_logo.png";
export class About extends Component {
  render() {
    return (
      <section id="about">
        <Container>
          <h2 className="page-section-heading text-center text-uppercase mb-0">
            Qui sommes nous?
          </h2>
          <Row className="mt-2 py-5">
            <Col lg>
              <p className="about-section-item__paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus
                mauris dolor risus lacinia nisl eget ornare posuere. Adipiscing
                amet cras facilisis arcu, mollis aliquam laoreet molestie.
              </p>
            </Col>
            <Col
              lg
              className="sideImg"
              style={{ display: "grid", placeItems: "center" }}
            >
              <img alt="" src={aboutImg} width="450px" />
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default About;
