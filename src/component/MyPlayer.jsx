import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  GrChapterPrevious,
  GrChapterNext,
  GrPlayFill,
  GrPowerCycle,
} from "react-icons/gr";
import { LuShuffle } from "react-icons/lu";

const MyPlayer = () => {
  return (
    <Container className="container-fluid fixed-bottom bg-container pt-1">
      <Container>
        <Row>
          <Col className="offset-2 d-flex justify-content-center flex-column align-items-center">
            <Row >
              <Col >
                <Row>
                  <Col className="text-center pt-3">
                    <LuShuffle className="text-white" />
                  </Col>
                  <Col className="text-center pt-3">
                    <GrChapterPrevious className="text-white" />
                  </Col>

                  <Col className="text-center pt-3">
                    <GrPlayFill className="text-white" />
                  </Col>
                  <Col className="text-center pt-3">
                    <GrChapterNext className="text-white" />
                  </Col>

                  <Col className="text-center pt-3">
                    <GrPowerCycle className="text-white" />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="justify-content-center playBar py-3 w-100 mx-5">
              <Col className="col-8 col-md-6">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default MyPlayer;
