import { Button } from "antd";

import { SendOutlined } from "@ant-design/icons";
import Link from "next/link";
import Typed from "typed.js";
import { useEffect } from "react";

const FullWidthImage = ({
  title = "Enigneermind",
  subtitle = "tagline",
  fullWidthImage = "/images/EM_Banner.webp",
}) => {
  useEffect(() => {
    // Initialize Typed.js for the heading
    const typedHeading = new Typed("#heading", {
      strings: [title],
      typeSpeed: 50,
      showCursor: false,
    });

    // Cleanup function to destroy Typed instances
    return () => {
      typedHeading.destroy();
    };
  }, [title]);
  return (
    <>
      <img
        src={fullWidthImage}
        alt="EM"
        style={{
          width: "100%",
          height: "100vh",
          overFlow: "hidden",
          objectFit: "cover",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "10%",
          textAlign: "left",
          fontSize: "75px",
          textShadow: "2px 2px 4px #000000",
          color: "white",
          display: "flex",
          flexDirection: "column",
          width: "50%",
        }}
      >
        <h1
          style={{ fontSize: "70px", marginBottom: "0px", color: "white" }}
          id="heading"
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: "4vw",
            fontFamily: "Roboto-Thin",
            color: "orange",
            lineHeight:"1.2"
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
    </>
  );
};

export default FullWidthImage;
