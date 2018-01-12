import React, { Component } from 'react';

class Footer extends Component {

	 constructor(props) {
						    super(props);
						    this.state = {value: ''};

						    this.handleChange = this.handleChange.bind(this);
						    this.handleSubmit = this.handleSubmit.bind(this);
						  }
  handleChange(event) {
						    this.setState({value: event.target.value});
						  }

						  handleSubmit(event) {
						    alert('A name was submitted: ' + this.state.value);
						    event.preventDefault();
						  }


  render() {
    return (
    
    <footer>

        <div className="col col-12 py2 px3">
        	<div className="col col-12 lg-col-2 s-center">
        		<h1 className="Poppin black3 caps ls2 f18">Products</h1>
        		<ul className="list-reset Montserrat f14 black6 lh1-8">
        			<li className="">Content Maker</li>
        			<li className="">Digital Marketing</li>
        			<li className="">Logo Design</li>
        			<li className="">Website Development</li>
        		</ul>
        	</div>
        	<div className="col col-12 lg-col-3 s-center">
        		<h1 className="Poppin black3 caps ls2 f18">Advertising Tips</h1>
        		<ul className="list-reset Montserrat f14 black6 lh1-8">
        			<li className="">How to Boost Sales</li>
        			<li className="">How to increasing user enggament</li>
        			<li className="">Content Maker</li>
        			<li className="">Content Maker</li>
        		</ul>
        	</div>
        	<div className="col col-12 lg-col-3 s-center">
        		<h1 className="Poppin black3 caps ls2 f18">KNVM.</h1>
        		<ul className="list-reset Montserrat f14 black6 lh1-8">
        			<li className="">Free Maintenance</li>
        		</ul>
        	</div>

        	<div className="col col-12 lg-col-4 s-center">
        		<div className="col col-12 py4">
				<form onSubmit={this.handleSubmit}>
					<label>
						<input type="text" value={this.state.value} onChange={this.handleChange} className="textemail"/>
					</label>
						<input type="submit" value="Submit" className="gosubmit"/>
				</form>
				<p className="Montserrat f14 black3">
					Sign up for exclusive offers, tips & latest product info and receive 15% off your first purchase.
				</p>
        		</div>
        	</div>

        	<div className="col col-12">
        		<div className="col col-12 lg-col-6 s-center">

        			<ul className="list-reset">
        				<li className="inline-block mr1">
        					<img src={require('assets/images/facebook.png')} className="img-fluid img-sosmed" alt="sosmed"/>
        				</li>
        				<li className="inline-block mr1">
        					<img src={require('assets/images/google-plus.png')} className="img-fluid img-sosmed" alt="sosmed"/>
        				</li>
        				<li className="inline-block mr1">
        					<img src={require('assets/images/instagram.png')} className="img-fluid img-sosmed" alt="sosmed"/>
        				</li>
        				<li className="inline-block">
        					<img src={require('assets/images/twitter.png')} className="img-fluid img-sosmed" alt="sosmed"/>
        				</li>
        			</ul>

        		</div>
        		<div className="col col-12 lg-col-6 s-center pt2">
        			<img src={require('assets/images/logo.png')} className="img-fluid right s-center" alt="logo"/>
        		</div>
        	</div>

        </div>
			<div className="col col-12 py1 bg-black Montserrat center f12 white">
        		KNVM. 2018
        	</div>
    </footer>
    		
    );
  }
}

export default Footer;
