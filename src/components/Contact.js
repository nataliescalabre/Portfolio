import { Col, Container, Row } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import officeImg from '../assets/img/office.png'
import { use, useState } from "react";


const Contact = () => {

const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
}

const [formDetails, setFormDetails] = useState(formInitialDetails);
const [status, setStatus] = useState({});
const [buttonText, setButtonText] = useState("Send");

const onFormUpdate = (category, value) => {
    setFormDetails({
            ...formDetails,
            [category]: value
        });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Sending...');

    let response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json;charset=utf-8',
        },
        body: JSON.stringify(formDetails),
    });
    setButtonText('Send');
    setFormDetails(formInitialDetails);

    let result = await response.json();

    if (result.code === 200) {
        setStatus({success: true, message: 'Message sent successfully'});
    } else {
        setStatus({
            success: false, 
            message: 'Something went wrong, please try again later.'
        });
    };
};


    return(
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <TrackVisibility>
                        { ({isVisible}) => 
                            <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={officeImg} alt="Contact Us"/> 
                        }
                        </TrackVisibility>
                    </Col>

                    <Col size={12} md={6}>
                    <TrackVisibility>
                    { ({ isVisible }) => 
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col size={12} sm={6} className="px-1">
                                <input type="text" placeholder="First Name" onChange={(e) => onFormUpdate("firstName", e.target.value)} 
                                />
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                <input type="text" placeholder="Last Name" onChange={(e) => onFormUpdate("lastName", e.target.value)} />
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                <input type="email" placeholder="Email Address" onChange={(e) => onFormUpdate("email", e.target.value)} />
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                <input type="tel" placeholder="Phone No." onChange={(e) => onFormUpdate("phone", e.target.value)} />
                                </Col>
                                <Col size={12} className="px-1">
                                <textarea rows="6" placeholder="Message" onChange={(e) => onFormUpdate("message", e.target.value)} ></textarea>
                                <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {status.message && (
                                    <Col>
                                        <p
                                        className={
                                            status.success === false ? 'danger' : 'success'
                                        }
                                        >
                                            {status.message}
                                        </p>
                                    </Col>
                                )}
                            </Row>
                        </form>
                    </div>
                    }
                    </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact