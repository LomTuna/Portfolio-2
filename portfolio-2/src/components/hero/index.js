import Image from 'react-bootstrap/Image';
import React from 'react';
import Headshot from '/Users/tomluna/Desktop/Portfolio2/Portfolio-2/portfolio-2/src/assets/looking-down.jpeg';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';


function Hero() {

  return(

    <div className='Hero'>
      <div>
        <div className='image'>
            <div>
              <Container className='justify-content-center'>
              <Row>
                <Col md={6}>
                <h1 style={{fontFamily: 'Racing Sans One'}}>Full Stack Developer</h1>
                </Col>
                <Col md={6}>
                <img style={{height:'400px', width: 'auto'}}alt='Professional headshot of Tom Luna' src={Headshot}/>
                </Col>
              </Row>
              </Container>
            </div>

        </div> 
      </div>
        
    </div>
  );
}

export default Hero; 