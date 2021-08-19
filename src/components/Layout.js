import React from 'react';
import LogoFavicon from '../assets/favicon.ico';
import { Helmet } from 'react-helmet';

export default function Layout({ pageTitle, children }) {
  return (
    <>
      <Helmet>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
        <link
          href='https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500;700;900&display=swap'
          rel='stylesheet'
        />
        <link rel='icon' href={LogoFavicon}></link>
        <title>{pageTitle}</title>
      </Helmet>
      {children}
    </>
  );
}
