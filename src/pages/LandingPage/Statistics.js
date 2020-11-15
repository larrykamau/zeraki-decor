import React from 'react'
import {Section, Container, AreaHeading, Row, Col, SingleNumber, Icon, InnerBox, Counter} from './Statistics.style'

function Statistics() {
    return (
        <Section>
            <Container>
                <AreaHeading>
                    <p>About Our Company</p>
                    <h3>Some statistics that we want <br/>
                        to show our viewers</h3>
                </AreaHeading>
                <Row>
                    <Col>
                        <SingleNumber>
                            <Icon>
                                <img src="data:image/webp;base64,UklGRuwEAABXRUJQVlA4TN8EAAAvNsAOENcHt5EkR1Jk9z5TX3z/jeR/3AdIkiQ5Ujyqe3YXuHLm/y/Uoh23jeRI1JjXXf7Brhs4kiQpkrJx6VhjfsSKI97/VZTORl7e7a7KFJom2Ey7A4AgEBNMUBHwjCWW+JzpTE64Oa7+Z3I8+d+AIAgCocdgaBA6DERDwwoCQRAOghA29ygcIQiEw0EIRIfgOELY4wSBIARhB0IQHIYOh4Owmw1Eh4EQCOJwM8Fu3NsvbMIMFCgUTABKrADfhQoou7iw4v+5vv5+T/r5/srp+Hh//W13B6hoFs6kgrneEzR23k0zEfr7v8ePt//V28swsADelGf04yrNKp282501LVbqqfe4s3JhkWIpr8+Hx16+OzX5860yqzYjCxDR+C5n5mnWV2fmtvhMteFQFZB2w0zcHV4eI748p6QSkOq0ZqDgdM7z7jEeV9hVKJK3qe9GebqNKJgRghVkejrn7u/vyOGnI7w+zbHxXGr5AxUKEHaVkRqIiFAkt7sCtjBQlRKRS0RAQMIEGRVXGDBg+Hx/n0Httq1jezuoHVs75hPbtm3buuIHMV8ktZm+te02qRU7qfvWZrjrfr1uXPedRvR/AhB2eq+m1VmpUfsxKXh2pMP5CD+3Nf0bj4/R2Nrc+th7p3X+61euInunASwzDlOhRlfinb/J+8Kba9kdkSYbM+CzknR/gdI7Hv1ZpzbSfeMkYBjwAdkvFihQoMAln+hwBDRWwtjjmHvG46fPjt1dpkC5T3U7exq3Ca+6sLvwVQX8uHyBm/Ul66fgtK6X//dBdLBgoY90JZ0bINnYJ1vBtxd8Xvc6a5wEkJ7FhDGTeUOID/+TnuJA4zDBWWnY81kXmM3rQ9jPcTAc1uV8BFnIHOvcXo8T31kPcWR0aMBvJN3FJyWdXHvZWUnXcBbwj/5GO/rOdNCZL0vK38ondWpj5i1JX7B+KgaTmHtGUv5W3reRr0vSrewH4I8/f8dS45t0gOZ8RJLyt5KvSdIh1lkEl+Hm1OJLkvQOb5OkUxs5FAA6MvBMFxhTiff8Kh3nw9L5N9ayB2KCsXW47ajHj1eTfdMey0zgpBvMa8E7PA6w4QS4doLRzPPYz57w7cjAMx3Nq8M1WZu4NmsDKw6P00QG7emzzARO+kkhdsp7T4DwjvJ89kf2558h1mR5b/Cb0ooOq3ZYCgSaV4f+FYdbM9rQcScyEFa15QuSPmC9xQAwjNzy9OkHeUQhv11dLQymcttp6RYOgN8zpx/m8ejQipuzsjJ1jQdmtCHXreWmrJAZdgw3tSbJioPhP6UVHVbtsDQcVhpjliHwUhMywVlpwEH0dTkfF1+xUgVClsDoyoyyiU/xAmFLoj+j9rlWQd/22KVd3KPHeUQP8l3t5Oe6kT/ocv6irCDXBdrnsVu7uV9P8Lge5vvK41e6iT/qCp6Ozv3/QdlLg1bwWJ/lPuNXrFSBkCUwujKjbOKDwkWDFwGw3DhOcJYxab8Y1+V8AB5x91nRMGYNVwCowgVIGbd92Me4TQFAS7acB8f92R8RTqtBknWjasfA8y1Ma1bFVVd2jQRIGbPExSCSg3yWmsApH8dDaA/xivEQsiEbkkNiNoTs05/9+5BDYjWC7IP+7I8+5IgYjarEPvBAH1YaFZtRldgNPujGSqPc/aV/MZNxnHnxAQA="
                                    alt="" data-pagespeed-url-hash="3568512686"
                                    onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>
                            </Icon>
                            <InnerBox>
                                <h6><Counter>258</Counter>+</h6>
                                <p>projects done</p>
                            </InnerBox>
                        </SingleNumber>
                    </Col>
                    <Col>
                        <SingleNumber>
                            <div className="icon">
                                <img src="data:image/webp;base64,UklGRuwEAABXRUJQVlA4TN8EAAAvNsAOENcHt5EkR1Jk9z5TX3z/jeR/3AdIkiQ5Ujyqe3YXuHLm/y/Uoh23jeRI1JjXXf7Brhs4kiQpkrJx6VhjfsSKI97/VZTORl7e7a7KFJom2Ey7A4AgEBNMUBHwjCWW+JzpTE64Oa7+Z3I8+d+AIAgCocdgaBA6DERDwwoCQRAOghA29ygcIQiEw0EIRIfgOELY4wSBIARhB0IQHIYOh4Owmw1Eh4EQCOJwM8Fu3NsvbMIMFCgUTABKrADfhQoou7iw4v+5vv5+T/r5/srp+Hh//W13B6hoFs6kgrneEzR23k0zEfr7v8ePt//V28swsADelGf04yrNKp282501LVbqqfe4s3JhkWIpr8+Hx16+OzX5860yqzYjCxDR+C5n5mnWV2fmtvhMteFQFZB2w0zcHV4eI748p6QSkOq0ZqDgdM7z7jEeV9hVKJK3qe9GebqNKJgRghVkejrn7u/vyOGnI7w+zbHxXGr5AxUKEHaVkRqIiFAkt7sCtjBQlRKRS0RAQMIEGRVXGDBg+Hx/n0Httq1jezuoHVs75hPbtm3buuIHMV8ktZm+te02qRU7qfvWZrjrfr1uXPedRvR/AhB2eq+m1VmpUfsxKXh2pMP5CD+3Nf0bj4/R2Nrc+th7p3X+61euInunASwzDlOhRlfinb/J+8Kba9kdkSYbM+CzknR/gdI7Hv1ZpzbSfeMkYBjwAdkvFihQoMAln+hwBDRWwtjjmHvG46fPjt1dpkC5T3U7exq3Ca+6sLvwVQX8uHyBm/Ul66fgtK6X//dBdLBgoY90JZ0bINnYJ1vBtxd8Xvc6a5wEkJ7FhDGTeUOID/+TnuJA4zDBWWnY81kXmM3rQ9jPcTAc1uV8BFnIHOvcXo8T31kPcWR0aMBvJN3FJyWdXHvZWUnXcBbwj/5GO/rOdNCZL0vK38ondWpj5i1JX7B+KgaTmHtGUv5W3reRr0vSrewH4I8/f8dS45t0gOZ8RJLyt5KvSdIh1lkEl+Hm1OJLkvQOb5OkUxs5FAA6MvBMFxhTiff8Kh3nw9L5N9ayB2KCsXW47ajHj1eTfdMey0zgpBvMa8E7PA6w4QS4doLRzPPYz57w7cjAMx3Nq8M1WZu4NmsDKw6P00QG7emzzARO+kkhdsp7T4DwjvJ89kf2558h1mR5b/Cb0ooOq3ZYCgSaV4f+FYdbM9rQcScyEFa15QuSPmC9xQAwjNzy9OkHeUQhv11dLQymcttp6RYOgN8zpx/m8ejQipuzsjJ1jQdmtCHXreWmrJAZdgw3tSbJioPhP6UVHVbtsDQcVhpjliHwUhMywVlpwEH0dTkfF1+xUgVClsDoyoyyiU/xAmFLoj+j9rlWQd/22KVd3KPHeUQP8l3t5Oe6kT/ocv6irCDXBdrnsVu7uV9P8Lge5vvK41e6iT/qCp6Ozv3/QdlLg1bwWJ/lPuNXrFSBkCUwujKjbOKDwkWDFwGw3DhOcJYxab8Y1+V8AB5x91nRMGYNVwCowgVIGbd92Me4TQFAS7acB8f92R8RTqtBknWjasfA8y1Ma1bFVVd2jQRIGbPExSCSg3yWmsApH8dDaA/xivEQsiEbkkNiNoTs05/9+5BDYjWC7IP+7I8+5IgYjarEPvBAH1YaFZtRldgNPujGSqPc/aV/MZNxnHnxAQA="
                                    alt="" data-pagespeed-url-hash="3568512686"
                                    onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>
                            </div>
                            <InnerBox>
                                <h6><Counter>942</Counter>+</h6>
                                <p>happy clients</p>
                            </InnerBox>
                        </SingleNumber>
                    </Col>
                    <Col>
                        <SingleNumber>
                            <Icon>
                                <img src="data:image/webp;base64,UklGRuwEAABXRUJQVlA4TN8EAAAvNsAOENcHt5EkR1Jk9z5TX3z/jeR/3AdIkiQ5Ujyqe3YXuHLm/y/Uoh23jeRI1JjXXf7Brhs4kiQpkrJx6VhjfsSKI97/VZTORl7e7a7KFJom2Ey7A4AgEBNMUBHwjCWW+JzpTE64Oa7+Z3I8+d+AIAgCocdgaBA6DERDwwoCQRAOghA29ygcIQiEw0EIRIfgOELY4wSBIARhB0IQHIYOh4Owmw1Eh4EQCOJwM8Fu3NsvbMIMFCgUTABKrADfhQoou7iw4v+5vv5+T/r5/srp+Hh//W13B6hoFs6kgrneEzR23k0zEfr7v8ePt//V28swsADelGf04yrNKp282501LVbqqfe4s3JhkWIpr8+Hx16+OzX5860yqzYjCxDR+C5n5mnWV2fmtvhMteFQFZB2w0zcHV4eI748p6QSkOq0ZqDgdM7z7jEeV9hVKJK3qe9GebqNKJgRghVkejrn7u/vyOGnI7w+zbHxXGr5AxUKEHaVkRqIiFAkt7sCtjBQlRKRS0RAQMIEGRVXGDBg+Hx/n0Httq1jezuoHVs75hPbtm3buuIHMV8ktZm+te02qRU7qfvWZrjrfr1uXPedRvR/AhB2eq+m1VmpUfsxKXh2pMP5CD+3Nf0bj4/R2Nrc+th7p3X+61euInunASwzDlOhRlfinb/J+8Kba9kdkSYbM+CzknR/gdI7Hv1ZpzbSfeMkYBjwAdkvFihQoMAln+hwBDRWwtjjmHvG46fPjt1dpkC5T3U7exq3Ca+6sLvwVQX8uHyBm/Ul66fgtK6X//dBdLBgoY90JZ0bINnYJ1vBtxd8Xvc6a5wEkJ7FhDGTeUOID/+TnuJA4zDBWWnY81kXmM3rQ9jPcTAc1uV8BFnIHOvcXo8T31kPcWR0aMBvJN3FJyWdXHvZWUnXcBbwj/5GO/rOdNCZL0vK38ondWpj5i1JX7B+KgaTmHtGUv5W3reRr0vSrewH4I8/f8dS45t0gOZ8RJLyt5KvSdIh1lkEl+Hm1OJLkvQOb5OkUxs5FAA6MvBMFxhTiff8Kh3nw9L5N9ayB2KCsXW47ajHj1eTfdMey0zgpBvMa8E7PA6w4QS4doLRzPPYz57w7cjAMx3Nq8M1WZu4NmsDKw6P00QG7emzzARO+kkhdsp7T4DwjvJ89kf2558h1mR5b/Cb0ooOq3ZYCgSaV4f+FYdbM9rQcScyEFa15QuSPmC9xQAwjNzy9OkHeUQhv11dLQymcttp6RYOgN8zpx/m8ejQipuzsjJ1jQdmtCHXreWmrJAZdgw3tSbJioPhP6UVHVbtsDQcVhpjliHwUhMywVlpwEH0dTkfF1+xUgVClsDoyoyyiU/xAmFLoj+j9rlWQd/22KVd3KPHeUQP8l3t5Oe6kT/ocv6irCDXBdrnsVu7uV9P8Lge5vvK41e6iT/qCp6Ozv3/QdlLg1bwWJ/lPuNXrFSBkCUwujKjbOKDwkWDFwGw3DhOcJYxab8Y1+V8AB5x91nRMGYNVwCowgVIGbd92Me4TQFAS7acB8f92R8RTqtBknWjasfA8y1Ma1bFVVd2jQRIGbPExSCSg3yWmsApH8dDaA/xivEQsiEbkkNiNoTs05/9+5BDYjWC7IP+7I8+5IgYjarEPvBAH1YaFZtRldgNPujGSqPc/aV/MZNxnHnxAQA="
                                    alt="" data-pagespeed-url-hash="3568512686"
                                    onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>
                            </Icon>
                            <InnerBox>
                                <h6><Counter>958</Counter>+</h6>
                                <p>real professionals</p>
                            </InnerBox>
                        </SingleNumber>
                    </Col>
                    <Col>
                        <SingleNumber>
                            <Icon>
                                <img src="data:image/webp;base64,UklGRuwEAABXRUJQVlA4TN8EAAAvNsAOENcHt5EkR1Jk9z5TX3z/jeR/3AdIkiQ5Ujyqe3YXuHLm/y/Uoh23jeRI1JjXXf7Brhs4kiQpkrJx6VhjfsSKI97/VZTORl7e7a7KFJom2Ey7A4AgEBNMUBHwjCWW+JzpTE64Oa7+Z3I8+d+AIAgCocdgaBA6DERDwwoCQRAOghA29ygcIQiEw0EIRIfgOELY4wSBIARhB0IQHIYOh4Owmw1Eh4EQCOJwM8Fu3NsvbMIMFCgUTABKrADfhQoou7iw4v+5vv5+T/r5/srp+Hh//W13B6hoFs6kgrneEzR23k0zEfr7v8ePt//V28swsADelGf04yrNKp282501LVbqqfe4s3JhkWIpr8+Hx16+OzX5860yqzYjCxDR+C5n5mnWV2fmtvhMteFQFZB2w0zcHV4eI748p6QSkOq0ZqDgdM7z7jEeV9hVKJK3qe9GebqNKJgRghVkejrn7u/vyOGnI7w+zbHxXGr5AxUKEHaVkRqIiFAkt7sCtjBQlRKRS0RAQMIEGRVXGDBg+Hx/n0Httq1jezuoHVs75hPbtm3buuIHMV8ktZm+te02qRU7qfvWZrjrfr1uXPedRvR/AhB2eq+m1VmpUfsxKXh2pMP5CD+3Nf0bj4/R2Nrc+th7p3X+61euInunASwzDlOhRlfinb/J+8Kba9kdkSYbM+CzknR/gdI7Hv1ZpzbSfeMkYBjwAdkvFihQoMAln+hwBDRWwtjjmHvG46fPjt1dpkC5T3U7exq3Ca+6sLvwVQX8uHyBm/Ul66fgtK6X//dBdLBgoY90JZ0bINnYJ1vBtxd8Xvc6a5wEkJ7FhDGTeUOID/+TnuJA4zDBWWnY81kXmM3rQ9jPcTAc1uV8BFnIHOvcXo8T31kPcWR0aMBvJN3FJyWdXHvZWUnXcBbwj/5GO/rOdNCZL0vK38ondWpj5i1JX7B+KgaTmHtGUv5W3reRr0vSrewH4I8/f8dS45t0gOZ8RJLyt5KvSdIh1lkEl+Hm1OJLkvQOb5OkUxs5FAA6MvBMFxhTiff8Kh3nw9L5N9ayB2KCsXW47ajHj1eTfdMey0zgpBvMa8E7PA6w4QS4doLRzPPYz57w7cjAMx3Nq8M1WZu4NmsDKw6P00QG7emzzARO+kkhdsp7T4DwjvJ89kf2558h1mR5b/Cb0ooOq3ZYCgSaV4f+FYdbM9rQcScyEFa15QuSPmC9xQAwjNzy9OkHeUQhv11dLQymcttp6RYOgN8zpx/m8ejQipuzsjJ1jQdmtCHXreWmrJAZdgw3tSbJioPhP6UVHVbtsDQcVhpjliHwUhMywVlpwEH0dTkfF1+xUgVClsDoyoyyiU/xAmFLoj+j9rlWQd/22KVd3KPHeUQP8l3t5Oe6kT/ocv6irCDXBdrnsVu7uV9P8Lge5vvK41e6iT/qCp6Ozv3/QdlLg1bwWJ/lPuNXrFSBkCUwujKjbOKDwkWDFwGw3DhOcJYxab8Y1+V8AB5x91nRMGYNVwCowgVIGbd92Me4TQFAS7acB8f92R8RTqtBknWjasfA8y1Ma1bFVVd2jQRIGbPExSCSg3yWmsApH8dDaA/xivEQsiEbkkNiNoTs05/9+5BDYjWC7IP+7I8+5IgYjarEPvBAH1YaFZtRldgNPujGSqPc/aV/MZNxnHnxAQA="
                                    alt="" data-pagespeed-url-hash="3568512686"
                                    onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>
                            </Icon>
                            <InnerBox>
                                <h6><Counter>2000</Counter>+</h6>
                                <p>cups of coffe</p>
                            </InnerBox>
                        </SingleNumber>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

export default Statistics