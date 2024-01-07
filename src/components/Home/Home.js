import React, { useState } from "react";
import storyImage from '../../Assets/story.jpg';

// import "../../App.css"
function Home() {
  
  return (
    <>
      <header>
        <div className="section__container header__container">



        </div>
      </header>
      <div className="header__content">
        <div>
          <p className="sub__header"></p>
          <h1>Welcome to the Foodies</h1>
          <p className="section__subtitle" style={{ marginTop: "4rem", fontWeight: "bolder" }}>
            A feast for the eyes, a symphony for the senses.
          </p>
          <div className="action__btns">
            <div className="story">
              <div className="video__image">
                <img src={storyImage} alt="story" style={{ marginTop: "2rem", fontWeight: "bolder" }} />
                <span><i className="ri-play-fill"></i></span>
              </div>
              <button style={{
                marginTop: "2rem",
                fontWeight: "bolder",
                textAlign: "center",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              >Start planning</button>
              <span style={{ marginTop: "2rem", fontWeight: "bolder" }}></span>
            </div>
          </div>
        </div>

      </div>

      <section className="subscribe">
        <div className="section__container subscribe__container">
          <div className="subscribe__content">
            <h2 className="section__title">Refer your friends to get vouchers</h2>
            <p className="section__subtitle">
              Dine along us!
            </p>
          </div>
          <div className="subscribe__form">
            <form>
              <input type="email" placeholder="Your email here" />
              <button type="submit">Send</button>
            </form>
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

export default Home;
