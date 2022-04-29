/*
 * Project: Jacqueline Taylor & Friends
 *
 * Created on Sun Apr 24 2022
 *
 * Filename: index.js
 *
 * Copyright (c) 2022 Bujisoft
 */

//import Mbhead from '../components/Mbhead';
import Layout from '../components/Layout';
import Header3 from '../components/Header3';
import Footerx from '../components/Footerx';
//import Layout from "../components/Layout";
//import Header from "../components/Header";
import Hero from "../components/Hero";
import Feature from '../components/Feature';
import Service from '../components/Service';
import About from '../components/About';
import Webinar from '../components/Webinar';
//import Footer from '../components/Footer';
const Index = () => {
  return (
    <Layout pageTitle="Jacqueline Taylor & Friends">
      <Header3 />
      <Hero />
      <Webinar />
      <Feature/>
      <Service />
      <About />
      
      <Footerx />
    </Layout>
  )
}

export default Index;