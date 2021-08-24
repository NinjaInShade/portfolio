import React from 'react';
import LogoFavicon from '../assets/favicon.ico';
import Navbar from '../components/Navbar';
import { Helmet } from 'react-helmet';

export default function Layout({ pageTitle, pageDescription, children }) {
  return (
    <>
      <Helmet>
        <html lang='en' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
        <link
          href='https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500;700;900&Bai+Jamjuree:wght@700&display=swap'
          rel='stylesheet'
        />
        <link rel='icon' href={LogoFavicon}></link>
        <title>{pageTitle}</title>
        <meta name='description' content={pageDescription}></meta>
      </Helmet>
      <Navbar />
      {children}
    </>
  );
}
