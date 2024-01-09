import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "./menu.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Menu() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <>
    <header>
        <div className="section__container header__container">



        </div>
      </header>
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          
        </Row>

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px",marginBottom: "2rem" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Menu
          </Button>
        </Row>
      </Container>
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
