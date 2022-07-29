import React from 'react'
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

export default function Client() {
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
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
};
  return (
    <>
      {/* <!--======== client area start ========--> */}
      <section className="client-area pt-80 pb-80 mb-100" data-background="assets/img/bg/client-area-bg.jpg">
          <div className="container-fluid">
              <Slider className="row brand-active" {...setting}>
                  <div className="col-lg-12">
                      <div className="client-image">
                        <a href="#"> <img src="assets/img/client/client-1.png" alt=""/></a>
                      </div>
                  </div>
                  <div className="col-lg-12">
                      <div className="client-image">
                        <a href="#"> <img src="assets/img/client/client-1.png" alt=""/></a>
                      </div>
                  </div>
                  <div className="col-lg-12">
                      <div className="client-image">
                        <a href="#"> <img src="assets/img/client/client-1.png" alt=""/></a>
                      </div>
                  </div>
                  <div className="col-lg-12">
                      <div className="client-image">
                        <a href="#"> <img src="assets/img/client/client-1.png" alt=""/></a>
                      </div>
                  </div>
                  <div className="col-lg-12">
                      <div className="client-image">
                        <a href="#"> <img src="assets/img/client/client-1.png" alt=""/></a>
                      </div>
                  </div>
              </Slider>
          </div>
      </section>
      {/* <!--======== client area end ========--> */}
    </>
  )
}