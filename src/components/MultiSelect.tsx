import React, { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import { MultiSelectProps } from "../types";
import FormField from "./FormField";
import { filterOptions, debounce } from "../utils/validation";

const MultiSelect: React.FC<MultiSelectProps> = ({
  label,
  name,
  options,
  selected,
  onChange,
  searchable = true,
  required = false,
  error,
  help,
  disabled = false,
  placeholder = "Search and select...",
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // Filter options based on search term
  const filteredOptions = useMemo(() => {
    return filterOptions(options, searchTerm);
  }, [options, searchTerm]);

  // Get selected option labels for display
  const selectedOptions = useMemo(() => {
    return options.filter((option) => selected.includes(option.value));
  }, [options, selected]);

  // Debounced search handler
  const debouncedSearch = useMemo(
    () => debounce((term: string) => setSearchTerm(term), 300),
    [],
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
  };

  const handleOptionToggle = (optionValue: string) => {
    if (selected.includes(optionValue)) {
      onChange(selected.filter((value) => value !== optionValue));
    } else {
      onChange([...selected, optionValue]);
    }
  };

  const handleRemoveSelected = (optionValue: string) => {
    onChange(selected.filter((value) => value !== optionValue));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
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
      <div className="space-y-3">
        {/* Selected items display */}
        {selectedOptions.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {selectedOptions.map((option) => (
              <span key={option.value} className="selected-pill">
                {option.label}
                <button
                  type="button"
                  onClick={() => handleRemoveSelected(option.value)}
                  disabled={disabled}
                  className="ml-1 hover:bg-white hover:bg-opacity-20 rounded-full p-0.5 transition-colors"
                  aria-label={`Remove ${option.label}`}
                >
                  <X size={14} />
                </button>
              </span>
            ))}
          </div>
        )}

        {/* Search input */}
        {searchable && (
          <div className="relative">
            <Search
              size={16}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder={placeholder}
              onChange={handleSearchChange}
              onFocus={() => setIsOpen(true)}
              onKeyDown={handleKeyDown}
              disabled={disabled}
              className="form-input pl-10"
              aria-label={`Search ${label.toLowerCase()}`}
            />
          </div>
        )}

        {/* Options list */}
        {isOpen && (
          <div
            className="border border-gray-300 rounded-md bg-white shadow-lg max-h-60 overflow-y-auto scrollbar-thin"
            role="listbox"
            aria-multiselectable="true"
          >
            {filteredOptions.length === 0 ? (
              <div className="px-4 py-3 text-sm text-gray-500">
                No options found
              </div>
            ) : (
              filteredOptions.map((option) => {
                const isSelected = selected.includes(option.value);
                const checkboxId = `${name}-option-${option.value}`;

                return (
                  <div
                    key={option.value}
                    className="flex items-center px-4 py-2 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                  >
                    <input
                      type="checkbox"
                      id={checkboxId}
                      checked={isSelected}
                      onChange={() => handleOptionToggle(option.value)}
                      disabled={disabled}
                      className="form-checkbox"
                      aria-describedby={
                        error ? `field-${name}-error` : undefined
                      }
                    />
                    <label
                      htmlFor={checkboxId}
                      className="ml-3 text-sm font-medium text-gray-900 cursor-pointer select-none flex-1"
                    >
                      {option.label}
                    </label>
                  </div>
                );
              })
            )}
          </div>
        )}

        {/* Toggle button for non-searchable or closed state */}
        {(!searchable || !isOpen) && (
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            disabled={disabled}
            className="w-full text-left px-4 py-3 border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition-colors"
            aria-expanded={isOpen}
            aria-haspopup="listbox"
          >
            <span className="text-gray-500">
              {selected.length === 0
                ? "Select options..."
                : `${selected.length} option${selected.length !== 1 ? "s" : ""} selected`}
            </span>
          </button>
        )}

        {/* Click outside handler */}
        {isOpen && (
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
        )}
      </div>
    </FormField>
  );
};

export default MultiSelect;
