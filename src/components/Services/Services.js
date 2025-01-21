import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaDraftingCompass, FaPaintBrush, FaLaptopCode, FaHammer } from "react-icons/fa";
import Particle from "../Particle";
import "./Services.scss";

function Services() {
  const services = [
    {
      icon: <FaDraftingCompass />, 
      title: "Architectural Design",
      description: "Innovative and sustainable designs tailored to your needs."
    },
    {
      icon: <FaPaintBrush />, 
      title: "Interior Design",
      description: "Creating inspiring and functional interior spaces."
    },
    {
      icon: <FaLaptopCode />, 
      title: "Project Management",
      description: "Seamless planning and execution of projects."
    },
    {
      icon: <FaHammer />, 
      title: "Renovation Services",
      description: "Modernizing spaces while preserving their essence."
    }
  ];

  return (
    <section>
      <Container fluid className="services-section" style={{paddingTop: 200 }} id="services">
        <Particle />
        <Container>
          <Row>
            <Col md={12} className="services-header text-center">
              <h1 className="heading">
                Our <strong className="purple">Services</strong>
              </h1>
              <p className="subheading">
                Discover the wide range of services we offer to bring your vision to life.
              </p>
            </Col>
          </Row>
          <Row>
            {services.map((service, index) => (
              <Col md={6} lg={4} className="service-card" key={index}>
                <Card className="text-center shadow">
                  <Card.Body>
                    <div className="service-icon">{service.icon}</div>
                    <Card.Title className="service-title">{service.title}</Card.Title>
                    <Card.Text className="service-description">
                      {service.description}
                    </Card.Text>
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

export default Services;
