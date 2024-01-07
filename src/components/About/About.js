import React,{useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import food2Image from '../../Assets/food-2.jpg';
import food3Image from '../../Assets/food-3.jpg';
import food4Image from '../../Assets/food-4.jpg';

function About() {
  const food1Image = "https://png.pngtree.com/thumb_back/fw800/background/20220521/pngtree-aromatic-frappuccino-table-cool-table-cafe-photo-image_45997368.jpg"

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
    <section className="section__container destination__container">
        <div className="section__header">
          <div>
            <h2 className="section__title">Choose from the global palate</h2>
            <p className="section__subtitle">
              Discover delicacies around the globe that suit you and your taste.
            </p>
          </div>
          <div className="destination__nav">
            <span><i className="ri-arrow-left-s-line"></i></span>
            <span><i className="ri-arrow-right-s-line"></i></span>
          </div>
        </div>
        <div className="destination__grid">
          <div className="destination__card">
            <img src={food1Image} alt="food-1" />
            <div className="destination__details">
              <p className="destination__title">Pasta</p>
              <p className="destination__subtitle">Italian Cuisine</p>
            </div>
          </div>
          <div className="destination__card">
            <img src={food2Image} alt="food-2" />
            <div className="destination__details">
              <p className="destination__title">Biryani</p>
              <p className="destination__subtitle">Indian Cuisine</p>
            </div>
          </div>
          <div className="destination__card">
            <img src={food3Image} alt="food-3" />
            <div className="destination__details">
              <p className="destination__title">Sushi</p>
              <p className="destination__subtitle">Japanese Cuisine</p>
            </div>
          </div>
          <div className="destination__card">
            <img src={food4Image} alt="food-4" />
            <div className="destination__details">
              <p className="destination__title">Burger</p>
              <p className="destination__subtitle">American Cuisine</p>
            </div>
          </div>

          <div className="destination__card" style={{ display: showDetails == "Less" ? 'block' : 'none' }}>
            <img src={food1Image} alt="food-1" />
            <div className="destination__details">
              <p className="destination__title">Pasta</p>
              <p className="destination__subtitle">Italian Cuisine</p>
            </div>
          </div>
          <div className="destination__card" style={{ display: showDetails == "Less" ? 'block' : 'none' }}>
            <img src={food2Image} alt="food-2" />
            <div className="destination__details">
              <p className="destination__title">Biryani</p>
              <p className="destination__subtitle">Indian Cuisine</p>
            </div>
          </div>
          <div className="destination__card" style={{ display: showDetails == "Less" ? 'block' : 'none' }}>
            <img src={food3Image} alt="food-3" />
            <div className="destination__details">
              <p className="destination__title">Sushi</p>
              <p className="destination__subtitle">Japanese Cuisine</p>
            </div>
          </div>
          <div className="destination__card" style={{ display: showDetails == "Less" ? 'block' : 'none' }}>
            <img src={food4Image} alt="food-4"/>
            <div className="destination__details">
              <p className="destination__title">Burger</p>
              <p className="destination__subtitle">American Cuisine</p>
            </div>
          </div>
          {/* <div className="view__all">
            <button className="btn" onClick={handleButtonClick}>View {showDetails}</button>
          </div> */}
          
          
        </div>
        <div className="view__all2">
            <button onClick={handleButtonClick}>View {showDetails}</button>
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

export default About;
