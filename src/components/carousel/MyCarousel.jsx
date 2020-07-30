import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "./MyCarousel.css";
import appMobile from "../../assets/images/appMobile.svg";
import appWeb from "../../assets/images/appWeb.svg";
import appSEO from "../../assets/images/appSEO.svg";
import appRS from "../../assets/images/appRS.svg";

export class MyCarousel extends Component {
  render() {
    return (
      <>
        <Carousel
          className="pt-3"
          style={{
            height: "85vh",
            marginTop: "20vh",
          }}
        >
          <Carousel.Item>
            <div className="container">
              <div className="row container-fluid">
                <div className="col container" style={{}}>
                  <div className="row">
                    <h1 className="carousel-item__header">
                      Développement Mobile
                    </h1>
                  </div>
                  <div className="row">
                    <p className="carousel-item__paragraph">
                      Nos experts mettent à votre disposition leur expertise des
                      langages natifs mobiles.
                    </p>
                  </div>
                </div>
                <div className="col container sideImg">
                  <img alt="" src={appMobile} width="600px" />
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="container">
              <div className="row">
                <div className="col container">
                  <div className="row">
                    <h1 className="carousel-item__header">Application Web</h1>
                  </div>
                  <div className="row">
                    <p className="carousel-item__paragraph">
                      La programmation d'une solution Web ou d'une application
                      Internet sur mesure vise à répondre à un besoin qui n'est
                      pas pris en compte par un logiciel standard...
                    </p>
                  </div>
                </div>
                <div className="col container sideImg">
                  <img alt="" src={appWeb} width="600px" />
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="container">
              <div className="row">
                <div className="col container">
                  <div className="row">
                    <h1 className="carousel-item__header">Référencement</h1>
                  </div>
                  <div className="row">
                    <p className="carousel-item__paragraph">
                      Notre équipe de référenceurs vous assure un bon résultat,
                      un positionnement optimal et la garantie du meilleur
                      retour sur investissement...
                    </p>
                  </div>
                </div>
                <div className="col container sideImg">
                  <img alt="" src={appSEO} width="700px" />
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="container">
              <div className="row">
                <div className="col container">
                  <div className="row">
                    <h1 className="carousel-item__header">Réseaux sociaux</h1>
                  </div>
                  <div className="row">
                    <p className="carousel-item__paragraph">
                      Notre équipe dédié vous propose son expertise en matière
                      des réseaux sociaux afin de répondre à vos besoins
                      spécifiques...
                    </p>
                  </div>
                </div>
                <div className="col container sideImg">
                  <img alt="" src={appRS} width="500px" />
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}

export default MyCarousel;
