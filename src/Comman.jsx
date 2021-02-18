import React from "react";
import { NavLink } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';




const Comman = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">


              
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>{props.name} 
                  <strong className="brand-name">Saurabh Rana</strong>
                  </h1>
                <h2 className="my-3">
                  we are the team talented developer making websites
                  </h2>
                <div className="mt-3">
                  <NavLink to={props.visit} className=" btn-get-started ">{props.btnname} </NavLink>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-12 header-img">
                <img src= {props.imgsrc} className="img-fluid animated" alt="myimg"/>
              </div>
              </div>
            </div>
          </div>
        </div>


      </section>
    </>
  );
}

export default Comman;
