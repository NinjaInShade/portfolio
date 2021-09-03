import React from 'react';
import Layout from '../components/Layout';
import Header from '../sections/Header';
import ProjectsContainer from '../sections/ProjectsContainer';

export default function Homepage() {
  return (
    <Layout
      pageTitle='Leon Michalak | Home'
      pageDescription="Homepage of Leon Michalak's Portfolio. View all my projects or get in touch!"
    >
      {/* Header */}
      <Header />

      {/* Projects filter & Project cards  */}
      <ProjectsContainer />
    </Layout>
  );
}
