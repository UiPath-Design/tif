import React from 'react';
import { TextInputProps } from '../types';
import FormField from './FormField';

const TextInput: React.FC<TextInputProps> = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  onBlur,
  placeholder,
  required = false,
  error,
  help,
  disabled = false,
}) => {
  return (
    <FormField
      label={label}
      name={name}
      required={required}
      error={error}
      help={help}
    >
      <input
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        disabled={disabled}
        className="form-input"
        autoComplete={type === 'email' ? 'email' : 'off'}
      />
    </FormField>
  );
};

export default TextInput;
