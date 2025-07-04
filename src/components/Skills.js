import { Col, Container, Row } from "react-bootstrap"
import { CircularProgressbar } from "react-circular-progressbar"
import Carousel from "react-multi-carousel"
import 'react-circular-progressbar/dist/styles.css';
import 'react-circular-progressbar/dist/styles.css';

const Skills = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col xs={12} md={12} lg={12}>
                    <div className="skill-bx">
                    <h2>Skills</h2>
                    <p>Below are the skills that I have obtained from my education in Computer Programming</p>

                    <Carousel
                    infinite={true}
                    className="owl-carousel owl-theme skill-slider"
                    responsive={responsive}>

                        <div className="item">
                        <CircularProgressbar 
                        value={96}
                        text={`96%`}
                        className="circular-progress-bar">
                        </CircularProgressbar>
                        <h5>React</h5>
                        </div>
                    
                        <div className="item">
                        <CircularProgressbar 
                        value={80}
                        text={`80%`}
                        className="circular-progress-bar">
                        </CircularProgressbar>
                        <h5>JavaScript</h5>
                        </div>

                        <div className="item">
                        <CircularProgressbar 
                        value={100}
                        text={`100%`}
                        className="circular-progress-bar">
                        </CircularProgressbar>
                        <h5>HTML</h5>
                        </div>

                        <div className="item">
                        <CircularProgressbar 
                        value={100}
                        text={`100%`}
                        className="circular-progress-bar">
                        </CircularProgressbar>
                        <h5>CSS</h5>
                        </div>

                        <div className="item">
                        <CircularProgressbar 
                        value={66}
                        text={`66%`}
                        className="circular-progress-bar">
                            
                        </CircularProgressbar>
                        <h5>Node JS</h5>
                        </div>

                        <div className="item">
                        <CircularProgressbar 
                        value={85}
                        text={`85%`}
                        className="circular-progress-bar">
                          
                        </CircularProgressbar>
                        <h5>TypeScript</h5>
                        </div>

                        <div className="item">
                        <CircularProgressbar 
                        value={85}
                        text={`85%`}
                        className="circular-progress-bar">
                          
                        </CircularProgressbar>
                        <h5>Git</h5>
                        </div>

                        <div className="item">
                        <CircularProgressbar 
                        value={85}
                        text={`85%`}
                        className="circular-progress-bar">
                          
                        </CircularProgressbar>
                        <h5>Figma</h5>
                        </div>
                    </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Skills