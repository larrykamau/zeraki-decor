import React from 'react'
import {Section,Container , Row, ColLeft,ColRight ,AreaHeading ,Button , Span, Img } from './Estimate.style'

function Estimate() {
    return (
        <Section>
            <Container>
                <Row>
                    <ColLeft>
                        <AreaHeading>
                            <p>Get a quick response from our team</p>
                            <h3>Get to Know Project Estimate?</h3>
                        </AreaHeading>
                    </ColLeft>
                    <ColRight>
                        <Button href="/" >
                            get a quote now 
                            <Span>
                                <Img
                                    src="data:image/webp;base64,UklGRugAAABXRUJQVlA4TNsAAAAvFkAHEN8xzJM/QQrbtkHxSqNAHQAIQhCMQACCxmNAAI9GwwAaAWE8BOJwIAhi8QgOCwI4LIyGIRgDgRAMoCEQBAA4jGQrkWDP3d3d3e/lnxmwE0JE/xW5bduw8+wkn9gWDVv6zNKMdOtaRtpX4j2d/Vvk4yzlrtcwGZY9ylvnengnWzv/s44JaeLTZ5pmpFvHMtK+DOm3yDHSc2AZaUo9qTvVZy4NQ7xHKUOsCijGUw3V4jlIBAra9Av6X+RQ+Q9V1CyPXkRa6zvPoEbclYwBrm3W5GPW5Bs4EgYA"
                                    alt="" data-pagespeed-url-hash="3051464655"
                                    onload="pagespeed.CriticalImages.checkImageForCriticality(this);" />
                                </Span>
                        </Button>
                    </ColRight>
                </Row>
            </Container>
        </Section>
    )
}

export default Estimate