import '../public/css/bootstrap.min.css';
import 'animate.css';
import '../public/css/flaticon.css';
import '../public/css/fontawesome.min.css';
import '../node_modules/react-modal-video/css/modal-video.min.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import '../public/css/style.css';
import '../public/css/responsive.css';

import App from 'next/app';
import Head from 'next/head';
import React from 'react';
//import Loader from '../components/Shared/Loader'; 
import GoTop from '../components/Shared/GoTop';

function MyApp ({ Component, pageProps }) {
    return <Component { ...pageProps } />
}

export default MyApp