import React from 'react';
import { Container, Row, Col } from "reactstrap";
import Image from 'next/image';
import Link from 'next/link';


const FeatureBox = (props) => {
  return (
    <>
    {
      props.features.map((feature, key) =>
      (feature.id % 2 !== 0) ?
        <Row key={key} className={feature.id === 1 ? "align-items-center" : "align-items-center mt-5"}>
          <Col md={5} >
            <div>
            <Image 
              src="/images/logo-v.png"
              width={250}
              height={125}
              alt="Jacqueline Taylor & Friends"
            />
              
            </div>
          </Col>
            <Col md={{size:6, offset:1}}>
              <div className="mt-5 mt-sm-0 mb-4">
                <div className="my-4">
                  <i className={feature.icon}></i>
                </div>
                <h5 className="text-dark font-weight-normal mb-3 pt-3">{feature.title}</h5>
                <p className="text-muted mb-3 f-15">{feature.desc}</p>
                <Link href="/signup" passHref>
                <a className="btn btn-warning">Signup Now <span className="ml-2 right-icon">&#8594;</span></a>
              </Link>
              
              
                {/* <a href={feature.link} className="f-16 text-warning">Read More <span className="right-icon ml-2">&#8594;</span></a> */}
              
              </div>
            </Col>
        </Row>
      :
      <Row key={key} className="align-items-center mt-5">
        <Col md={6}>
          <div className="mb-4">
            <div className="my-4">
              <i className="mdi mdi-account-group"></i>
            </div>
            <h5 className="text-dark font-weight-normal mb-3 pt-3">{feature.title}</h5>
            <p className="text-muted mb-3 f-15">{feature.desc}</p>
            <Link href="/signup" passHref>
                <a className="btn btn-warning">Signup Now <span className="ml-2 right-icon">&#8594;</span></a>
              </Link>
            
            {/* <a href={feature.link} className="f-16 text-warning">Read More <span className="right-icon ml-2">&#8594;</span></a> */}
          </div>
        </Col>
        <Col md={{size:5, offset:1}} className="mt-5 mt-sm-0">
          <div>
          <Image 
              src="/images/jt-m.png"
              width={250}
              height={250}
              alt="Jacqueline Taylor & Friends"
            />
            
          </div>
        </Col>
      </Row>
      )
    }
    </>
  );
}

const Feature = () => {

  const features = [
    {id : 1, 
    title : "Calendar Synchronization", 
    desc : "Sync calendar with all your devices so you can keep track of appointments. Students and parents are able to login inm portal to view and sync calendars with their schedules.", 
    link : "/"},
    {id : 2,
    title : "Practice Log",
     desc : "Students are able to record the time spent practicing and able to make notes. The Practice timer can be used manually to add time or students can use the built in timer to log their practice time.", 
     link : "/"},
    {id : 3, 
    title : "Student/Parent Portal", 
    desc : "Students and parents can login anytime to view their upcoming lessons, stream audio/video files, track their practice and more. Parents logins will have access to the Account & Invoices menu where they can make online payments through the portal.", 
    link : "/"},
  ];

  return (
    <section className="section" id="feature">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark"><span className="text-warning">Features</span></h3>
              <p className="text-muted"></p>
            </div>
          </Col>
        </Row>
        <FeatureBox features={features} />
      </Container>
    </section>
  );
}

export default Feature;
