import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/HomeOne/MainBanner';
import AboutContent from '../components/HomeOne/AboutContent';
import Webinar from '../components/HomeOne/Webinar';
import FreeTrialForm from '../components/Common/FreeTrialForm';
import Footer from '../components/Layouts/Footer';
// TODO: update code

class Index extends Component {
  
    render() {
        return (
            <>



                <Navbar />
                <MainBanner />
                <br></br>
                <AboutContent />
                {/* <FreeTrialForm /> */}
              
                <Webinar />
             
                <Footer />
            </>
        );
    }
}

export default Index;