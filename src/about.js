import React, {Component} from 'react';
import './about.css';

class About extends Component{
  render (){
    return (
      <section className="bg-primary" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto text-center">
              <h2 className="section-heading text-white">Parta sehraných muzikantů</h2>
              <hr className="light my-4"/>
              <p className="text-faded mb-4">Hrajeme spolu už přes deset let a nebojíme se žádných akcí, ať už jde o svatbu,
                 firemní večírek, narozeniny nebo akce pro širokou veřejnost. Můžeme pro vás hrát klidně jen hodinu, ale raději máme akce, když se hraje až do rána :-). Máme rádi muziku, která šlape a tak
                  buďte připraveni na příval energie od první minuty našeho vystoupení a vězte že s námi se nudit nebudete, to ale neznamená že nedovedeme správnně procítěně zahrát i věci pomalejší.
                   Zajistíme pro vás kompletní servis včetně ozvučení a světel od malé párty, až po akce pro stovky lidí.
                </p>
              <a className="btn btn-light btn-xl js-scroll-trigger" href="#kapela">Více o kapele</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
