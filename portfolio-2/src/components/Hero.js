import Image from "react-bootstrap/Image";
import React from "react";
import Headshot from "/Users/tomluna/Desktop/Portfolio2/Portfolio-2/portfolio-2/src/assets/looking-down.jpeg";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import Project1 from '../assets/whatcha-drinking.jpeg';

function Hero() {
  return (
    <div className="Hero">
      <div>
        <div className="image">
          <div>
            <Container className="justify-content-space-between">
              <Row>
                <Col lg={8}>
                  <h1 style={{ fontFamily: "Racing Sans One" }}>
                    Full Stack Web Developer
                  </h1>
                  <p style={{ fontFamily: "Contrail One" }}>
                    Creating projects with eye-catching design, optimized
                    performance, and user satisfaction. Check out some of my
                    projects below!
                  </p>
                </Col>
                <Col lg={4}>
                  <div className="headshot">
                    <img
                      style={{ height: "600px", width: "auto" }}
                      alt="Professional headshot of Tom Luna"
                      src={Headshot}
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="projects">
                <Card style={{ width: "25rem", border:'none'}}>
                  <div className="projImage">
                  <Card.Img variant="top" src={Project1}/>
                  </div>
                  <Card.Body>
                    <div className='projTitle'>
                    <Card.Title style={{fontFamily: 'Lexend Deca', fontSize: '30px', color: '#000'}}>Whatcha-Drinking</Card.Title>
                    </div>
                    <div className="projDetails">
                    <Card.Text style={{fontFamily: 'League Spartan', fontSize: '20px', color: '#000'}}>
                      A web application that gives you insight on the different variations of coffee-shop beverages. It even has an options to find coffee shops near you!
                    </Card.Text>
                    </div>
                    <div className="projTechnology">
                    <Card.Text style={{fontFamily:"Cutive Mono", fontSize: "20px", color: '#00A651'}}>
                      HTML5  CSS3  JAVASCRIPT  
                    </Card.Text>
                    </div>
                    <div className="projButton">
                    <Button variant="warning" style={{background:'#005BAB', border: 'none', color: 'white'}} src=''>Live Demo</Button>
                    <Button variant="warning">Code</Button>
                    </div>
                  </Card.Body>
                </Card>
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
