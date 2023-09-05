import React, { useState } from "react";
import { Container, Button, Row, Col, Accordion } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer>
      <Container>
        <Row className="footer-row">
          <Col xl={4} className="logo-col">
            <Col md={6} xl={12}>
              <img
                src={require("../images/Logo.png")}
                width="182"
                className="d-inline-block align-top"
                alt="Realtor logo"
              />

              <p className="blurb">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </Col>
            <Col md={4} xl={12}>
              <div className="social-links">
                <a href="javascript:void(0);">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="javascript:void(0);">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="javascript:void(0);">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="javascript:void(0);">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
              <p>&copy; 2022. All rights reserved.</p>
            </Col>
          </Col>
          <Col xl={5} className="links-col">
            <div className="d-none d-lg-flex">
              <Col className="links1">
                <a className="big">Take a tour</a>
                <a href="javascript:void(0);">Features</a>
                <a href="javascript:void(0);">Partners</a>
                <a href="javascript:void(0);">Pricing</a>
                <a href="javascript:void(0);">Product</a>
                <a href="javascript:void(0);">Support</a>
              </Col>
            </div>
            <div className="d-none d-lg-flex">
              <Col className="links2">
                <a className="big">Our Company</a>
                <a href="javascript:void(0);">About Us</a>
                <a href="javascript:void(0);">Agents</a>
                <a href="javascript:void(0);">Blog</a>
                <a href="javascript:void(0);">Media</a>
                <a href="javascript:void(0);">Contact Us</a>
              </Col>
            </div>
            <Accordion className="links1 d-lg-none">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="big">Take a tour</Accordion.Header>
                <Accordion.Body>
                  <a href="javascript:void(0);">Features</a>
                  <a href="javascript:void(0);">Partners</a>
                  <a href="javascript:void(0);">Pricing</a>
                  <a href="javascript:void(0);">Product</a>
                  <a href="javascript:void(0);">Support</a>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Accordion className="links2 d-lg-none">
              <Accordion.Item eventKey="1">
                <Accordion.Header className="big">Our Company</Accordion.Header>
                <Accordion.Body>
                  <a href="javascript:void(0);">About Us</a>
                  <a href="javascript:void(0);">Agents</a>
                  <a href="javascript:void(0);">Blog</a>
                  <a href="javascript:void(0);">Media</a>
                  <a href="javascript:void(0);">Contact Us</a>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col xl={3} className="links3 order-xl-last">
            <a className="big">Subscribe</a>
            <p>Subscribe to get latest property, blog news from us</p>
            <Row>
              <div className="email-input">
                <input placeholder="Email Address" />
                <Button>
                  <FontAwesomeIcon icon={faArrowRight} />
                </Button>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
