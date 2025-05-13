import { Col, Container, Row } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import bannerImg from "../assets/img/bannerImg.png"
import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { ArrowRightCircle } from "react-bootstrap-icons";

const Banner = () => {

const [text, setText] = useState('');
const [loopNum, setLoopNum] = useState(0);
const [isDeleting, setIsDeleting] = useState(false);
const [delta, setDelta] = useState(300 - Math.random() * 100);

const toRotate = ['Font-End Developer', 'React Developer', 'Cybersecurity Specialist', 'Full-stack Developer'];
const period = 2000;

const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
    ? fullText.substring(0, text.length - 1)
    : fullText.substring(0, text.length + 1);

    setText(updatedText);
    if(isDeleting) {
        setDelta((prevDelta) => prevDelta / 2 );
    }

    if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
    } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
    }
};

useEffect(() => {
    let ticker = setInterval(() => {
        tick();
    }, delta);

    return () => {
        clearInterval(ticker);
    };
}, [text]);

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                    {
                        ({isVisible}) => (
                        <div
                        className={
                            isVisible ? 'animate__animated animate__fadeIn' : ''
                        }
                        >
                            <span className="tagline">Welcome to my Portfolio</span>
                            <h1>
                                {`I'm Natalie Scalabre`} {` `}
                                <span className="txt-rotate">
                                    <span className="wrap">{text}</span>
                                </span>
                            </h1>
                            <p>My name is Natalie Scalabre, I am a 16 year old girl from France, and I speak English, Spanish, French and Russian. I have been learning computer science for 2 years, and I know JavaScript, UIUX, CyberSecurity, React, HTML, CSS, and more. I hope you enjoy my projects.</p>
                            <HashLink to="#connect">
                                <button>
                                    Let's Connect <ArrowRightCircle size={25}/>
                                </button>
                            </HashLink>
                        </div>
                        )}
                    </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    <TrackVisibility>
                    {
                        ({isVisible}) => (
                        
                        <div
                        className={
                            isVisible ? 'animate__animated animate__zoomIn' : ''
                        }
                        >
                            <img src={bannerImg} alt="Banner Img"/>
                        </div>

                        )}
                    </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Banner