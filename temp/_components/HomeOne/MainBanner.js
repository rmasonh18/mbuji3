import React, { Component } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import BannerImage from '../../public/images/main-banner.png'

class MainBanner extends Component {
    render() {
        return (
            <div className="main-banner">
                 <Image
                     src={BannerImage}
                     alt="Picture of the author"

                    //responsive layout
                    layout="responsive"
                    width={700}
                    height={475}
        //layout="fill"
        //width={5600} //automatically provided
        // height={1373} //automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />

                <div className="d-table">
                 
                    <div className="d-table-cell">
                      
                        <div className="container-fluid">
                          
                            <div className="main-banner-content">
                             
                              
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );






                

        
    
    }
}

export default MainBanner;