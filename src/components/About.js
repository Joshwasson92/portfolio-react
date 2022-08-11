import React from "react";
import { Card } from "react-bootstrap";
import "./About.css";

function About() {
  return (
    <div id="about-content">
      <br />

      <Card className="aboutMeCard">
        <br />
        <Card.Title className="big-about">About</Card.Title>
        <Card.Body>
          I have been a developer for less than a year. My interest in web
          development started in early 2020 and I finally took a head first
          plunge into web development by taking part in a bootcamp, Prior to
          development I have worked in various production environments in the
          banking and risk management industry.
        </Card.Body>
        <Card.Footer className="projectDesc">
          Listed below is my most recent projects and technologies used. Several
          have also live demo!
        </Card.Footer>
      </Card>
    </div>
  );
}

export default About;
