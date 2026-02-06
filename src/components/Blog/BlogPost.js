import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import Particle from "../Particle";
import Button from "react-bootstrap/Button";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsCalendarDate } from "react-icons/bs";

const blogPostsData = {
  1: {
    title: "My Journey as a Frontend Developer at Hextant Labs",
    date: "February 2026",
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
      
      <h3>What's Next?</h3>
      <p>I'm excited about the future at Hextant Labs. We're working on some innovative AI-powered tools that I believe will make a real difference. Stay tuned for more updates on our journey!</p>
    `,
  },
  2: {
    title: "Building Scalable Student Portals with React",
    date: "January 2026",
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
      
      <h3>Architecture Decisions</h3>
      <p>I implemented a modular architecture where each feature (dues, past questions, CGPA) is a separate module. This made the codebase easier to maintain and allowed for independent development of each feature.</p>
      
      <h3>Lessons Learned</h3>
      <p>Building for real users taught me the importance of user feedback. I conducted several rounds of testing with actual students to refine the user experience. The feedback loop was invaluable in creating a product that truly serves its users.</p>
    `,
  },
  3: {
    title: "Integrating AI in Healthcare: The CurEase Story",
    date: "December 2025",
    tags: ["AI", "Healthcare", "WhatsApp API"],
    content: `
      <h3>The Problem</h3>
      <p>Healthcare accessibility remains a significant challenge in many communities. Long wait times, difficulty scheduling appointments, and limited access to medical information are common pain points that affect millions of people.</p>
      
      <h3>The Solution</h3>
      <p>CurEase leverages AI and WhatsApp integration to bridge the gap between patients and healthcare providers. Patients can get preliminary health information, schedule appointments, and communicate with doctors through a familiar platform.</p>
      
      <h3>Technical Implementation</h3>
      <p>The WhatsApp Business API integration was particularly challenging. I had to handle webhook events, manage message queues, and ensure secure data handling. The AI component uses natural language processing to understand patient queries and provide relevant responses.</p>
      
      <h3>Security Considerations</h3>
      <p>Healthcare data is sensitive, so security was a top priority. I implemented end-to-end encryption for messages and ensured all data storage complied with best practices for medical data protection.</p>
      
      <h3>Impact</h3>
      <p>The platform has helped streamline patient-doctor communication, reducing response times and improving overall patient satisfaction. It's a testament to how technology can make healthcare more accessible to everyone.</p>
    `,
  },
  4: {
    title: "Real-time Gesture Recognition with MediaPipe",
    date: "November 2025",
    tags: ["Computer Vision", "MediaPipe", "React"],
    content: `
      <h3>Introduction to MediaPipe</h3>
      <p>MediaPipe is Google's open-source framework for building multimodal machine learning pipelines. It provides pre-trained models for hand tracking, pose estimation, and face detection that can run directly in the browser.</p>
      
      <h3>Project Goals</h3>
      <p>I wanted to create an interactive web application that could recognize hand gestures in real-time and translate them into actions. This could be useful for accessibility, gaming, or presentation control.</p>
      
      <h3>Implementation Details</h3>
      <p>Using MediaPipe's hand landmark detection, I was able to identify 21 hand landmarks and track their positions in real-time. By analyzing the relative positions of these landmarks, I could recognize gestures like pointing, waving, thumbs up, and pinching.</p>
      
      <h3>Gesture Recognition Algorithm</h3>
      <p>The algorithm works by calculating angles between finger joints and the palm. Different combinations of extended and folded fingers correspond to different gestures. I created a custom gesture library that can be easily extended with new gestures.</p>
      
      <h3>Challenges</h3>
      <p>The main challenge was optimizing performance for real-time detection in the browser. I had to balance accuracy with frame rate to ensure a smooth user experience. Using Web Workers helped offload the processing from the main thread.</p>
      
      <h3>Future Improvements</h3>
      <p>I'm planning to add support for two-hand gestures and integrate the system with popular presentation software for hands-free slide control.</p>
    `,
  },
  5: {
    title: "Event Ticketing Systems: From Concept to Production",
    date: "October 2025",
    tags: ["E-commerce", "PDF Generation", "Payments"],
    content: `
      <h3>Project Genesis</h3>
      <p>PayTix started as a solution to the fragmented event ticketing landscape. I wanted to create a platform that was easy for event organizers to use while providing a seamless experience for attendees.</p>
      
      <h3>Core Features</h3>
      <ul>
        <li><strong>Barcode Generation:</strong> Each ticket has a unique barcode for easy verification at the venue</li>
        <li><strong>PDF Export:</strong> Tickets can be downloaded and printed, with professional formatting</li>
        <li><strong>Secure Payments:</strong> Integrated payment processing with multiple providers</li>
        <li><strong>Event Management:</strong> Dashboard for organizers to track sales and attendance in real-time</li>
      </ul>
      
      <h3>Technical Challenges</h3>
      <p>Generating barcodes and rendering them to PDF in the browser was tricky. I used react-pdf for PDF generation and JsBarcode for barcode creation, ensuring the barcodes were scannable on printed tickets.</p>
      
      <h3>Scaling Considerations</h3>
      <p>Event ticketing can experience sudden traffic spikes when popular events go on sale. I implemented caching strategies and optimized database queries to handle high load scenarios.</p>
      
      <h3>Results</h3>
      <p>PayTix has successfully handled multiple events, processing hundreds of tickets. The platform has received positive feedback from both organizers and attendees for its ease of use and reliability.</p>
    `,
  },
  6: {
    title: "Why I Choose React for Every Project",
    date: "September 2025",
    tags: ["React", "JavaScript", "Web Development"],
    content: `
      <h3>My React Journey</h3>
      <p>I started learning React in 2023, and it has since become my primary tool for building web applications. After completing over 50 projects, I can confidently say it's the framework that fits my workflow best.</p>
      
      <h3>Why React?</h3>
      <ul>
        <li><strong>Component-Based Architecture:</strong> Building reusable components speeds up development and ensures consistency across the application</li>
        <li><strong>Large Ecosystem:</strong> Libraries for almost everything you need, from routing to state management to animations</li>
        <li><strong>Strong Community:</strong> Abundant resources, tutorials, and support from developers worldwide</li>
        <li><strong>Job Market:</strong> High demand for React developers makes it a valuable skill to have</li>
        <li><strong>Flexibility:</strong> React doesn't force you into a specific architecture, giving you freedom to structure your code as needed</li>
      </ul>
      
      <h3>My Favorite Tools</h3>
      <p>Beyond React itself, I regularly use:</p>
      <ul>
        <li><strong>React Router:</strong> For navigation and routing</li>
        <li><strong>React Query:</strong> For data fetching and caching</li>
        <li><strong>Tailwind CSS:</strong> For rapid, utility-first styling</li>
        <li><strong>Zustand:</strong> For simple, scalable state management</li>
      </ul>
      
      <h3>Common Pitfalls to Avoid</h3>
      <p>Over the years, I've learned to avoid common React mistakes like prop drilling, unnecessary re-renders, and overusing useEffect. Understanding React's rendering behavior is crucial for building performant applications.</p>
      
      <h3>Looking Ahead</h3>
      <p>I'm excited about React Server Components and the improvements coming in future versions. The framework continues to evolve, and I'm committed to growing with it. The future of React looks bright!</p>
    `,
  },
};

function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPostsData[id];

  if (!post) {
    return (
      <Container fluid className="blog-section">
        <Particle />
        <Container>
          <h1 style={{ color: "white" }}>Post not found</h1>
          <Button
            variant="primary"
            onClick={() => navigate("/blog")}
            className="blog-btn"
          >
            <AiOutlineArrowLeft /> Back to Blog
          </Button>
        </Container>
      </Container>
    );
  }

  return (
    <Container fluid className="blog-section">
      <Particle />
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <Button
              variant="outline-light"
              onClick={() => navigate("/blog")}
              className="mb-4 back-btn"
            >
              <AiOutlineArrowLeft /> Back to Blog
            </Button>

            <article className="blog-post-content">
              <h1 className="blog-post-title">{post.title}</h1>

              <p className="blog-date">
                <BsCalendarDate /> &nbsp;{post.date}
              </p>

              <div className="blog-tags mb-4">
                {post.tags.map((tag, index) => (
                  <span key={index} className="blog-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div
                className="blog-post-body"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default BlogPost;
