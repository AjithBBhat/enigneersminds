import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
export default function SubSection2() {
  return (
    <>
      <section
        className="greenlighting-section"
        style={{
          backgroundImage: `url("../images/Digital_Transformation.webp")`,
        }}
      >
        <div className="impact-container-green">
          <h1 style={{ color: "#2764a3" ,fontSize:"4vw", fontFamily:"Roboto-Thin",}}>
            <strong style={{color:"black" ,fontFamily:"Roboto-Regular"}} >
              Greenlighting Your <br />
            </strong >
            Success Journey
          </h1>
          <div style={{lineHeight:"0.4",fontSize:"2vw", fontFamily:"Roboto-Thin"}}>
          <p> Your Enhancing operational efficiencies;</p>
          <p>Architecting strategic business outcomes.</p>
          </div>


          <div className="test" style={{ color: "black" }}>
            <div className="bar"></div>
            <div className="content">
              <p
                style={{ color: "black", fontSize: "3vw", marginBottom: "0px" }}
              >
                Digital Transformation
              </p>
              <br/>
              <div style={{lineHeight:"0.4",fontSize:"2vw", fontFamily:"Roboto-Thin"}}>
              <p>Integrate digital technology to business,</p>
              <p>creating value for customers</p>
              </div>
            </div>
          </div>

          <br />
          <br />

          <a href="" target="_blank" style={{color:"white", fontSize:"1.2vw"}}>
            Explore here {<ArrowRightOutlined />}
          </a>
        </div>
      </section>
    </>
  );
}
