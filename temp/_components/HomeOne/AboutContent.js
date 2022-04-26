import React, { Component } from 'react';
import Link from 'next/link';
import Profile from '../../public/images/jt.jpg'
import Image from 'next/image'
/* eslint-disable */

class About extends Component {
    render() {
        return (
            <section className="about-area ptb-110">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                               {/* <img src="/images/jt2.jpg" alt="image" /> */}
                                {/* <img src="/images/jt.jpg" alt="image" /> */}
                                <Image
                                    src={Profile}
                                     alt="Picture of the author"

                                        //responsive layout
                                        layout="responsive"
                                        width={360}
                                        height={360}
                                        //layout="fill"
                                        //width={5600} //automatically provided
                                        // height={1373} //automatically provided
                                        // blurDataURL="data:..." automatically provided
                                        // placeholder="blur" // Optional blur-up while loading
                                    />
    
                                
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <h2>Private Virtual Cello Lessons</h2>
                                <p>Jacqueline provides one on one private lessons using the best of today's technology.</p>
                                <p>Don't worry about your busy schedule to get your child to his/her lesson. A lesson can be scheduled in the comfort of your home and scheduled to meet your demanding schedule as your child does not have to travel to the studio for a lesson.</p>

                                <Link href="/coming-soon">
                                    <a className="btn btn-primary">Discover More</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="shape-img1">
                    <img src="/images/shape/shape1.png" alt="image" />
                </div>
                <div className="shape-img2">
                    <img src="/images/shape/shape2.svg" alt="image" />
                </div>
                <div className="shape-img3">
                    <img src="/images/shape/shape3.png" alt="image" />
                </div>
                <div className="shape-img4">
                    <img src="/images/shape/shape4.svg" alt="image" />
                </div>
                <div className="shape-img5">
                    <img src="/images/shape/shape5.svg" alt="image" />
                </div>
                <div className="shape-img6">
                    <img src="/images/shape/shape6.png" alt="image" />
                </div>
                <div className="dot-shape1">
                    <img src="/images/shape/dot1.png" alt="image" />
                </div>
                <div className="dot-shape2">
                    <img src="/images/shape/dot2.png" alt="image" />
                </div>
            </section>
        );
    }
}

export default About;