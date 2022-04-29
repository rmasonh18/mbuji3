import React from 'react';
import { Container, Row, Col } from "reactstrap";


const About = () => {

  return (
    <section className="section bg-light" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">About <span className="text-warning">Us</span></h3>
              <p className="text-muted"></p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h2 className="font-weight-light line-height-1_6 text-dark mb-4">Jacqueline Taylor & Friends</h2>
          </Col>
          <Col md={{ size:7, offset :1 }}>
            <Row>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">Our Mission</h6>
                <p className="text-muted font-weight-light">
                    Jacqueline Taylor & Friends strive to give students an intensive professional
                    education by preparing students with a solid foundation in music. We strive to use technology 
                    to deliver the highest quality music instruction
                    and performance opportunity.
            
                </p>
              </Col>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">Our Vision</h6>
                <p className="text-muted font-weight-light">
                Our music tutoring service aims to provide all students with a high quality music education
                which engages and inspires them to develop a life-long love of music, increase their
                self confidence, creativity and imagination.
                
                 </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;