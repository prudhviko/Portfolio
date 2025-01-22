import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://placehold.co/300x300"
              isBlog={false}
              title="TodoApp"
              description="Lorem est irure labore cupidatat sint proident. Amet exercitation qui officia est eu eiusmod commodo aliqua. Aliqua velit eu eu irure proident. Minim fugiat sit exercitation irure."
              ghLink="https://github.com/prudhviko/TodoApp"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://placehold.co/300x300"
              isBlog={false}
              title="CrudApp"
              description="Excepteur sit pariatur do anim. Laboris dolore Lorem laboris est adipisicing sint. Laborum fugiat labore deserunt sit voluptate Lorem elit et."
              ghLink="https://github.com/prudhviko/CrudApp/"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://placehold.co/300x300"
              isBlog={false}
              title="BlogApp"
              description="Cupidatat aliqua elit dolor consequat aute amet ea deserunt pariatur proident irure ut enim. In fugiat enim sit irure reprehenderit velit reprehenderit magna."
              ghLink="https://github.com/prudhviko/BlogApp"
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
