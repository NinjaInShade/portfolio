import React from 'react';
import PrimarySkillCard from '../components/PrimarySkillCard';
import ReactIcon from '../assets/icon-react.svg';
import DedicationIcon from '../assets/icon-dedication.svg';
import PerfectionIcon from '../assets/icon-perfection.svg';
import SecondarySkillTab from '../components/SecondarySkillTab';
import { skills } from '../skills-data';
import '../styles/skills.css';

export default function Skills() {
  return (
    <section className='skills'>
      <div className='container'>
        <h2 className='skills-title'>
          My <span>primary</span> skills
        </h2>
        <p className='body-text skills-lead'>
          Here are my primary skills that make me stand out, with other secondary skills, underneath.
        </p>
        <div className='skills-cards'>
          <PrimarySkillCard
            icon={ReactIcon}
            iconAlt='React frontend framework logo icon'
            title='React'
            description='React is my go to frontend framework of choice.'
            descriptionMain='I use it for complications applications that require routing, lots of interaction, data fetching or use many components.'
          />
          <PrimarySkillCard
            icon={DedicationIcon}
            iconAlt='Dedication (light bulb) icon.'
            title='Dedication'
            description='I’m very driven and this is my main hobby.'
            descriptionMain='I’ve consistently kept at it for years now, with no large breaks, and I’m constantly learning new tech or improving myself.'
            id='p-skill-card-2'
          />
          <PrimarySkillCard
            icon={PerfectionIcon}
            iconAlt='Perfectionismn icon.'
            title='Perfection'
            description='I’m a perfectionist and building things as good as I can.'
            descriptionMain='I love getting site metrics like speed, accessibility etc to as high as possible, pixel perfect design to code etc...'
            id='p-skill-card-3'
          />
        </div>
        <h2 className='skills-title'>Other skills</h2>
        <ul className='skills-tags'>
          {skills.map((skill, index) => {
            return <SecondarySkillTab key={index} title={skill} />;
          })}
        </ul>
      </div>
    </section>
  );
}
