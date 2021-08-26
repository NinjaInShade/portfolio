import React from 'react';
import '../styles/project-card.css';

export default function ProjectCard({ imgSrc, imgAlt, gradient }) {
  return (
    <article className='project-card'>
      <div className='project-card-img-container' style={{ background: gradient }}>
        <img src={imgSrc} className='project-card-img' alt={imgAlt} />
      </div>
    </article>
  );
}
