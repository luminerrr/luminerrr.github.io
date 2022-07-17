import './mainview.css';
import { Container, Row, Col } from "react-bootstrap";
import mainPhoto from '../../assets/main_photo.png';

export default function Mainview(){

    return(
        <>
        <Container>
            <Row className='main-wrapper'>
                <Col md={6}>
                    <img src={mainPhoto} alt='kevin' className='main-photo'/>
                </Col>
                <Col md={6}>
                    <div className='description-wrapper'>
                        <h2 className='main-header'>Hey there!</h2>
                        <p className='main-paragraph'>I'm Kevin. Currently I'm a student in Institut Teknologi Sepuluh Nopember majoring in Engineering Physics. I have a big interest in Web Development.</p>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}