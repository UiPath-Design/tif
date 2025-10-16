import React, { useState, useCallback } from "react";
import { FormData, FormErrors } from "../types";
import {
  ROLE_OPTIONS,
  DEPLOYMENT_TYPE_OPTIONS,
  PRODUCT_OPTIONS,
  IMPACT_TYPE_OPTIONS,
  PRIORITY_OPTIONS,
} from "../types";
import {
  validateForm,
  scrollToFirstError,
  logFormData,
  createInitialFormData,
  resetFormData,
} from "../utils/validation";

import TextInput from "./TextInput";
import Select from "./Select";
import CheckboxGroup from "./CheckboxGroup";
import MultiSelectDropdown from "./MultiSelectDropdown";
import ResizableTextarea from "./ResizableTextarea";
import SuccessModal from "./SuccessModal";

const TIFForm: React.FC = () => {
  // Form state
  const [formData, setFormData] = useState<FormData>(createInitialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Generic field update handler
  const updateField = useCallback(
    <K extends keyof FormData>(field: K, value: FormData[K]) => {
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));

      // Clear error for this field when user starts typing
      if (errors[field]) {
        setErrors((prev) => ({
          ...prev,
          [field]: undefined,
        }));
      }
    },
    [errors],
  );

  // Field blur handler for validation
  const handleFieldBlur = useCallback(
    (fieldName: keyof FormData) => {
      // Validate single field on blur if it has been touched
      const fieldValue = formData[fieldName];
      let fieldError: string | undefined;

      switch (fieldName) {
        case "email":
          if (!fieldValue) {
            fieldError = "Email is required";
          } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fieldValue as string)) {
            fieldError = "Please enter a valid email address";
          }
          break;
        case "role":
        case "mainAffectedProduct":
        case "impactType":
        case "priority":
          if (!fieldValue) {
            fieldError = `Please select ${fieldName.replace(/([A-Z])/g, " $1").toLowerCase()}`;
          }
          break;
        case "deploymentType":
          if (!Array.isArray(fieldValue) || fieldValue.length === 0) {
            fieldError = "Please select at least one deployment type";
          }
          break;
        case "summary":
        case "description":
        case "desiredOutcome":
        case "impactTypeSummary":
          if (!fieldValue || !(fieldValue as string).trim()) {
            fieldError = `${fieldName.replace(/([A-Z])/g, " $1")} is required`;
          } else if ((fieldValue as string).length > 250) {
            fieldError = "Maximum 250 characters exceeded";
          }
          break;
      }

      if (fieldError) {
        setErrors((prev) => ({
          ...prev,
          [fieldName]: fieldError,
        }));
      }
    },
    [formData],
  );

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate all fields
      const validation = validateForm(formData);

      if (!validation.isValid) {
        setErrors(validation.errors);
        scrollToFirstError(validation.errors);
        return;
      }

      // Clear any existing errors
      setErrors({});

      // Log form data to console (mock submission)
      logFormData(formData);

      // Show success modal
      setShowSuccessModal(true);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle success modal actions
  const handleCloseSuccessModal = useCallback(() => {
    setShowSuccessModal(false);
  }, []);

  const handleSubmitAnother = useCallback(() => {
    setFormData(resetFormData());
    setErrors({});
    setShowSuccessModal(false);
  }, []);

  return (
    <div className="max-w-form mx-auto px-6 py-8">
      <form onSubmit={handleSubmit} role="form" aria-label="TIF Feedback Form">
        {/* Section 1: Requester Information */}
        <section className="form-section">
          <h2 className="form-section-header">Requester Information</h2>

          <TextInput
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={(e) => updateField("email", e.target.value)}
            onBlur={() => handleFieldBlur("email")}
            placeholder="your.email@uipath.com"
            required
            error={errors.email}
          />

          <Select
            label="Role"
            name="role"
            value={formData.role}
            onChange={(e) => updateField("role", e.target.value)}
            onBlur={() => handleFieldBlur("role")}
            options={ROLE_OPTIONS}
            placeholder="Select your role..."
            required
            error={errors.role}
          />
        </section>

        {/* Section 2: Product Information */}
        <section className="form-section">
          <h2 className="form-section-header">Product Information</h2>

          <CheckboxGroup
            label="Deployment Type"
            name="deploymentType"
            options={DEPLOYMENT_TYPE_OPTIONS}
            selected={formData.deploymentType}
            onChange={(selected) => updateField("deploymentType", selected)}
            required
            error={errors.deploymentType}
            help="Select all deployment types that apply"
          />

          <div className="mb-4"></div>

          <Select
            label="Main Affected Product"
            name="mainAffectedProduct"
            value={formData.mainAffectedProduct}
            onChange={(e) => updateField("mainAffectedProduct", e.target.value)}
            onBlur={() => handleFieldBlur("mainAffectedProduct")}
            options={PRODUCT_OPTIONS}
            placeholder="Select the main affected product..."
            required
            error={errors.mainAffectedProduct}
          />

          <MultiSelectDropdown
            label="Additional Affected Product"
            name="additionalAffectedProducts"
            options={PRODUCT_OPTIONS}
            selected={formData.additionalAffectedProducts}
            onChange={(selected) =>
              updateField("additionalAffectedProducts", selected)
            }
            placeholder="Select additional products..."
            help="Optional - select up to 8 additional products that are affected"
            error={errors.additionalAffectedProducts}
            maxSelections={8}
          />
        </section>

        {/* Section 3: Request Information */}
        <section className="form-section">
          <h2 className="form-section-header">Request Information</h2>

          <ResizableTextarea
            label="Summary"
            name="summary"
            value={formData.summary}
            onChange={(e) => updateField("summary", e.target.value)}
            onBlur={() => handleFieldBlur("summary")}
            placeholder="Brief summary of the feedback..."
            required
            maxLength={250}
            error={errors.summary}
          />

          <ResizableTextarea
            label="Description"
            name="description"
            value={formData.description}
            onChange={(e) => updateField("description", e.target.value)}
            onBlur={() => handleFieldBlur("description")}
            placeholder="Detailed description of the feedback..."
            required
            maxLength={250}
            error={errors.description}
          />

          <ResizableTextarea
            label="Desired Outcome"
            name="desiredOutcome"
            value={formData.desiredOutcome}
            onChange={(e) => updateField("desiredOutcome", e.target.value)}
            onBlur={() => handleFieldBlur("desiredOutcome")}
            placeholder="What outcome would you like to see?..."
            required
            maxLength={250}
            error={errors.desiredOutcome}
          />

          <Select
            label="Impact Type"
            name="impactType"
            value={formData.impactType}
            onChange={(e) => updateField("impactType", e.target.value)}
            onBlur={() => handleFieldBlur("impactType")}
            options={IMPACT_TYPE_OPTIONS}
            placeholder="Select impact type..."
            required
            error={errors.impactType}
          />

          <ResizableTextarea
            label="Impact Type Summary"
            name="impactTypeSummary"
            value={formData.impactTypeSummary}
            onChange={(e) => updateField("impactTypeSummary", e.target.value)}
            onBlur={() => handleFieldBlur("impactTypeSummary")}
            placeholder="Explain the impact..."
            required
            maxLength={250}
            error={errors.impactTypeSummary}
          />

          <Select
            label="Priority"
            name="priority"
            value={formData.priority}
            onChange={(e) => updateField("priority", e.target.value)}
            onBlur={() => handleFieldBlur("priority")}
            options={PRIORITY_OPTIONS}
            placeholder="Select priority..."
            required
            error={errors.priority}
          />
        </section>

        {/* Form Actions */}
        <div className="flex justify-center pt-8 pb-20">
          <button
            type="submit"
            disabled={isSubmitting}
            className="button-primary"
          >
            {isSubmitting ? "Submitting..." : "Submit Feedback"}
          </button>
        </div>
      </form>

      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={handleCloseSuccessModal}
        onSubmitAnother={handleSubmitAnother}
      />
    </div>
  );
};

export default TIFForm;
