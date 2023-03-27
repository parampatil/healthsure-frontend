import React, { Component } from 'react';
import '../../../../node_modules/materialize-css/dist/css/materialize.min.css';
import EmailIcon from '@mui/icons-material/Email';

class Contact extends Component {
  render() {
    return (
      <section id="contact" className="section section-contact scrollspy">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <div className="card-panel purple white-text center">
                {/* <i className="material-icons medium">email</i> */}
                <EmailIcon sx={{ fontSize: 100 }}/>
                <h5>HealthSure Address</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus sed praesentium delectus. Sit, mollitia
                  quo. Veniam repellat voluptas ipsum doloremque?</p>
              </div>
              <ul className="collection with-header">
                <li className="collection-header">
                  <h4>Main Office</h4>
                </li>
                <li className="collection-item">HealthSure Booking</li>
                <li className="collection-item"><i className="fas fa-map-marker-alt"></i> 123 Checkout rd, California, US</li>
                <li className="collection-item"><i className="fas fa-phone"></i> (800) 123-4567</li>
                <li className="collection-item"><i className="fas fa-envelope-square"></i> booking@HealthSure.com</li>
              </ul>
            </div>
            <div className="col s12 m6">
              <div className="card-panel grey lighten-3">
                <h5>Please fill out this form</h5>
                <form>
                  <div className="input-field">
                    <input type="text" id="name" className="validate" />
                    <label htmlFor="name" className="purple-text">Name</label>
                  </div>
                  <div className="input-field">
                    <input type="email" id="email" />
                    <label htmlFor="email" className="purple-text">Email</label>
                  </div>
                  <div className="input-field">
                    <input type="text" id="phone" />
                    <label htmlFor="phone" className="purple-text">Phone</label>
                  </div>
                  <div className="input-field">
                    <textarea className="materialize-textarea" id="message" data-length="120"></textarea>
                    <label htmlFor="message" className="purple-text">Message</label>
                  </div>
                  <input type="submit" value="Submit" className="btn purple" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;