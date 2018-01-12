import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

//components
import Header from './components/headerComponents/header';
import Footer from './components/footerComponents/footer';
import Homepage from './components/pages/homePage';
import Portfolio from './components/pages/portfolio';

//includes
import './assets/css/default.css';

class App extends Component {
  render() {
    return (
    <Router>
    <div className="App">
    <Header />

      <Route exact path='/' component={Homepage} />
      <Route exact path='/Portfolio' component={Portfolio} />

    <Footer />

    </div>
    </Router>
    );
  }
}

export default App;
