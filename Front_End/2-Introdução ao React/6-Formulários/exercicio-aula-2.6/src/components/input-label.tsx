import React from 'react';
import './input-label.css';

type InputLabelProps = {
  name: string;
  value: string;
  title: string;
  type?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
};

function InputLabel({
  name,
  value,
  title,
  type = 'text',
  onChange = () => {},
  onFocus = () => {},
}: InputLabelProps) {
  return (
    <div className={ `form__group${value?.toString().length ? ' not__empty' : ''}` }>
      <input
        className="form__control"
        type={ type }
        name={ name }
        id={ name }
        value={ value }
        onChange={ onChange }
        onFocus={ onFocus }
      />
      <label htmlFor={ name } className="animated__label">{title}</label>
    </div>
  );
}

export default InputLabel;
