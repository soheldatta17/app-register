import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiPython, DiGit, DiJava, DiCss3Full, DiHtml5, DiNpm } from "react-icons/di";
import { SiNumpy, SiPandas } from "react-icons/si";
import { GoGraph } from "react-icons/go"
import { GrMysql } from "react-icons/gr"
import { BsFillCSquareFill } from "react-icons/bs";
function Techstack() {
  const techIcons = [
    <BsFillCSquareFill/>,
    <CgCPlusPlus />,
    <DiJava />,
    <DiPython />,
    <DiGit />,
    <DiHtml5 />,
    <DiCss3Full />,
    <DiJavascript1 />,
    <DiReact />,
    <DiNpm />,
    <DiNodejs />,
    <DiMongodb />,
    <SiNumpy />,
    <SiPandas />,
    <GoGraph />,
    <GrMysql />,
  ];
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* <Icon name="c" size={30} color="#000" /> */}
      {techIcons.map((icon, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          {icon}
        </Col>
      ))}

    </Row>
  );
}

export default Techstack;
