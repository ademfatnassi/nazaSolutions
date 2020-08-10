import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import Slider from "react-slick";
// import { Telephone } from "react-bootstrap-icons";
import { FaFacebookF, FaLinkedinIn, FaPhoneSquareAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { MdMessage } from "react-icons/md";
import coca_cola from "../../assets/images/coca-cola.svg";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "./Contact.css";
import { sendMail } from "../../services";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/swiper-bundle.css";

SwiperCore.use([Autoplay]);

export class Contact extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      message: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async handleSubmit(e) {
    e.preventDefault();
    const { name, email, message } = this.state;

    try {
      let msg = await sendMail({ name, email, message });
      console.info(msg.message);
      this.setState({ name: "", email: "", message: "" });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    // const settings = {
    //   dots: false,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 3,
    //   slidesToScroll: 1,
    //   autoplay: true,
    //   className: "center",
    //   centerMode: true,
    //   centerPadding: "0px",
    //   initialSlide: 0,
    //   responsive: [
    //     {
    //       breakpoint: 992,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 1,
    //         infinite: true,
    //         dots: false,
    //       },
    //     },
    //     {
    //       breakpoint: 768,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         initialSlide: 2,
    //       },
    //     },
    //     {
    //       breakpoint: 576,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         initialSlide: 2,
    //       },
    //     },
    //   ],
    // };
    return (
      <>
        <div className="container-lg">
          <h3 className="page-section-heading text-center">Nos Partenaires</h3>
          {/* <Slider {...settings}>
            <div className="slide">
              <img src={coca_cola} alt="logo" />
            </div>
            <div className="slide">
              <img src={coca_cola} alt="logo" />
            </div>
            <div className="slide">
              <img src={coca_cola} alt="logo" />
            </div>
            <div className="slide">
              <img src={coca_cola} alt="logo" />
            </div>
            <div className="slide">
              <img src={coca_cola} alt="logo" />
            </div>
          </Slider> */}
          <Swiper
            loop={true}
            spaceBetween={1}
            slidesPerView={3}
            grabCursor={true}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide className="custom-swiper-slide">
              <img src={coca_cola} alt="logo" />
            </SwiperSlide>
            <SwiperSlide className="custom-swiper-slide">
              <img src={coca_cola} alt="logo" />
            </SwiperSlide>
            <SwiperSlide className="custom-swiper-slide">
              <img src={coca_cola} alt="logo" />
            </SwiperSlide>
            <SwiperSlide className="custom-swiper-slide">
              <img src={coca_cola} alt="logo" />
            </SwiperSlide>
          </Swiper>
        </div>
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
                <Col lg className="p-5">
                  <h2 className="contact_header text-uppercase">
                    ABONNEZ-VOUS À NOTRE NEWSLETTER.
                  </h2>
                  <h4 className="contact_link">
                    <FiMail color="#5DBFDF" size={32} className="mr-2" />
                    contact@NAZADev.com
                  </h4>
                  <h4 className="contact_link">
                    <FaPhoneSquareAlt
                      color="#5DBFDF"
                      size={32}
                      className="mr-2"
                    />
                    +216 55 222 999
                  </h4>
                </Col>
                <Col
                  lg
                  className="  bg-light rounded contactForm"
                  // style={{ marginTop: "-5em" }}
                >
                  <Form className="p-5 " onSubmit={this.handleSubmit}>
                    <h3>NAZA Dev Solutions contact form</h3>
                    <Form.Group controlId="formGroupNom">
                      <Form.Label>Votre nom: </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Votre nom..."
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                      <Form.Label>Votre adresse mail: </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Votre adresse électronique..."
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="formGroupMsg">
                      <Form.Label>Votre message: </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows="3"
                        placeholder="Votre message..."
                        name="message"
                        value={this.state.message}
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                    <Button
                      disabled={true}
                      className="right-0"
                      style={{
                        backgroundColor: "#5DBFDF",
                        borderColor: "#5DBFDF",
                      }}
                      type="submit"
                    >
                      <MdMessage size="16" />
                      &nbsp;Envoyer votre message
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
