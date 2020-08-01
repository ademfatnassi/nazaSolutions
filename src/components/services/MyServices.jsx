import React, { Component } from "react";
import Development from "../../assets/images/Development.svg";
import UX from "../../assets/images/User_Experience.svg";
import SEO from "../../assets/images/SEO.svg";
import Feedback from "../../assets/images/Feedback_Audience.svg";
import "./MyServices.css";

export class MyServices extends Component {
  render() {
    return (
      <>
        <section className="" id="services">
          <div className="container p-5">
            <h2 className="page-section-heading text-center text-uppercase mb-5">
              NOS SERVICES
            </h2>
            <div className="row">
              <div className="col-lg-3">
                <div className="item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="icon d-flex">
                    <img
                      width="120px"
                      src={Development}
                      alt=""
                      className="m-auto"
                    />
                  </div>
                  <h3 className="services_item--title">
                    Applications / Sites web
                  </h3>
                  <p className="lead mt-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                    euismod sed id scelerisque. Nullam ultrices massa, sit arcu
                    ut condimentum.
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="icon d-flex">
                    <img width="120px" src={UX} alt="" className="m-auto" />
                  </div>
                  <h3 className="services_item--title">Applications mobile</h3>
                  <p className="lead mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                    euismod sed id scelerisque. Nullam ultrices massa, sit arcu
                    ut condimentum.
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="item mx-auto mb-0 mb-lg-3">
                  <div className="icon d-flex">
                    <img width="120px" src={SEO} alt="" className="m-auto" />
                  </div>
                  <h3 className="services_item--title">Référencement</h3>
                  <p className="lead mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                    euismod sed id scelerisque. Nullam ultrices massa, sit arcu
                    ut condimentum.
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="item mx-auto mb-0 mb-lg-3">
                  <div className="icon d-flex">
                    <img
                      width="120px"
                      src={Feedback}
                      alt=""
                      className="m-auto"
                    />
                  </div>
                  <h3 className="services_item--title">Réseaux sociaux</h3>
                  <p className="lead mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                    euismod sed id scelerisque. Nullam ultrices massa, sit arcu
                    ut condimentum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default MyServices;
