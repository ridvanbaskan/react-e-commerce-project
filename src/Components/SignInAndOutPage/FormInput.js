import React from 'react';
import './formInput.scss';

export default function FormInput({ handleChange, label, ...otherProps }) {
  return (
    <div className="form-group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`form-label ${otherProps.value.length} ? "shrink" : "" `}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}
