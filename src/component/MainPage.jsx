import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import RockArtistsComponent from "./RockArtistComponent";
import PopArtistsComponent from "./PopArtistComponent";
import HipHopArtistsComponent from "./HipHopArtistsComponent";

const MainPage = () => {
  return (
    <div className="col-12 col-md-9 offset-md-3 mainPage">
      <Container>
        <Row>
          <Col className="col-9 col-lg-11 mainLinks d-none d-md-flex">
            <a className="text-decoration-none" href="#">
              TRENDING
            </a>
            <a className="text-decoration-none" href="#">
              PODCAST
            </a>
            <a className="text-decoration-none" href="#">
              MOODS AND GENRES
            </a>
            <a className="text-decoration-none" href="#">
              NEW RELEASES
            </a>
            <a className="text-decoration-none" href="#">
              DISCOVER
            </a>
          </Col>
        </Row>
        <Row>
          <Col xs={10}>
            <div id="searchResults" style={{ display: "none" }}>
              <h2>Search Results</h2>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></div>
            </div>
          </Col>
        </Row>
        <Row>
          <RockArtistsComponent />
        </Row>
        <Row>
        <PopArtistsComponent/>
        </Row>
        <Row>
          <HipHopArtistsComponent/>
        </Row>
      </Container>
    </div>
  );
};

export default MainPage;
