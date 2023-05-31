import * as React from "react";
import { Navbar, Container } from "react-bootstrap";

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>My Notes App</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
