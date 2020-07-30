import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/images/nazadevsolutions_logo.png";
import "./MyNavbar.css";

export class MyNavbar extends Component {
  render() {
    return (
      <>
        <Navbar
          onLoad={myFunction}
          collapseOnSelect
          expand="lg"
          // bg="white"
          variant="light"
          className="fixed-top navbar"
        >
          <Navbar.Brand href="#home" style={{ zIndex: "1" }}>
            <img
              alt="NAZA Dev Solutions logo"
              src={logo}
              width="150"
              id="logo_img"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            style={{ zIndex: "1" }}
          />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="flex-end"
            style={{ zIndex: "1", justifyContent: "flex-end" }}
          >
            <Nav className="flex-wrap ">
              <Nav.Link className="nav-link__item" href="#acceuil">
                Acceuil
              </Nav.Link>
              <Nav.Link
                className="nav-link__item"
                eventKey={2}
                href="#presentation"
              >
                Présentation
              </Nav.Link>
              <Nav.Link
                className="nav-link__item"
                eventKey={3}
                href="#services"
              >
                Services
              </Nav.Link>
              <Nav.Link className="nav-link__item" eventKey={4} href="#contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="navbar-trigger"></div>
      </>
    );
  }
}

function myFunction() {
  const nav = document.querySelector(".navbar");
  const logo_img = document.querySelector("#logo_img");
  const navTriger = document.querySelector(".navbar-trigger");

  const navTrigerOptions = {
    rootMargin: "-50px 0px 0px",
  };

  const navTrigerObserver = new IntersectionObserver(function (enteries) {
    enteries.forEach((entery) => {
      if (!entery.isIntersecting) {
        nav.classList.add("nav-scrolled");
        logo_img.classList.add("naza-logo_site");
        logo_img.style.transition = "ease-out .5s";
      } else {
        nav.classList.remove("nav-scrolled");
        logo_img.classList.remove("naza-logo_site");
      }
    });
  }, navTrigerOptions);
  navTrigerObserver.observe(navTriger);
}

export default MyNavbar;
