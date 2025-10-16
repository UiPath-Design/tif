import React from 'react';
import { AlertCircle } from 'lucide-react';
import { FormFieldProps } from '../types';

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  required = false,
  error,
  help,
  children,
}) => {
  const fieldId = `field-${name}`;
  const errorId = error ? `${fieldId}-error` : undefined;
  const helpId = help ? `${fieldId}-help` : undefined;

  return (
    <div className="mb-6">
      <label
        htmlFor={fieldId}
        className={`form-label ${required ? 'required' : ''}`}
      >
        {label}
      </label>

      <div className="relative">
        {React.cloneElement(children as React.ReactElement, {
          id: fieldId,
          name,
          'aria-required': required,
          'aria-invalid': Boolean(error),
          'aria-describedby': [errorId, helpId].filter(Boolean).join(' ') || undefined,
          className: `${(children as React.ReactElement).props.className || ''} ${error ? 'error' : ''}`.trim(),
        })}
      </div>

      {error && (
        <div id={errorId} className="form-error" role="alert">
          <AlertCircle size={16} className="flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {help && !error && (
        <div id={helpId} className="form-help">
          {help}
        </div>
      )}
    </div>
  );
};

export default FormField;
