import styled from "styled-components";

export const Section = styled.section`
  display: block;
  padding-top: 70px;
`;
export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px) {
    min-width: 540px;
  }
  @media (min-width: 768px) {
    min-width: 720px;
  }
  @media (min-width: 992px) {
    min-width: 960px;
  }
  @media (min-width: 1200px) {
    min-width: 1140px;
  }
  @media (min-width: 1200px) {
    min-width: 1170px;
  }
`;
export const Row = styled.div`
  border: 2px solid #dfdfe1;
  display: flex;
  align-items: center;
  min-height: 200px;
  padding: 0 60px;

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

  @media (min-width: 768px) {
    flex: 0 0 58.333333%;
    min-width: 58.333333%;
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
    min-width: 41.666667%;
  }
`;
export const AreaHeading = styled.div`
  margin-bottom: 0;
  text-align: left;

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
    margin-bottom: 0.5rem;
    margin-top: 0;
    font-size: 48px;
    color: #262533;
    position: relative;
    font-weight: 500;
  }
`;
export const Button = styled.a`
  float: right;
  display: inline-block;
  background: #262533;
  padding: 10px 10px 10px 42px;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  line-height: 48px;
  outline: none !important;
  box-shadow: none !important;
  text-align: center;
  cursor: pointer;
  font-family: "Barlow Condensed", sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 300ms linear 0s;
`;
export const Span = styled.span`
  background-image: url(../img/elements/pattern_bg.png);
  // width: 50px;
  // height: 50px;
  background-size: cover;
  display: inline-block;
  margin-left: 20px;
`;

export const Img = styled.img`
    width: 15px;
    min-width: 100%;
    vertical-align: middle;
    border-style: none;
}

`;
