
import React from "react";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import LinkedInLogo from "/Users/tomluna/Desktop/Portfolio2/Portfolio-2/portfolio-2/src/assets/291709_logo_linked in_social network_social_social media_icon.png";
import GitHubLogo from "/Users/tomluna/Desktop/Portfolio2/Portfolio-2/portfolio-2/src/assets/291716_github_logo_social network_social_icon.png";


function Footer () {

  return(
    <div>
      <div className="footer"></div>
      <Container>
        <Row className="align-items-baseline">
          <Col lg={4}>
            <div className="ContactMe">
            <h1 style={{fontFamily: 'Racing Sans One', color: '#EFB90A', fontSize: '50px'}} >Contact Me:</h1>
              <p style={{fontFamily: 'League Spartan', color: '#2E2E2E', fontSize: '25px'}} >lomtuna15@gmail.com</p>
              </div>
          </Col>
          <Col lg={4}>
            <div className="ThankYou">
              <p style={{fontFamily: 'League Spartan', color: 'white', fontSize: '30px'}} >Thanks for Visiting!</p>
              </div>
          </Col>
        <Col lg={4}>
        <div className="FooterIcons">
                      <a
                        href="https://www.linkedin.com/in/tom-luna-786a7b238/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={LinkedInLogo}
                          style={{ height: "50px" }}
                          alt="LinkedIn Logo"
                          href="https://www.linkedin.com/in/tom-luna/"
                        ></img>
                      </a>
                      <a
                        href="https://github.com/LomTuna"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={GitHubLogo}
                          style={{ height: "50px" }}
                          alt="GitHub Logo"
                        ></img>
                      </a>
                      
                    </div>
        </Col>
        </Row>
      </Container>
    </div>
  )

}

export default Footer;