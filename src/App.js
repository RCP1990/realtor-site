import "./App.css";
import React, { Component } from "react";
import {
  Button,
  Tab,
  Col,
  Container,
  Nav,
  Dropdown,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Hero3 from "./components/hero3";
import Hero2 from "./components/hero2";
import { faSearch, faLocationDot } from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <div id="hero1">
          <Container className="">
            <div className="hero-text">
              <h1 className="mb-3">Easy way to find a perfect property</h1>
              <h4 className="mr-3">
                We provide a complete service for the sale, purchase or rental
                of real estate.
              </h4>
            </div>

            <Tab.Container defaultActiveKey="rent">
              <Col md={5} lg={3}>
                <Nav variant="pills" justify className="row">
                  <Nav.Item>
                    <Nav.Link eventKey="rent">RENT</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="buy">BUY</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="sell">SELL</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col xl={10} sm={12} className="d-none d-md-flex">
                <Tab.Content>
                  <Tab.Pane eventKey="rent">
                    <div>
                      <Col className="cell">
                        <div className="flex-row d-flex">Location</div>
                        <Button className="select-city">
                          Select <span className="d-none d-lg-block">Your</span>{" "}
                          City{" "}
                          <span className="d-none d-lg-block">
                            <FontAwesomeIcon icon={faLocationDot} />
                          </span>
                        </Button>
                      </Col>
                      <Col className="cell">
                        <div className="flex-row d-flex">Property Type</div>
                        <Dropdown>
                          <Dropdown.Toggle id="dropdown-basic">
                            Choose Property Type
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                              Action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              Another action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              Something else
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </Col>
                      <Col className="cell">
                        <div className="flex-row d-flex justify-content-between align-items-center">
                          <Col sm={10}>
                            <div className="flex-row d-flex">Price Range</div>
                            <Dropdown>
                              <Dropdown.Toggle id="dropdown-basic">
                                Choose Price Range
                              </Dropdown.Toggle>

                              <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">
                                  Action
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">
                                  Another action
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-3">
                                  Something else
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </Col>
                          <Col sm={1}>
                            <Button className="search">
                              <FontAwesomeIcon icon={faSearch} />
                            </Button>
                          </Col>
                        </div>
                      </Col>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="buy">
                    This is for the buy nav tab
                  </Tab.Pane>
                  <Tab.Pane eventKey="sell">
                    I guess this is for the third nav tab
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Tab.Container>
          </Container>
        </div>

        <Hero2 />

        <Hero3 />

        <div id="hero4">
          <Container>
            <div className="hero-text">
              <h1>Find your best Real Estate</h1>
              <h4>
                we provide a complete service for the sale, purchase or rental
                of real estate.
              </h4>
              <Button>CONTACT US</Button>
            </div>
          </Container>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
