import React from "react";

export default function SingleService({ item }) {
  const { title, image, hoverTitle, hoverContent } = item;
  return (
    <div className="col-lg-4 col-md-6">
      <div className="service-box position-relative mb-30">
        <div className="services-img position-relative">
          <img src={image} alt="" />
          <div className="services-bottom-title">
            <h3>{title}</h3>
            <i className="fas fa-plus"></i>
          </div>
        </div>
        <div className="services-content">
          <h3>
            <button type="button">{hoverTitle}</button>
          </h3>
          <p> {hoverContent}</p>
          <button type="button" className="sy-btn white-btn-sm">
            More Details
          </button>
        </div>
      </div>
    </div>
  );
}
