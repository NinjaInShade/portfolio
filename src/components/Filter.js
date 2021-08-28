import React, { useState, useEffect } from 'react';
import { projects as projectsData } from '../projects-data';
import FilterTab from './FilterTab';
import '../styles/filter.css';

export default function Filter({ setProjects }) {
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

  //TODO: Instead of relying on initial projects array, add a shown key to projects so we only have to work with loaded state (Mimicking if we had a database)
  // Filter products
  useEffect(() => {
    // Filters only the active tabs, to lower case to avoid errors
    const activeTabs = tabs.filter((tab) => tab.active === true).map((filteredTab) => filteredTab.name.toLowerCase());

    // The original projects (not state) but the tags have been made to lower case to avoid errors
    let updatedProjects = projectsData.map((project) => {
      return { ...project, tabs: project.tabs.map((tab) => tab.toLowerCase()) };
    });

    if (activeTabs.length === 0) {
      return setProjects(updatedProjects);
    }

    if (filterMode === 'inclusive') {
      // We need to show only projects that have the active tabs

      // Filter out projects to only the ones that have all active tabs
      updatedProjects = updatedProjects.filter((project) => {
        return activeTabs.every((tab) => {
          return project.tabs.includes(tab);
        });
      });

      // Updated projects state
      setProjects(updatedProjects);
    }
  }, [tabs, filterMode, setProjects]);

  function setFilterModeHandler(mode) {
    setFilterMode(mode);
  }

  function clearTabsHandler() {
    const updatedTabs = tabs.map((tab) => {
      return { name: tab.name, active: false };
    });

    setTabs(updatedTabs);
  }

  function setTabActiveHandler(name) {
    const tabIndex = tabs.findIndex((tab) => tab.name === name);

    let updatedTabs = [...tabs];

    updatedTabs[tabIndex].active = !updatedTabs[tabIndex].active;

    setTabs(updatedTabs);
  }

  return (
    <article className='filter'>
      <div className='container filter-container'>
        <div className='filter-top'>
          <strong className='body-text filter-title'>Filter projects</strong>
          <div className='filter-mode-controls'>
            <button
              className={`filter-control body-s-text ${filterMode === 'inclusive' && 'filter-control-active'}`}
              onClick={() => setFilterModeHandler('inclusive')}
            >
              Inclusive
            </button>
            <span className='body-s-text filter-control-seperator'>|</span>
            <button
              className={`filter-control body-s-text ${filterMode === 'exclusive' && 'filter-control-active'}`}
              onClick={() => setFilterModeHandler('exclusive')}
            >
              Exclusive
            </button>
          </div>
          <button className='filter-control body-s-text' onClick={() => clearTabsHandler()}>
            Clear all
          </button>
        </div>
        <div className='filter-seperator'></div>
        <ul className='filter-tabs'>
          {tabs.map((tab, index) => {
            return (
              <li key={index}>
                <FilterTab name={tab.name} active={tab.active} onClick={setTabActiveHandler} />
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
}
