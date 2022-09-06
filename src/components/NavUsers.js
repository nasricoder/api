import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const NavUsers = ({auth, setAuth}) => {
    return(
        <>
         <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home"> API </Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link as={Link} to='/'>Home</Nav.Link> 
            <Nav.Link as={Link} to='/users'> List Users </Nav.Link>
            <Button variant="success" onClick={()=> setAuth(true)}>Log On </Button>{' '}
            <Button variant="danger" onClick={()=> setAuth(true)} id='button'>Danger</Button>{' '}
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}
export default NavUsers