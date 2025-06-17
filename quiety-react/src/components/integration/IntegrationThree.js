import React from 'react';
import { Link } from 'react-router-dom';

const IntegrationThree = () => {
  return (
    <>
      <section className='our-integration ptb-120 bg-light'>
        <div className='container'>
          <div className='position-relative w-100'>
            <div className='row'>
              <div className='col-lg-4 col-md-6'>
                <Link
                  to='/integration-single'
                  className='position-relative text-decoration-none connected-app-single bg-white border border-2 bg-white mt-0 mt-lg-0 mt-md-0 transition-base rounded-custom d-block overflow-hidden p-5'
                  style={{ minHeight: '280px' }}
                >
                  <div className='position-relative connected-app-content'>
                    <div className='integration-logo bg-white rounded-circle p-2 d-inline-block'>
                      <img
                        src='assets/img/integations/2.png'
                        width='40'
                        alt='integration'
                        className='img-fluid'
                      />
                    </div>
                    <h5>Google Partner</h5>
                    <p className='mb-0 text-muted'>
                    The Google Partners program is built for advertising agencies and third-party companies that manage Google Ads accounts on behalf of other brands or businesses. It provides exclusive tools, support, and training to help them grow and deliver better ad results.</p>
                  </div>
                </Link>
              </div>
              <div className='col-lg-4 col-md-6'>
                <Link
                  to='/integration-single'
                  className='position-relative text-decoration-none connected-app-single bg-white border border-2 bg-white mt-4 mt-lg-0 mt-md-0 transition-base rounded-custom d-block overflow-hidden p-5'
                  style={{ minHeight: '280px' }}
                >
                  <div className='position-relative connected-app-content'>
                    <div className='integration-logo bg-white rounded-circle p-2 d-inline-block'>
                      <img
                        src='assets/img/integations/insider_logo.avif'
                        width='40'
                        alt='integration'
                        className='img-fluid'
                      />
                    </div>
                    <h5>Insider</h5>
                    <p className='mb-0 text-muted'>
                    Insider’s Multichannel Growth Management Platform (GMP) helps marketers drive growth across the funnel, from Acquisition to Activation, Retention, and Revenue. GMP empowers marketers to deliver personalized journeys across the web, apps, messaging, and ad channels. 
                    </p>
                  </div>
                  <span className='badge position-absolute integration-badge bg-primary-soft px-3 py-2 text-primary'>
                    New
                  </span>
                </Link>
              </div>
              <div className='col-lg-4 col-md-6'>
                <Link
                  to='/integration-single'
                  className='position-relative text-decoration-none connected-app-single bg-white border border-2 bg-white mt-4 mt-lg-0 transition-base rounded-custom d-block overflow-hidden p-5'
                  style={{ minHeight: '280px' }}
                >
                  <div className='position-relative connected-app-content'>
                    <div className='integration-logo bg-white rounded-circle p-2 d-inline-block'>
                      <img
                        src='assets/img/integations/iyzico_logo.avif'
                        width='40'
                        alt='integration'
                        className='img-fluid'
                      />
                    </div>
                    <h5>Iyzico</h5>
                    <p className='mb-0 text-muted'>
                    iyzico provides online payment services and artificial intelligence-based payment technologies. Through its easy and secure platform, iyzico supports thousands of businesses in digitalization and was acquired by the global payment systems giant PayU in 2019. 
                    </p>
                  </div>
                  <span className='badge position-absolute integration-badge bg-danger-soft px-3 py-2 text-danger'>
                    Premium
                  </span>
                </Link>
              </div>
              <div className='col-lg-4 col-md-6'>
                <Link
                  to='/integration-single'
                  className='position-relative text-decoration-none connected-app-single bg-white border border-2 bg-white mt-4 transition-base rounded-custom d-block overflow-hidden p-5'
                  style={{ minHeight: '280px' }}
                >
                  <div className='position-relative connected-app-content'>
                    <div className='integration-logo bg-white rounded-circle p-2 d-inline-block'>
                      <img
                        src='assets/img/integations/adjust_logo.avif'
                        width='40'
                        alt='integration'
                        className='img-fluid'
                      />
                    </div>
                    <h5>Adjust</h5>
                    <p className='mb-0 text-muted'>
                    Adjust is a leading mobile marketing analytics platform used by growth-focused marketers worldwide. It offers tools to measure and optimize campaign performance while ensuring user data is protected through advanced security and privacy solutions.                    </p>
                  </div>
                  <span className='badge position-absolute integration-badge bg-success-soft px-3 py-2 text-success'>
                    Free
                  </span>
                </Link>
              </div>
              <div className='col-lg-4 col-md-6'>
                <Link
                  to='/integration-single'
                  className='position-relative text-decoration-none connected-app-single bg-white border border-2 bg-white mt-4 transition-base rounded-custom d-block overflow-hidden p-5'
                  style={{ minHeight: '280px' }}
                >
                  <div className='position-relative connected-app-content'>
                    <div className='integration-logo bg-white rounded-circle p-2 d-inline-block'>
                      <img
                        src='assets/img/integations/checkout_logo.avif'
                        width='40'
                        alt='integration'
                        className='img-fluid'
                      />
                    </div>
                    <h5>Checkout</h5>
                    <p className='mb-0 text-muted'>
                    Checkout.com is a purpose-built unified payments platform powered by proprietary technology - featuring gateway, risk engine, acquirer, and processor - with more than 1600 merchants leveraging our payments expertise worldwide. 
                    </p>
                  </div>
                  <span className='badge position-absolute integration-badge bg-danger-soft px-3 py-2 text-danger'>
                    Premium
                  </span>
                </Link>
              </div>
              <div className='col-lg-4 col-md-6'>
                <Link
                  to='/integration-single'
                  className='position-relative text-decoration-none connected-app-single bg-white border border-2 bg-white mt-4 transition-base rounded-custom d-block overflow-hidden p-5'
                  style={{ minHeight: '280px' }}
                >
                  <div className='position-relative connected-app-content'>
                    <div className='integration-logo bg-white rounded-circle p-2 d-inline-block'>
                      <img
                        src='assets/img/integations/yandexads_logo.avif'
                        width='40'
                        alt='integration'
                        className='img-fluid'
                      />
                    </div>
                    <h5>Yandex Ads</h5>
                    <p className='mb-0 text-muted'>
                    The Yandex Advertising Network is a platform for placing ads on mobile apps. Publishers place ad units in their sources, and we pay them for impressions. App developers can integrate ads using the Yandex Mobile Ads SDK.
                    </p>
                  </div>
                </Link>
              </div>
              <div className='col-lg-4 col-md-6'>
                <Link
                  to='/integration-single'
                  className='position-relative text-decoration-none connected-app-single bg-white border border-2 bg-white mt-4 transition-base rounded-custom d-block overflow-hidden p-5'
                  style={{ minHeight: '280px' }}
                >
                  <div className='position-relative connected-app-content'>
                    <div className='integration-logo bg-white rounded-circle p-2 d-inline-block'>
                      <img
                        src='assets/img/integations/related_logo.avif'
                        width='40'
                        alt='integration'
                        className='img-fluid'
                      />
                    </div>
                    <h5>Related Digital</h5>
                    <p className='mb-0 text-muted'>
                    Related Digital is a top omnichannel campaign management platform, delivering advanced digital marketing technologies and services to help global brands engage customers, drive results, and manage campaigns seamlessly across all digital touchpoints.                    </p>
                  </div>
                </Link>
              </div>
              <div className='col-lg-4 col-md-6'>
                <Link
                  to='/integration-single'
                  className='position-relative text-decoration-none connected-app-single bg-white border border-2 bg-white mt-4 transition-base rounded-custom d-block overflow-hidden p-5'
                  style={{ minHeight: '280px' }}
                >
                  <div className='position-relative connected-app-content'>
                    <div className='integration-logo bg-white rounded-circle p-2 d-inline-block'>
                      <img
                        src='assets/img/integations/sipay_logo.avif'
                        width='40'
                        alt='integration'
                        className='img-fluid'
                      />
                    </div>
                    <h5>Sipay</h5>
                    <p className='mb-0 text-muted'>
                    Sipay provides a platform where companies can manage and monitor their entire financial landscape from a single point, ensuring impartial access to all financial options. This enables companies to make the best decisions while managing today’s challenges and preparing for the future.
                    </p>
                  </div>
                </Link>
              </div>
              <div className='col-lg-4 col-md-6'>
                <Link
                  to='/integration-single'
                  className='position-relative text-decoration-none connected-app-single bg-white border border-2 bg-white mt-4 transition-base rounded-custom d-block overflow-hidden p-5'
                  style={{ minHeight: '280px' }}
                >
                  <div className='position-relative connected-app-content'>
                    <div className='integration-logo bg-white rounded-circle p-2 d-inline-block'>
                      <img
                        src='assets/img/integations/synerise_logo.avif'
                        width='40'
                        alt='integration'
                        className='img-fluid'
                      />
                    </div>
                    <h5>Synerise</h5>
                    <p className='mb-0 text-muted'>
                    Synerise is using AI to completely change the modern approach to data management. The well-developed ecosystem provides the power to collect information about end customers, analyze it and reach conclusions about how to optimize business processes all in real-time.
                    </p>
                  </div>
                  <span className='badge position-absolute integration-badge bg-warning-soft px-3 py-2 text-warning'>
                    Popular
                  </span>
                </Link>
              </div>
              <div className='col-lg-4 col-md-6'>
                <Link
                  to='/integration-single'
                  className='position-relative text-decoration-none connected-app-single bg-white border border-2 bg-white mt-4 transition-base rounded-custom d-block overflow-hidden p-5'
                  style={{ minHeight: '280px' }}
                >
                  <div className='position-relative connected-app-content'>
                    <div className='integration-logo bg-white rounded-circle p-2 d-inline-block'>
                      <img
                        src='assets/img/integations/segmentify_logo.avif'
                        width='40'
                        alt='integration'
                        className='img-fluid'
                      />
                    </div>
                    <h5>Segmentify</h5>
                    <p className='mb-0 text-muted'>
                    Segmentify is an e-commerce personalization platform that helps online retailers optimize their conversion rates by enabling them to deliver unique shopping experiences to each visitor.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntegrationThree;
