import React, { useState } from 'react';
import FilterTab from './FilterTab';
import '../styles/filter.css';

export default function Filter() {
  const [filterMode, setFilterMode] = useState('inclusive');
  const [tabs, setTabs] = useState([
    { name: 'HTML', active: false },
    { name: 'CSS', active: false },
    { name: 'Javascript', active: false },
    { name: 'Landing Page', active: false },
    { name: 'Component', active: false },
    { name: 'Animation', active: false },
    { name: 'ReactJS', active: false },
  ]);

  function setFilterModeHandler(mode) {
    setFilterMode(mode);
  }

  function setTabActiveHandler(name) {
    const tabIndex = tabs.findIndex((tab) => tab.name === name);

    let updatedTabs = [...tabs];

    updatedTabs[tabIndex].active = !updatedTabs[tabIndex].active;

    console.log(updatedTabs);

    setTabs(updatedTabs);
  }

  return (
    <article className='filter'>
      <div className='container filter-container'>
        <div className='filter-top'>
          <strong className='body-text filter-title'>Filter projects</strong>
          <div>
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
          <button className='filter-control body-s-text'>Clear all</button>
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
