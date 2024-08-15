import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import './CSS/About.css';

const About = () => {
  return (
    <Container className="about-section" id="about">
      <Row className="text-center mb-5">
        <Col>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">A passionate developer with a love for learning and building impactful projects.</p>
        </Col>
      </Row>

      <Row className="align-items-center">
        <Col md={6} className="text-center">
          <Image src="your-image-url.jpg" roundedCircle className="profile-image" />
        </Col>
        <Col md={6}>
          <Card className="about-card shadow-lg">
            <Card.Body>
              <Card.Text>
                Hello! I'm Aditya Kamodiya, a full-stack developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js) and with a strong foundation in Java technologies like Spring, Servlets, and JSP. I have experience working on various web development projects from dynamic front-end interfaces to complex back-end logic, always striving to create solutions that are both elegant and efficient.
              </Card.Text>
              <Card.Text>
                My passion for technology started early on, and over the years, I've honed my skills across multiple programming languages and frameworks. I believe in continuous learning and love taking on new challenges that push the boundaries of my knowledge. Whether working solo or collaborating with a team, I am committed to delivering high-quality work and driving impactful results.
              </Card.Text>
              <Card.Text>
                With a focus on best practices and industry standards, I aim to build web applications that not only look great but also provide a seamless user experience. When I'm not coding, you can find me exploring new technologies, solving DSA problems, or sharpening my knowledge in full-stack development.
              </Card.Text>
              <Card.Text>
                If you're looking for a dedicated developer who can bring your ideas to life, feel free to reach out. Let's create something amazing together!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
