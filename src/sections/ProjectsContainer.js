import React, { useState } from 'react';
import Filter from '../components/Filter';
import ProjectCard from '../components/ProjectCard';
import { projects as projectsData } from '../projects-data';
import { tabs as tabsData } from '../tabs-data.js';
import '../styles/projects.css';

export default function ProjectsContainer() {
  const projects = projectsData;
  const [tabs, setTabs] = useState(tabsData);

  const [projectsShown, setProjectsShown] = useState(6);
  const [filterMode, setFilterMode] = useState('inclusive');

  const [activeProjects, setActiveProjects] = useState(projects);

  function loadMoreProjectsHandler() {
    if (projects.length <= projectsShown) {
      return;
    }

    setProjectsShown((prevState) => prevState + 3);
  }

  return (
    <>
      <Filter
        projects={projects}
        setActiveProjects={setActiveProjects}
        tabs={tabs}
        setTabs={setTabs}
        filterMode={filterMode}
        setFilterMode={setFilterMode}
      />

      <section className='projects' id='projects'>
        <div className='container'>
          <ul className='projects-container'>
            {activeProjects.slice(0, projectsShown).map((project, index) => {
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
          {activeProjects.length > projectsShown && (
            <button className='body-text underline projects-load-more' onClick={() => loadMoreProjectsHandler()}>
              Load more...
            </button>
          )}
        </div>
      </section>
    </>
  );
}
