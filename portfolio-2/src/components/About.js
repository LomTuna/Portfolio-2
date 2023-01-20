import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";


function About () {

  return (
    <div>
        <Container>
          <div>
          <Row>
            <Col sm={4}>
              <div className="GradTextTitle">
              <h1 style={{fontFamily: 'Anton'}}>
                Certified Full Stack Web Developer
              </h1>
              </div>
              <p style={{fontFamily: 'Anton'}}>
                Completed a MERN Stack Coding bootcamp offered by EdX through the University of Texas at San Antonio
              </p>
            </Col>
          </Row>
          </div>
        </Container>
      
    </div>

  )
}

export default About; 