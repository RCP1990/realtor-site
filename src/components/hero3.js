import { useState } from "react";
import { Container, Button, Col, Collapse, Card } from "react-bootstrap";
import cards from "../json/cards.json";

function Hero3() {
  const [open, setOpen] = useState(false);

  // Determine which cards to display based on the 'open' state
  const displayedCards = open ? cards : cards.slice(0, 6);

  return (
    <div id="hero3">
      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <h2>Recently Added</h2>
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            className="seeAll"
          >
            {open ? "Show less" : "See all"}
          </button>
        </div>
        <div className="d-flex flex-row flex-wrap row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-2">
          {displayedCards.map((card, index) => (
            <Col className="" key={index}>
              <Card border="primary">
                <Card.Img
                  variant="top"
                  src={require("../images/" + card.image + "")}
                />
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <div className="card-text">
                    <div>
                      {card.text.map((t1, index) => (
                        <p key={index}>{t1}</p>
                      ))}
                    </div>
                    <div className="d-flex">
                      Posted by {card.poster}{" "}
                      <Button variant="secondary">${card.price}</Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Hero3;
