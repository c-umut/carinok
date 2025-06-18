import React from 'react';
import { Link } from 'react-router-dom';

const IntegrationOne = () => {
  return (
    <>
      <section className='integration-section ptb-120'>
        <div className='container'>
          <div className='row align-items-center justify-content-between'>
            <div className='col-lg-3'>
              <div className='integration-list-wrap'>
                <a
                  href='integration-single.html'
                  className='integration-1'
                  data-bs-toggle='tooltip'
                  data-bs-placement='top'
                  title='Your Brand Name'
                >
                  <img
                    src='assets/img/integations/1.png'
                    alt='integration'
                    className='img-fluid rounded-circle'
                  />
                </a>
                <a
                  href='integration-single.html'
                  className='integration-2'
                  data-bs-toggle='tooltip'
                  data-bs-placement='top'
                  title='Your Brand Name'
                >
                  <img
                    src='assets/img/integations/2.png'
                    alt='integration'
                    className='img-fluid rounded-circle'
                  />
                </a>
                <a
                  href='integration-single.html'
                  className='integration-3'
                  data-bs-toggle='tooltip'
                  data-bs-placement='top'
                  title='Your Brand Name'
                >
                  <img
                    src='assets/img/integations/3.png'
                    alt='integration'
                    className='img-fluid rounded-circle'
                  />
                </a>

                <a
                  href='integration-single.html'
                  className='integration-4'
                  data-bs-toggle='tooltip'
                  data-bs-placement='top'
                  title='Your Brand Name'
                >
                  <img
                    src='assets/img/integations/4.png'
                    alt='integration'
                    className='img-fluid rounded-circle'
                  />
                </a>
                <a
                  href='integration-single.html'
                  className='integration-5'
                  data-bs-toggle='tooltip'
                  data-bs-placement='top'
                  title='Your Brand Name'
                >
                  <img
                    src='assets/img/integations/5.png'
                    alt='integration'
                    className='img-fluid rounded-circle'
                  />
                </a>
                <a
                  href='integration-single.html'
                  className='integration-6'
                  data-bs-toggle='tooltip'
                  data-bs-placement='top'
                  title='Your Brand Name'
                >
                  <img
                    src='assets/img/integations/6.png'
                    alt='integration'
                    className='img-fluid rounded-circle'
                  />
                </a>
              </div>
            </div>
            <div className='col-lg-6 col-12'>
              <div className='section-heading text-center my-5 my-lg-0 my-xl-0'>
                <h4 className='text-primary h5'>Integration</h4>
                <h2>We Collaborate with Top Software Company</h2>
                <Link to='/integrations' className='mt-4 btn btn-primary'>
                  View all Integration
                </Link>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='col-lg-4'>
                <div className='integration-list-wrap'>
                  <a
                    href='integration-single.html'
                    className='integration-7'
                    data-bs-toggle='tooltip'
                    data-bs-placement='top'
                    title='Your Brand Name'
                  >
                    <img
                      src='assets/img/integations/7.png'
                      alt='integration'
                      className='img-fluid rounded-circle'
                    />
                  </a>
                  <a
                    href='integration-single.html'
                    className='integration-8'
                    data-bs-toggle='tooltip'
                    data-bs-placement='top'
                    title='Your Brand Name'
                  >
                    <img
                      src='assets/img/integations/8.png'
                      alt='integration'
                      className='img-fluid rounded-circle'
                    />
                  </a>
                  <a
                    href='integration-single.html'
                    className='integration-9'
                    data-bs-toggle='tooltip'
                    data-bs-placement='top'
                    title='Your Brand Name'
                  >
                    <img
                      src='assets/img/integations/9.png'
                      alt='integration'
                      className='img-fluid rounded-circle'
                    />
                  </a>

                  <a
                    href='integration-single.html'
                    className='integration-10'
                    data-bs-toggle='tooltip'
                    data-bs-placement='top'
                    title='Your Brand Name'
                  >
                    <img
                      src='assets/img/integations/10.png'
                      alt='integration'
                      className='img-fluid rounded-circle'
                    />
                  </a>
                  <a
                    href='integration-single.html'
                    className='integration-11'
                    data-bs-toggle='tooltip'
                    data-bs-placement='top'
                    title='Your Brand Name'
                  >
                    <img
                      src='assets/img/integations/11.png'
                      alt='integration'
                      className='img-fluid rounded-circle'
                    />
                  </a>
                  <a
                    href='integration-single.html'
                    className='integration-12'
                    data-bs-toggle='tooltip'
                    data-bs-placement='top'
                    title='Your Brand Name'
                  >
                    <img
                      src='assets/img/integations/12.png'
                      alt='integration'
                      className='img-fluid rounded-circle'
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntegrationOne;
