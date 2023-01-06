import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function Navi() {
  return (
    <div>
      <div className='entireNav'>
       <Navbar className='Navi' expand="lg" variant='dark'>
       <Container>
      <Row>
        <Col sm={8}>
        <h1 className='title' style={{fontFamily: 'Be Vietnam Pro'}} >Tom Luna</h1>
        </Col>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">        
       
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>      
            <Nav.Link href="#link">About Me</Nav.Link>
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Projects</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
        </Navbar.Collapse>
        </Row>
      </Container>
    </Navbar>
    </div>
    </div>
  );
}

export default Navi;
