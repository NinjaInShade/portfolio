import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import CV from '../assets/CV.pdf';
import DownloadIcon from '../assets/icon-download.svg';
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
            <Link to='/about' className='body-text navbar-link' activeClassName='navbar-link-active'>
              About
            </Link>
          </li>
          {/* <li className='navbar-list-item'>
            <Link to='/blog' className='body-text navbar-link' activeClassName='navbar-link-active'>
              Blog
            </Link>
          </li> */}
          <li className='navbar-list-item'>
            <Link to='/#projects' className='body-text navbar-link' activeClassName='navbar-link-active'>
              Projects
            </Link>
          </li>
          <li className='navbar-list-item'>
            <a className='body-text navbar-download-link' href={CV} download>
              <img src={DownloadIcon} alt='Download icon' className='navbar-download-icon' />
              Download CV
            </a>
          </li>
        </ul>
        <a className='btn btn-primary btn-navbar' href='/#contact'>
          Get in touch
        </a>
        <button className='hamburger-btn' onClick={toggleSidebar} aria-haspopup='true'>
          <svg className={`ham hamRotate ham8 ${sidebar && 'active'}`} viewBox='0 0 100 100' width='44'>
            <path
              class='line top'
              d='m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20'
            />
            <path class='line middle' d='m 30,50 h 40' />
            <path
              class='line bottom'
              d='m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20'
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
