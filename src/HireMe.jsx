import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './CSS/HireMe.css';

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
      <Row className="text-center mb-5">
        <Col>
          <h2 className="section-title">Hire Me</h2>
          <p className="section-subtitle">Let’s collaborate and bring your vision to life with a blend of creativity and technology!</p>
        </Col>
      </Row>

      {/* Front-End Section */}
      <Row className="justify-content-center mb-5">
        <Col md={8}>
          <Card className="skills-card shadow-lg front-end-card">
            <Card.Body>
              <Card.Title className="text-center">Front-End Development</Card.Title>
              <Card.Text>
                As a front-end developer, I excel at creating engaging and responsive user interfaces using modern technologies like HTML, CSS, and JavaScript. I focus on performance, usability, and beautiful design to ensure that the websites I develop offer a seamless experience across devices.
              </Card.Text>
              <div className="skills-section">
                <div className="skill">
                  <p>HTML</p>
                  <StarRating stars={4} />
                </div>
                <div className="skill">
                  <p>CSS</p>
                  <StarRating stars={4} />
                </div>
                <div className="skill">
                  <p>JavaScript</p>
                  <StarRating stars={5} />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* MERN Stack Section */}
      <Row className="justify-content-center mb-5">
        <Col md={8}>
          <Card className="skills-card shadow-lg mern-stack-card">
            <Card.Body>
              <Card.Title className="text-center">MERN Stack Development</Card.Title>
              <Card.Text>
                As a MERN Stack developer, I specialize in building full-stack web applications with React for the front-end, Node.js and Express.js for the back-end, and MongoDB for the database. My applications are scalable, robust, and built for performance. I thrive in environments that demand fast prototyping and high-quality code delivery.
              </Card.Text>
              <div className="skills-section">
                <div className="skill">
                  <p>React</p>
                  <StarRating stars={5} />
                </div>
                <div className="skill">
                  <p>Node.js</p>
                  <StarRating stars={4} />
                </div>
                <div className="skill">
                  <p>Express.js</p>
                  <StarRating stars={4} />
                </div>
                <div className="skill">
                  <p>MongoDB</p>
                  <StarRating stars={4} />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Java Technologies Section */}
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="skills-card shadow-lg java-card">
            <Card.Body>
              <Card.Title className="text-center">Java & Backend Technologies</Card.Title>
              <Card.Text>
                I am highly proficient in Java and its related technologies. My experience spans building scalable, efficient server-side applications using Servlets, JSP, and Spring Framework. I also have a solid foundation in database management with MySQL. Whether it’s creating APIs, managing databases, or handling complex server-side logic, I ensure optimal performance and reliability in every project.
              </Card.Text>
              <div className="skills-section">
                <div className="skill">
                  <p>Java</p>
                  <StarRating stars={4} />
                </div>
                <div className="skill">
                  <p>Servlets</p>
                  <StarRating stars={4} />
                </div>
                <div className="skill">
                  <p>JSP</p>
                  <StarRating stars={3} />
                </div>
                <div className="skill">
                  <p>SpringBoot</p>
                  <StarRating stars={3} />
                </div>
                <div className="skill">
                  <p>MySQL</p>
                  <StarRating stars={4} />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

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
