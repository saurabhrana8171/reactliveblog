import React from "react";
import {  } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import Comman from "./Comman";
import Web from "../src/images/2.jpg";



const Home = () => {
  return (
    <>
    <Comman name=" Grow your business with " imgsrc={Web}  visit="/service" btnname="Get Started"/>
    </>
  );
}

export default Home;
