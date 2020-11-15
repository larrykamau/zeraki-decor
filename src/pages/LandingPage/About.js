import React from 'react'
import { Section, Container,Row, ColLeft,ImgBox ,ImgBoxBorder , Img,Box2, ColRight ,Content} from './About.style'
import IMG from 'image/about1.jpg'
function About() {
    return (
        <Section>
            <Container>
                <Row>
                    <ColLeft>
                        <ImgBox>
                            <ImgBoxBorder>
                                <Img classname="styleBox-img1" src={IMG}
                                    alt="" data-pagespeed-url-hash="1954519329"
                                    onload="pagespeed.CriticalImages.checkImageForCriticality(this);" />
                            </ImgBoxBorder>
                            <Box2>
                                <span>26</span>
                                <p>Years of
                                    Awesomeness</p>
                            </Box2>
                        </ImgBox>
                    </ColLeft>
                    <ColRight>
                        <Content>
                            <span>About Our Company</span>
                            <h4>We’ve been Creating <br />Awesomeness Since 1992 </h4>
                            <p>If you are looking at blank cassettes on the web lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam. Eiusmod tempor incididunt ut labore et dolore magna aliqua
                                consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua.</p>
                            <h6>If you are looking at blank cassettes on the web lorem ipsum dolor sit consectetur
                                adipisicing elit, eiusmod tempor incididunt.</h6>
                            <a href="/">learn more about this</a>
                        </Content>
                    </ColRight>
                </Row>
            </Container>
        </Section>
    )
}
export default About