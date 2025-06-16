import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../common/SectionTitle';
import { careerJobCard } from '../../data';

const RelatedJobs = () => {
  return (
    <>
      <section className='related-job-list ptb-120 bg-light'>
        <div className='container'>
          <div className='row align-items-center justify-content-between'>
            <div className='col-lg-4 col-md-12'>
              <SectionTitle
                subtitle='Related Jobs'
                title='More Openings Jobs at Quiety'
              />
            </div>
            <div className='col-lg-7 col-md-12'>
              <p>
                Phosfluorescently disintermediate revolutionary paradigms before
                enabled interfaces. Dynamically transition skills vis-a-vis
                virtual customer service via impactful partnerships with
                technically sound paradigms with cutting-edge initiatives.
              </p>
            </div>
          </div>
          <div className='row'>
            {careerJobCard.map((job, idx) => (
              <div className='col-lg-4 col-md-6' key={idx}>
                <Link
                  to='/career-single'
                  className='text-decoration-none mt-4 single-open-job p-5 bg-white d-block rounded-custom'
                >
                  <div className='d-flex justify-content-between align-items-center mb-2'>
                    <span className='text-muted h6 mb-2 job-time'>
                      <i className='far fa-briefcase me-2'></i> {job.type}
                    </span>
                    <span className={`badge rounded-pill px-3 py-2 small ${job.className || ''}`}>
                      {job.position}
                    </span>
                  </div>
                  <h3 className='h5'>{job.title}</h3>
                  <ul className='job-info-list list-inline list-unstyled text-muted'>
                    <li className='list-inline-item'>
                      <span className='far fa-map-marker-alt me-1'></span> {job.listItem[0].location}
                    </li>
                    <li className='list-inline-item'>
                      <span className='far fa-wallet me-1'></span> {job.listItem[0].salary}
                    </li>
                  </ul>
                  <div className='btn btn-primary btn-sm d-inline-block mt-4'>
                    Apply Now
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default RelatedJobs;
