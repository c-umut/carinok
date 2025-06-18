import React from 'react';
import SectionTitle from '../common/SectionTitle';

const OurStory = () => {
  return (
    <>
      <section
        className='our-story-section pt-60 pb-120'
        style={{
          background:
            "url('assets/img/shape/dot-dot-wave-shape.svg')no-repeat left bottom",
        }}
      >
        <div className='container'>
          <div className='row justify-content-between'>
            <div className='col-lg-5 col-md-12 order-lg-1'>
              <div className='section-heading sticky-sidebar'>
                <SectionTitle
                  subtitle='Our Story'
                  title='A Great Story Starts with a Friendly Team'
                  description='Globally e-enable principle-centered e-business before dynamic
                  quality vectors cross-media materials before proactive
                  outsourcing leverage others vertical technology leadership.'
                />
                <div className='mt-4'>
                  <h6 className='mb-3'>We Are Awarded By-</h6>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-12 order-lg-0'>
              <div className='story-grid-wrapper position-relative'>
                {/* <!--animated shape start--> */}
                <ul className='position-absolute animate-element parallax-element shape-service z--1'>
                  <li className='layer' data-depth='0.02'>
                    <img
                      src='assets/img/color-shape/image-2.svg'
                      alt='shape'
                      className='img-fluid position-absolute color-shape-2 z-5'
                    />
                  </li>
                  <li className='layer' data-depth='0.03'>
                    <img
                      src='assets/img/color-shape/feature-3.svg'
                      alt='shape'
                      className='img-fluid position-absolute color-shape-3'
                    />
                  </li>
                </ul>
                {/* <!--animated shape end--> */}
                <div className='story-grid rounded-custom bg-dark overflow-hidden position-relative'>
                  <div className='story-item bg-light border'>
                    <h3 className='display-5 fw-bold mb-1 text-success'>
                      +50
                    </h3>
                    <h6 className='mb-0'>Projects Completed</h6>
                  </div>
                  <div className='story-item bg-white border'>
                    <h3 className='display-5 fw-bold mb-1 text-primary'>
                      25+
                    </h3>
                    <h6 className='mb-0'>Team Members</h6>
                  </div>
                  <div className='story-item bg-white border'>
                    <h3 className='display-5 fw-bold mb-1 text-dark'>37</h3>
                    <h6 className='mb-0'>Diffirent Customers</h6>
                  </div>
                  <div className='story-item bg-light border'>
                    <h3 className='display-5 fw-bold mb-1 text-warning'>
                      8 Years
                    </h3>
                    <h6 className='mb-0'>In Business</h6>
                  </div>
                  <div className='story-item bg-light border'>
                    <h3 className='display-5 fw-bold mb-1 text-danger'>$5.2M</h3>
                    <h6 className='mb-0'>Investment taken into our projects</h6>
                  </div>
                  <div className='story-item bg-white border'>
                    <h3 className='display-5 fw-bold mb-1 text-primary'>
                      855+
                    </h3>
                    <h6 className='mb-0'>Enterprise Integration</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurStory;
