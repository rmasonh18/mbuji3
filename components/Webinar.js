import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import webinarImage from '../public/images/swan.png';
import Image from 'next/image'




const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

class Webinar extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <>
                <section className="webinar-area">
                    <div className="m-0 row">
                        <div className="p-0 col-lg-6">
                            <div className="webinar-content">
                                <h2>The Swan</h2>
                            
                                <p> <strong>Encore performance in Brevard NC</strong></p>
                                <h6><italic>Review by Aparition42</italic></h6>

                            <p>I love cello.  You tone is extraoridinarily clear and bright.  I love how animated you are when you play.  Please post more of your performances.</p>
                               
                                {/* <Link href="#">
                                    <a className="btn btn-primary">Watch More</a>
                                </Link> */}
                            </div>
                        </div>

                        <div className="p-0 col-lg-6">
                            <div className="webinar-video-image">
                                <Image 
                                    src={webinarImage}
                                    alt="Picture of the author"
                            
                                    //responsive layout
                                    layout="responsive"
                                    width={716}
                                    height={364}
                                    //layout="fill"
                                    //width={5600} //automatically provided
                                    // height={1373} //automatically provided
                                    // blurDataURL="data:..." automatically provided
                                    // placeholder="blur" // Optional blur-up while loading
                                />
                                <div
                                    onClick={e => {e.preventDefault(); this.openModal()}}
                                    className="video-btn popup-youtube"
                                > 
                                    <i className="flaticon-play-button"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* If you want to change the video need to update below videoID */}
                    <ModalVideo 
                        channel='youtube' 
                        isOpen={this.state.isOpen} 
                        videoId='EmOL5uwuHhM' 
                        onClose={() => this.setState({isOpen: false})} 
                    />
                </section>
            </>
        );
    }
}

export default Webinar;