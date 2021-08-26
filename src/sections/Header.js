import React from 'react';
import { Link } from 'gatsby';
import LogoOverlayPattern from '../assets/pattern-logo.svg';
import LaptopImg from '../assets/image-header.png';
import LaptopImgTablet from '../assets/image-header-tablet.png';
import '../styles/header.css';

export default function Header() {
  return (
    <header className='header'>
      <div className='header-bg'>
        <div className='header-content-container'>
          <h1 className='header-title'>
            Frontend developer
            <br /> creating unique
            <br /> websites
          </h1>
          <p className='body-text header-subtitle'>
            Hi, I’m Leon, a web developer from the UK. I love
            <br /> working on creative projects that challenge myself.{' '}
          </p>
          <div className='header-links'>
            <Link to='/#contact' className='btn btn-secondary'>
              Get in touch
            </Link>
            <Link to='/#projects' className='header-projects-link'>
              View my projects
              <svg
                className='header-projects-link-icon'
                width='13'
                height='12'
                viewBox='0 0 13 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M8.625 0.75H5.25L9 6L5.25 11.25H8.625L12.375 6L8.625 0.75Z' fill='#F6FAFE' />
                <path d='M3.375 0.75H0L3.75 6L0 11.25H3.375L7.125 6L3.375 0.75Z' fill='#F6FAFE' />
              </svg>
            </Link>
          </div>
          <div className='header-img-outer-container'>
            <div className='header-img-inner-container'>
              <img
                src={LogoOverlayPattern}
                className='header-pattern'
                alt='Decorative overlay background pattern. My logo repeated vertically and horizontally.'
              />
              <ul className='header-socials-container'>
                <li className='header-social'>
                  <a
                    href='https://github.com/NinjaInShade'
                    target='_blank_'
                    rel='noreferrer'
                    aria-label='Github social link'
                  >
                    <svg width='19' height='18' viewBox='0 0 19 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M9.27143 0C8.05389 0 6.84827 0.238571 5.72341 0.702093C4.59854 1.16561 3.57647 1.84501 2.71554 2.70148C0.976808 4.43121 0 6.77723 0 9.22344C0 13.3002 2.6609 16.759 6.34166 17.9857C6.80523 18.0595 6.95357 17.7736 6.95357 17.5245V15.9658C4.38539 16.5192 3.83837 14.7298 3.83837 14.7298C3.41189 13.6599 2.80924 13.374 2.80924 13.374C1.96554 12.8021 2.87414 12.8206 2.87414 12.8206C3.80129 12.8851 4.29267 13.7706 4.29267 13.7706C5.09929 15.1726 6.46219 14.7575 6.99066 14.5361C7.0741 13.9366 7.31516 13.5308 7.57476 13.3002C5.5165 13.0696 3.35626 12.2764 3.35626 8.76227C3.35626 7.73847 3.70857 6.91758 4.31121 6.26272C4.2185 6.03213 3.894 5.07289 4.40393 3.82773C4.40393 3.82773 5.18273 3.5787 6.95357 4.76852C7.68601 4.5656 8.48336 4.46415 9.27143 4.46415C10.0595 4.46415 10.8568 4.5656 11.5893 4.76852C13.3601 3.5787 14.1389 3.82773 14.1389 3.82773C14.6489 5.07289 14.3244 6.03213 14.2316 6.26272C14.8343 6.91758 15.1866 7.73847 15.1866 8.76227C15.1866 12.2856 13.0171 13.0604 10.9496 13.291C11.2833 13.5769 11.5893 14.1395 11.5893 14.9973V17.5245C11.5893 17.7736 11.7376 18.0687 12.2105 17.9857C15.8912 16.7498 18.5429 13.3002 18.5429 9.22344C18.5429 8.0122 18.303 6.81282 17.8371 5.69378C17.3712 4.57474 16.6883 3.55796 15.8273 2.70148C14.9664 1.84501 13.9443 1.16561 12.8195 0.702093C11.6946 0.238571 10.489 0 9.27143 0V0Z'
                        fill='#F6FAFE'
                      />
                    </svg>
                  </a>
                </li>
                <li className='header-social'>
                  <a
                    href='https://www.instagram.com/thefrontendguy/'
                    target='_blank_'
                    rel='noreferrer'
                    aria-label='Instagram social link'
                  >
                    <svg width='20' height='18' viewBox='0 0 20 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M5.92027 0H13.7083C16.6751 0 19.0857 2.34 19.0857 5.22V12.78C19.0857 14.1644 18.5192 15.4922 17.5107 16.4711C16.5022 17.45 15.1345 18 13.7083 18H5.92027C2.95342 18 0.542847 15.66 0.542847 12.78V5.22C0.542847 3.83557 1.1094 2.50784 2.11786 1.5289C3.12632 0.549963 4.49409 0 5.92027 0V0ZM5.73485 1.8C4.84963 1.8 4.00067 2.14136 3.37473 2.74897C2.74878 3.35659 2.39713 4.1807 2.39713 5.04V12.96C2.39713 14.751 3.88983 16.2 5.73485 16.2H13.8937C14.7789 16.2 15.6279 15.8586 16.2538 15.251C16.8798 14.6434 17.2314 13.8193 17.2314 12.96V5.04C17.2314 3.249 15.7387 1.8 13.8937 1.8H5.73485ZM14.6818 3.15C14.9891 3.15 15.2839 3.26853 15.5013 3.4795C15.7186 3.69048 15.8407 3.97663 15.8407 4.275C15.8407 4.57337 15.7186 4.85952 15.5013 5.07049C15.2839 5.28147 14.9891 5.4 14.6818 5.4C14.3744 5.4 14.0796 5.28147 13.8623 5.07049C13.6449 4.85952 13.5228 4.57337 13.5228 4.275C13.5228 3.97663 13.6449 3.69048 13.8623 3.4795C14.0796 3.26853 14.3744 3.15 14.6818 3.15ZM9.81427 4.5C11.0437 4.5 12.2229 4.97411 13.0922 5.81802C13.9616 6.66193 14.45 7.80653 14.45 9C14.45 10.1935 13.9616 11.3381 13.0922 12.182C12.2229 13.0259 11.0437 13.5 9.81427 13.5C8.58481 13.5 7.40569 13.0259 6.53633 12.182C5.66696 11.3381 5.17856 10.1935 5.17856 9C5.17856 7.80653 5.66696 6.66193 6.53633 5.81802C7.40569 4.97411 8.58481 4.5 9.81427 4.5V4.5ZM9.81427 6.3C9.07659 6.3 8.36913 6.58446 7.84751 7.09081C7.32589 7.59716 7.03285 8.28392 7.03285 9C7.03285 9.71608 7.32589 10.4028 7.84751 10.9092C8.36913 11.4155 9.07659 11.7 9.81427 11.7C10.552 11.7 11.2594 11.4155 11.781 10.9092C12.3027 10.4028 12.5957 9.71608 12.5957 9C12.5957 8.28392 12.3027 7.59716 11.781 7.09081C11.2594 6.58446 10.552 6.3 9.81427 6.3Z'
                        fill='#F6FAFE'
                      />
                    </svg>
                  </a>
                </li>
                <li className='header-social'>
                  <a
                    href='https://www.linkedin.com/in/leonmichalak/'
                    target='_blank_'
                    rel='noreferrer'
                    aria-label='LinkedIn social link'
                  >
                    <svg width='20' height='18' viewBox='0 0 20 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M17.3174 0C17.8887 0 18.4366 0.210714 18.8405 0.585786C19.2445 0.960859 19.4714 1.46957 19.4714 2V16C19.4714 16.5304 19.2445 17.0391 18.8405 17.4142C18.4366 17.7893 17.8887 18 17.3174 18H2.23966C1.66839 18 1.12052 17.7893 0.716576 17.4142C0.312629 17.0391 0.0856934 16.5304 0.0856934 16V2C0.0856934 1.46957 0.312629 0.960859 0.716576 0.585786C1.12052 0.210714 1.66839 0 2.23966 0H17.3174ZM16.7789 15.5V10.2C16.7789 9.33539 16.409 8.5062 15.7506 7.89483C15.0922 7.28346 14.1991 6.94 13.268 6.94C12.3525 6.94 11.2863 7.46 10.7694 8.24V7.13H7.76459V15.5H10.7694V10.57C10.7694 9.8 11.4371 9.17 12.2664 9.17C12.6663 9.17 13.0498 9.3175 13.3325 9.58005C13.6153 9.8426 13.7742 10.1987 13.7742 10.57V15.5H16.7789ZM4.26439 5.56C4.74426 5.56 5.20447 5.383 5.54378 5.06794C5.8831 4.75288 6.07372 4.32556 6.07372 3.88C6.07372 2.95 5.26599 2.19 4.26439 2.19C3.78167 2.19 3.31872 2.36805 2.97738 2.68499C2.63605 3.00193 2.44429 3.43178 2.44429 3.88C2.44429 4.81 3.2628 5.56 4.26439 5.56V5.56ZM5.7614 15.5V7.13H2.77815V15.5H5.7614V15.5Z'
                        fill='#F6FAFE'
                      />
                    </svg>
                  </a>
                </li>
                <li className='header-social'>
                  <a
                    href='https://twitter.com/TheFrontendGuyX'
                    target='_blank_'
                    rel='noreferrer'
                    aria-label='Twitter social link'
                  >
                    <svg width='25' height='18' viewBox='0 0 25 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M24.0714 2.11765C23.2028 2.48824 22.2665 2.73176 21.2963 2.84824C22.289 2.28706 23.0561 1.39765 23.4171 0.328235C22.4808 0.857647 21.4429 1.22824 20.3487 1.44C19.4575 0.529412 18.2053 0 16.7839 0C14.1328 0 11.9668 2.03294 11.9668 4.54235C11.9668 4.90235 12.012 5.25177 12.0909 5.58C8.07488 5.38941 4.49878 3.57882 2.11847 0.836471C1.70107 1.50353 1.46417 2.28706 1.46417 3.11294C1.46417 4.69059 2.31025 6.08824 3.61885 6.88235C2.8179 6.88235 2.07335 6.67059 1.41905 6.35294V6.38471C1.41905 8.58706 3.08864 10.4294 5.29973 10.8424C4.58985 11.0247 3.84458 11.0501 3.12249 10.9165C3.42889 11.8191 4.02896 12.6089 4.83836 13.1749C5.64775 13.7408 6.62576 14.0545 7.63492 14.0718C5.92429 15.3428 3.80386 16.0299 1.6221 16.02C1.23855 16.02 0.854992 15.9988 0.471436 15.9565C2.61484 17.2482 5.16436 18 7.89438 18C16.7839 18 21.6686 11.0753 21.6686 5.07176C21.6686 4.87059 21.6686 4.68 21.6573 4.47882C22.6049 3.84353 23.4171 3.03882 24.0714 2.11765V2.11765Z'
                        fill='#F6FAFE'
                      />
                    </svg>
                  </a>
                </li>
              </ul>
              <img
                src={LaptopImg}
                srcSet={`${LaptopImg} 366w, ${LaptopImgTablet} 188w`}
                sizes='(max-width: 1050px) 188px, 366px'
                className='header-img'
                alt='Laptop and coffee on a bed, with a code editor open.'
              />
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </header>
  );
}
