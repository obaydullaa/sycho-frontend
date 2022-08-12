import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function Footer() {
    const setting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
    };
  return (
    <>
      {/* <!--======== footer area start ========--> */}
    <footer className="footer-area footer-bg pt-80 pd-lr">
        <div className="container-fluid">
            <div className="footer-top" data-background="assets/img/bg/footer-top.jpg">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="award-text">
                            <h2>Certificate & Awards </h2>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <Slider className="award-active" {...setting}>
                            <div className="award-item">
                                  <div className="award-thumb">
                                      <img src="assets/img/award/award-1.png" alt=""/>
                                  </div>
                            </div>
                            <div className="award-item">
                                  <div className="award-thumb">
                                      <img src="assets/img/award/award-1.png" alt=""/>
                                  </div>
                            </div>
                            <div className="award-item">
                                  <div className="award-thumb">
                                      <img src="assets/img/award/award-1.png" alt=""/>
                                  </div>
                            </div>
                            <div className="award-item">
                                  <div className="award-thumb">
                                      <img src="assets/img/award/award-1.png" alt=""/>
                                  </div>
                            </div>
                            <div className="award-item">
                                  <div className="award-thumb">
                                      <img src="assets/img/award/award-1.png" alt=""/>
                                  </div>
                            </div>
                            <div className="award-item">
                                  <div className="award-thumb">
                                      <img src="assets/img/award/award-1.png" alt=""/>
                                  </div>
                            </div>
                            <div className="award-item">
                                  <div className="award-thumb">
                                      <img src="assets/img/award/award-1.png" alt=""/>
                                  </div>
                            </div>
                        </Slider>
                    </div>

                </div>
            </div>

            <div className="footer-bottom pt-110 pb-50">
                <div className="row">
                    <div className="col-lg-3 col-md-6 mb-40">
                        <div className="footer-widgets">
                            <div className="footer-logo-area">
                                  <div className="footer-widgets-title mb-30">
                                      <div className="logo">
                                          <img src="assets/img/logo/logo.png" alt=""/>
                                      </div>
                                  </div>
                                  <div className="footer-widgets-content">
                                      <p>Waters divided said aims kind seicond winged form it tree after female the deep a itself creepeth land bring place day sea dont may thing open who
                                      their midst to seas</p>
                                      <div className="footer-social">
                                          <h4>Follow us</h4>
                                          <ul>
                                              <li><button type='button'><i className="fab fa-facebook-f"></i></button></li>
                                              <li><button type='button'><i className="fab fa-twitter"></i></button></li>
                                              <li><button type='button'><i className="fab fa-pinterest-p"></i></button></li>
                                              <li><button type='button'><i className="fab fa-instagram"></i></button></li>
                                              <li><button type='button'><i className="fab fa-linkedin-in"></i></button></li>
                                          </ul>
                                      </div>
                                  </div>
                            </div>
                        </div>
                      </div>
                    <div className="col-lg-3 col-md-6 mb-40">
                        <div className="footer-widgets">
                            <div className="footer-widgets-title mb-30">
                                  <h2>Services</h2>
                            </div>
                            <div className="footer-widgets-content">
                                  <div className="footer-services">
                                      <ul>
                                          <li><button type='button'>Business Frustation</button></li>
                                          <li><button type='button'>Anxiety Dosorder</button></li>
                                          <li><button type='button'>Personal Meeting</button></li>
                                          <li><button type='button'>Couple Therapy</button></li>
                                          <li><button type='button'>Family Counselling</button></li>
                                          <li><button type='button'>Dating & Relation</button></li>
                                          <li><button type='button'>Depression Problem</button></li>
                                          <li><button type='button'>Mental Problem</button></li>
                                      </ul>
                                  </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-40">
                        <div className="footer-widgets">
                            <div className="footer-widgets-title mb-30">
                                  <h2>Contact Info</h2>
                            </div>
                            <div className="footer-widgets-content">
                                  <div className="footer-contact">
                                    <div className="footer-contact-adress">
                                        <span>House no 35, Palmall street,
                                          London, England</span>
                                    </div>
                                    <div className="footer-contact-item">
                                        <h5>Email</h5>
                                        <p>info@basictheme.com</p>
                                    </div>
                                    <div className="footer-contact-item">
                                        <h5>Support</h5>
                                        <p>+1 325 562 3265</p>
                                    </div>
                                    <div className="footer-contact-item">
                                        <h5>Website</h5>
                                        <p>mywebsite.com</p>
                                    </div>
                                  </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-40">
                        <div className="footer-widgets">
                            <div className="footer-widgets-title mb-30">
                                  <h2>Say in touch</h2>
                            </div>
                            <div className="footer-widgets-content">
                                  <div className="footer-contact">
                                    <div className="footer-subcribe">
                                        <p>Fruitful and herb the seasons of fish saying likeness face beast cattle.</p>
                                    </div>
                                    <div className="footer-scribe-form">
                                          <input type="email" placeholder="Email Adress"/>
                                          <button type="submit" className="sy-btn"><i className="fa fa-paper-plane"></i> subscribe now</button>
                                    </div>
                                  </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copy-right-area">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="footer-copyright-text">
                            <p>Copyright © 2020 <button type='button'>MyTheme</button>. All Rights Reserved.</p>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="footer-terms">
                              <button type='button'>Terms & Condition</button>
                              <button type='button'> Privacy</button>
                              <button type='button'>Support</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    {/* <!--======== footer area end ========--> */}
    </>
  )
}
