import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Navi() {
  return (
    <div className="entireNav">
      <div>
        <Navbar className="Navi" expand="lg" variant="light">
          <Container className="justify-content-end">
            <h1 className="title" style={{ fontFamily: "Be Vietnam Pro" }}>
              <b>
              Tom Luna
              </b>
            </h1>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Row>
                <Nav
                  style={{ fontFamily: "Noto Sans Hebrew" }}
                  className="start"  
                >
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">About</Nav.Link>
                  <NavDropdown title="Projects" id="basic-nav-dropdown">
                    <NavDropdown.Item
                      style={{ fontFamily: "Cutive Mono" }}
                      href="#action/3.2"
                    >
                      Watcha Drinkin?
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      style={{ fontFamily: "Lobster" }}
                      href="#action/3.3"
                    >
                      Pathfinder
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Row>
          </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default Navi;
