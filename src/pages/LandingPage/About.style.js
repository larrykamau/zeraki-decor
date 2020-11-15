import styled from "styled-components";
import pattern_bg_1 from "image/pattern_bg_1.png"
import pattern_bg_3 from "image/pattern_bg_3.png"
import pattern_bg_4 from "image/pattern_bg_4.png"

export const Section = styled.section`
  padding: 140px 0;
  display: flex;
`;
export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1200px) {
    max-width: 1170px;
  }
`;
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;
export const ColLeft = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  @media (min-width: 992px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
`;
export const ImgBox = styled.div`
  padding-left: 55px;
  margin-top: 55px;
  position: relative;
`;
export const ImgBoxBorder = styled.div`
  position: relative;
  margin-bottom: 100px;
  &:before {
    content: "";
    position: absolute;
    width: 150px;
    height: 150px;
    background-image: url(${pattern_bg_1});
    left: -55px;
    top: -40px;
    z-index: -1;
    background-size: cover;
    background-repeat: no-repeat;
  }
  &:after {
    content: "";
    position: absolute;
    width: 200px;
    height: 200px;
    background-image: url(${pattern_bg_4});
    left: -55px;
    bottom: -81px;
    z-index: -1;
    background-size: contain;
    background-repeat: no-repeat;
  }
`;
export const Img = styled.img`
  box-shadow: 1px 52px 76px 5px rgba(0, 0, 0, 0.32);
  max-width: 100%;
  vertical-align: middle;
  border-style: none;
`;
export const Box2 = styled.div`
  position: absolute;
  bottom: -45px;
  right: 61px;
  width: 130px;
  height: 130px;
  background-image: url(${pattern_bg_3});
  text-align: center;
  padding-top: 25px;
  > span {
    font-family: "Barlow Condensed", sans-serif;
    color: #f9cc41;
    font-size: 48px;
    font-weight: 700;
  }
  > p {
    color: #fff;
    line-height: 20px;
    margin-top: 0;
    margin-bottom: 1rem;
  }
`;
export const ColRight = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  
  
  @media (min-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
  @media (min-width: 992px) {
    margin-left: 0;
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }
  @media (min-width: 1200px) {
    margin-left: 8.333333%;
  }
  @media (min-width: 1200px) {
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }
`;
export const Content = styled.div`
  display: block;
  > span {
    font-size: 12px;
    font-weight: 700;
    color: #f9cc41;
    margin-bottom: 30px;
    display: inline-block;
  }
  > h4 {
    font-size: 48px;
    color: #262533;
    font-family: "Barlow Condensed", sans-serif;
    margin-bottom: 43px;
    line-height: 58px;
  }
  > p {
    font-size: 16px;
    font-family: "Barlow", sans-serif;
    line-height: 1.75;
    margin-bottom: 33px;
  }
  > h6 {
    font-size: 16px;
    font-weight: 400;
    font-family: "Barlow", sans-serif;
    line-height: 26px;
    margin-bottom: 38px;
  }
  > a {
    padding: 10px 50px;
    margin-top: 7px;
    background: #fff;
    border: 2px solid #dfdfe1;
    color: #262533;
    font-size: 15px;
    font-weight: 500;
  }
`;
