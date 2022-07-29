import React from 'react';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

export default function Testimonials() {
    const setting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
    };
  return (
    <>
        {/* <!--======== testimonials area start ========--> */}
        <section className="testimonials-area pb-80"> 
            <div className="testimonials-bg pt-100" data-background="assets/img/bg/testimonials-bg.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="section-title-wrap mb-60">
                                <div className="section-sub-title mb-20">
                                    <img src="assets/img/icon/sec-icon-1.png" alt=""/>
                                    <span className="ml-15">our achievement</span>
                                </div>
                                <h2 className="section-title">Happy Patient says Something
                                    About our Service </h2>
                            </div>
                        </div>
                    </div>
                    <Slider className="row testimonials-active"{...setting}>
                        <div className="col-lg-12">
                            <div className="testimonial-box position-relative white-bg">
                                <div className="testimonial-quote">
                                    <img src="assets/img/testimonial/quote.png" alt=""/>
                                </div>
                                <div className="testimonial-content">
                                    <div className="rating mb-15">
                                        <ul>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                        </ul>
                                    </div>
                                    <p>He of ledser had bn sad earth him pure cree peeth fish lame days all into thing in subdue day they are subdiue haise being gine ning our multiply one behold meats above heaven are domins bione moved orales one fourth to appear in won tree doesn in two together also be door please be open.</p>
                                </div>
                                <div className="testimonial-bottom d-flex">
                                    <div className="testimonial-avatar">
                                        <img src="assets/img/testimonial/testi-client.png" alt=""/>
                                    </div>
                                    <div className="testi-client-text">
                                        <h4>Peter Martyn</h4>
                                        <span>Project Manager</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="testimonial-box position-relative white-bg">
                                <div className="testimonial-quote">
                                    <img src="assets/img/testimonial/quote.png" alt=""/>
                                </div>
                                <div className="testimonial-content">
                                    <div className="rating mb-15">
                                        <ul>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                        </ul>
                                    </div>
                                    <p>He of ledser had bn sad earth him pure cree peeth fish lame days all into thing in subdue day they are subdiue haise being gine ning our multiply one behold meats above heaven are domins bione moved orales one fourth to appear in won tree doesn in two together also be door please be open.</p>
                                </div>
                                <div className="testimonial-bottom d-flex">
                                    <div className="testimonial-avatar">
                                        <img src="assets/img/testimonial/testi-client.png" alt=""/>
                                    </div>
                                    <div className="testi-client-text">
                                        <h4>Peter Martyn</h4>
                                        <span>Project Manager</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="testimonial-box position-relative white-bg">
                                <div className="testimonial-quote">
                                    <img src="assets/img/testimonial/quote.png" alt=""/>
                                </div>
                                <div className="testimonial-content">
                                    <div className="rating mb-15">
                                        <ul>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                        </ul>
                                    </div>
                                    <p>He of ledser had bn sad earth him pure cree peeth fish lame days all into thing in subdue day they are subdiue haise being gine ning our multiply one behold meats above heaven are domins bione moved orales one fourth to appear in won tree doesn in two together also be door please be open.</p>
                                </div>
                                <div className="testimonial-bottom d-flex">
                                    <div className="testimonial-avatar">
                                        <img src="assets/img/testimonial/testi-client.png" alt=""/>
                                    </div>
                                    <div className="testi-client-text">
                                        <h4>Peter Martyn</h4>
                                        <span>Project Manager</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="testimonial-box position-relative white-bg">
                                <div className="testimonial-quote">
                                    <img src="assets/img/testimonial/quote.png" alt=""/>
                                </div>
                                <div className="testimonial-content">
                                    <div className="rating mb-15">
                                        <ul>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                        </ul>
                                    </div>
                                    <p>He of ledser had bn sad earth him pure cree peeth fish lame days all into thing in subdue day they are subdiue haise being gine ning our multiply one behold meats above heaven are domins bione moved orales one fourth to appear in won tree doesn in two together also be door please be open.</p>
                                </div>
                                <div className="testimonial-bottom d-flex">
                                    <div className="testimonial-avatar">
                                        <img src="assets/img/testimonial/testi-client.png" alt=""/>
                                    </div>
                                    <div className="testi-client-text">
                                        <h4>Peter Martyn</h4>
                                        <span>Project Manager</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="testimonial-box position-relative white-bg">
                                <div className="testimonial-quote">
                                    <img src="assets/img/testimonial/quote.png" alt=""/>
                                </div>
                                <div className="testimonial-content">
                                    <div className="rating mb-15">
                                        <ul>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                        </ul>
                                    </div>
                                    <p>He of ledser had bn sad earth him pure cree peeth fish lame days all into thing in subdue day they are subdiue haise being gine ning our multiply one behold meats above heaven are domins bione moved orales one fourth to appear in won tree doesn in two together also be door please be open.</p>
                                </div>
                                <div className="testimonial-bottom d-flex">
                                    <div className="testimonial-avatar">
                                        <img src="assets/img/testimonial/testi-client.png" alt=""/>
                                    </div>
                                    <div className="testi-client-text">
                                        <h4>Peter Martyn</h4>
                                        <span>Project Manager</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
        {/* <!--======== testimonials area end ========--> */}
    </>
  )
}