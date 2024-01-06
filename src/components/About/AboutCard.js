import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sohel Datta </span>
            from <span className="purple"> West Bengal, India.</span>
            <br /> I am currently pursuing my B.Tech degree in CSE, RCC IIT.
            <br />
            <br />
            {/* <br />  */}
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
          <br />
          <p style={{ color: "rgb(155 126 172)" }}>
          "Build to inspire change!"{" "}
          </p>
          <footer className="blockquote-footer">Sohel</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
