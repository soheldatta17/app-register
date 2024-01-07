import React ,{useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

import item1Image from '../../Assets/item1.jpg';
import item2Image from '../../Assets/item2.png';
import item3Image from '../../Assets/item3.jpg';
// import { useState } from "react";

function Projects() {
  const [showDetails, setShowDetails] = useState("More");

  const handleButtonClick = () => {
    if (showDetails == "More") {
      setShowDetails("Less")
    }
    else {
      setShowDetails("More")
    }
  };
  return (
    <>
    <header>
        <div className="section__container header__container">



        </div>
      </header>

    <section className="trip">
        <div className="section__container trip__container">
          <h2 className="section__title">Pick your order now!</h2>
          <br/>
          <p className="section__subtitle">
            Find the best deals for your meals.
          </p>
          <div className="trip__grid">
            <div className="trip__card">
              <img src={item1Image} alt="item1" />
              <div className="trip__details">
                <p>Breakfast </p>
                <div className="rating"><i className="ri-star-fill"></i> 4.2</div>
                <div className="booking__price">
                  <div className="price"><span>Starts from</span> ₹300</div>
                  <button className="book__now">Order Now</button>
                </div>
              </div>
            </div>
            <div className="trip__card">
              <img src={item2Image} alt="item2" />
              <div className="trip__details">
                <p>Meals</p>
                <div className="rating"><i className="ri-star-fill"></i> 4.5</div>
                <div className="booking__price">
                  <div className="price"><span>Starts from</span> ₹450</div>
                  <button className="book__now">Order Now</button>
                </div>
              </div>
            </div>
            <div className="trip__card">
              <img src={item3Image} alt="item3" />
              <div className="trip__details">
                <p>Beverages</p>
                <div className="rating"><i className="ri-star-fill"></i> 4.7</div>
                <div className="booking__price">
                  <div className="price"><span>Starts from</span> ₹199</div>
                  <button className="book__now">Order Now</button>
                </div>
              </div>
            </div>
            <div className="trip__card" style={{ display: showDetails == "Less" ? 'block' : 'none' }}>
              <img src={item3Image} alt="item3" />
              <div className="trip__details">
                <p>Beverages</p>
                <div className="rating"><i className="ri-star-fill"></i> 4.7</div>
                <div className="booking__price">
                  <div className="price"><span>Starts from</span> ₹199</div>
                  <button className="book__now">Order Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="view__all">
            <button onClick={handleButtonClick}>View {showDetails}</button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="section__container footer__container">
          <div className="footer__col">
            <h3>Foodies<span>.</span></h3>
            <p>
              A feast for the eyes, a symphony for the senses.
            </p>
          </div>
          <div className="footer__col">
            <h4>Support</h4>
            <p>FAQs</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact Us</p>
          </div>
          <div className="footer__col">
            <h4>Address</h4>
            <p>
              <span>Address:</span> Airport, Kolkata, West Bengal
            </p>
            <p><span>Email:</span> soheldatta17@gmail.com </p>
            <p><span>Phone:</span> +91 9748886527</p>
          </div>
        </div>
        <div className="footer__bar">
          Copyright © 2024 Sohel. All rights reserved.
        </div>
      </footer>
    </>

  );
}

export default Projects;
