import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function Portfolio() {
    const settings = {
        dots: false,
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
    };

  return (
    <>
      {/* <!--======== portfolio area start ========--> */}
      <section className="portfolio-area pb-100">
          <div className="container-fluid">
              <Slider className="row portfolio-active" {...settings}>
                  <div className="col-lg-12">
                      <div className="portfolio-item position-relative">
                          <div className="portfolio-thumb">
                              <img src="assets/img/case/case-2.jpg" alt=""/>
                          </div>
                          <div className="portfolio-content fix position-absolute white-bg">
                              <h3><a href="case-details.html">Couple Therapy</a></h3>
                              <a className="port-btn" href="#"><i className="fas fa-plus"></i></a>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-12">
                      <div className="portfolio-item position-relative">
                          <div className="portfolio-thumb">
                              <img src="assets/img/case/case-3.jpg" alt=""/>
                          </div>
                          <div className="portfolio-content fix position-absolute white-bg">
                              <h3><a href="case-details.html">Couple Therapy</a></h3>
                              <a className="port-btn" href="#"><i className="fas fa-plus"></i></a>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-12">
                      <div className="portfolio-item position-relative">
                          <div className="portfolio-thumb">
                              <img src="assets/img/case/case-4.jpg" alt=""/>
                          </div>
                          <div className="portfolio-content fix position-absolute white-bg">
                              <h3><a href="case-details.html">Couple Therapy</a></h3>
                              <a className="port-btn" href="#"><i className="fas fa-plus"></i></a>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-12">
                      <div className="portfolio-item position-relative">
                          <div className="portfolio-thumb">
                              <img src="assets/img/case/case-3.jpg" alt=""/>
                          </div>
                          <div className="portfolio-content fix position-absolute white-bg">
                              <h3><a href="case-details.html">Couple Therapy</a></h3>
                              <a className="port-btn" href="#"><i className="fas fa-plus"></i></a>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-12">
                      <div className="portfolio-item position-relative">
                          <div className="portfolio-thumb">
                              <img src="assets/img/case/case-2.jpg" alt=""/>
                          </div>
                          <div className="portfolio-content fix position-absolute white-bg">
                              <h3><a href="case-details.html">Couple Therapy</a></h3>
                              <a className="port-btn" href="#"><i className="fas fa-plus"></i></a>
                          </div>
                      </div>
                  </div>
              </Slider>
          </div>
      </section>
      {/* <!--======== portfolio area end ========--> */}
    </>
  )
}