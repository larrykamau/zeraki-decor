import React from "react";
import { Site } from "./LandingPage.style";
import Slider from "./Slider";
import About from "./About";
import Portfolio from "./Portfolio";
import Estimate from "./Estimate";
import Statistics from "./Statistics";
import Services from "./Services";
import FooterContainer from "containers/Footer/Footer";

function LandingPage() {
  return (
    <>
      <Slider />
      <Site>
        <About />
        <Portfolio />
        <Estimate />
        <Statistics />
      </Site>
      <Services />
      <FooterContainer />
    </>
  );
}
export default LandingPage;
