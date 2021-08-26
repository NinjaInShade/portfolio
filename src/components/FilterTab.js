import React from 'react';
import '../styles/filter-tab.css';

export default function FilterTab({ name, active, onClick }) {
  return (
    <button onClick={() => onClick(name)} className={`small-text filter-tab ${active && 'filter-tab-active'}`}>
      <svg
        className='filter-tab-check'
        width='18'
        height='14'
        viewBox='0 0 18 14'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M5.7203 10.7565L1.4531 6.71402L0 8.08091L5.7203 13.5L18 1.86689L16.5571 0.5L5.7203 10.7565Z'
          fill='#347CB9'
        />
      </svg>
      {name}
    </button>
  );
}
