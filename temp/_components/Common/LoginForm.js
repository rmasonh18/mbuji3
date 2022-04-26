import React, { Component } from 'react';

import Script from 'next/script'


class LoginForm extends Component {
    render() {
        return (
            <>
            

                

              {/* TODO: Add login widget */}
              <Script type='text/javascript' src='https://app.mymusicstaff.com/Widget/v2/Login.ashx'
              strategy='beforeInteractive'></Script>
            
                
             
            </>
        );
    }
}

export default LoginForm;