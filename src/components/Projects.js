import { Col, Container, Row } from "react-bootstrap"


const Projects = () => {

const projects = [
    {
        title: 'Ice Cream Shop',
        description: 'Development & Design',
        imgUrl: null,
        url: '#'
    },
    {
        title: '',
        description: '',
        imgUrl: null,
        url: '#'
    },
];

    return(
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col xs={12}>
                        <div>
                            <h2>Projects</h2>
                            <p>Below are the diverse projects which I have created during my two year course. There are a wide range of projects including a Restaurant Menu, an Ice Cream Shop, and much more. </p>
                        </div>

                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Projects