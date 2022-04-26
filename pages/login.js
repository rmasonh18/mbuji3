/*
 * Project: Jacqueline Taylor & Friends
 *
 * Created on Sun Apr 24 2022
 *
 * Filename: login.js
 *
 * Copyright (c) 2022 Bujisoft
 */


import Mbhead from '../components/Mbhead';
import Header from '../components/Header';
//import HeaderFooter from '../components/Footer';
import Script from 'next/script';

export default function Login(options) {
  return (
    <main>
      <Mbhead />
      <Header />
      <br></br>
  



  {/* Login Widget Here */}

        
<Script type='text/javascript' src='https://app.mymusicstaff.com/Widget/v2/Login.ashx'></Script>
                
     
    
    </main>
  );
}
