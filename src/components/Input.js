import React from 'react';
import '../styles/input.css';

export default function Input({ type, value, onChange, error, label, placeholder, id }) {
  return (
    <div className='input'>
      <label for={id} className='body-s-text'>
        {label}
      </label>
      {type === 'text' ? (
        <input
          className='body-s-text'
          type='text'
          value={value}
          onChange={(e) => onChange(e)}
          placeholder={placeholder}
          id={id}
          name={id}
        />
      ) : (
        <textarea
          className='body-s-text'
          value={value}
          onChange={(e) => onChange(e)}
          placeholder={placeholder}
          id={id}
          name={id}
        />
      )}
      <small className={`error small-text ${!error && 'error-valid'}`}>{error ? error : 'Field is valid.'}</small>
    </div>
  );
}
