import React from 'react';
import Filter from '../components/Filter';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../projects-data';
import '../styles/projects.css';

export default function ProjectsContainer() {
  function loadMoreProjectsHandler() {
    console.log('load more projects...');
  }

  return (
    <>
      <Filter />

      <section className='projects' id='projects'>
        <div className='container'>
          <ul className='projects-container'>
            {projects.map((project, index) => {
              return (
                <li key={index}>
                  <ProjectCard imgSrc={project.imgSrc} imgAlt={project.imgAlt} gradient={project.gradient} />
                </li>
              );
            })}
          </ul>
          <button className='body-text projects-load-more' onClick={() => loadMoreProjectsHandler()}>
            Load more...
          </button>
        </div>
      </section>
    </>
  );
}
