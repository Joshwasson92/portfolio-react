import React from "react";
import { projects } from "../data";
import "./Projects.css";
import { Card } from "react-bootstrap";

export default function Projects() {
  return (
    <section id="projects">
      <div>
        <div>
          <h1>Apps I have Built</h1>
          <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
          <br />
          <br />
        </div>
        <div class="d-flex flex-column">
          <div class="row">
            <br />
            <div class="col-sm-6" className="componentBackground">
              <br />
              <div class="card-deck">
                <br />
                {projects.map((project) => (
                  <Card class="" className="customCard">
                    <Card.Img
                      className="card-image"
                      variant="top"
                      src={project.image}
                    />
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
                        className="projects-button"
                        href={project.link}
                        alt="Link to live demo"
                        target="_blank"
                      >
                        Live demo!
                      </Card.Link>
                      <Card.Link
                        className="projects-button"
                        href={project.code}
                        alt="Link to live demo"
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
