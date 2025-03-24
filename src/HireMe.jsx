import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/HireMe.css'; // Import the CSS file

// Star Rating Component
const StarRating = ({ stars }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, i) => (
        <i key={i} className={i < stars ? "fas fa-star filled" : "fas fa-star"}></i>
      ))}
    </div>
  );
};

const HireMe = () => {
  return (
    <Container className="hire-me-section" id="hire-me">
      {/* Section Header */}
      <Row className="text-center mb-5">
        <Col md={8} className="mx-auto">
          <h2 className="section-title">Hire Me</h2>
          <p className="section-subtitle">
            Let’s collaborate and bring your vision to life with a blend of creativity and technology!
          </p>
        </Col>
      </Row>

      {/* Front-End Section */}
      <Row className="justify-content-center mb-5">
        <Col md={8}>
          <Card className="skills-card front-end-card">
            <Card.Body>
              <Card.Title className="text-center">Front-End Development</Card.Title>
              <Card.Text>
                I specialize in crafting responsive and interactive user interfaces using modern front-end technologies.
              </Card.Text>
              <div className="skills-section">
                <div className="skill"><p>HTML</p><StarRating stars={4} /></div>
                <div className="skill"><p>CSS</p><StarRating stars={4} /></div>
                <div className="skill"><p>JavaScript</p><StarRating stars={5} /></div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* MERN Stack Section */}
      <Row className="justify-content-center mb-5">
        <Col md={8}>
          <Card className="skills-card mern-stack-card">
            <Card.Body>
              <Card.Title className="text-center">MERN Stack Development</Card.Title>
              <Card.Text>
                I build full-stack applications using MongoDB, Express, React, and Node.js for scalable solutions.
              </Card.Text>
              <div className="skills-section">
                <div className="skill"><p>React</p><StarRating stars={5} /></div>
                <div className="skill"><p>Node.js</p><StarRating stars={4} /></div>
                <div className="skill"><p>Express.js</p><StarRating stars={4} /></div>
                <div className="skill"><p>MongoDB</p><StarRating stars={4} /></div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Java Technologies Section */}
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="skills-card java-card">
            <Card.Body>
              <Card.Title className="text-center">Java & Backend Technologies</Card.Title>
              <Card.Text>
                I develop backend solutions with Java, Servlets, JSP, Spring Boot, and MySQL for optimized performance.
              </Card.Text>
              <div className="skills-section">
                <div className="skill"><p>Java</p><StarRating stars={4} /></div>
                <div className="skill"><p>Servlets</p><StarRating stars={4} /></div>
                <div className="skill"><p>JSP</p><StarRating stars={3} /></div>
                <div className="skill"><p>Spring Boot</p><StarRating stars={3} /></div>
                <div className="skill"><p>MySQL</p><StarRating stars={4} /></div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Contact Button */}
      <Row className="text-center mt-5">
        <Col>
          <Button href="mailto:adityakamodiya@gmail.com" className="hire-me-button">
            Contact Me
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default HireMe;
