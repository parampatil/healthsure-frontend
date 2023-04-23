import React from 'react'

const Contact = () => {
  return (
    <div className="container-fluid bg-success">
        <h2 className="text-center text-light p-3">CONTACT</h2>
        <div className="row text-light p-3">
            <div className="col-sm-5">
            <p>Contact us and we'll get back to you within 24 hours.</p>
            <p><span className="fa fa-map-marker"></span> Chicago, US</p>
            <p><span className="fa fa-phone"></span> +00 1515151515</p>
            <p><span className="fa fa-envelope"></span> myemail@something.com</p>
            </div>
            <div className="col-sm-7">
            <div className="row">
                <div className="col-sm-6 form-group p-3">
                <input className="form-control" id="name" name="name" placeholder="Name" type="text" required />
                </div>
                <div className="col-sm-6 form-group p-3">
                <input className="form-control" id="email" name="email" placeholder="Email" type="email" required />
                </div>
            </div>
            <div className="row p-3">
                <textarea className="form-control " id="comments" name="comments" placeholder="Comment" rows="5"></textarea><br/>
            </div>
            <div className="row">
                <div className="col-sm-12 form-group p-3">
                    <button className="btn btn-light pull-right w-25" type="submit">Send</button>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Contact