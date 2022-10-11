import React from "react";
import LOGO from "../../Assets/xentice-logo.png";
import { FcMenu } from "react-icons/fc";
import { TbSpeakerphone } from "react-icons/tb";
import { GrLocation } from "react-icons/gr";
import { GrLogin } from "react-icons/gr";
import { Nav, Navbar } from "react-bootstrap";
import "./Navbar.css";

const NavBar = () => {
  return (
    <div>
      <Navbar className="fixed" bg="white" expand="lg">
        <FcMenu size={45} />
        <img
          src={LOGO}
          width="10%"
          height="auto"
          className="d-inline-block align-top img-fluid"
          alt="logo"
        />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end fw-bold">
          <Nav className="ms-auto nav-link">
            <Nav.Link href="#PostAd">
              <TbSpeakerphone />
              Post Ad
            </Nav.Link>

            <Nav.Link href="#NearMe">
              <GrLocation />
              Near Me
            </Nav.Link>

            <Nav.Link href="#Login" className>
              <GrLogin />
              Login/Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
