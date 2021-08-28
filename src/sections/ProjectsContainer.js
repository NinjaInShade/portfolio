import React, { useState } from 'react';
import Filter from '../components/Filter';
import ProjectCard from '../components/ProjectCard';
import { projects as projectsData } from '../projects-data';
import { tabs as tabsData } from '../tabs-data.js';
import '../styles/projects.css';

export default function ProjectsContainer() {
  const [projects, setProjects] = useState(projectsData);
  const [projectsShown, setProjectsShown] = useState(6);
  const [filterMode, setFilterMode] = useState('inclusive');
  const [tabs, setTabs] = useState(tabsData);
  const [activeTabs, setActiveTabs] = useState(
    tabs.filter((tab) => tab.active === true).map((filteredTab) => filteredTab.name.toLowerCase())
  );

  function loadMoreProjectsHandler() {
    if (projects.length <= projectsShown) {
      return;
    }

    setProjectsShown((prevState) => prevState + 3);
  }

  // TODO: When filtering, we need to re-arrange the filtered items to the start of the projects array.
  // This is due to if we are only showing max 6 projects, but a filtered item was the 7th or above in the array, it wouldnt be shown.
  // This might not be clear if there was only one filtered project before that though, as only that one would show, leading you to believe nothing else is filtered.
  // Rn as a fix, if there are active tabs(so we are filtering), we remove the projectsShown and display all projects.

  return (
    <>
      <Filter
        projects={projects}
        setProjects={setProjects}
        tabs={tabs}
        setTabs={setTabs}
        filterMode={filterMode}
        setFilterMode={setFilterMode}
        setActiveTabs={setActiveTabs}
      />

      <section className='projects' id='projects'>
        <div className='container'>
          <ul className='projects-container'>
            {activeTabs.length === 0 &&
              projects.slice(0, projectsShown).map((project, index) => {
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
            {activeTabs.length !== 0 &&
              projects.map((project, index) => {
                const projectTabs = project.tabs.map((tab) => tab.toLowerCase());

                // Does the project include all active tabs (for inclusive)
                const doesIncludeTabs = activeTabs.every((tab) => projectTabs.includes(tab));

                // Does the project include exactly the active tabs? (for exclusive)
                const haveSameLengths = activeTabs.length === projectTabs.length;
                let doesExactIncludeTabs;

                if (haveSameLengths === false) {
                  doesExactIncludeTabs = false;
                } else {
                  if (activeTabs.sort().join(',') === projectTabs.sort().join(',')) {
                    doesExactIncludeTabs = true;
                  } else {
                    doesExactIncludeTabs = false;
                  }
                }

                // Mode is inclusive, so just any projects that contain all active tabs
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
                  doesExactIncludeTabs && (
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
              })}
          </ul>
          {projects.length > projectsShown && activeTabs.length === 0 && (
            <button className='body-text projects-load-more' onClick={() => loadMoreProjectsHandler()}>
              Load more...
            </button>
          )}
        </div>
      </section>
    </>
  );
}
