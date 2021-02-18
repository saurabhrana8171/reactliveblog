import React from "react";
import { NavLink } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


import './App.css';

const Nav = () => {
    return (
        <>
        <div className= "container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                    <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <NavLink exact className="navbar-brand" to="/">Saurabh Rajput</NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                       </button>
                   
                    <div className=" " id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink  activeClassName="menu_active" exact className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink  activeClassName="menu_active" exact className="nav-link active" aria-current="page" to="/service">Service</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink  activeClassName="menu_active" exact className="nav-link active" aria-current="page" to="/contact">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink  activeClassName="menu_active" exact className="nav-link active" aria-current="page" to="/about">About</NavLink>
                            </li>
                           
                           
                        </ul>

                    </div>
                </div>
            </nav>
                    </div>
                </div>

        </div>
         

        </>
    );
}

export default Nav;
