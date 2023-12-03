import style from './_about.module.scss'

const AboutUs = () => {
    return(
        <section className={style.aboutus}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className={style.image}>
                                    <img src="https://s3-alpha-sig.figma.com/img/44d3/e9be/a5b877e20a158303104219fd3a53f9c2?Expires=1702252800&Signature=iW0ZMIA8eDIGdToffuDyjTDIe~qsNHsZaGjWDsleoSJcpUJ26vNRoyMD6nDJSHonwrfpXw-88uS4iPCKyuJ45ldx-UPVjZQ8b9tcS5GhJh95H3UNp0VJY2Y8CEkX8BUlO0pbTQp-MzXCE61WmwZBw38awzygtjMCSwhMn11Ktki5RMOHQChVHb9E5Wd6R5l9dwHxHXHvokBtI3fFixf-xo1DQ3euEuUiLen2VztGhrZ4Hqcx~8xubS4H40Ojf~VDrFEUZhN8cfWTSRB~BZRrCFAOnShzbLcRjhe7-xf1HXqQ8FniBx6OAzirNwqEYIya3ke3pKxGmh-0R6XLNPSueA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className={style.image}>
                                    <img src="https://s3-alpha-sig.figma.com/img/1006/9f78/5bc9dfbe2bcfa1948bee8f5324f62b98?Expires=1702252800&Signature=SxikMEzukdACJ4UiAUNWgWpx~im53w2R4PWi7C8GtdXdRahQFZvUIXDto-4bOY1Y7KR3VghxKRCqbZ7m48ZnFUSLJHCrzeHa2Rf3QA~UjTvpo0NG5ZP8aeqIX1a85Ao2czA7GfIqu7PcTBeB6urQOJWu1tH5uJShyKQ8-ENDxm39732zk~P5dJYgiOyhnq7Nt05iNwBNm6~W1-PZ32p4O58dfEGhhRjCCgLnMP0pNqcCi~~Jbw78Y~IiWnJA6tpUCTdnLN59gNpYId-~FACBC8QAE0xI2PGfgFs8csIm4ABDjCDn44q-rIs-HiwbkRIBQc-WuZqls~icKA8sCpBEvg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className={style.title}>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutUs;