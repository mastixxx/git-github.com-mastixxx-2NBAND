import React, {Component} from 'react';
import './my-header.css';

class MyHeader extends Component{
  render (){
    return (
      <header className="masthead text-center text-white d-flex">
        <div className="container my-auto">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <h1 className="text-uppercase">
                <strong>2N BAND<br/>Energie pro vaši párty</strong>
              </h1>
              <hr/>
            </div>
            <div className="col-lg-8 mx-auto">
              <p className="text-faded mb-5">Pořádáte večírek, svatbu nebo narozeninovou oslavu a hledáte živou hudbu? Pak jste na správném místě s námi se zaručeně nudit nebudete!</p>
              <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Kdo jsme</a>
            </div>
          </div>
        </div>
      </header>


    );
  }

}
export default MyHeader;
