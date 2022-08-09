import "./App.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Projects from "./components/Projects";
import { Button } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      projects: false,
      skills: false,
      about: true,
    };
    this.componentDidMount = () => {
      Aos.init();
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  showProjects = () => {
    this.setState({ projects: true });
  };

  showSkills = () => {
    this.setState({ skills: true });
  };

  showAbout = () => {
    this.setState({ about: true });
  };

  render() {
    return (
      <div className="flex-container">
        <div className="flex-item">
          <Navbar bg="dark" variant="dark" sticky="top">
            <Navbar.Brand>
              <img
                data-aos="fade-left"
                className="navLogo"
                src="/img/jwlogolarge.png"
                alt="Artistic JW logo"
              />
            </Navbar.Brand>
            <Container>
              <Nav className="me-auto">
                <Nav.Link className="navLink" href="#about">
                  About
                </Nav.Link>
                <Button
                  className="navLink"
                  bg="dark"
                  variant="dark"
                  onClick={this.showModal}
                >
                  Contact
                </Button>
                <Nav.Link className="navLink" href="#projects">
                  Projects
                </Nav.Link>
                <Nav.Link
                  data-aos="fade-left"
                  className="navButton"
                  href="https://twitter.com/joshwasson3"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/img/twitter_icon.svg" alt="Twitter" />
                </Nav.Link>

                <Nav.Link
                  data-aos="fade-left"
                  className="navButton"
                  href="https://github.com/Joshwasson92"
                  target="_blank"
                  src="/img/github_icon.svg"
                  alt="Github"
                  rel="noreferrer"
                >
                  <img src="/img/github_icon.svg" alt="Github" />
                </Nav.Link>

                <Nav.Link
                  data-aos="fade-left"
                  className="navButton"
                  target="_blank"
                  href="https://www.linkedin.com/in/josh-wasson-94aa11222/"
                  rel="noreferrer"
                >
                  <img src="/img/linkedin_icon.svg" alt="LinkedIn" />
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>

          <div className="content">
            <main>
              <Contact show={this.state.show} handleClose={this.hideModal} />

              <div className="targetAbout">
                <About />
              </div>
              <Projects />
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
