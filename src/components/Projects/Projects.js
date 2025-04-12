import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Diabetic-Health-Assessment"
              description="The Diabetes Diagnosis Software is a console-based application designed to collect and analyze user-provided symptoms related to diabetes."
              ghLink="https://github.com/Vishnupriya1282/Diabetic-Health-Assessment"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Tic-Tac-Toe-Game"
              description="interactive Tic-Tac-Toe game built using Python's Tkinter library. The game allows two players to play against each other on a 3x3 grid, taking turns to mark the cells with 'X' and 'O'. The game includes logic to manage turns, check for win conditions, and display results."
              ghLink="https://github.com/Vishnupriya1282/Tic-Tac-Toe-Game"
          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Customer-Cluster-Analysis"
              description="This project aims to segment mall customers into different groups based on their annual income and spending score."
              ghLink="https://github.com/Vishnupriya1282/Customer-Cluster-Analysis"
                            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Expenza"
              description="An expense management system."
              ghLink="https://github.com/Vishnupriya1282/Expenza"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="MineSweeper-OOPS"
              description="."
              ghLink="https://github.com/Vishnupriya1282/MineSweeper-OOPS"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="TransLingo"
              description="."
              ghLink="https://github.com/Vishnupriya1282/TransLingo"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
