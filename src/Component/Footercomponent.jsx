import React from 'react'
import { Link } from "react-router-dom";

const Footercomponent = () => {
  return (
    <>
     <div className="footer bg-success text-white text-center py-5">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <h6>ABOUT US</h6>
            <p>Company Profile</p>
          
          </div>
          
          <div className="col-3">
            <h6>PRODUCTS</h6>
            <p>Herbicides</p>
            <p>Growth</p>
            <p>Fungicides</p>
          
          </div>
          <div className="col-3">
            <h6>CONTACT US</h6>
          
          </div>
          <div className="col-3">
            <h6>Social Media</h6>
            <div className="d-flex justify-content-center pt-2 text-center">
              <Link className="btn btn-outline-light btn-social" to="">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link className="btn btn-outline-light btn-social" to="">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link className="btn btn-outline-light btn-social" to="">
                <i className="fab fa-youtube"></i>
              </Link>
              <Link className="btn btn-outline-light btn-social" to="">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
          
          </div>
          </div>
      </div>

      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              Copyright © 2024
             
            </div>
            <div className="col-md-6 text-center text-md-end">
              Designed By 
              <Link
                className="border-bottom px-1"
                to="https://rishusinfotech.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                 Rishus Infotech
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Footercomponent