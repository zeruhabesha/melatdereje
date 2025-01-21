import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutMe() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello everyone, I am <span className="purple">[Your Name] </span>
            from <span className="purple">[Your City, Country].</span>
            <br />
            I am a passionate architect dedicated to creating innovative and sustainable spaces.
            <br />
            My architectural journey has been shaped by my belief in [Mention your core architectural belief or philosophy].
            <br />
            <br />
            Beyond the drawing board, I find joy in:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring architectural marvels around the world
            </li>
            <li className="about-activity">
              <ImPointRight /> Sketching and visualizing design concepts
            </li>
            <li className="about-activity">
              <ImPointRight /> Keeping up with the latest trends in sustainable design and construction
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The details are not the details. They make the design."{" "}
          </p>
          <footer className="blockquote-footer">Charles Eames {/* You can attribute to a relevant architect */}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutMe;