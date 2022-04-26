import React, { Component } from 'react';

class FreeTrialForm extends Component {
    render() {
        return (
            <section className="free-trial-area">
                <div className="row m-0">
                    <div className="col-lg-6 col-md-12 p-0">
                        <div className="free-trial-image">
                            <img src="/images/jt2.jpg" alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 p-0">
                        <div className="free-trial-content">
                            <h3> Cello Lessons with Jacqueline</h3>
                                {/* TODO SUBMIT BUTTON WIRE UP */}
                           {/*  <form className="newsletter-form">
                                <input type="email" className="input-newsletter" placeholder="Enter your email here" />
                                <button type="submit">More Info</button>
                            </form>
 */}
                            <p></p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FreeTrialForm;