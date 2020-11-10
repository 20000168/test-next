// components/layout.tsx
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";

export function Layout({ children }) {
  return (
    <div>
      <>
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Articles" id="collasible-nav-dropdown">
                <NavDropdown.Item href="../articles/article1">
                  Article 1
                </NavDropdown.Item>
                <NavDropdown.Item href="../articles/article2">
                  Article 2
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/">
                  Retour Page Principale
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
      <div className="container">{children}</div>
    </div>
  );
}
