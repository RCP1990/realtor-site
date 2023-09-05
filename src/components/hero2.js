import { Container, Col } from 'react-bootstrap';

function Hero2() {

return (
    <div id="hero2">
    <Container className=''>
      <div><h2>We are available in many well&#8208;known countries</h2></div>
      <div className='tile-container flex-row flex-wrap'>
        <Col>
        <div className="tile">
            <img
                  src={require('../images/liberty.png')}
                  className=""
                  alt="statue of liberty"
                />
            <div className='overlay'></div>
            <div className='text'>AMERICA</div>
          </div>
        </Col>
        <Col>
          <div className="tile">
          <img
                  src={require('../images/castle.png')}
                  className=""
                  alt="spanish church"
                />
            <div className='overlay'></div>
            <div className='text'>SPAIN</div>
          </div>
        </Col>
        <Col>
          <div className="tile">
          <img
                  src={require('../images/bigben.png')}
                  className=""
                  alt="Big Ben"
                />
            <div className='overlay'></div>
            <div className='text'>LONDON</div>
          </div>
        </Col>
        <Col>
          <div className="tile">
          <img
                  src={require('../images/eiffel.png')}
                  className=""
                  alt="Eiffel tower"
                />
            <div className='overlay'></div>
            <div className='text'>FRANCE</div>
          </div>
        </Col>
      </div>
    </Container>
    </div>
);

}

export default Hero2;