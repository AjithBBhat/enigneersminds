import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
export default function SubSection1() {
  return (
    <section
      className="impact-section"
      style={{
        backgroundImage: `url("../images/Financial_Institutions.webp")`,
      }}
    >
      <div className="impact-container">
        <h1>
          <strong>Tailored to </strong> <br />
          Succeed
        </h1>
        <p style={{maxWidth:"550px", fontFamily:"Roboto-Thin"}}>
            Bespoke solutions designed for industries, to increase revenue, gain
            competitive advantage, ehile significantly reducing the cost of
            doing business.
          </p>
        <div className="test">
          <div className="bar"></div>
          <div className="content">
            <p>Financial Services</p>
            <a href="#" className="section-link">
              Impact,<span> </span>
            </a>
            <a href="#" className="section-link">
              Solutions,<span> </span>
            </a>
            <a href="#" className="section-link">
              Tech Leadership
            </a>
          </div>
        </div>

        <br />

        <a href="" style={{color:"white", fontSize:"1.2vw"}}>
          Learn more {<ArrowRightOutlined />}
        </a>
      </div>
    </section>
  );
}
