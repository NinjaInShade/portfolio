import React from 'react';
import Layout from '../components/Layout';
import Filter from '../components/Filter';
import '../styles/header.css';

export default function Homepage() {
  return (
    <Layout pageTitle='Leon Michalak | Home'>
      <header className='header'>
        <div className='container'>
          <h1 className='header-title'>
            Frontend developer creating <span>unique websites</span>
          </h1>
          <p className='body-text header-description'>
            Hi, I’m Leon, a web developer from the UK. I love working on creative projects that challenge myself.{' '}
          </p>
        </div>
      </header>
      <Filter />
    </Layout>
  );
}
