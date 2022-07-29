import React from 'react';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';

export default function SliderSlick() {
  
const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};
    
  return (
    <>
        {/* <!--======== slider area start ========--> */}
    <section className="slider-area" data-background="assets/img/bg/sycho-banner.jpg">
        <div className="container-fluid p-0">
            <Slider className="slider-active"{...settings}>
                <div className="single-slider d-flex align-items-center">
                    <div className="row align-items-center no-gutters mt-40">
                        <div className="col-xl-5 col-lg-5 col-md-5">
                            <div className="slider-content mb-30">
                                <span data-animation="fadeInUp" data-delay=".2s">Every depression solution</span>
                                <h2 data-animation="fadeInUp" data-delay=".4s">Best therapy
                                makes Excellent
                                yours family </h2>
                                <a data-animation="fadeInUp" data-delay=".6s" href="#" className="sy-btn white-btn">Contact Us Now</a>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-7">
                            <div data-animation="fadeInRight" data-delay=".8s" className="slider-thumbs text-right mb-30">
                                <img src="assets/img/slider/slider-humb.jpg" alt=" " />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-slider d-flex align-items-center">
                    <div className="row align-items-center no-gutters mt-40">
                        <div className="col-xl-5 col-lg-5 col-md-5">
                            <div className="slider-content mb-30">
                                <span data-animation="fadeInUp" data-delay=".2s">Every depression solution</span>
                                <h2 data-animation="fadeInUp" data-delay=".4s">Best therapy
                                makes Excellent
                                yours family </h2>
                                <a data-animation="fadeInUp" data-delay=".6s" href="#" className="sy-btn white-btn">Contact Us Now</a>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-7">
                            <div data-animation="fadeInRight" data-delay=".8s" className="slider-thumbs text-right mb-30">
                                <img src="assets/img/slider/slider-humb.jpg" alt=" " />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="single-slider d-flex align-items-center">
                    <div className="row align-items-center no-gutters mt-40">
                        <div className="col-xl-5 col-lg-5 col-md-5">
                            <div className="slider-content mb-30">
                                <span data-animation="fadeInUp" data-delay=".2s">Every depression solution</span>
                                <h2 data-animation="fadeInUp" data-delay=".4s">Best therapy
                                makes Excellent
                                yours family </h2>
                                <a data-animation="fadeInUp" data-delay=".6s" href="#" className="sy-btn white-btn">Contact Us Now</a>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-7">
                            <div data-animation="fadeInRight" data-delay=".8s" className="slider-thumbs text-right mb-30">
                                <img src="assets/img/slider/slider-humb.jpg" alt=" " />
                            </div>
                        </div>
                    </div>
                </div>
                
            </Slider>
         </div>
    </section>
    {/* <!--======== slider area end ========--> */}
    </>
  )
}
