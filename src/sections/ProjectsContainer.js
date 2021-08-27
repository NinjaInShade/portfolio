import React, { useState } from 'react';
import Filter from '../components/Filter';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../projects-data';
import '../styles/projects.css';

export default function ProjectsContainer() {
  const [filterMode, setFilterMode] = useState('inclusive');
  const [projectsShown, setProjectsShown] = useState(6);
  const [tabs, setTabs] = useState([
    { name: 'HTML', active: false },
    { name: 'CSS', active: false },
    { name: 'Javascript', active: false },
    { name: 'Landing Page', active: false },
    { name: 'Full Page', active: false },
    { name: 'Multi Page', active: false },
    { name: 'Component', active: false },
    { name: 'Animation', active: false },
    { name: 'ReactJS', active: false },
    { name: 'NodeJS', active: false },
    { name: 'Full Stack', active: false },
    { name: 'API', active: false },
    { name: 'Database', active: false },
  ]);

  function loadMoreProjectsHandler() {
    if (projects.length <= projectsShown) {
      return;
    }

    setProjectsShown((prevState) => prevState + 3);
  }

  return (
    <>
      <Filter filterMode={filterMode} setFilterMode={setFilterMode} tabs={tabs} setTabs={setTabs} />

      <section className='projects' id='projects'>
        <div className='container'>
          <ul className='projects-container'>
            {projects.slice(0, projectsShown).map((project, index) => {
              return (
                <li key={index}>
                  <ProjectCard
                    imgSrc={project.imgSrc}
                    imgAlt={project.imgAlt}
                    gradientHue={project.gradientHue}
                    gradientSaturation={project.gradientSaturation}
                    title={project.title}
                    description={project.description}
                    github={project.github}
                    liveSite={project.liveSite}
                    tabs={project.tabs}
                  />
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
