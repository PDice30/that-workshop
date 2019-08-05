import "bootstrap/dist/css/bootstrap.css";
import { Jumbotron, Button } from "reactstrap";
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";

const about = () =>
  <div>
      <Navbar color="light" light expand="md">
      <NavbarBrand href="/">Home</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="/about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/help">Help</NavLink>
        </NavItem>
      </Nav>
    </Navbar>

      <li>
        matt@headway.io
      </li>
      <li>
        tim@headway.io
      </li>
      
      hello
  </div>

export default about;