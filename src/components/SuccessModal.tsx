import React, { useEffect } from "react";
import { CheckCircle, X } from "lucide-react";
import { SuccessModalProps } from "../types";

const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
  onSubmitAnother,
}) => {
  // Auto-close after 5 seconds
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50 modal-overlay dark:bg-black dark:bg-opacity-70"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        className="relative bg-white rounded-lg shadow-xl p-8 mx-4 max-w-md w-full modal-enter-active dark:bg-slate-800"
        role="dialog"
        aria-modal="true"
        aria-labelledby="success-modal-title"
        aria-describedby="success-modal-description"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors dark:text-slate-500 dark:hover:text-slate-300"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Success content */}
        <div className="text-center">
          {/* Success icon */}
          <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle size={32} className="text-green-600" />
          </div>

          {/* Title */}
          <h2
            id="success-modal-title"
            className="text-xl font-semibold text-gray-900 mb-2 dark:text-slate-100"
          >
            Thank You!
          </h2>

          {/* Description */}
          <p
            id="success-modal-description"
            className="text-gray-600 mb-6 dark:text-slate-300"
          >
            Your feedback has been submitted successfully. The TIF team will
            review your submission and get back to you if needed.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {onSubmitAnother && (
              <button onClick={onSubmitAnother} className="button-primary">
                Submit Another
              </button>
            )}

            <button
              onClick={onClose}
              className="px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors font-medium dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600"
            >
              Close
            </button>
          </div>

          {/* Auto-close notice */}
          <p className="text-xs text-gray-400 mt-4 dark:text-slate-500">
            This modal will close automatically in 5 seconds
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
