import { Button } from "antd";

import { SendOutlined } from "@ant-design/icons";
import Link from "next/link";
import Typed from "typed.js";
import { useEffect } from "react";
import { Carousel } from "antd";
const HeroSection = ({
  title = "The EM Value",
  subtitle = "Holistic Solutions and Services to Transform your Challenges.",
  fullWidthImage = "/images/EM_Banner.webp",
}) => {
  useEffect(() => {
    // Initialize Typed.js for the heading
    const typedHeading = new Typed("#heading", {
      strings: [title],
      typeSpeed: 120,
      showCursor: false,
    });

    // Cleanup function to destroy Typed instances
    return () => {
      typedHeading.destroy();
    };
  }, [title]);
  return (
    <>
      {/* Text content outside the Carousel */}
      <div
        style={{
          position: "absolute",
          top: "70%",
          left: "30%",
          transform: "translate(-50%, -50%)",
          textAlign: "left",
          fontSize: "75px",
          textShadow: "2px 2px 4px #000000",
          color: "white",
          zIndex: 1, // Ensure text is above the carousel
          width: "50%",
          maxWidth: "700px",
        }}
      >
        <h1
          style={{
            fontSize: "70px",
            marginBottom: "0px",
            color: "white",
          }}
          id="heading"
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: "4vw",
            fontFamily: "Roboto-Thin",
            color: "orange",
            lineHeight: "1.2",
            animation: "slideFromRight 5s forwards",
          }}
        >
          {subtitle}
        </p>
        <Link href="/">
          <a>
            <Button type="primary" size="large" icon={<SendOutlined />}>
              Explore
            </Button>
          </a>
        </Link>
      </div>

      {/* Carousel component */}
      <Carousel autoplay autoplaySpeed={5000}>
        <div>
          <img
            src={fullWidthImage}
            alt="EM"
            style={{
              width: "100%",
              height: "100vh",
              objectFit: "cover",
            }}
          />
        </div>
        {/* Add more image slides here if needed */}
        <div>
          <img
            src={fullWidthImage}
            alt="EM"
            style={{
              width: "100%",
              height: "100vh",
              objectFit: "cover",
            }}
          />
        </div>
      </Carousel>
    </>
  );
};
export default HeroSection;

{
  /* <Carousel autoplay autoplaySpeed={3000}>
<>
  <div style={{ position: "relative" }}>
    <img
      src={fullWidthImage}
      alt="EM"
      style={{
        width: "100%",
        height: "100vh",
        objectFit: "cover",
      }}
    />
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "30%",
        transform: "translate(-50%, -50%)", // Center the content horizontally and vertically
        textAlign: "left",
        fontSize: "75px",
        textShadow: "2px 2px 4px #000000",
        color: "white",
        display: "flex",
        flexDirection: "column",
        width: "50%",
        maxWidth: "600px", // Limit the width of the content
      }}
    >
      <h1
        style={{
          fontSize: "70px",
          marginBottom: "0px",
          color: "white",
        }}
        id="heading"
      >
        {title}
      </h1>
      <p
        style={{
          fontSize: "4vw",
          fontFamily: "Roboto-Thin",
          color: "orange",
          lineHeight: "1.2",
        }}
      >
        {subtitle}
      </p>
      <Link href="/">
        <a>
          <Button type="primary" size="large" icon={<SendOutlined />}>
            Explore
          </Button>
        </a>
      </Link>
    </div>
  </div>
</>
<>
  <div style={{ position: "relative" }}>
    <img
      src={fullWidthImage}
      alt="EM"
      style={{
        width: "100%",
        height: "100vh",
        objectFit: "cover",
      }}
    />
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "30%",
        transform: "translate(-50%, -50%)", // Center the content horizontally and vertically
        textAlign: "left",
        fontSize: "75px",
        textShadow: "2px 2px 4px #000000",
        color: "white",
        display: "flex",
        flexDirection: "column",
        width: "50%",
        maxWidth: "600px", // Limit the width of the content
      }}
    >
      <h1
        style={{
          fontSize: "70px",
          marginBottom: "0px",
          color: "white",
        }}
        id="heading"
      >
        The EM Value
      </h1>
      <p
        style={{
          fontSize: "4vw",
          fontFamily: "Roboto-Thin",
          color: "orange",
          lineHeight: "1.2",
        }}
      >
        {subtitle}
      </p>
      <Link href="/">
        <a>
          <Button type="primary" size="large" icon={<SendOutlined />}>
            Explore
          </Button>
        </a>
      </Link>
    </div>
  </div>
</>
</Carousel> */
}
