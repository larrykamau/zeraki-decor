import styled from "styled-components";

export const Section = styled.section`
  display: block;
`;
export const Container = styled.div`
  width: 90%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;
export const AreaHeading = styled.div`
  margin-bottom: 85px;
  text-align: center;
  > p {
    font-size: 12px;
    color: #f9cc41;
    font-weight: 700;
    margin-bottom: 30px;
    text-transform: uppercase;
  }
  > h3 {
    line-height:1.2;
    font-size: 48px;
    color: #262533;
    position: relative;
    font-weight: 500;
  }
`;
export const RowNoGutters = styled.div`
  margin-right: 0;
  margin-left: 0;
  display: flex;
  flex-wrap: wrap;
`;
export const Col = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 0;
  padding-left: 0;
  
  @media (min-width: 768px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
  @media (min-width: 1200px) {
    flex: 0 0 25%;
    max-width: 25%;
  }
`;
export const PortfolioSect = styled.div`
  position: relative;
  margin-bottom: 30px;
  z-index: 1;
  padding: 0 2px;
  &:before {
    opacity: .8;
    transition: all 300ms linear 0s;
  }
  &:hover {
    opacity: .8;
    transition: all 300ms linear 0s;
  }
`;
export const Img = styled.img`
  max-width: 100%;
  vertical-align: middle;
  border-style: none;
`;
export const Info = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  transition: all 300ms linear 0s;
  &:hover {
    opacity: .8;
    transition: all 300ms linear 0s;
    visibility: visible;
    left: 55px;
    width: 100px;
  }
  &:after {
    content: "";
    position: absolute;
    height: 100%;
    width: 55px;
    left: 0;
    top: 0;
    background: #f9cc41;
    z-index: -1;
    transition: all 0.3s;
  }
  > h4 {
    font-size: 18px;
    font-family: "Barlow Condensed", sans-serif;
    font-weight: bold;
    color: #262533;
    @media (max-width: 1600px) and (min-width: 1200px) {
      top: 103px;
      left: -44px;
      letter-spacing: 1px;
    }
    > a {
      text-transform: uppercase;
      font-size: 13px;
      margin-bottom: 5px;
      transform: rotate(-90deg);
      position: absolute;
      top: 130px;
      left: -67px;
      letter-spacing: 3.5px;
      font-family: "Barlow", sans-serif;
      transition: all .3s;
      color: #262533;
  }
  }
  > p {
    margin-bottom: 0px;
    text-transform: uppercase;
    font-weight: 500;
    > a {
      font-family: "Barlow Condensed", sans-serif;
      font-size: 24px;
      font-weight: 500;
      line-height: 1.5;
      color: #262533;
      text-transform: inherit;
      text-decoration: none;
      transition: all 0.3s ease-in-out;
      background-color: transparent;
    }
  }
`;
export const VideoIcon = styled.div`
  position: absolute;
  left: 30px;
  bottom: 70px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
  @media (max-width: 1600px) and (min-width: 1200px) {
    bottom: 19px;
    margin-bottom: 6px;
  }
`;
export const Button = styled.a`
  width: 70px;
  height: 70px;
  background-image: url(../img/elements/pattern_bg_3.png);
  text-align: center;
  line-height: 70px;
  display: inline-block;
  background-size: contain;
  margin-bottom: 30px;
  transition: all 0.3s ease-in-out;
  color: #007bff;
  text-decoration: none;
  background-color: transparent;

  > img {
    width: 15px;
    max-width: 100%;
    vertical-align: middle;
    border-style: none;
  }
`;
