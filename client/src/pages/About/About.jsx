import React from "react";
import "./About.css";
import Promo from "../../components/Promo/Promo";
import Head from "../../components/Header/Head";
import ImgCover from "../../components/About/ImgCover";
import OurStory from "../../components/About/OurStory";
import Fashion from "../../components/About/Fasion";
import WhoWeAre from "../../components/About/WhoWeAre";
import Section5 from "../../components/About/Section5";
import ImagesSection from "../../components/About/ImagesSection";
import Reviews from "../../components/About/Reviews";
import Shopper from "../../components/About/Shopper";
import Info from "../../components/Info";
import Footer from "../../components/Footer/Footer";
const About = () => {
  return (
    <div className="about">
      <Promo />
      <Head/>
      <ImgCover />
      <OurStory />
      <Fashion />
      <WhoWeAre />
      <Section5 />
      <ImagesSection />
      <Reviews />
      <Shopper />
      <Info/>
      <Footer/>
    </div>
  );
};

export default About;
