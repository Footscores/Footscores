import axios from 'axios';
import React, {Component} from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import '../style/App.css';
import Intento from './intento';

import  Guesses  from '../api/collections/guesses.js';


class Profile extends Component {

    constructor(props) {
      super(props)
      this.state = {
        hayIntentos:true,
        intentos:[{id:1,team:'hola'}]

      }
    }

    render() {
      const estaLleno = this.state.hayIntentos;
        return (
            <div>
              <div className='row' id="profileBackPic">
                <div className='col-md-4'>
                  <div className="boxProfile">
                      <img alt='Imagen de Perfil' src='img/avatar.jpg' id='profilePic' className='img-responsive'></img>
                      <div className='row'>
                        <h4 id='profileName'>Felipe Martinez</h4>
                      </div>
                      <hr className="content-divider-profile"></hr>
                      <h4>Estadísticas:</h4>
                      <div className='row'>
                        <div className='col-md-6'>
                          <h5 className='statsTittle'>Mejor Racha</h5>
                        </div>
                        <div className='col-md-6'>
                          <h5 className='stat'>12</h5>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-md-6'>
                          <h5 className='statsTittle'>Racha Actual</h5>
                        </div>
                        <div className='col-md-6'>
                          <h5 className='stat'>2</h5>
                        </div>
                      </div>
                  </div>
                </div>
                <div className='col-md-8'>
                  <div className='row'>
                    <div className='col-md-12'>
                      <h2 id='header-historial'>Historial de Intentos</h2>
                    </div>
                  </div>
                  <div className='row'>
                    {estaLleno ? (this.state.intentos.map(intento =>{
                      return <Intento key={intento.id} intento={intento} />
                    }) )
                    : (<h3>No se han realizado intentos todavia</h3>)}
                  </div>
                </div>

              </div>
            </div>
        );
    }
}
export default createContainer(() => {
  console.log('hola');
  return {
    intentos: Guesses.find({}).fetch(),
  };
}, Profile);
