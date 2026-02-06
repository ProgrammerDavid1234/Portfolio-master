import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import BlogCard from "./BlogCard";

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "My Journey as a Frontend Developer at Hextant Labs",
      date: "February 2026",
      description:
        "Sharing my experience joining Hextant Labs as a Frontend Developer. From building AI-powered tools to collaborating with an amazing team, here's what I've learned so far in this exciting startup journey.",
      tags: ["Career", "Startup", "Frontend"],
      content: `
        <h3>The Beginning</h3>
        <p>Joining Hextant Labs has been one of the most exciting decisions of my career. As a final year Computer Science student, I was looking for an opportunity that would challenge me and help me grow as a developer.</p>
        
        <h3>What I Do</h3>
        <p>As a Frontend Developer, I'm responsible for building user interfaces that are not only visually appealing but also highly functional. I work with React.js, Next.js, and Tailwind CSS to create seamless user experiences.</p>
        
        <h3>Challenges & Growth</h3>
        <p>Working in a startup environment means wearing multiple hats. I've learned to adapt quickly, communicate effectively with the team, and deliver quality work under tight deadlines. The fast-paced nature of startup life has accelerated my learning exponentially.</p>
        
        <h3>Key Takeaways</h3>
        <ul>
          <li>Always be open to learning new technologies</li>
          <li>Communication is just as important as coding skills</li>
          <li>Building products that solve real problems is incredibly rewarding</li>
        </ul>
      `,
    },
    {
      id: 2,
      title: "Building Scalable Student Portals with React",
      date: "January 2026",
      description:
        "A deep dive into how I built the NACOS KDU Portal - featuring dues management, past questions repository, and CGPA calculator. Learn about the architecture decisions and challenges faced.",
      tags: ["React", "Education", "Full Stack"],
      content: `
        <h3>Project Overview</h3>
        <p>The NACOS KDU Portal was born out of a need to digitize student services at Koladaisi University. The platform serves hundreds of students, providing essential tools for academic success.</p>
        
        <h3>Key Features</h3>
        <ul>
          <li><strong>Dues Management:</strong> Students can track and pay their association dues online</li>
          <li><strong>Past Questions Repository:</strong> A comprehensive database of past examination questions</li>
          <li><strong>CGPA Calculator:</strong> An intuitive tool to calculate cumulative grade point average</li>
        </ul>
        
        <h3>Technical Stack</h3>
        <p>I chose React for the frontend due to its component-based architecture, which made it easy to build reusable UI elements. For the backend, I used Node.js with Express, and Supabase for the database.</p>
        
        <h3>Lessons Learned</h3>
        <p>Building for real users taught me the importance of user feedback. I conducted several rounds of testing with actual students to refine the user experience.</p>
      `,
    },
    {
      id: 3,
      title: "Integrating AI in Healthcare: The CurEase Story",
      date: "December 2025",
      description:
        "How I integrated WhatsApp API with an AI-powered healthcare platform to improve patient-doctor communication. Exploring the intersection of technology and healthcare.",
      tags: ["AI", "Healthcare", "WhatsApp API"],
      content: `
        <h3>The Problem</h3>
        <p>Healthcare accessibility remains a significant challenge in many communities. Long wait times, difficulty scheduling appointments, and limited access to medical information are common pain points.</p>
        
        <h3>The Solution</h3>
        <p>CurEase leverages AI and WhatsApp integration to bridge the gap between patients and healthcare providers. Patients can get preliminary health information, schedule appointments, and communicate with doctors through a familiar platform.</p>
        
        <h3>Technical Implementation</h3>
        <p>The WhatsApp Business API integration was particularly challenging. I had to handle webhook events, manage message queues, and ensure HIPAA-compliant data handling.</p>
        
        <h3>Impact</h3>
        <p>The platform has helped streamline patient-doctor communication, reducing response times and improving overall patient satisfaction. It's a testament to how technology can make healthcare more accessible.</p>
      `,
    },
    {
      id: 4,
      title: "Real-time Gesture Recognition with MediaPipe",
      date: "November 2025",
      description:
        "Exploring computer vision and gesture recognition using MediaPipe. Building interactive web applications that respond to hand gestures in real-time.",
      tags: ["Computer Vision", "MediaPipe", "React"],
      content: `
        <h3>Introduction to MediaPipe</h3>
        <p>MediaPipe is Google's open-source framework for building multimodal machine learning pipelines. It provides pre-trained models for hand tracking, pose estimation, and face detection.</p>
        
        <h3>Project Goals</h3>
        <p>I wanted to create an interactive web application that could recognize hand gestures in real-time and translate them into actions. This could be useful for accessibility, gaming, or presentation control.</p>
        
        <h3>Implementation Details</h3>
        <p>Using MediaPipe's hand landmark detection, I was able to identify 21 hand landmarks and track their positions. By analyzing the relative positions of these landmarks, I could recognize gestures like pointing, waving, and pinching.</p>
        
        <h3>Challenges</h3>
        <p>The main challenge was optimizing performance for real-time detection in the browser. I had to balance accuracy with frame rate to ensure a smooth user experience.</p>
      `,
    },
    {
      id: 5,
      title: "Event Ticketing Systems: From Concept to Production",
      date: "October 2025",
      description:
        "Building PayTix - a complete event ticketing solution with barcode generation, PDF exports, and secure payments. A journey through the development process.",
      tags: ["E-commerce", "PDF Generation", "Payments"],
      content: `
        <h3>Project Genesis</h3>
        <p>PayTix started as a solution to the fragmented event ticketing landscape. I wanted to create a platform that was easy for event organizers to use while providing a seamless experience for attendees.</p>
        
        <h3>Core Features</h3>
        <ul>
          <li><strong>Barcode Generation:</strong> Each ticket has a unique barcode for easy verification</li>
          <li><strong>PDF Export:</strong> Tickets can be downloaded and printed</li>
          <li><strong>Secure Payments:</strong> Integrated payment processing with multiple providers</li>
          <li><strong>Event Management:</strong> Dashboard for organizers to track sales and attendance</li>
        </ul>
        
        <h3>Technical Challenges</h3>
        <p>Generating barcodes and rendering them to PDF in the browser was tricky. I used react-pdf and JsBarcode to handle the generation, ensuring the barcodes were scannable on printed tickets.</p>
      `,
    },
    {
      id: 6,
      title: "Why I Choose React for Every Project",
      date: "September 2025",
      description:
        "After building 50+ projects, here's why React remains my go-to framework. Exploring component architecture, state management, and the React ecosystem.",
      tags: ["React", "JavaScript", "Web Development"],
      content: `
        <h3>My React Journey</h3>
        <p>I started learning React in 2023, and it has since become my primary tool for building web applications. After completing over 50 projects, I can confidently say it's the framework that fits my workflow best.</p>
        
        <h3>Why React?</h3>
        <ul>
          <li><strong>Component-Based Architecture:</strong> Building reusable components speeds up development</li>
          <li><strong>Large Ecosystem:</strong> Libraries for almost everything you need</li>
          <li><strong>Strong Community:</strong> Abundant resources, tutorials, and support</li>
          <li><strong>Job Market:</strong> High demand for React developers</li>
        </ul>
        
        <h3>My Favorite Tools</h3>
        <p>Beyond React itself, I regularly use React Router for navigation, React Query for data fetching, and Tailwind CSS for styling. This stack allows me to build production-ready applications quickly.</p>
        
        <h3>Looking Ahead</h3>
        <p>I'm excited about React Server Components and the improvements coming in future versions. The framework continues to evolve, and I'm committed to growing with it.</p>
      `,
    },
  ];

  return (
    <Container fluid className="blog-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Blog</strong>
        </h1>
        <p style={{ color: "white" }}>
          Thoughts, stories, and insights from my development journey.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {blogPosts.map((post, index) => (
            <Col md={6} lg={4} className="blog-card" key={index}>
              <BlogCard
                id={post.id}
                title={post.title}
                date={post.date}
                description={post.description}
                tags={post.tags}
                content={post.content}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Blog;
