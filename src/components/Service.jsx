import React from "react";
import SingleService from "./SingleService";

const serviceList = [
  {
    title: "Couple Therapy",
    image: "assets/img/service/services-1.jpg",
    hoverTitle: "Anxiety Disorder",
    hoverContent:
      "Dry waters sea sixth that to over above whose him haden thing bring man Signs which",
  },
  {
    title: "Couple Therapy",
    image: "assets/img/service/services-2.jpg",
    hoverTitle: "Anxiety Disorder",
    hoverContent:
      "Dry waters sea sixth that to over above whose him haden thing bring man Signs which",
  },
  {
    title: "Couple Therapy",
    image: "assets/img/service/services-3.jpg",
    hoverTitle: "Anxiety Disorder",
    hoverContent:
      "Dry waters sea sixth that to over above whose him haden thing bring man Signs which",
  },
  {
    title: "Couple Therapy",
    image: "assets/img/service/services-4.jpg",
    hoverTitle: "Anxiety Disorder",
    hoverContent:
      "Dry waters sea sixth that to over above whose him haden thing bring man Signs which",
  },
  {
    title: "Couple Therapy",
    image: "assets/img/service/services-5.jpg",
    hoverTitle: "Anxiety Disorder",
    hoverContent:
      "Dry waters sea sixth that to over above whose him haden thing bring man Signs which",
  },
  {
    title: "Couple Therapy",
    image: "assets/img/service/services-6.jpg",
    hoverTitle: "Anxiety Disorder",
    hoverContent:
      "Dry waters sea sixth that to over above whose him haden thing bring man Signs which",
  },
];

export default function Service() {
  return (
    <>
      {/* <!--======== services area start ========--> */}
      <section className="services-area pt-40 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-wrap text-center mb-50">
                <div className="section-sub-title mb-30">
                  <img src="assets/img/icon/sec-icon-1.png" alt="" />
                </div>
                <h2 className="section-title mb-10">
                  Professional Psychology Therapy <br /> Service You Can Choose{" "}
                </h2>
                <span>affordable Services</span>
              </div>
            </div>
          </div>
          <div className="row">
            {serviceList &&
              serviceList.map((item, index) => (
                <SingleService key={index} item={item} />
              ))}
          </div>
        </div>
      </section>
      {/* <!--======== services area end ========--> */}
    </>
  );
}
