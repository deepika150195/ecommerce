import React from "react";
import carouselImage1 from "../../../assets/android-tablets-banner.jpeg";
import carouselImage2 from "../../../assets/gaming-laptops-banner.webp";
import carouselImage3 from "../../../assets/hp-victus-banner.webp";
import carouselImage4 from "../../../assets/macbook-banner.webp";
import carouselImage5 from "../../../assets/realmi-9i-banner.webp";

function UserHomeCarousel() {
  return (
    <div
      id="carousel__container"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carousel__container"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carousel__container"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carousel__container"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carousel__container"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carousel__container"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
      </div>

      <div className="carousel-inner">
        <div
          className="carousel-item active"
          data-bs-interval="2000"
          style={{ height: "400px" }}
        >
          <img
            src={carouselImage1}
            className="d-block w-100 h-100"
            alt="no image"
          />
        </div>
        <div
          className="carousel-item"
          data-bs-interval="2000"
          style={{ height: "400px" }}
        >
          <img
            src={carouselImage2}
            className="d-block w-100 h-100"
            alt="no image"
          />
        </div>
        <div
          className="carousel-item"
          data-bs-interval="2000"
          style={{ height: "400px" }}
        >
          <img
            src={carouselImage3}
            className="d-block w-100 h-100"
            alt="no image"
          />
        </div>
        <div
          className="carousel-item"
          data-bs-interval="2000"
          style={{ height: "400px" }}
        >
          <img
            src={carouselImage4}
            className="d-block w-100 h-100"
            alt="no image"
          />
        </div>
        <div
          className="carousel-item"
          data-bs-interval="2000"
          style={{ height: "400px" }}
        >
          <img
            src={carouselImage5}
            className="d-block w-100 h-100"
            alt="no image"
          />
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carousel__container"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carousel__container"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default UserHomeCarousel;
