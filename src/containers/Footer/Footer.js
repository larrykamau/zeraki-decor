import React from "react";
import Footer from "components/Footer/Footer";
import { Facebook, Twitter, YouTube, Instagram } from "components/AllSvgIcon";

export default function FooterContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>We Care</Footer.Title>
            <Footer.Link href={`${`/`}`}>Privacy Policy</Footer.Link>
            <Footer.Link href={`${`/`}`}>Terms of Service</Footer.Link>
            <Footer.Link href={`${`/help`}`}>FAQs</Footer.Link>
            <Footer.Link href={`${`/help`}`}>Help</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Contact Us</Footer.Title>
            <Footer.Link>hello@zeraki-school.com</Footer.Link>
            <Footer.Link>+254795945366</Footer.Link>
            <Footer.Link>+254718582207</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Social</Footer.Title>
            <Footer.Link href="https://facebook.com/zeraki-school.com">
              <Facebook />
              Facebook
            </Footer.Link>
            <Footer.Link href="https://www.instagram.com/zeraki-school.com/">
              <Instagram />
              Instagram
            </Footer.Link>
            <Footer.Link href="#">
              <YouTube />
              Youtube
            </Footer.Link>
            <Footer.Link href="https://twitter.com/zerakiSchool">
              <Twitter />
              Twitter
            </Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}
