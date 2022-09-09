import './social.css'
import githubIcon from '../../assets/github-icon.png';
import igIcon from '../../assets/instagram-icon.png';
import linkedinIcon from '../../assets/linkedin-icon.png';
import { Container, Row, Col } from "react-bootstrap";

export default function Social(){


    return(
        <Container className='social-wrapper'>
            <Row className='social-icon-wrapper'>
                <Col className='social-icon'>
                    <a href='https://github.com/luminerrr' ><img src={githubIcon} alt='github' /></a>
                </Col>
                <Col className='social-icon'>
                    <a href='https://www.instagram.com/kevinezra_/'><img src={igIcon} alt='instagram' /></a>
                </Col>
                <Col className='social-icon'>
                    <a href='https://www.linkedin.com/in/kevinezra/'><img src={linkedinIcon} alt='linkedin' /></a>
                </Col>
            </Row>
        </Container>
    )
    

}