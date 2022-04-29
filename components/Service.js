import React from 'react';
import { Container, Row, Col } from "reactstrap";

const Service = () => {
  const services = [
    { title : "Tutoring",
     desc : "Private online or in person cello lessons." },
    { title : "Chamber Music", 
    desc : "Chamber Group Music available for your special event from Dinner Parties to Weddings" },
    { title : "Chistian", 
    desc : "Sacred Music available for your service including holiday solo or group as needed to praise the Lord." },
   /*  { title : "Lorem Ipsum",
     desc : "Lorem Ipsum has been the industry standard dummy text ever since the 1500s" },
    { title :
       "Lorem Ipsum", desc : "Lorem Ipsum has been the industry standard dummy text ever since the 1500s" },
    { title : 
      "Lorem Ipsum", desc : "Lorem Ipsum has been the industry standard dummy text ever since the 1500s" },
   */
    ]
  
  return (
    <section className="section" id="service">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark"><span className="text-warning">Services</span></h3>
              <p className="text-muted"></p>
            </div>
          </Col>
        </Row>
        <Row>
          {
            services.map((service, key) =>
              <Col key={key} lg={4} md={6}>
                <div>
                  <div className="mb-5">
                      <i className={service.icon}></i>
                  </div>
                  <h5 className="text-dark font-weight-normal pt-1 mb-4">{service.title}</h5>
                  <p className="text-muted mb-4">{service.desc}</p>
                </div>
              </Col>
            )
          }
        </Row>
      </Container>
    </section>
  );
}

export default Service;