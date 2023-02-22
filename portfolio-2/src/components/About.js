import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";


function About () {

  return (
    <div>
        <Container>
          <Row>
            <Col md={6}>
            <div className="Title">

              <h1 style={{fontFamily: 'Ramabhadra', color: '#ee1c25'}}>
                <b>Certified Full Stack Web Developer</b>
              </h1>
              </div>
              </Col>
              <p style={{fontFamily: 'Noto Sans Hebrew', fontSize: '20px', color: '#005BAB'}}>
                Completed a MERN Stack Coding bootcamp offered by EdX through the University of Texas at San Antonio
              </p>
              <Col md={6}>
              <div className="GradTextTitle">
              <h1 style={{fontFamily: 'Ramabhadra', color: '#ee1c25'}}>
                <b>What I Learned:</b>
              </h1>
              </div>
              <p style={{fontFamily: 'Noto Sans Hebrew', fontSize: '20px', color: '#005BAB'}}>
                <b>From the ground, up</b> I was taught the basics of HTML and CSS, grinding my way through single-page applications. I learned Javascript as the primary programming language. 
              </p>
            
            </Col>
            </Row>
        </Container>
      
    </div>

  )
}

export default About; 