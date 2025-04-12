import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vishnupriya Tudu </span>
            from <span className="purple"> Ahmedabad, India.</span>
            <br />
            I am a third-year undergraduate student pursuing a BTech degree in Mathematics and Computing at the Indian Institute of Technology (IIT) Ropar.
            {/* <br />
            I have completed Integrated MSc (IMSc) in Maths and Computing at BIT
            Mesra.
            <br /> */}
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Painting and Sketching
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books (most preferred genre: Fantasy and Fiction)
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Passionate about building meaningful and impactful technology."{" "}
          </p>
          <footer className="blockquote-footer">Vishnupriya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
