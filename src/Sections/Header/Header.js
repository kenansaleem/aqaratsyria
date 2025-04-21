import "./Header.css"
// react-bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import logo from "../../images/logo/logo-b-w.png";


const Header = () => {
  return (
    <header>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary ">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={logo}
              alt="Logo"
              className="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">الرئيسية</Nav.Link>
              <Nav.Link as={Link} to="/sell">شراء</Nav.Link>
              <Nav.Link as={Link} to="/rent">ايجار</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header

// document.addEventListener("scroll", () => {
//   const numbers = document.querySelectorAll('.number');
//   numbers.forEach(number => {
//       const target = +number.getAttribute('data-target');
//       const increment = target / 100; // كلما كان الرقم أكبر، يجب زيادة القيم

//       if (window.scrollY + window.innerHeight > number.offsetTop + 50 && number.innerText < target) {
//           number.innerText = Math.min(target, Math.ceil(+number.innerText + increment));
//       }
//   });
// });  
