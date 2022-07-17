import { Container, Navbar } from "react-bootstrap";
import './navbar.css';

function NavigationBar(){

    return (
        <>
            <Navbar className="header-bar">
                <Container>
                    <h2 className="header-text">Kevin</h2>
                </Container>
            </Navbar>
        </>
    )
}

export default NavigationBar;