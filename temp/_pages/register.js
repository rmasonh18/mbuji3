import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
//import Footer from '../components/Layouts/Footer';
import Script from 'next/script'

class Register extends Component {
    render() {
        return (
            <>
                <Navbar /> 

                <PageBanner 
                    pageTitle="" 
                    homePageUrl="/" 
                   
                    bgImgClass="item-bg1" 
                />  

              {/* TODO Add Register widget here */}
              <Script type='text/javascript' src='https://app.mymusicstaff.com/Widget/v3/Registration.ashx?id=sch_3pcJ4' class='sb_registration'></Script>
                
                {/* <Footer/> */}
            </>
        );
    }
}

export default Register;