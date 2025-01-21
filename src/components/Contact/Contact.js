import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Particle from "../Particle";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import emailjs from "@emailjs/browser"; // Import EmailJS
import "./Contact.scss";
import { FaTelegramPlane } from "react-icons/fa";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null); // 'success', 'error', null

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic client-side validation
    if (!name || !email || !message) {
      setStatus("error");
      return;
    }

    // EmailJS integration
    const serviceId = "YOUR_SERVICE_ID"; // Replace with your EmailJS Service ID
    const templateId = "YOUR_TEMPLATE_ID"; // Replace with your EmailJS Template ID
    const publicKey = "YOUR_PUBLIC_API_KEY"; // Replace with your EmailJS Public Key

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <section>
      <Container fluid className="contact-section" style={{ paddingTop: 200 }} id="contact">
        <Particle />
        <Container className="contact-content">
          <Row>
            <Col md={7} className="contact-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Get In Touch! <span className="wave" role="img" aria-labelledby="wave">
                  👋
                </span>
              </h1>

              <h1 className="heading-name">
                LET'S CREATE
                <strong className="main-name"> SOMETHING AMAZING</strong>
              </h1>

              <p style={{ paddingTop: 20 }}>
                Whether you have an idea, a question, or just want to say hello, feel free to reach out to me. I'll respond as soon as possible!
              </p>
            </Col>

            <Col md={5} className="contact-form" style={{ paddingTop: 20 }}>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Enter your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3 button-primary">
                  Send Message
                </Button>

                {status === "success" && (
                  <div className="mt-3 alert alert-success" role="alert">
                    Thank you for your message! I'll get back to you soon.
                  </div>
                )}

                {status === "error" && (
                  <div className="mt-3 alert alert-danger" role="alert">
                    Oops! Something went wrong. Please try again later.
                  </div>
                )}
              </Form>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col md={12} className="home-about-social text-center">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://t.me/Futureplanet1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" home-social-icons"
                  >
                    <FaTelegramPlane />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://twitter.com/YOUR_TWITTER_USERNAME"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" home-social-icons"
                  >
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" home-social-icons"
                  >
                    <AiFillLinkedin />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Contact;
