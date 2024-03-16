import ParallaxImage from "./ParallaxImage";
import { Row, Col } from "antd";
import {
  UsergroupAddOutlined,
  ApiOutlined,
  LinkedinOutlined,
  CopyrightOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

const Footer = () => (
  <div
    className="container-fluid ftr"
    style={{ backgroundColor: "black", color: "white" }}
  >
    <div className="container1">
      <Row gutter={[16, 16]}>
        <Col
          xs={24}
          sm={12}
          md={8}
          lg={6}
          xl={5}
          style={{ borderRight: "1px solid #fff" }}
        >
          {" "}
          <div className="ftr-logo">
            <img
              src="images/EM_Logo.webp"
              className="img-fluid"
              alt="EM_Logo"
            />
          </div>
        </Col>
        <Col
          xs={24}
          sm={12}
          md={8}
          lg={6}
          xl={8}
          style={{ borderRight: "1px solid #fff" }}
        >
          <Row>LINKS</Row>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8} lg={6} xl={12}>
              <Row>INDUSTRIES</Row>
              <Row>SERVICES</Row>
              <Row>TECHNOLOGIES</Row>
              <Row>RESOURCES</Row>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6} xl={12}>
              <Row>NEWS</Row>
              <Row>SUCCESS STORIES</Row>
              <Row>BLOGS</Row>
              <Row>CAREERS</Row>
            </Col>
          </Row>
        </Col>

        <Col
          xs={24}
          sm={12}
          md={8}
          lg={6}
          xl={5}
          style={{ borderRight: "1px solid #fff" }}
        >
          <Row>POLICIES</Row>
          <Row>COOKIE POLICY</Row>
          <Row>PRIVACY POLICY</Row>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <a href title="LinkedIn" style={{ marginRight: "10px" }}>
            <LinkedinOutlined />
          </a>
          <a href title="Youtube" style={{ marginRight: "10px" }}>
            <YoutubeOutlined />
          </a>
          <a href title="Youtube" style={{ marginRight: "10px" }}>
            <TwitterOutlined />
          </a>
        </Col>
      </Row>
    </div>
    <Row justify="center">
  <Col xs={24} sm={12} md={8} lg={6} xl={12}>
    <p style={{ textAlign: 'center' }}>© 2024 Engineers Mind. All Rights Reserved.</p>
  </Col>
  <Col xs={24} sm={12} md={8} lg={6} xl={12}>
    <p style={{ textAlign: 'center' }}>
      Powered by: <a href="https://lumos.in/">LUMOS.in</a>
    </p>
  </Col>
</Row>
  </div>
);
export default Footer;
