import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import pencilRuler from "../../Assets/pencil-ruler.svg"; // Replace with an architect-related image
import ArchitectSkills from "./ArchitectSkills";
import DesignTools from "./DesignTools";
import AboutMe from "./AboutMe"; // Renamed from AboutCard

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I Am</strong>
            </h1>
            <AboutMe />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={pencilRuler} alt="about" className="img-fluid" style={{ maxHeight: "450px" }} />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Expertise </strong>
        </h1>

        <ArchitectSkills />

        <h1 className="project-heading">
          <strong className="purple">Design Tools</strong> I Use
        </h1>
        <DesignTools />

        {/* Consider removing Github or adapting it for showcasing design repositories if relevant */}
        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;