import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import "./Work.scss";

function Work() {
  const projects = [
    {
      title: "Modern Residential Design",
      description: "Crafted a modern residential project focusing on energy efficiency, sustainable materials, and contemporary aesthetics.",
      technologies: ["AutoCAD", "Revit", "SketchUp"],
    },
    {
      title: "Commercial Building Design",
      description: "Designed a commercial space optimized for functionality, aesthetic appeal, and maximum occupancy.",
      technologies: ["3ds Max", "Photoshop", "Lumion"],
    },
    {
      title: "Urban Park Planning",
      description: "Developed a master plan for an urban park, integrating green spaces, recreational facilities, and pedestrian-friendly pathways.",
      technologies: ["GIS", "AutoCAD", "Rhino"],
    },
    {
      title: "Historical Restoration",
      description: "Led a historical restoration project preserving architectural integrity while adapting to modern requirements.",
      technologies: ["Revit", "Photoshop", "SketchUp"],
    },
  ];

  return (
    <section>
      <Container fluid className="work-section" style={{paddingTop: 200}} id="work">
        <Particle />
        <Container>
          <Row>
            <Col md={12} className="work-header text-center">
              <h1 className="heading">
                My <strong className="purple">Projects</strong>
              </h1>
              <p className="subheading">
                Discover the architectural projects I have designed and contributed to.
              </p>
            </Col>
          </Row>
          <Row>
            {projects.map((project, index) => (
              <Col md={6} lg={4} className="work-card" key={index}>
                <Card className="text-center shadow">
                  <Card.Body>
                    <Card.Title className="work-title">{project.title}</Card.Title>
                    <Card.Text className="work-description">
                      {project.description}
                    </Card.Text>
                    <div className="work-technologies">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Work;
