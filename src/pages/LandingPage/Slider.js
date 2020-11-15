import React from "react";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import AwesomeSlider from "react-awesome-slider";
import { useDeviceType } from "helpers/useDeviceType";
import {} from "./LandingPage.style";
import styled from "styled-components";
import BG from 'image/LANDING.webp'
export const StyledAwesomeSlider = styled(AwesomeSlider)`
  height: 100vh;

  .awssld__content {
    > div {
      width: 100%;
    }
  }
`;

const AutoplaySlider = withAutoplay(StyledAwesomeSlider);

function Slider() {
  const userAgent = navigator.userAgent;
  const deviceType = useDeviceType(userAgent);
  console.log("device type home", deviceType);

  const sections = [
    <Section1 imageUrl={BG}/>,
    <Section2 imageUrl={BG}/>,
    <Section3 imageUrl={BG}/>,
    <Section4 imageUrl={BG}/>,
    <Section5 imageUrl={BG}/>,
  ];
  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={100000}
      style={{ width: "100%" }}
    >
      {sections.map((section) => (
        <div style={{ width: "100%" }} key={section}>
          {section}
        </div>
      ))}
    </AutoplaySlider>
  );
}
export default Slider;
