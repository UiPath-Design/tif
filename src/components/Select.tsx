import React from 'react';
import { SelectProps } from '../types';
import FormField from './FormField';

const Select: React.FC<SelectProps> = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  options,
  placeholder = 'Select an option...',
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
      <select
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        className="form-select"
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </FormField>
  );
};

export default Select;
