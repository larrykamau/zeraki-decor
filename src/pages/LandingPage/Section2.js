/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useCallback } from "react";
import { useRouterQuery } from "helpers/useRouterQuery";
import { useLocation, useHistory } from "react-router-dom";
import { Waypoint } from "react-waypoint";
import SearchBox from "components/SearchBox/SearchBox";
import { SearchContext } from "contexts/search/search.context";
import { useStickyDispatch } from "contexts/app/app.provider";
import {
  BannerWrapper,
  BannerComponent,
  Row,
  ColLeft,
  ColRight,
  Text,
  A,
  Box,
  Subtext,
  Heading,
  Title,
  Number,
  Container,
} from "./LandingPage.style";

const Section2 = ({ imageUrl }) => {
  const { state, dispatch } = useContext(SearchContext);

  const history = useHistory();
  const location = useLocation();
  const query = useRouterQuery();

  const pathname = location.pathname;

  const handleSearchInput = (text) => {
    dispatch({
      type: "UPDATE",
      payload: {
        ...state,
        text,
      },
    });
  };

  function handleClickSearchButton(searchValue) {
    const categoryParam = query.get("category") ? query.get("category") : ``;

    const queryParams = query.get("category")
      ? `category=${categoryParam}&text=${searchValue}`
      : `&text=${searchValue}`;

    history.push(`${pathname}?${queryParams}`);
  }
  const useDispatch = useStickyDispatch();
  const setSticky = useCallback(() => useDispatch({ type: "SET_STICKY" }), [
    useDispatch,
  ]);
  const removeSticky = useCallback(
    () => useDispatch({ type: "REMOVE_STICKY" }),
    [useDispatch]
  );

  const onWaypointPositionChange = ({ currentPosition }) => {
    if (!currentPosition || currentPosition === "above") {
      setSticky();
    }
  };

  return (
    <BannerWrapper
      style={{
        width: "100%",
        backgroundImage: `linear-gradient(to right, #26253378, #26253378), url(${imageUrl})`,
      }}
    >
      <BannerComponent>
        <Container>
          <Row>
            <ColLeft>
              <Title>
                WE CREATE BUILDING, AND INTERIOR DESIGN THAT ENHANCE THE HUMAN
                EXPERIENCE
              </Title>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea,
                consequuntur, harum? Culpa, iure vel fugiat veritatis obcaecati
                architecto.
              </Text>
              <A>MORE ABOUT US {`>`}</A>
            </ColLeft>
            <ColRight>
              <Box>
                <Heading>The Best In Interior Design</Heading>
                <Subtext>Years of Experience</Subtext>
                <Number>
                  <span>28</span>
                </Number>
              </Box>
            </ColRight>
          </Row>
        </Container>
        <SearchBox
          style={{
            width: 700,
            boxShadow: "0 21px 36px rgba(0,0,0,0.05)",
            borderRadius: "6px",
            overflow: "hidden",
            display: "none",
          }}
          handleSearch={(value) => handleSearchInput(value)}
          value={state.text || ""}
          onClick={handleClickSearchButton}
          className="banner-search"
          pathname={pathname}
        />
        <Waypoint
          onEnter={removeSticky}
          onLeave={setSticky}
          onPositionChange={onWaypointPositionChange}
        />
      </BannerComponent>
    </BannerWrapper>
  );
};
export default Section2;
