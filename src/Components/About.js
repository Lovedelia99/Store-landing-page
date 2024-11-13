//separating imports
import React from "react";

import Figure from "react-bootstrap/Figure";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import logo from "../Images/ToyLogo.png";
import img1 from "../Images/ToyLogo.png";
import img2 from "../Images/ToyLogo2.jpg";

//using the figure component
function About() {
  return (
    <div>
      <Figure>
        <Figure.Image width={400} height={400} src={logo} />

        <Figure.Caption
          style={{
            width: "800px",
            fontSize: "30px",
            color: "white",
          }}
        >
          Welcome to our toy store, a magical place where imagination comes to
          life! We offer a wide variety of toys for children of all ages. From
          cuddly stuffed animals to exciting building sets, every toy is chosen
          with care to inspire creativity and fun. Our friendly staff is here to
          help you find the perfect toy, whether it's for a birthday, a special
          occasion, or just because. We believe that play is important for
          learning and happiness, and we want to make every child's playtime
          special. What kind of toys do you like the most?
        </Figure.Caption>
      </Figure>

      {/* using bootstrap to make page more attractive */}
      <Container fluid>
        <hr />
        <Row>
          <Col xs={6}>
            <img style={{ width: "700px" }} src={img2} />
          </Col>
          <Col className="about">
            Toys are very important for children because they help them learn
            and grow. When children play with toys, they use their imagination,
            which helps them think creatively. Toys also encourage children to
            explore the world around them. For example, building blocks can help
            them understand shapes and sizes, while dolls can teach them about
            friendship and caring. Playing with toys also helps children develop
            social skills when they play with friends or family. Overall, toys
            make playtime fun and support early learning in many ways. What was
            your favorite toy when you were a child?
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="about" style={{ marginLeft: "30px" }}>
            When children play with toys, they experience many positive things.
            First, they use their imagination to create stories and adventures.
            This helps them develop their creativity and problem-solving skills.
            Second, playing with toys can improve their fine motor skills, like
            building with blocks or drawing. Third, when children play together,
            they learn how to share, take turns, and communicate with each
            other. This is important for building friendships and social skills.
            Overall, playing with toys helps children learn about themselves and
            the world around them. What type of play do you think is most fun
            for kids?
          </Col>
          <Col xs={6}>
            <img style={{ width: "600px" }} src={img1} />
          </Col>
        </Row>
      </Container>

      {/* making a footer for the contact details */}
      <div className="footer">
        <Container>
          <Row className="col">
            <Col>Contact us:</Col>
          </Row>
          <Row className="col">
            <Col>Phone:</Col>
            <Col>Email:</Col>
            <Col>Location:</Col>
          </Row>
          <Row className="col">
            <Col> 011 165 22</Col>
            <Col style={{ textDecoration: "underline" }}>
              PlaytimePalace.com
            </Col>
            <Col> 10 Bryanston, Johannesburg</Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default About;
