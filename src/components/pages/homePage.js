import React, { Component } from 'react';

class Homepage extends Component {
  render() {
    return (
    
    <div className="col col-12 roboto">
        <div className='col col-12 sangkar'>
        <img src={require('assets/images/banner1.jpeg')} className="img-fluid block" alt="banner"/>
            <div className="text-sangkar"> 
             <h1 className="Montserrat f34 black3">TURN IDEA INTO REALITY</h1>
             <p className="black6 f18 lh1-8">
                Did you have an problem for your business ? <i className="bold"> Okay Nevermind. </i> 
                 Suit up your imagination for your business. We will Create the marketing strategy, boost your brand awarness and take down your enemies
             </p>
            </div>
        </div>
        <div className="col col-12 bg-f4 px3 center py2">
        	<h1 className="f24 black3 Montserrat caps">
        		What We Do
        	</h1>
        	<div className="col col-12 center bg-f4">
                <div className="col col-12">
                <div className="col col-12 md-col-6 lg-col-4 px2">
                    <ul className="list-reset">
                        <li className="block"><img src={require('assets/images/activation.svg')} className="img-fluid block icon img-center" alt="img what" /></li>
                        <li className="block black3 bold Montserrat py2">Social Media Activation</li>
                        <li className="block black6 Montserrat">Managing social media is takes time and effort. Nevermind. We help you handle that</li>
                    </ul>
                </div>
                <div className="col col-12 md-col-6 lg-col-4 px2">
                    <ul className="list-reset">
                        <li className="block"><img src={require('assets/images/film-reel.svg')} className="img-fluid block icon img-center" alt="img what" /></li>
                        <li className="block black3 bold Montserrat py2">Content Creation</li>
                        <li className="block black6 Montserrat">From Photography, Videography, Infographics, Blog Post. We will make it unresistable to your target audience</li>
                    </ul>
                </div>
                <div className="col col-12 md-col-6 lg-col-4 px2">
                <ul className="list-reset">
                        <li className="block"><img src={require('assets/images/protest.svg')} className="img-fluid block icon img-center" alt="img what" /></li>
                        <li className="block black3 bold Montserrat py2">Digital Advertising</li>
                        <li className="block black6 Montserrat">Get your brand heard by creating creative and meaningful campaign for your business.</li>
                    </ul></div>
                </div>    
                <div className="col col-12">
                <div className="col col-12 md-col-6 lg-col-4 px2">
                <ul className="list-reset">
                        <li className="block"><img src={require('assets/images/open-laptop.svg')} className="img-fluid block icon img-center" alt="img what" /></li>
                        <li className="block black3 bold Montserrat py2">Web Development</li>
                        <li className="block black6 Montserrat">Website is a must nowadays. Its the only controllable medium you have for your brand. Keep your customer in touch.</li>
                    </ul>
                </div>

                <div className="col col-12 md-col-6 lg-col-4 px2">
                <ul className="list-reset">
                        <li className="block"><img src={require('assets/images/maps-and-flags.svg')} className="img-fluid block icon img-center" alt="img what" /></li>
                        <li className="block black3 bold Montserrat py2">Brand Identity Strategy</li>
                        <li className="block black6 Montserrat">Logo is only 10% of your brand, Get the complete strategy to tell the world about your organization's vision. Good Business deserve good design</li>
                    </ul>
                </div>

                <div className="col col-12 md-col-6 lg-col-4 px2">
                    <ul className="list-reset">
                        <li className="block"><img src={require('assets/images/satellite-station.svg')} className="img-fluid block icon img-center" alt="img what" /></li>
                        <li className="block black3 bold Montserrat py2">Online Marketing</li>
                        <li className="block black6 Montserrat">Make sure your customer can easily find you. Why Globe Icon? With Internet the world is all connected </li>
                    </ul>
                </div>
                </div>
            </div>



        </div>

        <div className="col col-12">
            <h1 className="center Montserrat caps black3">Meet Our Avenger</h1>
            <div className="col col-12 py2">
                <img src={require('assets/images/nat.jpg')} className="img-fluid block img-center circle" alt="kresnata" />
                <h1 className="black3 Montserrat center mb1">Kresnata Adi Surya</h1>
                <p className="roboto black6 f14 center my0">CTO - Chief Technical Officer</p>
            </div>
        </div>

        <div className="col col-12 sangkar">
            <img src={require('assets/images/14b.jpg')} className="img-fluid block" alt="banner"/>
            <div className="col col-12 f24 Poppin white text-sangkar-tengah">
                <h1>FREE MAINTENANCE FOR ONE YEARS</h1>
            </div>
        </div>

    </div>
    		
    );
  }
}

export default Homepage;
