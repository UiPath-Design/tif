import React from "react";
import ThemeToggle from "./ThemeToggle";

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 mb-8 header dark:bg-slate-800 dark:border-slate-700">
      <div className="max-w-form mx-auto px-6 py-8">
        {/* UiPath Logo and Title */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="w-11 h-11 mr-4">
              <img
                src="./UiPath_icon.svg"
                alt="UiPath Logo"
                className="w-full h-full"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-slate-100">
                TIF Form
              </h1>
              <p className="text-sm text-gray-600 dark:text-slate-400">
                UiPath Top Issue Feedback Program
              </p>
            </div>
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>

        {/* Description */}
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 description-box dark:bg-slate-800 dark:border-slate-700">
          <p className="text-base text-gray-700 leading-relaxed text-balance dark:text-slate-300">
            TIF is a program to identify, track, prioritize, and resolve product
            feedback from customers. Any UiPather can submit a top issue or
            product feedback through the TIF program with justified impact for
            evaluation.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
