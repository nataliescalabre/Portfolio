import { Col, Row } from "react-bootstrap"
import { HashLink } from "react-router-hash-link"


const FooterBanner = () => {
    return(
    <Col lg={12} className="d-none d-lg-block">
        <div className="footer-bx">
             <Row className="align-items-center justify-content-between">
            <Col lg={6} md={6} className="align-items-center">
            <h3>Discover Projects<br/>& Contact Me!</h3>
            </Col>
            <Col lg={6} md={6} className="text-center text-md-end">
            <HashLink to='#projects'>
                <button>
                    <span>Projects</span>
                </button>
            </HashLink>
            </Col>
        </Row>
        </div>
    </Col>
    );
};

export default FooterBanner