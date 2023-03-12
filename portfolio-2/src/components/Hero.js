import Image from "react-bootstrap/Image";
import React from "react";
import Headshot from "/Users/tomluna/Desktop/Portfolio2/Portfolio-2/portfolio-2/src/assets/looking-down.jpeg";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import Project1 from '../assets/whatcha-drinking.jpeg';
import Project2 from '../assets/Pathfinder.png'

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
                    projects <a href="/projects">here!</a>
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
          <div className="About">
        <Container>
          <Row xl={12}>
            <Col lg={4}>
              <div className="aboutCert">
              <h1 style={{fontFamily: 'Ramabhadra', color: '#D6D4D2', fontSize: '30px'}}>
                <b>Certified Full Stack Web Developer</b>
              </h1>
              <p style={{fontFamily: 'Noto Sans Hebrew', fontSize: '20px', color: '#EFB90A'}}>
                Educated in MERN Fullstack Web Development, I enjoy the ability to create web applications from both sides (Front-end and Back-end).
                </p>
                <hr style={{color: '#EFB90A'}}/>
                <p style={{fontFamily: 'Noto Sans Hebrew', fontSize: '20px', color: '#EFB90A'}}>
                 I'm obsessed with visual manipulation, and creating a story with a product.
              </p>
              </div>
              </Col>
              <Col lg={4}></Col>
              <Col lg={4}>
              <h1 style={{fontFamily: 'Ramabhadra', color: '#D6D4D2', fontSize: '50px'}}>
                <b>Experience</b>
              </h1>
              
              <p className="expList" style={{fontFamily: 'Noto Sans Hebrew', fontSize: '20px', color: '#EFB90A'}}>
                <ul>MongoDB</ul>
                <ul>Express JS</ul>
                <ul>REACT</ul>
                <ul>MySQL</ul>
                <ul>GraphQL</ul>
                <ul>Vue.JS</ul>
                
              </p>
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
