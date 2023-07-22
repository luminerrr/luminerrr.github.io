import { Container, Navbar } from "react-bootstrap";
import './navbar.css';

function NavigationBar(){

    return (
        <>
            <Navbar className="header-bar">
                <Container>
                    <Navbar.Brand href="#" className="header-text">Kevin</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default NavigationBar;