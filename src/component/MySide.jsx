import React from "react";
import { Navbar, Nav, InputGroup, FormControl, Button } from "react-bootstrap";
import { FaHome, FaBookOpen } from "react-icons/fa";
import { Link } from "react-router-dom";
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
          <Navbar.Brand className="ms-2">
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
                  
                  <Link className="nav-link" to="/" ><FaHome className="fs-3 mx-2" /> Home</Link>
                </li>
                <li className="m-2">
                  
                  <Link className="nav-link" to="/"><FaBookOpen className="fs-3 mx-2" /> Your Library</Link>
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
            <Link className="text-white text-decoration-none m-3" to="#">
              Cookie Policy
            </Link>
            |
            <Link className="text-white text-decoration-none m-3" to="#">
              
              Privacy
            </Link>
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default MySide;
