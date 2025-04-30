import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className="p-4 fw-bold">
          React-Crud-Afrizal
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
