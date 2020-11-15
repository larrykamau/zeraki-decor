import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "pages/LandingPage/LandingPage";
import NotFound from "pages/NotFound";
// import PrivacyPolicy from "pages/TOS/PrivacyPolicy";
import About from "pages/About/about";
import { ABOUT, HELP_PAGE } from "constants/routes.constants";
// import TermsOfUse from "pages/TOS/SDG";
import Help from "pages/Help/Help";
import AuthenticationForm from "containers/SignInOutForm/Form";
import { Wrapper, Container } from "containers/SignInOutForm/SignInOutForm.style";

const PublicRoutes = ({ deviceType }) => (
  <Fragment>
    <Switch>
      <Route exact path={`/`}>
        <LandingPage deviceType={deviceType} />
      </Route>
      <Wrapper style={{ paddingTop: "55px"}}>
        <Container style={{  width: "600px" , alignItems: "center", marginLeft: "auto", marginRight: "auto"}}>
          <Route exact path={`/auth/`} component={AuthenticationForm} />
        </Container>
      </Wrapper>
      
      <Route exact path={`${ABOUT}`} component={About} />
      <Route exact path={`${HELP_PAGE}`} component={Help} />
      <Route component={NotFound} deviceType={deviceType} />
    </Switch>
  </Fragment>
);

export default PublicRoutes;
