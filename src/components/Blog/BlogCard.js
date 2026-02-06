import React from "react";
import Card from "react-bootstrap/Card";
import { BsCalendarDate, BsArrowRight } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function BlogCard(props) {
  const navigate = useNavigate();

  return (
    <Card className="blog-card-view">
      <Card.Body>
        <Card.Title className="purple" style={{ fontWeight: "700" }}>
          {props.title}
        </Card.Title>
        <p className="blog-date">
          <BsCalendarDate /> &nbsp;{props.date}
        </p>
        <Card.Text style={{ textAlign: "justify", color: "white" }}>
          {props.description}
        </Card.Text>
        <div className="blog-tags">
          {props.tags.map((tag, index) => (
            <span key={index} className="blog-tag">
              {tag}
            </span>
          ))}
        </div>
        <Button
          variant="primary"
          onClick={() => navigate(`/blog/${props.id}`)}
          className="blog-btn"
        >
          Read More <BsArrowRight />
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BlogCard;
