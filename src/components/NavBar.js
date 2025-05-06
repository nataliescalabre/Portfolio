import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/img/logo.png';
import { Facebook, Github, Linkedin } from 'react-bootstrap-icons';
import { HashLink } from 'react-router-hash-link';

const NavBar = () => {

const [activeLink, setactiveLink] = useState("home");
const [scrolled, setScrolled] = useState(false);

const onUpdateActiveLink = (value) => {
    setactiveLink(value); 
};

useEffect(() => {
    const onScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true)
        } else {
            setScrolled(false);
        }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
}, []);

    return(
            <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
              <Container>
                <Navbar.Brand href="/">
                <img src={logo} alt='logo'/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto">

                    <Nav.Link 
                    href="#home"
                    className={
                    activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
                    }
                    onClick={() => onUpdateActiveLink('home')}
                    >Home</Nav.Link>

                    <Nav.Link
                    href="#skills"
                    className={
                    activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
                    }
                    onClick={() => onUpdateActiveLink('skills')}
                    >Skills</Nav.Link>

                    <Nav.Link 
                    href="#projects"
                    className={
                    activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'
                    }
                    onClick={() => onUpdateActiveLink('projects')}
                    >Projects</Nav.Link>

                
                  </Nav>
                  <span className='navbar-text'>
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
                    <HashLink to='#connect'>
                        <button className='vvd'>
                            <span>Let's Connect</span>
                        </button>
                    </HashLink>
                    
                  </span>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          );
        }

export default NavBar;
