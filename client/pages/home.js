import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth";
import Head from "next/head";
import FullWidthImage from "../components/pages/FullWidthImage";
import useNumbers from "../hooks/useNumbers";
import RenderProgress from "../components/posts/RenderProgress";
import { Row, Col, Divider, Button } from "antd";
import useLatestPosts from "../hooks/useLatestPosts";
import useCategory from "../hooks/useCategory";
import Link from "next/link";
import ParallaxImage from "../components/pages/ParallaxImage";
import { ThunderboltOutlined } from "@ant-design/icons";
import Footer from "../components/pages/Footer";
import axios from "axios";
import useHome from "../hooks/useHome";
import SubSection from "../components/pages/SubSection";
import CoreCompetency from "../components/pages/CoreCompetency";
import SubSection1 from "../components/pages/SubSection1";
import SubSection2 from "../components/pages/SubSection2";
import CaseStudy from "../components/pages/CaseStudy";
import TechnicalAllias from "../components/pages/TechnicalAllias";
import HeroSection from "../components/pages/HeroSection";
import RatingUser from "../components/pages/RatingUser";
import ClientsLogo from "../components/pages/ClientsLogo";
import NavBar from "../components/pages/NavBar";

export default function home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <SubSection />
      <SubSection1 />
      <SubSection2 />
      <CoreCompetency />
      <CaseStudy />
      <ParallaxImage>
        <RatingUser />
      </ParallaxImage>
      <ClientsLogo />
      <TechnicalAllias />
      <Footer />
    </>
  );
}
