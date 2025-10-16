import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, X } from "lucide-react";
import { MultiSelectProps } from "../types";
import FormField from "./FormField";

interface MultiSelectDropdownProps
  extends Omit<MultiSelectProps, "searchable"> {
  maxSelections?: number;
}

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({
  label,
  name,
  options,
  selected,
  onChange,
  required = false,
  error,
  help,
  disabled = false,
  placeholder = "Select options...",
  maxSelections = 8,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Get selected option labels for display
  const selectedOptions = options.filter((option) =>
    selected.includes(option.value),
  );

  // Get available options (excluding already selected ones)
  const availableOptions = options.filter(
    (option) => !selected.includes(option.value),
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
      buttonRef.current?.focus();
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  const handleOptionClick = (optionValue: string) => {
    if (selected.length < maxSelections) {
      onChange([...selected, optionValue]);
    }
    // Keep dropdown open for multi-select
  };

  const handleRemoveSelected = (optionValue: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    onChange(selected.filter((value) => value !== optionValue));
  };

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <FormField
      label={label}
      name={name}
      required={required}
      error={error}
      help={help}
    >
      <div className="relative">
        {/* Selected pills display */}
        {selectedOptions.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {selectedOptions.map((option) => (
              <span
                key={option.value}
                className="selected-pill inline-flex items-center gap-2 px-3 py-1 bg-uipath-orange text-white text-sm rounded-full"
              >
                <span>{option.label}</span>
                <span className="w-2"></span>
                <button
                  type="button"
                  onClick={(e) => handleRemoveSelected(option.value, e)}
                  disabled={disabled}
                  className="hover:bg-white hover:bg-opacity-20 rounded-full p-0.5 transition-colors focus:outline-none focus:ring-1 focus:ring-white"
                  aria-label={`Remove ${option.label}`}
                >
                  <X size={12} />
                </button>
              </span>
            ))}
          </div>
        )}

        {/* Dropdown button */}
        <button
          ref={buttonRef}
          type="button"
          onClick={toggleDropdown}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          className={`w-full text-left px-4 py-3 border rounded-md bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-uipath-orange focus:ring-opacity-10 focus:border-uipath-orange ${
            error
              ? "border-error bg-red-50 dark:bg-red-950 dark:border-red-500"
              : "border-gray-300 hover:bg-gray-50 dark:border-slate-600 dark:hover:bg-slate-700"
          } ${disabled ? "bg-gray-50 cursor-not-allowed dark:bg-slate-800" : "cursor-pointer"} dark:bg-slate-800`}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-label={`${label} dropdown, ${selected.length} selected`}
        >
          <div className="flex items-center justify-between">
            <span
              className={
                selected.length === 0
                  ? "text-gray-400 dark:text-slate-500"
                  : "text-gray-900 dark:text-slate-200"
              }
            >
              {selected.length === 0
                ? placeholder
                : `${selected.length} option${selected.length !== 1 ? "s" : ""} selected`}
              {selected.length >= maxSelections && (
                <span className="ml-2 text-xs text-gray-500 dark:text-slate-400">
                  (Maximum reached)
                </span>
              )}
            </span>
            <ChevronDown
              size={20}
              className={`text-gray-400 dark:text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
            />
          </div>
        </button>

        {/* Dropdown menu */}
        {isOpen && (
          <div
            ref={dropdownRef}
            className="absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto scrollbar-thin dropdown-menu dark:bg-slate-800 dark:border-slate-600"
            role="listbox"
            aria-multiselectable="true"
          >
            {availableOptions.length === 0 ? (
              <div className="px-4 py-3 text-sm text-gray-500 dark:text-slate-400">
                {selected.length >= maxSelections
                  ? `Maximum of ${maxSelections} selections reached`
                  : "All options selected"}
              </div>
            ) : (
              availableOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleOptionClick(option.value)}
                  disabled={disabled || selected.length >= maxSelections}
                  className={`w-full text-left px-4 py-2 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors focus:outline-none focus:bg-gray-50 dropdown-option dark:hover:bg-slate-700 dark:border-slate-700 dark:focus:bg-slate-700 ${
                    selected.length >= maxSelections
                      ? "cursor-not-allowed text-gray-400 dark:text-slate-500"
                      : "cursor-pointer text-gray-900 dark:text-slate-200"
                  }`}
                  role="option"
                  aria-selected="false"
                >
                  {option.label}
                </button>
              ))
            )}
          </div>
        )}
      </div>
    </FormField>
  );
};

export default MultiSelectDropdown;
