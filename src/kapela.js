import React, {Component} from 'react';
import './kapela.css';

class Kapela extends Component{
  render (){
    return (

<section id="kapela">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 text-center">
        <h2 className="section-heading">K vašim službám</h2>
        <hr className="my-4"/>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-sm-4 ">
      <img src='./img/honza-thumb.jpg' className="rounded-circle" alt="adasds"/>
      <h4>Honza</h4>
      <p className="text-muted mb-0"><b>Zpěv, kytara</b>
        ...hře na kytaru a zpěvu se věnuje 20let.
        Oblíbené kapely: Foo Fighters, Biffy Clyro a z českých Krucipusk a nebo Lucie</p>
      </div>
      <div className="col-sm-4">
        <img src='./img/stajmi-thumb.jpg' className="rounded-circle" alt="adasds"/>
        <h4>Martin</h4>
        <p className="text-muted mb-0"><b>Basa, Zpěv</b> a lamač dívčích srdcí
          ...hře na baskytaru a zpěvu se věnuje více než 20let.
          Oblíbené kapely: Beatles asdas sdfsfsdf</p>
      </div>
      <div className="col-sm-4">
        <img src='./img/petr-thumb.jpg' className="rounded-circle" alt="adasds"/>
        <h4>Petr</h4>
        <p className="text-muted mb-0"><b>Kytara, zpěv</b>
          ...hře na kytaru a zpěvu se věnuje 20let.
          Oblíbené kapely: cyxcsv dsfsdfg dfgsdfg dsfg sdf</p>
      </div>
    </div>
      <div className="row">
        <div className="col-sm-4 ">
        <img src='./img/robo-thumb.jpg' className="rounded-circle" alt="adasds"/>
        <h4>Robo</h4>
        <p className="text-muted mb-0"><b>Kytara</b>
          ...hře na kytaru a zpěvu se věnuje 20let.
          Oblíbené kapely: cyxcsv dsfsdfg dfgsdfg dsfg sdf</p>
        </div>
        <div className="col-sm-4">
          <img src='./img/filip-thumb.jpg' className="rounded-circle" alt="adasds"/>
          <h4>Filip</h4>
          <p className="text-muted mb-0"><b>Bicí</b>
            ...největší talent kapely, tohohle bubeníka nezvládne nikdo poslouchat v sedě.
            Oblíbené kapely: cyxcsv dsfsdfg dfgsdfg dsfg sdf</p>
        </div>
        <div className="col-sm-4">
          <img src='./img/danca-thumb.jpg' className="rounded-circle" alt="adasds"/>
          <h4>Danča</h4>
          <p className="text-muted mb-0">Zpěv
            ...zpěvu se věnuje xy let.
            Oblíbené kapely: cyxcsv dsfsdfg dfgsdfg dsfg sdf</p>
        </div>
  </div>
<div className="row">
  <div className="col-sm-12">
<a className="btn btn-primary btn-xl js-scroll-trigger" href="#repertoar">Podívejte se co hrajeme</a>
  </div>
</div>
</div>

</section>



    );
  }
}

export default Kapela;
