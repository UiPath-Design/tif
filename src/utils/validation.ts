import { FormData, FormErrors, ValidationResult } from "../types";

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validate email format
export const validateEmail = (email: string): string | undefined => {
  if (!email.trim()) {
    return "Email is required";
  }
  if (!EMAIL_REGEX.test(email)) {
    return "Please enter a valid email address";
  }
  return undefined;
};

// Validate required text field
export const validateRequired = (
  value: string,
  fieldName: string,
): string | undefined => {
  if (!value.trim()) {
    return `${fieldName} is required`;
  }
  return undefined;
};

// Validate text field with max length
export const validateTextWithLength = (
  value: string,
  fieldName: string,
  maxLength: number = 250,
): string | undefined => {
  const requiredError = validateRequired(value, fieldName);
  if (requiredError) return requiredError;

  if (value.length > maxLength) {
    return `Maximum ${maxLength} characters exceeded`;
  }
  return undefined;
};

// Validate required array (for checkboxes, multi-select)
export const validateRequiredArray = (
  array: string[],
  fieldName: string,
): string | undefined => {
  if (!array || array.length === 0) {
    return `Please select at least one ${fieldName.toLowerCase()}`;
  }
  return undefined;
};

// Validate required select field
export const validateRequiredSelect = (
  value: string,
  fieldName: string,
): string | undefined => {
  if (!value || value === "") {
    return `Please select ${fieldName.toLowerCase()}`;
  }
  return undefined;
};

// Comprehensive form validation
export const validateForm = (data: FormData): ValidationResult => {
  const errors: FormErrors = {};

  // Requester Information
  const emailError = validateEmail(data.email);
  if (emailError) errors.email = emailError;

  const roleError = validateRequiredSelect(data.role, "a role");
  if (roleError) errors.role = roleError;

  // Product Information
  const deploymentTypeError = validateRequiredArray(
    data.deploymentType,
    "deployment type",
  );
  if (deploymentTypeError) errors.deploymentType = deploymentTypeError;

  const mainProductError = validateRequiredSelect(
    data.mainAffectedProduct,
    "the main affected product",
  );
  if (mainProductError) errors.mainAffectedProduct = mainProductError;

  // Request Information
  const summaryError = validateTextWithLength(data.summary, "Summary");
  if (summaryError) errors.summary = summaryError;

  const descriptionError = validateTextWithLength(
    data.description,
    "Description",
  );
  if (descriptionError) errors.description = descriptionError;

  const desiredOutcomeError = validateTextWithLength(
    data.desiredOutcome,
    "Desired Outcome",
  );
  if (desiredOutcomeError) errors.desiredOutcome = desiredOutcomeError;

  const impactTypeError = validateRequiredSelect(
    data.impactType,
    "an impact type",
  );
  if (impactTypeError) errors.impactType = impactTypeError;

  const impactTypeSummaryError = validateTextWithLength(
    data.impactTypeSummary,
    "Impact Type Summary",
  );
  if (impactTypeSummaryError) errors.impactTypeSummary = impactTypeSummaryError;

  const priorityError = validateRequiredSelect(data.priority, "a priority");
  if (priorityError) errors.priority = priorityError;

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

// Get character counter color based on current/max ratio
export const getCharacterCounterColor = (
  current: number,
  max: number,
): string => {
  const ratio = current / max;
  if (ratio >= 1.0) return "text-error";
  if (ratio >= 0.9) return "text-warning";
  return "text-gray-400";
};

// Check if character count is at warning/error level
export const getCharacterCounterClass = (
  current: number,
  max: number,
): string => {
  const ratio = current / max;
  if (ratio >= 1.0) return "character-counter error";
  if (ratio >= 0.9) return "character-counter warning";
  return "character-counter";
};

// Scroll to first error field
export const scrollToFirstError = (errors: FormErrors): void => {
  const errorFields = Object.keys(errors);
  if (errorFields.length === 0) return;

  const firstErrorField = errorFields[0];
  const element = document.querySelector(
    `[name="${firstErrorField}"]`,
  ) as HTMLElement;

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    // Focus the element after scrolling
    setTimeout(() => {
      element.focus();
    }, 500);
  }
};

// Format field name for display
export const formatFieldName = (fieldName: string): string => {
  return fieldName
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase())
    .replace(/([a-z])([A-Z])/g, "$1 $2");
};

// Debounce function for search input
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): ((...args: Parameters<T>) => void) => {
  let timeout: number;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Filter options based on search term
export const filterOptions = (
  options: Array<{ value: string; label: string }>,
  searchTerm: string,
): Array<{ value: string; label: string }> => {
  if (!searchTerm.trim()) return options;

  const term = searchTerm.toLowerCase();
  return options.filter(
    (option) =>
      option.label.toLowerCase().includes(term) ||
      option.value.toLowerCase().includes(term),
  );
};

// Check if field has error
export const hasError = (
  errors: FormErrors,
  fieldName: keyof FormErrors,
): boolean => {
  return Boolean(errors[fieldName]);
};

// Get error message for field
export const getError = (
  errors: FormErrors,
  fieldName: keyof FormErrors,
): string | undefined => {
  return errors[fieldName];
};

// Create initial form data
export const createInitialFormData = (): FormData => ({
  email: "",
  role: "",
  deploymentType: [],
  mainAffectedProduct: "",
  additionalAffectedProducts: [],
  summary: "",
  description: "",
  desiredOutcome: "",
  impactType: "",
  impactTypeSummary: "",
  priority: "",
});

// Reset form data to initial state
export const resetFormData = (): FormData => createInitialFormData();

// Deep clone form data
export const cloneFormData = (data: FormData): FormData => ({
  email: data.email,
  role: data.role,
  deploymentType: [...data.deploymentType],
  mainAffectedProduct: data.mainAffectedProduct,
  additionalAffectedProducts: [...data.additionalAffectedProducts],
  summary: data.summary,
  description: data.description,
  desiredOutcome: data.desiredOutcome,
  impactType: data.impactType,
  impactTypeSummary: data.impactTypeSummary,
  priority: data.priority,
});

// Check if form data is empty
export const isFormEmpty = (data: FormData): boolean => {
  return (
    !data.email.trim() &&
    !data.role &&
    data.deploymentType.length === 0 &&
    !data.mainAffectedProduct &&
    data.additionalAffectedProducts.length === 0 &&
    !data.summary.trim() &&
    !data.description.trim() &&
    !data.desiredOutcome.trim() &&
    !data.impactType &&
    !data.impactTypeSummary.trim() &&
    !data.priority
  );
};

// Log form data to console (for development/debugging)
export const logFormData = (data: FormData): void => {
  console.group("🚀 TIF Form Submission");
  console.log("📧 Requester Information:", {
    email: data.email,
    role: data.role,
  });
  console.log("🏢 Product Information:", {
    deploymentType: data.deploymentType,
    mainAffectedProduct: data.mainAffectedProduct,
    additionalAffectedProducts: data.additionalAffectedProducts,
  });
  console.log("📝 Request Information:", {
    summary: data.summary,
    description: data.description,
    desiredOutcome: data.desiredOutcome,
    impactType: data.impactType,
    impactTypeSummary: data.impactTypeSummary,
    priority: data.priority,
  });
  console.groupEnd();
};
