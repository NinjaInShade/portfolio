import React, { useEffect } from 'react';
import FilterTab from './FilterTab';
import '../styles/filter.css';

export default function Filter({ tabs, setTabs, filterMode, setFilterMode, projects, setActiveProjects }) {
  useEffect(() => {
    // Array of tabs that are active, transformed to lower case to avoid capitalization errors
    const activeTabs = tabs.filter((tab) => tab.active === true).map((filteredTab) => filteredTab.name.toLowerCase());
    const updatedActiveProjects = [];

    projects.map((project) => {
      // The projects tabs, transformed to lower case to avoid capitalization errors
      const projectTabs = project.tabs.map((tab) => tab.toLowerCase());

      if (activeTabs.length > 0) {
        if (filterMode === 'inclusive') {
          // Does the project include all active tabs (for inclusive)
          const doesIncludeTabs = activeTabs.every((tab) => projectTabs.includes(tab));

          if (doesIncludeTabs) {
            updatedActiveProjects.push(project);
          }
        } else {
          // Else filter mode is exclusive (exact match)

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

          if (doesExactIncludeTabs) {
            updatedActiveProjects.push(project);
          }
        }

        return true;
      }

      // Map needs a return value
      return updatedActiveProjects.push(project);
    });

    setActiveProjects(updatedActiveProjects);
  }, [tabs, projects, setActiveProjects, filterMode]);

  function setFilterModeHandler(mode) {
    setFilterMode(mode);
  }

  function clearTabsHandler() {
    const updatedTabs = tabs.map((tab) => {
      return { name: tab.name, active: false };
    });

    setActiveProjects(projects);
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
