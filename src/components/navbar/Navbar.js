import { Container, Navbar } from "react-bootstrap";
import './navbar.css';

function NavigationBar(){

    return (
        <>
            <Navbar className="header-bar">
                <Container>
<<<<<<< HEAD
                    <Navbar.Brand href="#" className="header-text">Kevin</Navbar.Brand>
=======
                    <Navbar.Brand className="header-text">Kevin</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end" />
                    <Navbar.Brand className="header-link">About Me</Navbar.Brand>
                    <Navbar.Brand className="header-link">My Projects</Navbar.Brand>
>>>>>>> 219292eb19f8d9162f38ffb066641d4961c8794e
                </Container>
            </Navbar>
        </>
    )
}

export default NavigationBar;