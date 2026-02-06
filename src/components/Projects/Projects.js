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
              title="Hextant Labs"
              description="A professional AI studio platform featuring advanced AI tools and solutions. Built with modern web technologies for seamless user experience."
              ghLink="https://github.com/ProgrammerDavid1234/hextant-ai-studio"
              demoLink="https://hexy.hextantlabs.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="KDU Blog"
              description="A full-featured blog platform with content management capabilities. Includes admin dashboard for managing posts and user interactions."
              ghLink="https://github.com/ProgrammerDavid1234/kdublog"
              demoLink="https://kdublog.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="NACOS KDU Portal"
              description="A comprehensive student portal for NACOS (Nigeria Association of Computing Students) featuring dues management, past questions, and CGPA calculator."
              ghLink="https://github.com/ProgrammerDavid1234/nacos-project-hub"
              demoLink="https://nacoskdu.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="CurEase Healthcare"
              description="An AI-powered healthcare platform with WhatsApp integration for seamless patient-doctor communication and appointment management."
              ghLink="https://github.com/ProgrammerDavid1234/MedAi"
              demoLink="https://curease.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="PayTix Ticketing"
              description="A modern event ticketing platform with barcode generation for tickets, PDF export functionality, and secure payment processing."
              ghLink="https://github.com/ProgrammerDavid1234/paytix-ticketing-hub"
              demoLink="https://paytix.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Gesture Recognition"
              description="An innovative gesture and pose recognition system using MediaPipe for real-time hand tracking and gesture-based interactions."
              ghLink="https://github.com/ProgrammerDavid1234/gesture-clicker-react-web"
              demoLink="https://gesturefinalproject.vercel.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
