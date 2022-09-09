import { Container, Navbar } from "react-bootstrap";
import './navbar.css';

function NavigationBar(){

    return (
        <>
            <Navbar className="header-bar">
                <Container>
                    <Navbar.Brand className="header-text">Kevin</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end" />
                    <Navbar.Brand className="header-link">About Me</Navbar.Brand>
                    <Navbar.Brand className="header-link">My Projects</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default NavigationBar;