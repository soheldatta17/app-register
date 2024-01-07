import React,{useState} from "react";

import gallery1Image from '../../Assets/gallery-1.jpg';
import gallery2Image from '../../Assets/gallery-2.jpg';
import gallery3Image from '../../Assets/gallery-3.jpg';


function Gallery() {
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
          <div className="header__image">

          </div>
          <div className="header__content">
            <div>
              <p className="sub__header"></p>
              <h1> <br /></h1>
              <p className="section__subtitle">
                </p>
              <div className="action__btns">
                <div className="story">
                  <div className="video__image">
                    
                  </div>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="gallary">
        <div className="section__container gallary__container">
          <div className="image__gallary">
            <div className="gallary__col">
              <img src={gallery1Image} alt="gallery-1" />
            </div>
            <div className="gallary__col">
              <img src={gallery2Image} alt="gallery-2" />
              <img src={gallery3Image} alt="gallery-3" />
            </div>
          </div>
          <div className="gallary__content">
            <div>
              <h2 className="section__title">
                Our event gallery
              </h2>
              <p className="section__subtitle">
                Let us make your festivals colourful with our spices.
              </p>
              <button>View All</button>
            </div>
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

export default Gallery;
