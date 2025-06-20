import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import SectionTitle from '../common/SectionTitle';

const CtaTwo = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className='cta-subscribe bg-dark ptb-120 position-relative overflow-hidden'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8 col-md-10'>
              <div className='subscribe-info-wrap text-center position-relative z-2'>
                <SectionTitle
                  subtitle="Let's Try! Contact Us"
                  title='Discover what we can do for you'
                  description='We can help you to create your dream website for better
                    business revenue.'
                  dark
                />
                <div className='form-block-banner mw-60 m-auto mt-5'>
                  <Link to='/contact-us' className='btn btn-primary'>
                    Contact with Us
                  </Link>
                </div>
                <ul
                  className='nav justify-content-center subscribe-feature-list mt-4'
                  data-aos='fade-up'
                  data-aos-delay='100'
                >
                  <li className='nav-item'>
                    <span>
                      <i className='far fa-check-circle text-primary me-2'></i>
                      Flexible Working Methods
                    </span>
                  </li>
                  <li className='nav-item'>
                    <span>
                      <i className='far fa-check-circle text-primary me-2'></i>
                      End-to-end solutions
                    </span>
                  </li>
                  <li className='nav-item'>
                    <span>
                      <i className='far fa-check-circle text-primary me-2'></i>
                      Post-product support
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className='
              bg-circle
              rounded-circle
              circle-shape-3
              position-absolute
              bg-dark-light
              left-5
            '
          ></div>
          <div
            className='
              bg-circle
              rounded-circle
              circle-shape-1
              position-absolute
              bg-warning
              right-5
            '
          ></div>
        </div>
      </section>
    </>
  );
};

export default CtaTwo;
