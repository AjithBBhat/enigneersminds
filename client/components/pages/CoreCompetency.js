import React from "react";
import { Row, Col } from "antd";

export default function CoreCompetency() {
  return (
    <>
<div>
  <div className="bg" />
  <div className="bg bg2" />
  <div className="bg bg3" />
</div>

      <div className="container-core">
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div className="core-text">
              <h2>Core Competence</h2>
              <p>Simple and Transformative.</p>
            </div>
            <div className="intro-text-2">
              &nbsp;
              <p>
                Domain expertise, deep contextual understanding enables you to
                stay competitive, and delight you customers.
              </p>
              &nbsp;
              <p>
                Delivering customized solutions mapped to business outcomes and
                operational efficiencies
              </p>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div className="intro-img">
              <img
                src="/images/Core_Competence.webp"
                className="img-fluid"
                alt="intro-image"
              />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
