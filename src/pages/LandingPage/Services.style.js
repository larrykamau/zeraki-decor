import styled from "styled-components";

export const Section = styled.section`
  padding-top: 30px;
  background: #262533;
  padding: 140px 0;
  display: block;
`;
export const Container = styled.div`
  width: 90%;
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

export const RowNoGutters = styled.div`
  margin-right: 0;
  margin-left: 0;
  display: flex;
  flex-wrap: wrap;
`;
export const Col = styled.div`
  border-right: 1px solid #302f3b;
  border-bottom: 1px solid #302f3b;
  padding-right: 0;
  padding-left: 0;
  position: relative;
  width: 100%;
  min-height: 1px;

  @media (min-width: 768px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
  @media (min-width: 992px) {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
  @media (min-width: 1200px) {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
`;
export const SingleService = styled.div`
  border: 1px solid transparent;
  background: #262533;
  text-align: center;
  padding: 55px 20px 30px;
  transition: all 300ms linear 0s;
`;
export const ServiceIcon = styled.div`
  margin-bottom: 23px;

  > img {
    filter: grayscale(100%);
    transition: all 300ms linear 0s;

    max-width: 100%;
    vertical-align: middle;
    border-style: none;
  }
`;
export const ServiceContent = styled.div`
  > h5 {
    font-size: 24px;
    color: #fff;
    margin-bottom: 36px;
    font-family: "Barlow Condensed", sans-serif;
    font-weight: bold;
    line-height: 1.2;
    margin-top: 0;
  }
  > p {
    line-height: 27px;
    font-size: 16px;
    margin-top: 0;
    margin-bottom: 1rem;
  }
`;
