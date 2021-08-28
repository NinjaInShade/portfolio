import React, { useState } from 'react';
import FilterTab from '../components/FilterTab';
import '../styles/project-card.css';

const gradientSaturation = 50;

export default function ProjectCard({ imgSrc, imgAlt, gradientHue, title, description, github, liveSite, tabs }) {
  const [showModal, setShowModal] = useState(false);

  function imgModalHandler() {
    setShowModal(!showModal);
  }

  return (
    <>
      <div aria-hidden='true' className={`project-card-modal-container ${showModal && 'active'}`}>
        <div aria-hidden='true' className='project-card-modal-overlay' onClick={() => imgModalHandler()}></div>
        <div className='project-card-modal-content'>
          <img aria-hidden='true' src={imgSrc} className='project-card-img-big' alt={imgAlt} />
          <ul className='project-card-modal-tabs'>
            {tabs.map((tab, index) => (
              <li key={index}>
                <FilterTab name={tab} active={false} onClick={() => {}} />
              </li>
            ))}
          </ul>
          <button className='body-text underline projects-modal-close' onClick={() => imgModalHandler()}>
            Close
          </button>
        </div>
      </div>

      <article className='project-card'>
        <div
          className='project-card-img-container'
          style={{
            background: `linear-gradient(135deg, hsl(${gradientHue},${gradientSaturation}%,22%) 0%, hsl(${gradientHue},${gradientSaturation}%,32%) 100%)`,
          }}
        >
          <button className='project-card-img-btn' onClick={() => imgModalHandler()}>
            <img src={imgSrc} className='project-card-img' alt={imgAlt} />
          </button>
        </div>
        <section className='project-card-content-container'>
          <header className='project-card-header'>
            <b className='card-text project-card-title'>{title}</b>
            <p className='body-s-text project-card-description'>{description}</p>
          </header>
          <footer className='project-card-footer'>
            <div className='project-card-links'>
              <a aria-label='Live site' href={liveSite} className='project-card-link'>
                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M13 3L16.293 6.293L9.293 13.293L10.707 14.707L17.707 7.707L21 11V3H13Z' fill='#041A2F' />
                  <path
                    d='M19 19H5V5H12L10 3H5C3.897 3 3 3.897 3 5V19C3 20.103 3.897 21 5 21H19C20.103 21 21 20.103 21 19V14L19 12V19Z'
                    fill='#041A2F'
                  />
                </svg>
              </a>
              <a aria-label='Github' href={github} className='project-card-link'>
                <svg width='21' height='20' viewBox='0 0 19 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M9.27143 0C8.05389 0 6.84827 0.238571 5.72341 0.702093C4.59854 1.16561 3.57647 1.84501 2.71554 2.70148C0.976808 4.43121 0 6.77723 0 9.22344C0 13.3002 2.6609 16.759 6.34166 17.9857C6.80523 18.0595 6.95357 17.7736 6.95357 17.5245V15.9658C4.38539 16.5192 3.83837 14.7298 3.83837 14.7298C3.41189 13.6599 2.80924 13.374 2.80924 13.374C1.96554 12.8021 2.87414 12.8206 2.87414 12.8206C3.80129 12.8851 4.29267 13.7706 4.29267 13.7706C5.09929 15.1726 6.46219 14.7575 6.99066 14.5361C7.0741 13.9366 7.31516 13.5308 7.57476 13.3002C5.5165 13.0696 3.35626 12.2764 3.35626 8.76227C3.35626 7.73847 3.70857 6.91758 4.31121 6.26272C4.2185 6.03213 3.894 5.07289 4.40393 3.82773C4.40393 3.82773 5.18273 3.5787 6.95357 4.76852C7.68601 4.5656 8.48336 4.46415 9.27143 4.46415C10.0595 4.46415 10.8568 4.5656 11.5893 4.76852C13.3601 3.5787 14.1389 3.82773 14.1389 3.82773C14.6489 5.07289 14.3244 6.03213 14.2316 6.26272C14.8343 6.91758 15.1866 7.73847 15.1866 8.76227C15.1866 12.2856 13.0171 13.0604 10.9496 13.291C11.2833 13.5769 11.5893 14.1395 11.5893 14.9973V17.5245C11.5893 17.7736 11.7376 18.0687 12.2105 17.9857C15.8912 16.7498 18.5429 13.3002 18.5429 9.22344C18.5429 8.0122 18.303 6.81282 17.8371 5.69378C17.3712 4.57474 16.6883 3.55796 15.8273 2.70148C14.9664 1.84501 13.9443 1.16561 12.8195 0.702093C11.6946 0.238571 10.489 0 9.27143 0V0Z'
                    fill='#041A2F'
                  />
                </svg>
              </a>
            </div>
            <button className='small-text project-card-tabs-btn' onClick={() => imgModalHandler()}>
              Tags
            </button>
          </footer>
        </section>
      </article>
    </>
  );
}
