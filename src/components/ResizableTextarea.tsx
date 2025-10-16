import React from "react";
import { TextareaProps } from "../types";
import FormField from "./FormField";
import { getCharacterCounterClass } from "../utils/validation";

const ResizableTextarea: React.FC<TextareaProps> = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  required = false,
  error,
  help,
  maxLength = 250,
  disabled = false,
}) => {
  const currentLength = value.length;
  const counterClass = getCharacterCounterClass(currentLength, maxLength);

  return (
    <FormField
      label={label}
      name={name}
      required={required}
      error={error}
      help={help}
    >
      <div className="textarea-container relative">
        <textarea
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          disabled={disabled}
          maxLength={maxLength}
          className="form-textarea pr-16"
          rows={4}
          style={{ resize: "vertical", maxHeight: "240px" }}
        />
        <div className={counterClass}>
          {currentLength}/{maxLength}
        </div>
      </div>
    </FormField>
  );
};

export default ResizableTextarea;
