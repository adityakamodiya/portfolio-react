import React from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './CSS/Work.css';

// Sample Project Data
const projects = [
  {
    title: "School Website",
    description: "A dynamic school website built using HTML, CSS, and React JS. It features interactive elements and a responsive design.",
    technologies: ["HTML", "CSS", "React JS"],
    liveLink: "https://school-website.example.com",
    githubLink: "https://github.com/adityakamodiya/school-website",
    screenshot: "school-website-screenshot.jpg"
  },
  {
    title: "Resort API",
    description: "A RESTful API for a resort booking system using Node.js, Express, and MongoDB. It includes features for booking management and user authentication. Integrated Cloudinary for image and file storage management, allowing easy upload and management of media files. Utilized Postman for comprehensive API testing to ensure robust and reliable endpoints. Added Firebase authentication for secure user login and management. The API supports data updation and deletion operations, with a frontend interface built using HTML, CSS, and React for seamless interaction with the API.",
    technologies: ["Node.js", "Express", "MongoDB", "Cloudinary", "Postman", "Firebase", "HTML", "CSS", "React"],
    liveLink: "https://resort-api.example.com",
    githubLink: "https://github.com/adityakamodiya/resort-api",
    screenshot: "resort-api-screenshot.jpg"
  },
  {
    title: "File Uploader Project",
    description: "A file uploader application inspired by Google Forms. Users can upload files, which are then managed using Cloudinary for storage. Cloudinary was used for efficient image and file storage management, while Postman was utilized for API testing to ensure functionality. Implemented robust file handling and user interface features.",
    technologies: ["React JS", "Node.js", "Cloudinary", "Postman"],
    liveLink: "https://file-uploader.example.com",
    githubLink: "https://github.com/adityakamodiya/file-uploader",
    screenshot: "file-uploader-screenshot.jpg"
  },
  // Add more projects as needed
];

const Work = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [modalContent, setModalContent] = React.useState({});

  const handleShow = (project) => {
    setModalContent(project);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <Container className="work-section" id="work">
      <Row className="text-center mb-5">
        <Col>
          <h2 className="section-title">My Work</h2>
          <p className="section-subtitle">Explore some of the projects I’ve worked on.</p>
        </Col>
      </Row>

      <Row>
        {projects.map((project, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="work-card shadow-lg">
              <Card.Img variant="top" src={project.screenshot} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button variant="primary" onClick={() => handleShow(project)}>
                  View Details
                </Button>
              </Card.Body>
              <Card.Footer>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-success me-2">Live Demo</a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-dark">GitHub Repo</a>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Project Details Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalContent.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={modalContent.screenshot} alt={modalContent.title} className="img-fluid mb-3" />
          <p><strong>Description:</strong> {modalContent.description}</p>
          {/* <p><strong>Technologies:</strong> {modalContent.technologies.join(', ')}</p> */}
          <p><strong>Live Link:</strong> <a href={modalContent.liveLink} target="_blank" rel="noopener noreferrer">{modalContent.liveLink}</a></p>
          <p><strong>GitHub Link:</strong> <a href={modalContent.githubLink} target="_blank" rel="noopener noreferrer">{modalContent.githubLink}</a></p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Work;
