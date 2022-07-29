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

  useEffect(() => {
       //  Sticky Header
       $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $("#sticky-header").removeClass("sticky");
        } else {
            $("#sticky-header").addClass("sticky");
        }
    });
    
  });

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
