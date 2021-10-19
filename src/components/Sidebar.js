import React from 'react';
import { Link } from 'gatsby';
import CV from '../assets/Leon Michalak Frontend Developer CV.pdf';
import '../styles/sidebar.css';

export default function Sidebar({ active, setActive }) {
  return (
    <>
      <nav className={`sidebar ${active && 'sidebar-active'}`}>
        <ul>
          <li className='sidebar-list-item'>
            <Link to='/' className='body-text navbar-link' activeClassName='navbar-link-active' onClick={setActive}>
              Home
            </Link>
          </li>
          <li className='sidebar-list-item'>
            <Link
              to='/#about'
              className='body-text navbar-link'
              activeClassName='navbar-link-active'
              onClick={setActive}
            >
              About
            </Link>
          </li>
          <li className='sidebar-list-item'>
            <Link
              to='/#projects'
              className='body-text navbar-link'
              activeClassName='navbar-link-active'
              onClick={setActive}
            >
              Projects
            </Link>
          </li>
          <li className='sidebar-list-item'>
            <a
              className='body-text navbar-download-link'
              id='sidebar-download-link'
              href={CV}
              download
              onClick={setActive}
            >
              <svg
                aria-label='Download'
                className='navbar-download-icon'
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M14 11V14H2V11H0V14C0 15.1 0.9 16 2 16H14C15.1 16 16 15.1 16 14V11H14ZM13 7L11.59 5.59L9 8.17V0H7V8.17L4.41 5.59L3 7L8 12L13 7Z'
                  fill='hsla(209, 84%, 10%, 0.5)'
                />
              </svg>
              CV
            </a>
          </li>
          <li className='sidebar-list-item'>
            <Link
              to='/#contact'
              className='body-text navbar-link'
              activeClassName='navbar-link-active'
              onClick={setActive}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <button className={`sidebar-overlay ${active && 'sidebar-active'}`} onClick={setActive}>
        Close sidebar
      </button>
    </>
  );
}
