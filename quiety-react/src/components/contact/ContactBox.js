import React from 'react';

const ContactBox = () => {
  return (
    <>
      <section className='contact-promo ptb-120'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-md-6 mt-4 mt-lg-0'>
              <div className='contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100'>
                <span className='fad fa-comment-alt-lines fa-3x text-primary'></span>
                <div className='contact-promo-info mb-4'>
                  <h5>Meet with us</h5>
                  <p>Allianz Tower, Kayışdağı Cd. No:1 No:1 29th Floor</p>
                </div>
                <a
                  href='mailto:hellothemetags@gmail.com'
                  className='btn btn-link mt-auto'
                >
                  Meet with us
                </a>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 mt-4 mt-lg-0'>
              <div className='contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100'>
                <span className='fad fa-envelope fa-3x text-primary'></span>
                <div className='contact-promo-info mb-4'>
                  <h5>Email Us</h5>
                  <p>
                    Simple drop us an email at <strong>hi@carinok.com</strong> and you'll receive a reply within 24 hours
                  </p>
                </div>
                <a
                  href='mailto:hi@carinok.com'
                  className='btn btn-primary mt-auto'
                >
                  Email Us
                </a>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 mt-4 mt-lg-0'>
              <div className='contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100'>
                <span className='fad fa-phone fa-3x text-primary'></span>
                <div className='contact-promo-info mb-4'>
                  <h5>Give us a call</h5>
                  <p>
                    Give us a ring.Our Experts are standing by{' '}
                    <strong>monday to friday</strong> from
                    <strong>9am to 5pm EST.</strong>
                  </p>
                </div>
                <a href='tel:+902166060079' className='btn btn-link mt-auto'>
                  +90 216 606 0079
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactBox;
