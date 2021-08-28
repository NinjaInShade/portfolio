import React, { useState } from 'react';
import Filter from '../components/Filter';
import ProjectCard from '../components/ProjectCard';
import { projects as projectsData } from '../projects-data';
import '../styles/projects.css';

export default function ProjectsContainer() {
  const [projects, setProjects] = useState(projectsData);
  const [projectsShown, setProjectsShown] = useState(6);
  const [filterMode, setFilterMode] = useState('inclusive');
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
      <Filter
        projects={projects}
        setProjects={setProjects}
        tabs={tabs}
        setTabs={setTabs}
        filterMode={filterMode}
        setFilterMode={setFilterMode}
      />

      <section className='projects' id='projects'>
        <div className='container'>
          <ul className='projects-container'>
            {projects.slice(0, projectsShown).map((project, index) => {
              // Tabs that are currently selected, transformed to lower case to avoid capitalization errors
              const activeTabs = tabs
                .filter((tab) => tab.active === true)
                .map((filteredTab) => filteredTab.name.toLowerCase());
              // The tabs for the current project,  transformed to lower case to avoid capitalization errors
              const projectTabs = project.tabs.map((tab) => tab.toLowerCase());

              // Does the project include all active tabs (for inclusive)
              const doesIncludeTabs = activeTabs.every((tab) => projectTabs.includes(tab));

              if (activeTabs.length === 0) {
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
              }

              if (filterMode === 'inclusive') {
                return (
                  doesIncludeTabs && (
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
                  )
                );
              }

              // Mode is exclusive then (exact match)
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
