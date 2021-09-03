import React, { useState } from 'react';
import Logo from '../assets/logo.svg';
import CV from '../assets/Leon Michalak Frontend Developer CV.pdf';
import { Link } from 'gatsby';
import '../styles/navbar.css';
import '../styles/hamburger.css';

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  function toggleSidebar() {
    setSidebar(!sidebar);
  }

  return (
    <nav className='navbar'>
      <div className='container navbar-container'>
        <Link to='/' className='logo-container'>
          <img src={Logo} alt='Leon Michalak Logo. Code brackets in different shades of blue.' className='logo-img' />
          <p className='body-text logo-text'>Leon Michalak</p>
        </Link>
        <ul className='navbar-list'>
          <li className='navbar-list-item'>
            <Link to='/' className='body-text navbar-link' activeClassName='navbar-link-active'>
              Home
            </Link>
          </li>
          <li className='navbar-list-item'>
            <Link to='/#about' className='body-text navbar-link' activeClassName='navbar-link-active'>
              About
            </Link>
          </li>
          <li className='navbar-list-item'>
            <Link to='/#projects' className='body-text navbar-link' activeClassName='navbar-link-active'>
              Projects
            </Link>
          </li>
          <li className='navbar-list-item'>
            <a className='body-text navbar-download-link' href={CV} download>
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
        </ul>
        <a className='btn btn-primary btn-navbar' href='/#contact'>
          Get in touch
        </a>
        <button
          className='hamburger-btn'
          onClick={toggleSidebar}
          aria-haspopup='true'
          aria-label='Hamburger menu button to open mobile navigation'
        >
          <svg className={`ham hamRotate ham8 ${sidebar && 'active'}`} viewBox='0 0 100 100' width='44'>
            <path
              className='line top'
              d='m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20'
            />
            <path className='line middle' d='m 30,50 h 40' />
            <path
              className='line bottom'
              d='m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20'
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
