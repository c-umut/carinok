import React from 'react';
import { Link } from 'react-router-dom';
import { careerJobCard } from '../../data';

const OpenJobs = () => {
  return (
    <>
      <section id='open-positions' className='open-jobs ptb-120'>
        <div className='container'>
          <div className='row align-items-center justify-content-between'>
            <div className='col-lg-4 col-md-12'>
              <div className='section-heading'>
                <h4 className='h5 text-primary'>Our Jobs</h4>
                <h2>Current Available Positions at Quiety</h2>
              </div>
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
          <div className='row justify-content-center'>
            {careerJobCard.map((job, idx) => (
              <div className='col-lg-6 col-md-12' key={idx}>
                <Link
                  to='/career-single'
                  className='text-decoration-none mt-4 single-open-job p-5 bg-dark text-white d-block rounded-custom'
                >
                  <div className='d-flex justify-content-between align-items-center'>
                    <span className='job-time h-6 mb-2'>
                      <i className='far fa-briefcase me-2'></i>{' '}
                      <strong>{job.type}</strong>
                    </span>
                    <span className={`badge px-3 py-2 rounded-pill small ${job.className || ''}`}>
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
                  <div className='btn btn-outline-light btn-sm d-inline-block mt-4'>
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

export default OpenJobs;
