import React, {Component} from 'react';

class Navigation extends Component{
  render (){
    return (
       // Navigation
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">2N BAND</a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">Nabídka</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#kapela">O Kapele</a>
              </li>

              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#repertoar">Repertoár</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#contact">Kontakt</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    );
  }

}

export default Navigation;
