import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';

import Script from 'next/script'

//import Footer from '../components/Layouts/Footer';
import Head from 'next/head';
//import Loader from '../components/Shared/Loader'; 
class Login extends Component {
    render() {
        return (
            <>
            
           



                 <Navbar /> 

                <PageBanner 
                    pageTitle="" 
                    homePageUrl="/" 
                    homePageText="" 
                    activePageText="" 
                    bgImgClass="item-bg1" 
                />  
                <br></br>


                 <Script async type='text/javascript' src='https://app.mymusicstaff.com/Widget/v2/Login.ashx'></Script> 


             
             
                
                 {/* <Footer/>  */}
                
             
            </>
        );
    }
}

export default Login;