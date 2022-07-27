import Footer from "./components/Footer";
import Header from "./components/Header";
import Service from "./components/Service";
import About from "./sections/About";
import Appointment from "./sections/Appointment";
import Blog from "./sections/Blog";
import Client from "./sections/Client";
import Contact from "./sections/Contact";
import Dr from "./sections/Dr";
import Features from "./sections/Features";
import Portfolio from "./sections/Portfolio";
import Pricing from "./sections/Pricing";
import SliderSlick from "./sections/SliderSlick";
import Testimonials from "./sections/Testimonials";

import $ from "jquery";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    //  Data-Background
    $("[data-background").each(function () {
      $(this).css(
        "background-image",
        "url( " + $(this).attr("data-background") + "  )"
      );
    });
  });

  // useEffect(() => {
  //          // mainSlider
  //       function mainSlider() {
  //         var BasicSlider = $('.slider-active');
  //         BasicSlider.on('init', function (e, slick) {
  //             var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
  //             doAnimations($firstAnimatingElements);
  //         });
  //         BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
  //             var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
  //             doAnimations($animatingElements);
  //         });
  //         BasicSlider.slick({
  //             autoplay: false,
  //             autoplaySpeed: 10000,
  //             dots: true,
  //             fade: true,
  //             arrows: false,
  //             responsive: [
  //                 { breakpoint: 767, settings: { dots: false, arrows: false } }
  //             ]
  //         });

  //         function doAnimations(elements) {
  //             var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
  //             elements.each(function () {
  //                 var $this = $(this);
  //                 var $animationDelay = $this.data('delay');
  //                 var $animationType = 'animated ' + $this.data('animation');
  //                 $this.css({
  //                     'animation-delay': $animationDelay,
  //                     '-webkit-animation-delay': $animationDelay
  //                 });
  //                 $this.addClass($animationType).one(animationEndEvents, function () {
  //                     $this.removeClass($animationType);
  //                 });
  //             });
  //         }
  //     }
  //     mainSlider();
  // });

  return (
    <>
      <Header />
      <SliderSlick />
      <Features />
      <About />
      <Service />
      <Dr />
      <Appointment />
      <Portfolio />
      <Client />
      <Pricing />
      <Contact />
      <Testimonials />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
