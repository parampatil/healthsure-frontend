import React, { Component } from 'react';
import Resort1 from '../../../images/banner4.jpg';
import Resort2 from '../../../images/banner5.jpg';
import Resort3 from '../../../images/banner8.jpg';
import { HashLink as Link } from 'react-router-hash-link';

import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

class Popular extends Component {
  render() {
    return (
      <section id="adventure" className="section section-popular scrollspy">
        <div className="container">
          <h4 className="center">
            <span className="purple-text darken-1">HealthSure</span> Insurances
          </h4>
          <div className="row">
            <div className="col s12 m4">
              <div className="card">
                <div className="card-image">
                  <img src={Resort1} alt="" />
                  <span className="card-title">Individual and family</span>
                  <Link class="btn-floating activator halfway-fab waves-effect waves-light purple" href="#"><AddIcon sx={{ fontSize: 40 }} /></Link>
                </div>
                <div className="card-content">
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas aliquid fugiat corporis laudantium, architecto
                    delectus?
                  </p>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">Individual and family<CloseIcon sx={{ fontSize: 40 }}/></span>
                  <p>Here is some more information about this insurance plan</p>
                </div>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="card">
                <div className="card-image">
                  <img src={Resort2} alt="" />
                  <span className="card-title">Medicare</span>
                  <Link class="btn-floating activator halfway-fab waves-effect waves-light purple"><AddIcon sx={{ fontSize: 40 }} /></Link>
                </div>
                <div className="card-content">
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas aliquid fugiat corporis laudantium, architecto
                    delectus?
                  </p>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">Medicare<CloseIcon sx={{ fontSize: 40 }}/></span>
                  <p>Here is some more information about this insurance plan</p>
                </div>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="card">
                <div className="card-image">
                  <img src={Resort3} alt="" />
                  <span className="card-title">Dental</span>
                  <Link class="btn-floating activator halfway-fab waves-effect waves-light purple"><AddIcon sx={{ fontSize: 40 }} /></Link>
                </div>
                <div className="card-content">
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas aliquid fugiat corporis laudantium, architecto
                    delectus?
                  </p>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">Dental<CloseIcon sx={{ fontSize: 40 }}/></span>
                  <p>Here is some more information about this insurance plan</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s12 center">
              <a href="#contact" className="btn btn-large grey darken-3">
                <i className="material-icons left">send</i> Contact For Booking
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Popular;