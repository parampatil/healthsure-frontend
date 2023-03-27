import React, { Component } from 'react';
import '../../../../node_modules/materialize-css/dist/css/materialize.min.css';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import BiotechIcon from '@mui/icons-material/Biotech';
import WheelchairPickupIcon from '@mui/icons-material/WheelchairPickup';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';


class Explore extends Component {
  render() {
    return (
      <section id="explore" className="section section-icons grey lighten-4 center">
        <div className="container">
          <h4 className="center"><span className="green-text darken-1">Explore</span> HealthSure</h4>
          <div className="row">
            <div className="col s6 m3">
              <div className="card-panel hoverable">
                <VaccinesIcon sx={{ fontSize: 50 }}/>
                <h4>Vaccination</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, velit.</p>
              </div>
            </div>
            <div className="col s6 m3">
              <div className="card-panel hoverable">
                <BiotechIcon sx={{ fontSize: 50 }}/>
                <h4>Lab Tests</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, velit.</p>
              </div>
            </div>
            <div className="col s6 m3">
              <div className="card-panel hoverable">
                <WheelchairPickupIcon sx={{ fontSize: 50 }} />
                <h4>Medical Assistance</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, velit.</p>
              </div>
            </div>
            <div className="col s6 m3">
              <div className="card-panel hoverable">
                <PermPhoneMsgIcon sx={{ fontSize: 50 }} />
                <h4>Online Consulting</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, velit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Explore;