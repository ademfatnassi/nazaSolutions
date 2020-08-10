import React, { Component } from "react";
import { Row, Container, Col } from "react-bootstrap";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import "./MyCarousel.css";

import appMobile from "../../assets/images/appMobile.svg";
import appWeb from "../../assets/images/appWeb.svg";
import appSEO from "../../assets/images/appSEO.svg";
import appRS from "../../assets/images/appRS.svg";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export class MyCarousel extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return (
      <section id="top">
        {/* <Carousel
          className=" pt-3"
          style={{
            height: "85vh",
            marginTop: "20vh",
          }}
        >
          {[
            {
              header: "Développement Mobile",
              description: `Nos experts mettent à votre disposition leur expertise des
              langages natifs mobiles.`,
              img: appMobile,
              imgWidth: "600px",
            },
            {
              header: "Application Web",
              description: `La programmation d'une solution Web ou d'une application
              Internet sur mesure vise à répondre à un besoin qui n'est
              pas pris en compte par un logiciel standard...`,
              img: appWeb,
              imgWidth: "600px",
            },
            {
              header: "Référencement",
              description: `Notre équipe de référenceurs vous assure un bon résultat,
              un positionnement optimal et la garantie du meilleur
              retour sur investissement...`,
              img: appSEO,
              imgWidth: "700px",
            },
            {
              header: "Réseaux sociaux",
              description: `Notre équipe dédié vous propose son expertise en matière
              des réseaux sociaux afin de répondre à vos besoins
              spécifiques...`,
              img: appRS,
              imgWidth: "500px",
            },
          ].map((item, index) => (
            <Carousel.Item key={index}>
              <Container>
                <Row>
                  <Col className=" container">
                    <Row>
                      <h1 className="carousel-item__header">{item.header}</h1>
                    </Row>
                    <Row>
                      <p className="carousel-item__paragraph">
                        {item.description}
                      </p>
                    </Row>
                  </Col>
                  <Col className=" container sideImg">
                    <img alt="" src={item.img} width={item.imgWidth} />
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>
          ))}
        </Carousel> */}
        <React.Fragment>
          <Swiper
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            spaceBetween={100}
            navigation
            // grabCursor={true}
            pagination={{ clickable: true }}
            className="pt-3"
            style={{
              height: "85vh",
              marginTop: "20vh",
            }}
          >
            {[
              {
                header: "Développement Mobile",
                description: `Nos experts mettent à votre disposition leur expertise des
              langages natifs mobiles.`,
                img: appMobile,
                imgWidth: "600px",
              },
              {
                header: "Application Web",
                description: `La programmation d'une solution Web ou d'une application
              Internet sur mesure vise à répondre à un besoin qui n'est
              pas pris en compte par un logiciel standard...`,
                img: appWeb,
                imgWidth: "600px",
              },
              {
                header: "Référencement",
                description: `Notre équipe de référenceurs vous assure un bon résultat,
              un positionnement optimal et la garantie du meilleur
              retour sur investissement...`,
                img: appSEO,
                imgWidth: "700px",
              },
              {
                header: "Réseaux sociaux",
                description: `Notre équipe dédié vous propose son expertise en matière
              des réseaux sociaux afin de répondre à vos besoins
              spécifiques...`,
                img: appRS,
                imgWidth: "500px",
              },
            ].map((item, index) => (
              <SwiperSlide key={index}>
                <Container>
                  <Row>
                    <Col className=" container">
                      <Row>
                        <h1 className="carousel-item__header">{item.header}</h1>
                      </Row>
                      <Row>
                        <p className="carousel-item__paragraph">
                          {item.description}
                        </p>
                      </Row>
                    </Col>
                    <Col className=" container sideImg">
                      <img
                        className="swiper_item--img"
                        alt=""
                        src={item.img}
                        width={item.imgWidth}
                      />
                    </Col>
                  </Row>
                </Container>
              </SwiperSlide>
            ))}
          </Swiper>
        </React.Fragment>
      </section>
    );
  }
}

export default MyCarousel;
