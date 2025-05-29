import { Col, Container, Row } from "react-bootstrap"
import logo from '../assets/img/logo.png';
import { Facebook, Github, Linkedin } from "react-bootstrap-icons";
import FooterBanner from "./FooterBanner";

const Footer = () => {

    return(
        <section className="footer">
            <Container>
                <Row className="align-items-center">
                    <FooterBanner/>
                    <Col size={12} sm={6} md={6} className="align-items-center">
                        <img src={logo} alt="logo"/>
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className='social-icon'>
                         <a href='#'>
                        <Linkedin size={20} color='white'/>
                        </a>
                        
                        <a href='#'>
                        <Facebook size={20} color='white'/>
                        </a>
                        
                        <a href='#'>
                        <Github size={20} color='white'/>
                        </a>
                        </div>
                        <p>Copyright 2025. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Footer