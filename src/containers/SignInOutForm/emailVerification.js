import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Wrapper, Container, Heading, SubHeading } from "./SignInOutForm.style";
import axios from "axios";
import { BASE_URL } from "constants/constants";
import Loader from "components/Loader/Loader";
import { openModal } from "@redq/reuse-modal";
import EmailVerificationModal from "./emailVerificationModal";
import SignInModal from "./SignIn";

function EmailVerification() {
  let location = useLocation();
  let history = useHistory();
  console.log("the locatrion props: ", location);
  console.log("the history props: ", history);
  let query = new URLSearchParams(location.search);
  const [loading, setLoading] = useState(true);
  const handleModal = (text, subtext) => {
    openModal({
      show: true,
      overlayClassName: "quick-view-overlay",
      closeOnClickOutside: true,
      component: () => EmailVerificationModal(text, subtext),
      closeComponent: "",
      config: {
        enableResizing: false,
        disableDragging: true,
        className: "quick-view-modal",
        width: 458,
        height: "auto",
      },
    });
  };
  const handleLogin = () => {
    openModal({
      show: true,
      overlayClassName: "quick-view-overlay",
      closeOnClickOutside: true,
      component: SignInModal,
      closeComponent: "",
      config: {
        enableResizing: false,
        disableDragging: true,
        className: "quick-view-modal",
        width: 458,
        height: "auto",
      },
    });
  };
  useEffect(() => {
    if (
      query.get("user_id") &&
      query.get("timestamp") &&
      query.get("signature")
    ) {
      const body = {
        user_id: query.get("user_id"),
        timestamp: query.get("timestamp"),
        signature: query.get("signature"),
      };
      try {
        axios
          .post(`${BASE_URL}/accounts/verify-registration/`, body)
          .then(async (res) => {
            console.log("verification data", res.data);
            handleModal(
              "Verification Successful ✔",
              "Login to experience the full benefits of TheDatabase"
            );
            await new Promise((resolve) => setTimeout(resolve, 5000));
            handleLogin();
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.log("catch errors: ", JSON.stringify(error));
      }
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Wrapper style={{ paddingTop: "55px" }}>
      <Container>
        <Heading>Email Verification</Heading>

        <SubHeading>check your email for email confirmation</SubHeading>
      </Container>
    </Wrapper>
  );
}

export default EmailVerification;
