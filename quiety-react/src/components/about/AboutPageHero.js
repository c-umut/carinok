import React from 'react';
import { Link } from 'react-router-dom';

const AboutPageHero = () => {
  return (
    <>
      <section
        className='about-header-section ptb-200 position-relative overflow-hidden bg-dark'
        style={{
          background:
            "url('assets/img/page-header-bg.svg')no-repeat center right",
        }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='section-heading-wrap z-5 position-relative'>
                <div className='row'>
                  <div className='col-lg-6'>
                    <div className='about-content-left'>
                      <div className='about-info mb-5'>
                        <h1 className='fw-bold display-5'>
                          Grow your Business & Customer Satisfaction with Quiety
                        </h1>
                        <p className='lead'>
                          Dynamically disintermediate technically sound technologies
                          with compelling quality vectors error-free communities.{' '}
                        </p>
                        <Link to='/career' className='btn btn-primary mt-4 me-3'>
                          Open Positions
                        </Link>
                        <Link to='/about-us' className='btn btn-soft-primary mt-4'>
                          Meet Our Team
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-6 text-lg-end'>
                    <div className='about-content-right'>
                      {/* about-img-2.jpg görseli kaldırıldı */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-white position-absolute bottom-0 h-25 bottom-0 left-0 right-0 z-2 py-5'></div>
      </section>
    </>
  );
};

export default AboutPageHero;
