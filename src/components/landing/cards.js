import React from "react";
import CardItem from "./carditem";
import "./cards.css";

function Cards() {
  return (
    <div className="cards">
        <h1>Collaborate Features - Learn More</h1>
       <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem 
                 src="/education.jpg"
                 text="Stay on track! Connect and share content with friends"
                 label="Education"
                 path="/"
            />
              <CardItem 
                 src="/enterprise.jpg"
                 text="Track work history! Start and plan video meetings and webinars"
                 label="Enterprise"
                 path="/"
            />
              <CardItem 
                 src="/cloud.jpg"
                 text="Complete and reliable access to all of your content, anywhere at anytime!"
                 label="FlipSetter Cloud"
                 path="/"
            />
          </ul>
        </div>
       </div>
    </div>
  );
}

export default Cards;