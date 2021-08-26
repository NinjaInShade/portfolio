import React, { useState } from 'react';
import '../styles/project-card.css';

export default function ProjectCard({ imgSrc, imgAlt, gradient }) {
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
          <button className='body-text projects-modal-close' onClick={() => imgModalHandler()}>
            Close
          </button>
        </div>
      </div>
      <article className='project-card'>
        <div className='project-card-img-container' style={{ background: gradient }}>
          <button className='project-card-img-btn' onClick={() => imgModalHandler()}>
            <img src={imgSrc} className='project-card-img' alt={imgAlt} />
          </button>
        </div>
      </article>
    </>
  );
}
