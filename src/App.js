import "./App.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { Button } from "react-bootstrap";
// import githubImage from "./github_icon.svg";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      projects: false,
      skills: false,
      about: true,
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
      <div>
        <div className="App">
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand>
              <img
                className="navLogo"
                src="/img/jwlogolarge.png"
                alt="Artistic JW logo"
              />
            </Navbar.Brand>
            <Container>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Button
                  className="navButton"
                  bg="dark"
                  variant="dark"
                  onClick={this.showModal}
                >
                  Contact
                </Button>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#skills">Skills</Nav.Link>
              </Nav>
            </Container>
          </Navbar>

          <header className="App-header">
            <main>
              <Contact show={this.state.show} handleClose={this.hideModal} />

              <About />

              <Projects />

              <Skills />
              <p class="find_me_text">Find me on</p>
              <div class="social_media">
                <a target="_blank" href="https://github.com/Joshwasson92">
                  <img src="/img/github_icon.svg" alt="Github" />
                </a>
                <a target="_blank" href="https://twitter.com/joshwasson3">
                  <img src="/img/twitter_icon.svg" alt="Twitter" />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/josh-wasson-94aa11222/"
                >
                  <img src="/img/linkedin_icon.svg" alt="LinkedIn" />
                </a>
              </div>
            </main>
          </header>
        </div>
      </div>
    );
  }
}

export default App;
