import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";


function About () {

  return (
    <div>
        <Container>
          <Row>
            <Col sm={4}>
              <div className="GradText">
              <h1 style={{fontFamily: 'Anton'}}>
                Graduate from edX's Full Stack Web Developement Coding Bootcamp
                With a Certificate in MERN Stack Web Developement
              </h1>
              </div>
            </Col>
            <Col sm={8}>

            </Col>
          </Row>
        </Container>
      
    </div>

  )
}

export default About; 