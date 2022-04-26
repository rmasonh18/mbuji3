import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import AboutContent from '../components/About/AboutContent.js';
import Services from '../components/HomeOne/Services';
import Team from '../components/Common/Team';
import PartnerContent from '../components/Common/PartnerContent';
import FeedbackSlider from '../components/Common/FeedbackSlider';
import PricingCard from '../components/Common/PricingCard';
import FreeTrialForm from '../components/Common/FreeTrialForm';
import Footer from '../components/Layouts/Footer';

class About extends Component {
    render() {
        return (
            <>
                <Navbar/>
                <PageBanner 
                    pageTitle="About Us" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="About Us" 
                    bgImgClass="item-bg1" 
                />  
                <AboutContent />
                <Footer/>
            </>
        );
    }
}

export default About;