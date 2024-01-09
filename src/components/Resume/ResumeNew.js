import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function Menu() {


  return (
    <>
      <header>
        <div className="section__container header__container">



        </div>
      </header>
      <br /><br />
      <div className="menu">
        <img src="https://i.etsystatic.com/31797376/r/il/37daa7/3605172923/il_fullxfull.3605172923_3ixq.jpg" alt="" className="imagemenu" />
        <Button
          variant="primary"
          style={{ maxWidth: "250px", marginBottom: "2rem", marginTop: "2rem" }}
        >
          <a
            href="https://i.etsystatic.com/31797376/r/il/37daa7/3605172923/il_fullxfull.3605172923_3ixq.jpg"
            download="menu_image.jpg"
            target="_blank"
            style={{ color: 'inherit', textDecoration: 'inherit' }}
          >
            Download Menu
          </a>
        </Button>

      </div>

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

export default Menu;
