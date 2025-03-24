import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./CSS/About.css"; // Import CSS

const About = () => {
  return (
    <Container fluid className="about-section" id="about">
      <Row className="text-center">
        <Col>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A passionate developer with a love for learning and building impactful projects.
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <Card className="about-card">
            <Card.Body>
              <Card.Text>
                Hello! I'm <strong>Aditya Kamodiya</strong>, a <strong>Full Stack Developer</strong> specializing in the MERN stack 
                (MongoDB, Express.js, React, Node.js) with strong expertise in Java technologies like Spring, Servlets, and JSP.
              </Card.Text>
              <Card.Text>
                I am passionate about developing optimized, scalable applications and solving complex problems efficiently. 
                With experience in both front-end and back-end development, I aim to create seamless digital experiences.
              </Card.Text>
              <Card.Text>
                If you're looking for a dedicated developer to bring your ideas to life, let's connect and create something great together!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
