import React, { useState } from "react";
import Image from "next/image";

import {MenuFoldOutlined, MenuUnfoldOutlined
} from '@ant-design/icons'


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "black",
        color: "white",
        padding: "10px 20px",
        gap:"40px",
        fontFamily:"Roboto-Light",
        flexWrap: "wrap",
      }}
    >
      <div style={{ fontSize: "2.5rem", padding:"10px", marginRight:"100px"}}>
        <Image
          src="/images/EM_logo.webp"
          alt="Logo"
          width={200}
          height={50}
        />
      </div>
      <div style={{
          display: "flex",
          flexDirection:"row",
          justifyContent:"left",
          gap:"60px",
          fontSize:"1.2em",
          marginBottom: "10px", // Add margin bottom to create space between logo and menu items on small screens
          flex: "1", // Expand to take remaining space
          flexWrap: "wrap", // Allow items to wrap onto the next line
        }}>
      <a href="/" style={{ color: "white", textDecoration: "none" }}>
      SERVICES
        </a>
        <a href="/about" style={{ color: "white", textDecoration: "none" }}>
        INDUSTRIES
        </a>
        <a href="/contact" style={{ color: "white", textDecoration: "none" }}>
        TECHNOLOGIES
        </a>
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          ...(isOpen
            ? { display: "flex", flexDirection: "column" }
            : { display: "none" }),
        }}
      >
        <a href="/" style={{ color: "white", textDecoration: "none" }}>
          SERVICES
        </a>
        <a href="/about" style={{ color: "white", textDecoration: "none" }}>
          INDUSTRIES
        </a>
        <a href="/contact" style={{ color: "white", textDecoration: "none" }}>
          TECHNOLOGIES
        </a>
      </div>
      <button
        style={{
          background: "none",
          border: "none",
          color: "white",
          cursor: "pointer",
          fontSize: "1rem",
        }}
        onClick={toggleMenu}
      >
        {isOpen ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
      </button>
      <a href="/" style={{ color: "white", textDecoration: "none",  marginLeft:"100px"}}>
      CONTACT
        </a>
    </nav>
  );
};

export default NavBar;
