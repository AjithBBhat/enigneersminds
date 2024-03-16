

import { ArrowRightOutlined } from "@ant-design/icons";
import Link from "next/link";
import Typed from "typed.js";
import { useEffect } from "react";
import React from "react";

export default function SubSection({
  title = "Trusted by global brands across industries to deliver value and growth, continually",
}) {
  useEffect(() => {
    // Initialize Typed.js for the heading
    const typedHeading = new Typed("#sub", {
      strings: [title],
      typeSpeed: 20,
      showCursor: false,
    });

    // Cleanup function to destroy Typed instances
    return () => {
      typedHeading.destroy();
    };
  }, [title]);


  return (
    <>
      <section className="front-section" >
        <div className="front-container" style={{ marginRight: "10%" }}>
          <h1 style={{ fontFamily: "Roboto-Regular" }}>
            <strong>Front</strong>
            <br /> Runner
          </h1>
          <p
            id="sub"
            style={{
              fontSize: "2vw",
              fontFamily: "Roboto-Thin",
              lineHeight: "1.5",
            }}
          >
            {/* Trusted by global brands across industries to deliver value and
            growth, continually. */}
          </p>
          <p>
            <a href="" style={{ color: "white", fontSize: "1.2vw" }}>
              Learn more {<ArrowRightOutlined />}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
