import React, {Component} from 'react';
import './repertoar.css';

class Repertoar extends Component{
  render (){
    return (

<section className="bg-primary" id="repertoar">
  <div className="container col-lg-8">
    <h2 className="section-heading text-white">Hrajeme skladby, ktéré máme rádi</h2>
<hr className="light my-4"/>
    <p className="text-faded mb-5">Od interpretů jako např: U2, Metallica, Mňága a Žďorp, BlueEffect, Horký že slíže,
    Rolling Stones, Red Hot Chilli Peppers, Foo Fighters, The Beatles, Queen, Daft Punk,
    Lucie, Audio Slave, Deep Purple, Pink, Guns'n'Roses, Olympic, Lenny Kravitz, Jimi Hendrix, Depeche mode, Kryštof,
    Pink Floyd, Coldplay, Visací zámek, Krucipüsk, 4 Non Blonds, The Black Eyed Peas ...a mnoha další
  </p>
</div>


  <div className="container-fluid p-0">
    <div className="row no-gutters popup-gallery">
      <div className="col-lg-3 col-sm-4">

        <img className="img-fluid" src="./img/bands/acdcc.jpg" alt=""/>

      </div>
      <div className="col-lg-3 col-sm-4">

          <img className="img-fluid" src="img/bands/horkyze.jpg" alt=""/>

      </div>
      <div className="col-lg-3 col-sm-4">

          <img className="img-fluid" src="img/bands/rhcp.jpg" alt=""/>

      </div>
      <div className="col-lg-3 col-sm-4">

          <img className="img-fluid" src="img/bands/mnaga.jpg" alt=""/>

      </div>
      <div className="col-lg-3 col-sm-4">

          <img className="img-fluid" src="img/bands/foocka.jpg" alt=""/>

      </div>
      <div className="col-lg-3 col-sm-4">

          <img className="img-fluid" src="img/bands/stouni.jpg" alt=""/>

      </div>
      <div className="col-lg-3 col-sm-4">

          <img className="img-fluid" src="img/bands/daft-punk.jpg" alt=""/>

      </div>
      <div className="col-lg-3 col-sm-4">

          <img className="img-fluid" src="img/bands/beatles.jpg" alt=""/>

      </div>
      <div className="col-lg-3 col-sm-4">

          <img className="img-fluid" src="img/bands/metallica.jpg" alt=""/>

      </div>
      <div className="col-lg-3 col-sm-4">

          <img className="img-fluid" src="img/bands/hladik.jpg" alt=""/>

      </div>
      <div className="col-lg-3 col-sm-4">

          <img className="img-fluid" src="img/bands/u2.jpg" alt=""/>

      </div>
      <div className="col-lg-3 col-sm-4">

          <img className="img-fluid" src="img/bands/queen.jpg" alt=""/>

      </div>
    </div>
  </div>
</section>
);
}
}

export default Repertoar;
