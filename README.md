# UiPath TIF - Top Issue Feedback Application

A modern, accessible single-page application for UiPath's internal TIF (Top Issue Feedback) product feedback form. This is a presentation-layer prototype with no backend integration—all state lives in browser memory.

## Overview

TIF is a program to identify, track, prioritize, and resolve product feedback from customers. Any UiPather can submit a top issue or product feedback through the TIF program with justified impact for evaluation.

## Features

- **Modern React + TypeScript**: Built with React 18, TypeScript, and Vite for optimal development experience
- **Accessible Design**: WCAG 2.1 AA compliant with proper ARIA attributes, keyboard navigation, and screen reader support
- **Responsive Layout**: Mobile-first design that works on all device sizes
- **Real-time Validation**: Field-level validation on blur and comprehensive form validation on submit
- **Interactive Components**: 
  - Resizable textareas with character counters
  - Multi-select dropdowns with search functionality
  - Checkbox groups with proper accessibility
  - Success modal with auto-close functionality
- **UiPath Branding**: Uses official UiPath orange (#FA4616) and follows design specifications

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom UiPath design tokens
- **Icons**: Lucide React
- **Form Handling**: Custom React hooks with comprehensive validation
- **Accessibility**: ARIA attributes, keyboard navigation, screen reader support

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── FormField.tsx    # Form field wrapper with error handling
│   ├── TextInput.tsx    # Text input component
│   ├── ResizableTextarea.tsx  # Textarea with character counter
│   ├── Select.tsx       # Dropdown select component
│   ├── CheckboxGroup.tsx # Multi-select checkbox group
│   ├── MultiSelect.tsx  # Searchable multi-select component
│   ├── SuccessModal.tsx # Form submission success modal
│   ├── Header.tsx       # Application header with branding
│   └── TIFForm.tsx      # Main form component
├── types/
│   └── index.ts         # TypeScript type definitions
├── utils/
│   └── validation.ts    # Form validation utilities
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
└── index.css            # Global styles and Tailwind imports
```

## Form Sections

### 1. Requester Information
- **Email** (required): Validated email input
- **Role** (required): Dropdown with predefined UiPath roles

### 2. Product Information
- **Deployment Type** (required): Multi-select checkboxes
- **Main Affected Product** (required): Searchable dropdown
- **Additional Affected Products** (optional): Multi-select with search

### 3. Request Information
- **Summary** (required): Resizable textarea, 250 char limit
- **Description** (required): Resizable textarea, 250 char limit
- **Desired Outcome** (required): Resizable textarea, 250 char limit
- **Impact Type** (required): Dropdown with impact categories
- **Impact Type Summary** (required): Resizable textarea, 250 char limit
- **Priority** (required): Priority level dropdown

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd tif-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Usage

1. **Fill out the form**: Complete all required fields marked with red asterisks (*)
2. **Real-time validation**: Fields validate as you interact with them
3. **Character counters**: Watch character limits on text areas (250 characters max)
4. **Multi-select options**: Use search functionality to find and select multiple products
5. **Submit feedback**: Click "Submit Feedback" to validate and submit the form
6. **Success confirmation**: View submission success in the modal overlay

## Form Validation

### Client-side Validation
- **Email**: Format validation using regex pattern
- **Required fields**: All fields marked with * must be completed
- **Character limits**: Text areas enforce 250 character maximum
- **Multi-select requirements**: At least one deployment type must be selected

### Validation Timing
- **On blur**: Individual field validation when leaving a field
- **On submit**: Comprehensive form validation with error summary
- **Real-time**: Character counters update as you type
- **Error handling**: Auto-scroll to first error with focus management

## Accessibility Features

- **Keyboard Navigation**: Full keyboard support with logical tab order
- **Screen Reader Support**: Proper ARIA labels and descriptions
- **Focus Management**: Visible focus indicators and logical focus flow
- **Error Announcements**: Screen readers announce validation errors
- **Color Independence**: Errors indicated with icons, not just color
- **Touch Targets**: Minimum 44px touch targets for mobile accessibility

## Design Specifications

### Colors
- **Primary**: UiPath Orange (#FA4616)
- **Primary Hover**: #E63E0F
- **Error**: #EF4444
- **Success**: #10B981
- **Text**: #111827 (primary), #6B7280 (secondary)
- **Background**: #F9FAFB

### Typography
- **Font Family**: Inter (loaded from Google Fonts)
- **Body Text**: 16px
- **Labels**: 14px, font-weight 500
- **Headers**: 18px, bold, uppercase

### Layout
- **Max Form Width**: 800px, centered
- **Section Spacing**: 48px between sections
- **Field Spacing**: 24px between fields
- **Container Padding**: 40px (desktop), 24px (mobile)

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Mock Behavior

Since this is a prototype without backend integration:
- Form data is logged to browser console on submission
- Success modal appears after successful validation
- No actual data persistence or API calls
- All state management handled in browser memory

## Contributing

1. Follow TypeScript best practices
2. Maintain accessibility standards (WCAG 2.1 AA)
3. Use provided design tokens and components
4. Write descriptive commit messages
5. Test on multiple browsers and devices

## License

Internal UiPath project - proprietary code.