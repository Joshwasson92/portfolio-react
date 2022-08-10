import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { projects } from "../data";
import "./Projects.css";
import { Card } from "react-bootstrap";

export default function Projects() {
  const [hovering, setHovering] = useState({});

  useEffect(() => {
    Aos.init({ once: true, duration: 2000 });
  }, []);

  return (
    <section id="projects" className="projectsComponent">
      <br />
      <div>
        <div className="aboutProjects">
          <Card data-aos="fade-up" className="finishedProjects">
            <h1>My work!</h1>

            <br />
            <div className="projectDesc">
              Listed below is my most recent projects and technologies used.
              Several have also live demo!
            </div>
          </Card>
          <br />
          <br />
        </div>
        <div class="d-flex flex-column">
          <div class="row">
            <br />
            <div class="col-sm-6" className="componentBackground">
              <br />
              <div data-aos="fade-up" class="card-deck">
                <br />
                {projects.map((project) => (
                  <Card className="customCard">
                    <div
                      onMouseEnter={() =>
                        setHovering({ ...hovering, [project.title]: true })
                      }
                      onMouseLeave={() =>
                        setHovering({ ...hovering, [project.title]: false })
                      }
                    >
                      <Card.Img
                        className="card-image"
                        variant="top"
                        src={
                          hovering[project.title]
                            ? project.image
                            : project.stillImg
                        }
                      />
                    </div>
                    <Card.Body>
                      <Card.Title>{project.title}</Card.Title>
                      <Card.Subtitle className="customCard">
                        Technologies used:{" "}
                        <div className="projectTech">
                          {project.technologies}
                        </div>
                      </Card.Subtitle>
                      <Card.Text className="descText">
                        {project.description}
                      </Card.Text>
                      <Card.Link
                        className="projects-button demo"
                        href={project.link}
                        alt="Link to live demo"
                        target="_blank"
                      >
                        Live demo!
                      </Card.Link>
                      <Card.Link
                        className="projects-button"
                        href={project.code}
                        alt="Link to github"
                        target="_blank"
                      >
                        See the code!
                      </Card.Link>
                    </Card.Body>
                  </Card>
                ))}
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
      <br />
    </section>
  );
}
