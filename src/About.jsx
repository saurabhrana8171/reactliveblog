import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import Comman from "./Comman";
import Web from "../src/images/about.jpg";

const About = () => {
  return (
              <>
              <Comman name="Welcome to About page " imgsrc={Web}  visit="/contact" btnname="Contact Now"/> </>
         );
}

export default About;
