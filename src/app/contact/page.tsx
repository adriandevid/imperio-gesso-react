
export default function Page() {
    return (
        <>
            <section className="page">
                <div className="cover" data-image="/images/projects/cover.jpg">
                    <div className="cover-top">
                        <div className="container">
                            <div className="row">
                                <div className="offset-lg-3 col-lg-6">
                                    <h1>CONTACT</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <ol className="breadcrumb">
                                        <li><a href="index.html">Home</a></li>
                                        <li className="active">Contact</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="page-bottom">
                    <div className="section map">
                        {/* <div className="item">
                            <div className="map-canvas"
                                data-zoom="12"
                                data-lat="-37.811085"
                                data-lng="144.955631"
                                data-type="roadmap"
                                data-hue="#ffc400"
                                data-title="inox"
                                data-icon-path="/images/marker.png"
                                data-content="455 West Orchard Street<br>Kings Mountain, NC 28086<br><br><a href='mailto:support@yourbrand.com'>support@yourbrand.com</a>">
                            </div>
                        </div> */}
                    </div>

                    <div className="container mt-10">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="contact">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="contact-item">
                                                <div className="icon">
                                                    <i className="fa fa-location-arrow"></i>
                                                </div>
                                                <p>455 West Orchard Street Kings <br />Mountain, NC 28086</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="contact-item">
                                                <div className="icon">
                                                    <i className="fa fa-phone"></i>
                                                </div>
                                                <a href="tel:(272)211-7370">(272) 211-7370</a>
                                                <a href="tel:(272)211-7370">(272) 211-7370</a>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="contact-item">
                                                <div className="icon">
                                                    <i className="fa fa-envelope"></i>
                                                </div>
                                                <a href="mailto:support@yourbrand.com">support@yourbrand.com</a>
                                                <a href="mailto:info@yourbrand.com">info@yourbrand.com</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <h5 className="margin-bottom-30">Get in touch</h5>
                                    <div className="contact-text">
                                        <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam tempus magna vel turpis.</p>
                                        <p>Sed blandit tempus purus, sed sodales leo rutrum vel. Nam vulputate ipsum ac est congue, eget commodo magna lobortis.</p>
                                    </div>
                                </div>

                                <div className="col-lg-8 col-md-6 col-sm-12">
                                    <div className="contact-form">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-12 col-sm-12">
                                                <input type="text" placeholder="Name, surname" />
                                            </div>
                                            <div className="col-lg-6 col-md-12 col-sm-12">
                                                <input type="text" placeholder="E-Mail" />
                                            </div>
                                            <div className="col-lg-12">
                                                <textarea placeholder="Your message"></textarea>
                                            </div>
                                            <div className="col-lg-12">
                                                <button className="dark-btn float-right" type="submit">
                                                    <span className="show-btn">SUBMIT</span>
                                                    <span className="hide-btn">SUBMIT</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}