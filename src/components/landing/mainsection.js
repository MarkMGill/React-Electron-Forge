import React from "react";
import "./../../App.css";
import { Button } from "./button";
import { FaWindows, FaApple } from "react-icons/fa";
import ImageSlider from './ImageSlider/ImageSlider';
import { SliderData } from './ImageSlider/SliderData';
import "./mainsection.css";
import './Carousel.css';

function Mainsection() {
  return (
    <div className="maincontainer">
      <img src="/icon.png" alt="icon"/>
      <h2>Consolidate everything into one place</h2>
      <p>Your digital, office and school supplies!</p>
      <div className="main-btns">
        <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
           Download for Windows <FaWindows />
        </Button>
        <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
           Download for MacOS <FaApple />
        </Button>
      </div>
    </div>
  );
}

export default Mainsection;

// upload a different image next time. this is hideous
// Add carousel into this page