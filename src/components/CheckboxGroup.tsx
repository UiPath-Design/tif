import React from "react";
import { CheckboxGroupProps } from "../types";
import FormField from "./FormField";

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  label,
  name,
  options,
  selected,
  onChange,
  required = false,
  error,
  help,
  disabled = false,
}) => {
  const handleCheckboxChange = (optionValue: string, checked: boolean) => {
    // Handle "All" option special logic
    if (optionValue === "all") {
      if (checked) {
        // Select all options when "All" is checked
        const allValues = options.map((option) => option.value);
        onChange(allValues);
      } else {
        // Uncheck all options when "All" is unchecked
        onChange([]);
      }
      return;
    }

    // Handle regular options
    let newSelected: string[];
    if (checked) {
      newSelected = [...selected, optionValue];
    } else {
      newSelected = selected.filter((value) => value !== optionValue);
    }

    // If all non-"all" options are selected, also select "All"
    const nonAllOptions = options.filter((option) => option.value !== "all");
    const allNonAllSelected = nonAllOptions.every((option) =>
      newSelected.includes(option.value),
    );

    if (allNonAllSelected && !newSelected.includes("all")) {
      newSelected.push("all");
    } else if (!allNonAllSelected && newSelected.includes("all")) {
      // If not all options are selected, remove "All"
      newSelected = newSelected.filter((value) => value !== "all");
    }

    onChange(newSelected);
  };

  return (
    <FormField
      label={label}
      name={name}
      required={required}
      error={error}
      help={help}
    >
      <div className="space-y-3" role="group" aria-labelledby={`field-${name}`}>
        {options.map((option) => {
          const checkboxId = `${name}-${option.value}`;
          const isChecked = selected.includes(option.value);

          return (
            <div key={option.value} className="flex items-center">
              <input
                type="checkbox"
                id={checkboxId}
                name={`${name}[]`}
                value={option.value}
                checked={isChecked}
                onChange={(e) =>
                  handleCheckboxChange(option.value, e.target.checked)
                }
                disabled={disabled}
                className="form-checkbox"
                aria-describedby={error ? `field-${name}-error` : undefined}
              />
              <label
                htmlFor={checkboxId}
                className="ml-3 text-sm font-medium text-gray-900 cursor-pointer select-none dark:text-slate-200"
              >
                {option.label}
              </label>
            </div>
          );
        })}
      </div>
    </FormField>
  );
};

export default CheckboxGroup;
