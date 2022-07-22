import React from "react";
import { projects } from "../data";
import ImageGallery from "react-image-gallery";
import "./Projects.css";
import { Card } from "react-bootstrap";

export default function Projects() {
  return (
    <section id="projects">
      <div>
        <div>
          <h1>Apps I've Built</h1>
          <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
          <br />
        </div>
        <div class="col mb-2">
          <div class="card h-100" className="componentBackground">
            <br />
            {projects.map((project) => (
              <Card className="customCard">
                <Card.Img
                  className="card-image"
                  variant="top"
                  src={project.image}
                />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Subtitle className="customCard">
                    Technologies used: {project.technologies}
                  </Card.Subtitle>
                  <Card.Text>{project.description}</Card.Text>
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
            <br />
          </div>
        </div>
      </div>
      <br />
    </section>
  );
}
