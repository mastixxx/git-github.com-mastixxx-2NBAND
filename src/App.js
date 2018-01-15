import React, { Component } from 'react';
import './App.css';
import Navigation from './navigation';
import MyHeader from './header';
import About from './about';
import Kapela from './kapela';
import Repertoar from './repertoar';

class App extends Component {
  render() {
    return (
      <div className="App">

<Navigation/>
<MyHeader/>
<About/>
<Kapela/>
<Repertoar/>


<section className="bg-dark text-white" id="contact">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 mx-auto text-center">
        <h2 className="section-heading">Ozvěte se nám!</h2>
        <hr className="my-4"/>
        <p className="mb-5">Plánujete večírek, svatbu nebo oslavu?
        Uvažujete o živé kapele. Ozvěte se nám, ušijeme vám akci na míru!</p>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4 ml-auto text-center">
        <i className="fa fa-phone fa-3x mb-3 sr-contact"></i>
        <p>+420 737 235 896</p>
      </div>
      <div className="col-lg-4 mr-auto text-center">
        <i className="fa fa-envelope-o fa-3x mb-3 sr-contact"></i>
        <p>
          <a href="mailto:mastalir@2n.cz">mastalir@2n.cz</a>
        </p>
      </div>
    </div>
  </div>
</section>

      </div>
    );
  }
}

export default App;
