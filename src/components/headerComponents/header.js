import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (

        <header>
        <div className="col col-12 px3 bg-black">
            

            <div className="col col-12 lg-col-4 py2 s-center">
                <img src={require('assets/images/logo1.png')} className="img-fluid" alt="logo"/>
            </div>
            <div className="col col-12 lg-col-8 py2 s-center">
            <nav>
                <ul className="list-reset right white roboto s-center">
                    <li className="inline-block mr2">
                         <Link to="/">Home</Link>
                    </li>
                    <li className="inline-block mr2">
                        <Link to="/Portfolio">Portfolio</Link>
                    </li>
                    <li className="inline-block">
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </nav>  
            </div>
        </div>

        </header>

        );
}
}

export default Header;
