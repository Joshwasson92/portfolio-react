import React from "react";
import { Card } from "react-bootstrap";
import "./About.css";

function About() {
  return (
    <div id="about" className="aboutMe">
      <br />

      <Card className="aboutMeCard">
        <h1 className="aboutHeader">About me!</h1>
        <br />{" "}
        <Card.Img className="portrait" src="/img/portrait.png"></Card.Img>
        <br />
        <Card.Body>
          My name is Josh Wasson, I have been a developer for less than a year.
          My interest in web development started in early 2020 and I finally
          took a head first plunge into web development by taking part in a
          bootcamp, Prior to development I have worked in various production
          environments in the banking and risk management industry.
        </Card.Body>
      </Card>
    </div>
  );
}

export default About;
