import React from 'react';
import Logo from '../assets/logo.png';
import CV from '../assets/CV.pdf';
import DownloadIcon from '../assets/icon-download.svg';
import { Link } from 'gatsby';
import '../styles/navbar.css';

export default function Navbar() {
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
        <a className='btn btn-primary' href='/#contact'>
          Get in touch
        </a>
      </div>
    </nav>
  );
}
