import React, { useContext, useState } from "react";
import FormikControl from "containers/FormikContainer/FormikControl";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Button from "components/Button/Button";
import { Wrapper, Container, SubHeading, Heading } from "./SignInOutForm.style";
import { AuthContext } from "contexts/auth/auth.context";
import { BASE_URL } from "constants/constants";

function ResendEmail() {
  const {
    authState: { profile },
  } = useContext(AuthContext);
  const [success, setSuccess] = useState(false);
  const emailNotLongEnough = "email must be at least 3 characters";
  const emailRequired = "Please enter an email address";
  const invalidEmail = "email must be a valid email";

  const submitApplication = (values, { setErrors, setSubmitting }) => {
    setSubmitting(true);
    const { email } = values;
    const body = {
      email: email,
    };
    try {
      axios
        .post(`${BASE_URL}/accounts/resend-email-verfication-link/`, body)
        .then((res) => {
          console.log("email verification data", res.data);
          setSuccess(true);
          setSubmitting(false);
        })
        .catch((err) => {
          console.log("error", err);
          setSubmitting(false);
        });
    } catch (error) {
      console.log("catch error", error);
      setSubmitting(false);
    }
  };
  const initialValues = {
    email: profile.email,
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .min(3, emailNotLongEnough)
      .max(100)
      .email(invalidEmail)
      .required(emailRequired),
  });
  return (
    <Wrapper>
      <Container style={{ paddingBottom: 30 }}>
        {!success ? (
          <>
            <Heading>Resend Email</Heading>

            <SubHeading>
              {profile.email
                ? `Confirm email to resend verification link`
                : `Enter email to resend verification link`}
            </SubHeading>

            <>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={submitApplication}
              >
                {(formik) => {
                  return (
                    <Form>
                      <FormikControl
                        control="input"
                        type="email"
                        label="Email"
                        name="email"
                      />

                      <Button
                        type="submit"
                        size="small"
                        title={formik.isSubmitting ? "Sending... " : "Send"}
                        style={{ fontSize: 15, color: "#fff" }}
                        disabled={!formik.isValid}
                      />
                    </Form>
                  );
                }}
              </Formik>
            </>
          </>
        ) : (
          <>
            <Heading>Email Sent ✔</Heading>
            <SubHeading>Check your email to confirm</SubHeading>
          </>
        )}{" "}
      </Container>
    </Wrapper>
  );
}

export default ResendEmail;
