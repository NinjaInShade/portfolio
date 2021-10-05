import React from 'react';
import '../styles/primary-skill-card.css';

export default function PrimarySkillCard({ title, description, descriptionMain, icon, iconAlt, id }) {
  return (
    <article className='p-skill-card' id={id}>
      <div className='p-skill-card-circle'>
        <img className='p-skill-card-icon' src={icon} alt={iconAlt} />
      </div>
      <h3 className='p-skill-card-title'>{title}</h3>
      <p className='body-s-text p-skill-card-description'>
        {description}
        <br />
        <br />
        {descriptionMain}
      </p>
    </article>
  );
}
