import React from "react";
import { Row, Col, Carousel } from "antd";

export default function TechnicalAllias() {
  return (
    <div className="container-fluid alliance">
      <div className="container" style={{ textAlign: "center" }}>
        <div className="core-text">
          <h2>
            Technology <span>Alliances</span>
          </h2>
        </div>
        <div class="carousel">
            <div class="logos"></div>
            <div class="mask"></div>
          </div>
      </div>
    </div>
  );
}
