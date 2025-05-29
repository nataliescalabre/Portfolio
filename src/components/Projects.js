import { Col, Container, Row } from "react-bootstrap"
import project1 from '../assets/img/myicecreamshop.png'
import project2 from '../assets/img/adminpanel.png'
import project3 from '../assets/img/moviestreamingsite.png'
import project4 from '../assets/img/todolist.png'
import project5 from '../assets/img/calulator.png'
import project6 from '../assets/img/formula1.png'
import project7 from '../assets/img/weather.png'
import project8 from '../assets/img/figma.png'
import TrackVisibility from "react-on-screen"
import ProjectCard from "./ProjectCard"



const Projects = () => {

const projects = [
    {
        title: 'Ice Cream Shop',
        description: 'Development & Design',
        imgUrl: project1,
        url: 'https://github.com/nataliescalabre/IceCreamShop'
    },
    {
        title: 'Admin Panel',
        description: 'Development & Design',
        imgUrl: project2,
        url: 'https://github.com/nataliescalabre/adminpanel'
    },
    {
        title: 'Movie Site',
        description: 'Design',
        imgUrl: project3,
        url: '#https://github.com/nataliescalabre/Movie-Lap-Streaming-Site'
    },
    {
        title: 'To Do App',
        description: 'Design',
        imgUrl: project4,
        url: 'https://github.com/nataliescalabre/Natalie-s-To-Do-App'
    },
    {
        title: 'Calculator',
        description: 'Design',
        imgUrl: project5,
        url: 'https://github.com/nataliescalabre/calcuulator'
    },
    {
        title: 'Natalies Blog',
        description: 'Design',
        imgUrl: project6,
        url: 'https://github.com/nataliescalabre/Natalies-Blog'
    },
    {
        title: 'Weather App',
        description: 'Design',
        imgUrl: project7,
        url: 'https://github.com/nataliescalabre/weather-app'
    },
    {
        title: 'Figma',
        description: 'Design',
        imgUrl: project8,
        url: 'https://www.figma.com/proto/8ZSPpzl1Y0KwRbE30EMdrf/Untitled?node-id=1-3&t=aICwDiebJWgQTnXV-1'
    },

];

    return(
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col xs={12}>
                    <TrackVisibility>
                    {({isVisible}) => (
                        <div
                        className={
                            isVisible ? 'animate__animated animate__fadeIn' : ''
                        }
                        >
    
                            <h2>Projects</h2>
                            <p>Below are the diverse projects which I have created during my two year course. There are a wide range of projects including a Restaurant Menu, an Ice Cream Shop, and much more. </p>
                        <Row>
                         {projects.map((item, index) => {
                            return <ProjectCard key={index} url={item.url} title={item.title} description={item.description} imgUrl={item.imgUrl}/>
                         })}
                        </Row>
                        </div>
                    )}
                    </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Projects