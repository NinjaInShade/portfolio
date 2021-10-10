import React, { useState } from 'react';
import Input from '../components/Input';
import '../styles/contact-form.css';

export default function ContactForm() {
  const [name, setName] = useState({ value: '', error: undefined });
  const [email, setEmail] = useState({ value: '', error: undefined });
  const [message, setMessage] = useState({ value: '', error: undefined });

  const [formSending, setFormSending] = useState(undefined);

  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const validateName = (e) => {
    setName((prevState) => {
      return { ...prevState, value: e.target.value };
    });
  };

  const validateEmail = (e) => {
    setEmail((prevState) => {
      return { ...prevState, value: e.target.value };
    });
  };

  const validateMessage = (e) => {
    setMessage((prevState) => {
      return { ...prevState, value: e.target.value };
    });
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (name.error || email.error || message.error) {
      return;
    }

    setFormSending('sending');

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', name: name.value, email: email.value, message: message.value }),
    })
      .then(() => console.log('Form submission successful.'))
      .catch((error) => console.log('There was an error submitting form.'));

    setTimeout(() => {
      setFormSending('sent');
    }, 3000);
  };

  return (
    <div className='c-form'>
      <form name='contact' method='POST' data-netlify='true'>
        <input type='hidden' name='contact' value='Contact Form' />
        <Input
          type='text'
          value={name.value}
          onChange={validateName}
          error={name.error}
          label='Name'
          placeholder='John doe...'
          id='name'
        />
        <Input
          type='text'
          value={email.value}
          onChange={validateEmail}
          error={email.error}
          label='Email'
          placeholder='example@email.com...'
          id='email'
        />
        <Input
          type='textarea'
          value={message.value}
          onChange={validateMessage}
          error={message.error}
          label='Message'
          placeholder="Hi, i'd like to talk about..."
          id='message'
        />
        <button
          className={`btn btn-primary ${formSending === 'sending' && 'btn-loading'}`}
          type='submit'
          onClick={(e) => submitForm(e)}
        >
          <svg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M25 5H7.5C6.12125 5 5 6.12125 5 7.5V13.75H7.5V10L15.5 16C15.7165 16.1621 15.9796 16.2497 16.25 16.2497C16.5204 16.2497 16.7836 16.1621 17 16L25 10V21.25H15V23.75H25C26.3788 23.75 27.5 22.6287 27.5 21.25V7.5C27.5 6.12125 26.3788 5 25 5ZM16.25 13.4375L8.3325 7.5H24.1675L16.25 13.4375Z'
              fill='#F6FAFE'
            />
            <path
              d='M2.5 15H11.25V17.5H2.5V15ZM5 18.75H12.5V21.25H5V18.75ZM8.75 22.5H13.75V25H8.75V22.5Z'
              fill='#F6FAFE'
            />
          </svg>
          {!formSending && 'Send Mail'}
          {formSending === 'sending' && 'Sending Mail'}
          {formSending === 'sent' && 'Sent Mail!'}
        </button>
      </form>
      <div className='c-form-seperator'></div>
      <address className='c-form-details'>
        <svg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M25 5H7.5C6.12125 5 5 6.12125 5 7.5V13.75H7.5V10L15.5 16C15.7165 16.1621 15.9796 16.2497 16.25 16.2497C16.5204 16.2497 16.7836 16.1621 17 16L25 10V21.25H15V23.75H25C26.3788 23.75 27.5 22.6287 27.5 21.25V7.5C27.5 6.12125 26.3788 5 25 5ZM16.25 13.4375L8.3325 7.5H24.1675L16.25 13.4375Z'
            fill='#041A2F'
          />
          <path
            d='M2.5 15H11.25V17.5H2.5V15ZM5 18.75H12.5V21.25H5V18.75ZM8.75 22.5H13.75V25H8.75V22.5Z'
            fill='#041A2F'
          />
        </svg>
        <a
          href='mailto:leonmichalak6@gmail.com'
          target='_blank'
          rel='noreferrer'
          className='c-form-contact body-s-text'
        >
          leonmichalak6@gmail.com
        </a>
      </address>
      <address className='c-form-details'>
        <svg width='30' height='23' viewBox='0 0 30 23' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M7.50001 3.75C7.50001 2.75544 7.8951 1.80161 8.59836 1.09835C9.30162 0.395088 10.2554 0 11.25 0H18.75C19.7446 0 20.6984 0.395088 21.4016 1.09835C22.1049 1.80161 22.5 2.75544 22.5 3.75V18.75C22.5 19.7445 22.1049 20.6984 21.4016 21.4016C20.6984 22.1049 19.7446 22.5 18.75 22.5H11.25C10.2554 22.5 9.30162 22.1049 8.59836 21.4016C7.8951 20.6984 7.50001 19.7445 7.50001 18.75V3.75ZM16.875 16.875C16.875 16.3777 16.6775 15.9008 16.3258 15.5492C15.9742 15.1975 15.4973 15 15 15C14.5027 15 14.0258 15.1975 13.6742 15.5492C13.3225 15.9008 13.125 16.3777 13.125 16.875C13.125 17.3723 13.3225 17.8492 13.6742 18.2008C14.0258 18.5524 14.5027 18.75 15 18.75C15.4973 18.75 15.9742 18.5524 16.3258 18.2008C16.6775 17.8492 16.875 17.3723 16.875 16.875ZM3.38814 5.12625C3.5045 4.90645 3.52878 4.64943 3.45565 4.41172C3.38251 4.17402 3.21794 3.97511 2.99814 3.85875C2.77834 3.74238 2.52132 3.7181 2.28362 3.79124C2.04591 3.86438 1.847 4.02895 1.73064 4.24875C0.590613 6.40612 -0.00357716 8.80992 1.62016e-05 11.25C1.62016e-05 13.7756 0.626266 16.1587 1.73064 18.2512C1.78826 18.3601 1.86675 18.4565 1.96163 18.535C2.05651 18.6135 2.16592 18.6725 2.28362 18.7087C2.40132 18.745 2.52499 18.7576 2.64759 18.746C2.77019 18.7345 2.8893 18.6988 2.99814 18.6412C3.10697 18.5836 3.20339 18.5051 3.28189 18.4102C3.36039 18.3154 3.41943 18.206 3.45565 18.0883C3.49186 17.9706 3.50454 17.8469 3.49295 17.7243C3.48137 17.6017 3.44575 17.4826 3.38814 17.3737C2.3911 15.4867 1.87158 13.3842 1.87501 11.25C1.87501 9.03749 2.42251 6.95249 3.38814 5.12625ZM28.2694 4.24875C28.153 4.02895 27.9541 3.86438 27.7164 3.79124C27.4787 3.7181 27.2217 3.74238 27.0019 3.85875C26.7821 3.97511 26.6175 4.17402 26.5444 4.41172C26.4712 4.64943 26.4955 4.90645 26.6119 5.12625C27.5775 6.95249 28.125 9.03562 28.125 11.25C28.125 13.4625 27.5775 15.5475 26.6119 17.3737C26.4955 17.5935 26.4712 17.8506 26.5444 18.0883C26.6175 18.326 26.7821 18.5249 27.0019 18.6412C27.2217 18.7576 27.4787 18.7819 27.7164 18.7087C27.9541 18.6356 28.153 18.471 28.2694 18.2512C29.4094 16.0939 30.0036 13.6901 30 11.25C30.0036 8.80992 29.4094 6.40612 28.2694 4.24875V4.24875ZM6.26251 7.84124C6.31483 7.72536 6.34304 7.60005 6.34541 7.47293C6.34778 7.34581 6.32427 7.21954 6.27631 7.10179C6.22835 6.98404 6.15693 6.87728 6.06642 6.78799C5.9759 6.69871 5.86816 6.62877 5.74977 6.58243C5.63137 6.53609 5.50478 6.51432 5.37771 6.51844C5.25063 6.52255 5.12572 6.55248 5.01057 6.60638C4.89543 6.66029 4.79245 6.73706 4.7079 6.83202C4.62335 6.92697 4.559 7.03814 4.51876 7.15874C4.00964 8.46262 3.7489 9.85023 3.75001 11.25C3.75001 12.6919 4.02189 14.0719 4.51876 15.3412C4.559 15.4618 4.62335 15.573 4.7079 15.668C4.79245 15.7629 4.89543 15.8397 5.01057 15.8936C5.12572 15.9475 5.25063 15.9774 5.37771 15.9815C5.50478 15.9857 5.63137 15.9639 5.74977 15.9175C5.86816 15.8712 5.9759 15.8013 6.06642 15.712C6.15693 15.6227 6.22835 15.5159 6.27631 15.3982C6.32427 15.2804 6.34778 15.1542 6.34541 15.027C6.34304 14.8999 6.31483 14.7746 6.26251 14.6587C5.83928 13.5722 5.62306 12.4161 5.62501 11.25C5.62501 10.0462 5.85001 8.89687 6.26251 7.84124ZM25.4812 7.15874C25.3823 6.93968 25.2031 6.76698 24.9805 6.67631C24.7579 6.58564 24.5089 6.58393 24.2851 6.67153C24.0613 6.75913 23.8797 6.92936 23.7777 7.14704C23.6758 7.36473 23.6614 7.61324 23.7375 7.84124C24.15 8.89687 24.375 10.0462 24.375 11.25C24.375 12.4537 24.15 13.6031 23.7375 14.6587C23.6614 14.8867 23.6758 15.1352 23.7777 15.3529C23.8797 15.5706 24.0613 15.7408 24.2851 15.8284C24.5089 15.9161 24.7579 15.9143 24.9805 15.8237C25.2031 15.733 25.3823 15.5603 25.4812 15.3412C25.98 14.0719 26.25 12.6919 26.25 11.25C26.25 9.80812 25.9781 8.42812 25.4812 7.15874V7.15874Z'
            fill='#041A2F'
          />
        </svg>
        <a href='callto:07498610586' target='_blank' rel='noreferrer' className='c-form-contact body-s-text'>
          07498 610586
        </a>
      </address>
    </div>
  );
}
