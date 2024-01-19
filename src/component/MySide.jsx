import React from "react";
import { Navbar, Nav, InputGroup, FormControl, Button } from "react-bootstrap";
import { FaHome, FaBookOpen } from "react-icons/fa";
import Logo from "../img/Spotify_Logo.png";

const MySide = () => {
  return (
    <div className="col-2">
      <Navbar
        expand="md"
        className="navbar-white bg-navbar fixed-left justify-content-between"
        id="sidebar"
      >
        <div className="nav-container mt-4">
          <Navbar.Brand className="ms-2" href="index.html">
            <img
              src={Logo}
              alt="Spotify_Logo"
              width="131"
              height="40"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
          <Navbar.Collapse id="navbarNavAltMarkup" className="mt-5 me-2">
            <Nav className="navbar-nav">
              <ul className="text-secondary">
                <li className="m-2">
                  
                  <a haref="index.html" ><FaHome className="fs-3 mx-2" /> Home</a>
                </li>
                <li className="m-2">
                  
                  <a haref="#"><FaBookOpen className="fs-3 mx-2" /> Your Library</a>
                </li>
                <li>
                  <InputGroup className="mt-3 p-2">
                    <FormControl
                      type="text"
                      className="form-control"
                      id="searchField"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />

                    <Button
                      variant="outline-secondary"
                      size="sm"
                      type="button"
                      id="button-addon1"
                      /* onClick={() => search()} */
                    >
                      GO
                    </Button>
                  </InputGroup>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </div>
        <div>
          <Button className="signup-btn mx-3" type="button">
            Sign Up
          </Button>
          <Button className="login-btn mx-3" type="button">
            Login
          </Button>
          <div>
            <a className="text-white text-decoration-none m-3" href="#">
              Cookie Policy
            </a>
            |
            <a className="text-white text-decoration-none m-3" href="#">
              
              Privacy
            </a>
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default MySide;
