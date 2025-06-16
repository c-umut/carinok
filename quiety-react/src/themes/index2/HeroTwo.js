import React from 'react';
import { Link } from 'react-router-dom';
import HeroTitle from '../../components/common/HeroTitle';
import CustomerBrand from '../../components/customer/CustomerBrand';

const HeroTwo = () => {
  return (
    <>
      <section
        className='hero-section pt-5 position-relative overflow-hidden'
        style={{
          background:
            "url('assets/img/shape/color-particles-2.svg') no-repeat center top",
        }}
      >
        <div className='container'>
          <div className='row justify-content-center text-center'>
            <div className='col-xl-8 col-lg-10'>
              <div className='hero-content-wrap'>
                <HeroTitle
                  title='  Single Dashboard for All your Business Needs'
                  desc='     Uniquely network business experiences for resource sucking
                  solutions. Dynamically re-engineer cooperative networks via
                  cross-media expertise.'
                />
                <div
                  className='action-btns text-center pt-4'
                  data-aos='fade-up'
                  data-aos-delay='100'
                >
                  <Link to='/contact-us' className='btn btn-outline-primary'>
                    Talk to Sales
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-9'>
              <div
                className='position-relative'
                data-aos='fade-up'
                data-aos-delay='200'
              >
                {/* Soldaki ve sağdaki widget görselleri kaldırıldı */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <CustomerBrand />
    </>
  );
};

export default HeroTwo;
