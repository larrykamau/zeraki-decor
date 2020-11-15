import styled from "styled-components";
import Map from "image/map_bg.png"

export const Section = styled.section`
  background-image: url(${Map});
  background-size: auto;
  background-repeat: no-repeat;
  background-position: 60%;
  padding-top: 20px;
  padding-bottom: 20px;
  block: block;
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
    max-width: 1170px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
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
    margin-top: 0;
  }
  > h3 {
    line-height:1.2;
    font-family: "Barlow Condensed", sans-serif;
    font-size: 48px;
    color: #262533;
    position: relative;
    font-weight: 500;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;
export const Col = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: 768px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
  @media (min-width: 1200px) {
    flex: 0 0 25%;
    max-width: 25%;
  }
`;
export const ColRight = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: 768px) {
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }
`;
export const SingleNumber = styled.div`
  display: flex !important;
  border-bottom: 3px solid #eee;
  padding-bottom: 22px;
  transition: all 300ms linear 0s;
`;
export const Icon = styled.div`
  margin-right: 32px;
  margin-top: 12px;
  > img {
    max-width: 100%;
    vertical-align: middle;
    border-style: none;
  }
`;
export const InnerBox = styled.div`
  display: block;
  > h6 {
    font-size: 48px;
    margin-bottom: 5px;
    font-family: "Barlow Condensed", sans-serif;
    font-weight: bold;
    color: #262533;
    line-height: 1.2;
    margin-top: 0;
  }
  > p {
    font-size: 16px;
  }
`;

export const Counter = styled.span``;
