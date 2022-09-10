import { Col, Container, Row } from 'react-bootstrap'
import './projects.css'
import showcaseSecondhand from '../../assets/showcase-secondhand.png'

export default function Projects(){


    return(<>
    <Container className='project-wrapper'>
        <Row>
            <p className='project-header-text'>My Previous Projects</p>
        </Row>
        <Row>
            <Col>
                <div className='project-box justify-content-center'>
                    <img src={showcaseSecondhand} alt='secondhand e-commerce project' className='project-img'/>
                </div>
            </Col>
            <Col>
                <div className='project-box justify-content-center'>
                    <img src={showcaseSecondhand} alt='secondhand e-commerce project' className='project-img'/>
                </div>
            </Col>
        </Row>
    </Container>
    </>)
}