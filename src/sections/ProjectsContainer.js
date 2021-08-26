import React, { useState } from 'react';
import Filter from '../components/Filter';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../projects-data';
import '../styles/projects.css';

export default function ProjectsContainer() {
  const [projectsShown, setProjectsShown] = useState(6);

  function loadMoreProjectsHandler() {
    if (projects.length <= projectsShown) {
      return;
    }

    setProjectsShown((prevState) => prevState + 3);
  }

  return (
    <>
      <Filter />

      <section className='projects' id='projects'>
        <div className='container'>
          <ul className='projects-container'>
            {projects.slice(0, projectsShown).map((project, index) => {
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
