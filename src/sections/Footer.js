import React from 'react';
import { Link } from 'gatsby';
import Logo from '../assets/logo.svg';
import CV from '../assets/Leon Michalak Frontend Developer CV.pdf';
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer-top'>
          <div>
            <h4 className='footer-title'>Quick Links</h4>
            <ul>
              <li className='footer-list-item'>
                <Link to='/' className='body-s-text'>
                  Home
                </Link>
              </li>
              <li className='footer-list-item'>
                <Link to='/#about' className='body-s-text'>
                  About
                </Link>
              </li>
              <li className='footer-list-item'>
                <Link to='/#projects' className='body-s-text'>
                  Projects
                </Link>
              </li>
              <li className='footer-list-item'>
                <a className='body-s-text footer-link' href={CV} download>
                  <svg
                    aria-label='Download'
                    className='footer-icon'
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M14 11V14H2V11H0V14C0 15.1 0.9 16 2 16H14C15.1 16 16 15.1 16 14V11H14ZM13 7L11.59 5.59L9 8.17V0H7V8.17L4.41 5.59L3 7L8 12L13 7Z'
                      fill='hsla(210, 80%, 98%, 0.75)'
                    />
                  </svg>
                  Download CV
                </a>
              </li>
              <li className='footer-list-item'>
                <Link to='/#contacts' className='body-s-text'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='footer-title'>Contact</h4>
            <ul>
              <li className='footer-list-item'>
                <a
                  href='mailto:leonmichalak6@gmail.com'
                  target='_blank'
                  rel='noreferrer'
                  className='body-s-text footer-link'
                >
                  <svg
                    className='footer-icon footer-contact-icon'
                    width='30'
                    height='30'
                    viewBox='0 0 30 30'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M25 5H7.5C6.12125 5 5 6.12125 5 7.5V13.75H7.5V10L15.5 16C15.7165 16.1621 15.9796 16.2497 16.25 16.2497C16.5204 16.2497 16.7836 16.1621 17 16L25 10V21.25H15V23.75H25C26.3788 23.75 27.5 22.6287 27.5 21.25V7.5C27.5 6.12125 26.3788 5 25 5ZM16.25 13.4375L8.3325 7.5H24.1675L16.25 13.4375Z'
                      fill='hsla(210, 80%, 98%, 0.75)'
                    />
                    <path
                      d='M2.5 15H11.25V17.5H2.5V15ZM5 18.75H12.5V21.25H5V18.75ZM8.75 22.5H13.75V25H8.75V22.5Z'
                      fill='hsla(210, 80%, 98%, 0.75)'
                    />
                  </svg>
                  leonmichalak6@gmail.com
                </a>
              </li>
              <li className='footer-list-item'>
                <a href='callto:07498610586' target='_blank' rel='noreferrer' className='body-s-text footer-link'>
                  <svg
                    className='footer-icon footer-contact-icon'
                    width='30'
                    height='23'
                    viewBox='0 0 30 23'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M7.50001 3.75C7.50001 2.75544 7.8951 1.80161 8.59836 1.09835C9.30162 0.395088 10.2554 0 11.25 0H18.75C19.7446 0 20.6984 0.395088 21.4016 1.09835C22.1049 1.80161 22.5 2.75544 22.5 3.75V18.75C22.5 19.7445 22.1049 20.6984 21.4016 21.4016C20.6984 22.1049 19.7446 22.5 18.75 22.5H11.25C10.2554 22.5 9.30162 22.1049 8.59836 21.4016C7.8951 20.6984 7.50001 19.7445 7.50001 18.75V3.75ZM16.875 16.875C16.875 16.3777 16.6775 15.9008 16.3258 15.5492C15.9742 15.1975 15.4973 15 15 15C14.5027 15 14.0258 15.1975 13.6742 15.5492C13.3225 15.9008 13.125 16.3777 13.125 16.875C13.125 17.3723 13.3225 17.8492 13.6742 18.2008C14.0258 18.5524 14.5027 18.75 15 18.75C15.4973 18.75 15.9742 18.5524 16.3258 18.2008C16.6775 17.8492 16.875 17.3723 16.875 16.875ZM3.38814 5.12625C3.5045 4.90645 3.52878 4.64943 3.45565 4.41172C3.38251 4.17402 3.21794 3.97511 2.99814 3.85875C2.77834 3.74238 2.52132 3.7181 2.28362 3.79124C2.04591 3.86438 1.847 4.02895 1.73064 4.24875C0.590613 6.40612 -0.00357716 8.80992 1.62016e-05 11.25C1.62016e-05 13.7756 0.626266 16.1587 1.73064 18.2512C1.78826 18.3601 1.86675 18.4565 1.96163 18.535C2.05651 18.6135 2.16592 18.6725 2.28362 18.7087C2.40132 18.745 2.52499 18.7576 2.64759 18.746C2.77019 18.7345 2.8893 18.6988 2.99814 18.6412C3.10697 18.5836 3.20339 18.5051 3.28189 18.4102C3.36039 18.3154 3.41943 18.206 3.45565 18.0883C3.49186 17.9706 3.50454 17.8469 3.49295 17.7243C3.48137 17.6017 3.44575 17.4826 3.38814 17.3737C2.3911 15.4867 1.87158 13.3842 1.87501 11.25C1.87501 9.03749 2.42251 6.95249 3.38814 5.12625ZM28.2694 4.24875C28.153 4.02895 27.9541 3.86438 27.7164 3.79124C27.4787 3.7181 27.2217 3.74238 27.0019 3.85875C26.7821 3.97511 26.6175 4.17402 26.5444 4.41172C26.4712 4.64943 26.4955 4.90645 26.6119 5.12625C27.5775 6.95249 28.125 9.03562 28.125 11.25C28.125 13.4625 27.5775 15.5475 26.6119 17.3737C26.4955 17.5935 26.4712 17.8506 26.5444 18.0883C26.6175 18.326 26.7821 18.5249 27.0019 18.6412C27.2217 18.7576 27.4787 18.7819 27.7164 18.7087C27.9541 18.6356 28.153 18.471 28.2694 18.2512C29.4094 16.0939 30.0036 13.6901 30 11.25C30.0036 8.80992 29.4094 6.40612 28.2694 4.24875V4.24875ZM6.26251 7.84124C6.31483 7.72536 6.34304 7.60005 6.34541 7.47293C6.34778 7.34581 6.32427 7.21954 6.27631 7.10179C6.22835 6.98404 6.15693 6.87728 6.06642 6.78799C5.9759 6.69871 5.86816 6.62877 5.74977 6.58243C5.63137 6.53609 5.50478 6.51432 5.37771 6.51844C5.25063 6.52255 5.12572 6.55248 5.01057 6.60638C4.89543 6.66029 4.79245 6.73706 4.7079 6.83202C4.62335 6.92697 4.559 7.03814 4.51876 7.15874C4.00964 8.46262 3.7489 9.85023 3.75001 11.25C3.75001 12.6919 4.02189 14.0719 4.51876 15.3412C4.559 15.4618 4.62335 15.573 4.7079 15.668C4.79245 15.7629 4.89543 15.8397 5.01057 15.8936C5.12572 15.9475 5.25063 15.9774 5.37771 15.9815C5.50478 15.9857 5.63137 15.9639 5.74977 15.9175C5.86816 15.8712 5.9759 15.8013 6.06642 15.712C6.15693 15.6227 6.22835 15.5159 6.27631 15.3982C6.32427 15.2804 6.34778 15.1542 6.34541 15.027C6.34304 14.8999 6.31483 14.7746 6.26251 14.6587C5.83928 13.5722 5.62306 12.4161 5.62501 11.25C5.62501 10.0462 5.85001 8.89687 6.26251 7.84124ZM25.4812 7.15874C25.3823 6.93968 25.2031 6.76698 24.9805 6.67631C24.7579 6.58564 24.5089 6.58393 24.2851 6.67153C24.0613 6.75913 23.8797 6.92936 23.7777 7.14704C23.6758 7.36473 23.6614 7.61324 23.7375 7.84124C24.15 8.89687 24.375 10.0462 24.375 11.25C24.375 12.4537 24.15 13.6031 23.7375 14.6587C23.6614 14.8867 23.6758 15.1352 23.7777 15.3529C23.8797 15.5706 24.0613 15.7408 24.2851 15.8284C24.5089 15.9161 24.7579 15.9143 24.9805 15.8237C25.2031 15.733 25.3823 15.5603 25.4812 15.3412C25.98 14.0719 26.25 12.6919 26.25 11.25C26.25 9.80812 25.9781 8.42812 25.4812 7.15874V7.15874Z'
                      fill='hsla(210, 80%, 98%, 0.75)'
                    />
                  </svg>
                  07498 610586
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='footer-title'>Social</h4>
            <ul className='footer-socials'>
              <li className='footer-social'>
                <a
                  href='https://github.com/NinjaInShade'
                  target='_blank_'
                  rel='noreferrer'
                  aria-label='Github social link'
                >
                  <svg width='19' height='18' viewBox='0 0 19 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M9.27143 0C8.05389 0 6.84827 0.238571 5.72341 0.702093C4.59854 1.16561 3.57647 1.84501 2.71554 2.70148C0.976808 4.43121 0 6.77723 0 9.22344C0 13.3002 2.6609 16.759 6.34166 17.9857C6.80523 18.0595 6.95357 17.7736 6.95357 17.5245V15.9658C4.38539 16.5192 3.83837 14.7298 3.83837 14.7298C3.41189 13.6599 2.80924 13.374 2.80924 13.374C1.96554 12.8021 2.87414 12.8206 2.87414 12.8206C3.80129 12.8851 4.29267 13.7706 4.29267 13.7706C5.09929 15.1726 6.46219 14.7575 6.99066 14.5361C7.0741 13.9366 7.31516 13.5308 7.57476 13.3002C5.5165 13.0696 3.35626 12.2764 3.35626 8.76227C3.35626 7.73847 3.70857 6.91758 4.31121 6.26272C4.2185 6.03213 3.894 5.07289 4.40393 3.82773C4.40393 3.82773 5.18273 3.5787 6.95357 4.76852C7.68601 4.5656 8.48336 4.46415 9.27143 4.46415C10.0595 4.46415 10.8568 4.5656 11.5893 4.76852C13.3601 3.5787 14.1389 3.82773 14.1389 3.82773C14.6489 5.07289 14.3244 6.03213 14.2316 6.26272C14.8343 6.91758 15.1866 7.73847 15.1866 8.76227C15.1866 12.2856 13.0171 13.0604 10.9496 13.291C11.2833 13.5769 11.5893 14.1395 11.5893 14.9973V17.5245C11.5893 17.7736 11.7376 18.0687 12.2105 17.9857C15.8912 16.7498 18.5429 13.3002 18.5429 9.22344C18.5429 8.0122 18.303 6.81282 17.8371 5.69378C17.3712 4.57474 16.6883 3.55796 15.8273 2.70148C14.9664 1.84501 13.9443 1.16561 12.8195 0.702093C11.6946 0.238571 10.489 0 9.27143 0V0Z'
                      fill='hsla(210, 80%, 98%, 0.75)'
                    />
                  </svg>
                </a>
              </li>
              <li className='footer-social'>
                <a
                  href='https://www.instagram.com/thefrontendguy/'
                  target='_blank_'
                  rel='noreferrer'
                  aria-label='Instagram social link'
                >
                  <svg width='20' height='18' viewBox='0 0 20 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M5.92027 0H13.7083C16.6751 0 19.0857 2.34 19.0857 5.22V12.78C19.0857 14.1644 18.5192 15.4922 17.5107 16.4711C16.5022 17.45 15.1345 18 13.7083 18H5.92027C2.95342 18 0.542847 15.66 0.542847 12.78V5.22C0.542847 3.83557 1.1094 2.50784 2.11786 1.5289C3.12632 0.549963 4.49409 0 5.92027 0V0ZM5.73485 1.8C4.84963 1.8 4.00067 2.14136 3.37473 2.74897C2.74878 3.35659 2.39713 4.1807 2.39713 5.04V12.96C2.39713 14.751 3.88983 16.2 5.73485 16.2H13.8937C14.7789 16.2 15.6279 15.8586 16.2538 15.251C16.8798 14.6434 17.2314 13.8193 17.2314 12.96V5.04C17.2314 3.249 15.7387 1.8 13.8937 1.8H5.73485ZM14.6818 3.15C14.9891 3.15 15.2839 3.26853 15.5013 3.4795C15.7186 3.69048 15.8407 3.97663 15.8407 4.275C15.8407 4.57337 15.7186 4.85952 15.5013 5.07049C15.2839 5.28147 14.9891 5.4 14.6818 5.4C14.3744 5.4 14.0796 5.28147 13.8623 5.07049C13.6449 4.85952 13.5228 4.57337 13.5228 4.275C13.5228 3.97663 13.6449 3.69048 13.8623 3.4795C14.0796 3.26853 14.3744 3.15 14.6818 3.15ZM9.81427 4.5C11.0437 4.5 12.2229 4.97411 13.0922 5.81802C13.9616 6.66193 14.45 7.80653 14.45 9C14.45 10.1935 13.9616 11.3381 13.0922 12.182C12.2229 13.0259 11.0437 13.5 9.81427 13.5C8.58481 13.5 7.40569 13.0259 6.53633 12.182C5.66696 11.3381 5.17856 10.1935 5.17856 9C5.17856 7.80653 5.66696 6.66193 6.53633 5.81802C7.40569 4.97411 8.58481 4.5 9.81427 4.5V4.5ZM9.81427 6.3C9.07659 6.3 8.36913 6.58446 7.84751 7.09081C7.32589 7.59716 7.03285 8.28392 7.03285 9C7.03285 9.71608 7.32589 10.4028 7.84751 10.9092C8.36913 11.4155 9.07659 11.7 9.81427 11.7C10.552 11.7 11.2594 11.4155 11.781 10.9092C12.3027 10.4028 12.5957 9.71608 12.5957 9C12.5957 8.28392 12.3027 7.59716 11.781 7.09081C11.2594 6.58446 10.552 6.3 9.81427 6.3Z'
                      fill='hsla(210, 80%, 98%, 0.75)'
                    />
                  </svg>
                </a>
              </li>
              <li className='footer-social'>
                <a
                  href='https://www.linkedin.com/in/leonmichalak/'
                  target='_blank_'
                  rel='noreferrer'
                  aria-label='LinkedIn social link'
                >
                  <svg width='20' height='18' viewBox='0 0 20 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M17.3174 0C17.8887 0 18.4366 0.210714 18.8405 0.585786C19.2445 0.960859 19.4714 1.46957 19.4714 2V16C19.4714 16.5304 19.2445 17.0391 18.8405 17.4142C18.4366 17.7893 17.8887 18 17.3174 18H2.23966C1.66839 18 1.12052 17.7893 0.716576 17.4142C0.312629 17.0391 0.0856934 16.5304 0.0856934 16V2C0.0856934 1.46957 0.312629 0.960859 0.716576 0.585786C1.12052 0.210714 1.66839 0 2.23966 0H17.3174ZM16.7789 15.5V10.2C16.7789 9.33539 16.409 8.5062 15.7506 7.89483C15.0922 7.28346 14.1991 6.94 13.268 6.94C12.3525 6.94 11.2863 7.46 10.7694 8.24V7.13H7.76459V15.5H10.7694V10.57C10.7694 9.8 11.4371 9.17 12.2664 9.17C12.6663 9.17 13.0498 9.3175 13.3325 9.58005C13.6153 9.8426 13.7742 10.1987 13.7742 10.57V15.5H16.7789ZM4.26439 5.56C4.74426 5.56 5.20447 5.383 5.54378 5.06794C5.8831 4.75288 6.07372 4.32556 6.07372 3.88C6.07372 2.95 5.26599 2.19 4.26439 2.19C3.78167 2.19 3.31872 2.36805 2.97738 2.68499C2.63605 3.00193 2.44429 3.43178 2.44429 3.88C2.44429 4.81 3.2628 5.56 4.26439 5.56V5.56ZM5.7614 15.5V7.13H2.77815V15.5H5.7614V15.5Z'
                      fill='hsla(210, 80%, 98%, 0.75)'
                    />
                  </svg>
                </a>
              </li>
              <li className='footer-social'>
                <a
                  href='https://twitter.com/TheFrontendGuyX'
                  target='_blank_'
                  rel='noreferrer'
                  aria-label='Twitter social link'
                >
                  <svg width='25' height='18' viewBox='0 0 25 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M24.0714 2.11765C23.2028 2.48824 22.2665 2.73176 21.2963 2.84824C22.289 2.28706 23.0561 1.39765 23.4171 0.328235C22.4808 0.857647 21.4429 1.22824 20.3487 1.44C19.4575 0.529412 18.2053 0 16.7839 0C14.1328 0 11.9668 2.03294 11.9668 4.54235C11.9668 4.90235 12.012 5.25177 12.0909 5.58C8.07488 5.38941 4.49878 3.57882 2.11847 0.836471C1.70107 1.50353 1.46417 2.28706 1.46417 3.11294C1.46417 4.69059 2.31025 6.08824 3.61885 6.88235C2.8179 6.88235 2.07335 6.67059 1.41905 6.35294V6.38471C1.41905 8.58706 3.08864 10.4294 5.29973 10.8424C4.58985 11.0247 3.84458 11.0501 3.12249 10.9165C3.42889 11.8191 4.02896 12.6089 4.83836 13.1749C5.64775 13.7408 6.62576 14.0545 7.63492 14.0718C5.92429 15.3428 3.80386 16.0299 1.6221 16.02C1.23855 16.02 0.854992 15.9988 0.471436 15.9565C2.61484 17.2482 5.16436 18 7.89438 18C16.7839 18 21.6686 11.0753 21.6686 5.07176C21.6686 4.87059 21.6686 4.68 21.6573 4.47882C22.6049 3.84353 23.4171 3.03882 24.0714 2.11765V2.11765Z'
                      fill='hsla(210, 80%, 98%, 0.75)'
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='footer-seperator'>
          <div className='footer-seperator-logo-container'>
            <img src={Logo} alt='Leon Michalak logo' className='footer-seperator-logo' />
          </div>
        </div>

        <small className='small-text footer-copyright'>© Copyright 2021 | Leon Michalak | All rights reserved</small>
      </div>
    </footer>
  );
}
