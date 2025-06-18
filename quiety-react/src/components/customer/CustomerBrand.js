import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function CustomerBrand() {
  const swiperOption = {
    slidesPerView: 2,
    spaceBetween: 24,
    speed: 1000,
    autoplay: {
      delay: 2500,
    },
    slidesPerGroup: 1,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 6,
      },
    },
  };
  return (
    <section className="digtal-marketing-logo pb-40">
      <div className="container">
        <div className="bg-soft-blue py-5 px-4 rounded-3">
          <div className="row justify-content-center">
            <div className="col-auto">
              <h5 style={{ marginBottom: '40px' }}>
                Trusted by the companies in the world
              </h5>
            </div>
          </div>
          <div className="row">
            <div className="col-auto">
              <div className="d-flex flex-wrap justify-content-center align-items-center gap-8">
                <img
                  src="assets/img/brand-logo/Group10.png"
                  alt="Group10 Logo"
                  className="img-fluid"
                  width="180"
                  height="auto"
                />
                <img
                  src="assets/img/brand-logo/Group7.png"
                  alt="Group7 Logo"
                  className="img-fluid"
                  width="180"
                  height="auto"
                />
                <img
                  src="assets/img/brand-logo/Group3.png"
                  alt="Group3 Logo"
                  className="img-fluid"
                  width="180"
                  height="auto"
                />
                <img
                  src="assets/img/brand-logo/Group4.png"
                  alt="Group4 Logo"
                  className="img-fluid"
                  width="180"
                  height="auto"
                />
                <img
                  src="assets/img/brand-logo/Group6.png"
                  alt="Group6 Logo"
                  className="img-fluid"
                  width="180"
                  height="auto"
                />
                <img
                  src="assets/img/brand-logo/Group8.png"
                  alt="Group8 Logo"
                  className="img-fluid"
                  width="180"
                  height="auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
