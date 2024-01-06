import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import "../../App.css"

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
        <header>
                <div className="section__container header__container">
                    <div className="header__image">

                    </div>
                    <div className="header__content">
                        <div>
                            <p className="sub__header">Dine along us</p>
                            <h1>Welcome to the <br />Foodies</h1>
                            <p className="section__subtitle">
                                A feast for the eyes, a symphony for the senses.
                            </p>
                            <div className="action__btns">
                                <button className="btn">Start planning</button>
                                <div className="story">
                                    <div className="video__image">
                                        {/* <img src={storyImage} alt="story" /> */}
                                        <span><i className="ri-play-fill"></i></span>
                                    </div>
                                    <span>View food reviews</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
