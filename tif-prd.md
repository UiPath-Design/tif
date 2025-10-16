# TIF Feedback Form – Front-End Prototype

## Overview
Build a modern, accessible front-end prototype of UiPath's internal TIF (Top Issue Feedback) product feedback form. This is a **presentation-layer only** prototype with no backend integration—all state lives in browser memory.

**Design Reference:** Use the clean, modern aesthetic from "TIF landing page_02" (right image) with proper spacing, section grouping, and visual hierarchy.

---

## Tech Stack Recommendation
- **Framework**: React with TypeScript (or vanilla HTML/CSS/JS)
- **Styling**: Tailwind CSS or modern CSS with CSS Grid/Flexbox
- **Form Handling**: React Hook Form or native form validation
- **Icons**: Lucide React or similar icon library
- **File Handling**: FileReader API (in-memory only, no upload)

---

## Core Requirements

### 1. Form Structure & Sections

The form is divided into three main sections:
1. **Requester Information**
2. **Product Information**
3. **Request Information**

```
┌─ TIF FEEDBACK FORM ──────────────────────────────┐
│                                                   │
│  TIF is a program to identify, track, prioritize,│
│  and resolve product feedback from customers...   │
│                                                   │
│  ═══════════════════════════════════════════════  │
│                                                   │
│  REQUESTER INFORMATION                            │
│                                                   │
│  Email *                                          │
│  [____________________________________]           │
│                                                   │
│  Role *                                           │
│  [Select role...                       ▼]        │
│                                                   │
│  ═══════════════════════════════════════════════  │
│                                                   │
│  PRODUCT INFORMATION                              │
│                                                   │
│  Deployment Type *                                │
│  ☐ All                                            │
│  ☐ Automation Cloud                               │
│  ☐ Automation Suite                               │
│  ☐ Desktop \ Virtual Desktop Client               │
│  ☐ Gov Cloud                                      │
│  ☐ None                                           │
│  ☐ Standalone Server Product                      │
│                                                   │
│  Main Affected Product *                          │
│  [Select product...                    ▼]        │
│                                                   │
│  Additional Affected Product                      │
│  ☐ Action Center                                  │
│  ☐ Activities                                     │
│  ☐ Agentic Orchestration                          │
│  [... more checkboxes, searchable ...]            │
│                                                   │
│  ═══════════════════════════════════════════════  │
│                                                   │
│  REQUEST INFORMATION                              │
│                                                   │
│  Summary *                                        │
│  [____________________________________]           │
│  ⌄                                    0/250       │
│                                                   │
│  Description *                                    │
│  [____________________________________]           │
│  [                                    ]           │
│  [                                    ]           │
│  ⌄                                    0/250       │
│                                                   │
│  Desired Outcome *                                │
│  [____________________________________]           │
│  [                                    ]           │
│  ⌄                                    0/250       │
│                                                   │
│  Impact Type *                                    │
│  [Select impact type...                ▼]        │
│                                                   │
│  Impact Type Summary *                            │
│  [____________________________________]           │
│  [                                    ]           │
│  ⌄                                    0/250       │
│                                                   │
│  Priority *                                       │
│  [Select priority...                   ▼]        │
│                                                   │
│  [Submit]                                         │
│                                                   │
└───────────────────────────────────────────────────┘
```

---

## Detailed Field Specifications

### Section 1: Requester Information

#### Email * (Required)
- **Type:** Text input
- **Validation:** 
  - Must match email format: `user@domain.com`
  - Required field
  - Show error: "Please enter a valid email address"
- **Placeholder:** "your.email@uipath.com"

#### Role * (Required)
- **Type:** Dropdown (single select)
- **Options:**
  - Automation Business Analyst
  - Automation Developer
  - Automation Infrastructure Engineer
  - Automation Project Manager
  - Automation Solution Architect
- **Placeholder:** "Select your role..."
- **Validation:** Must select one option

---

### Section 2: Product Information

#### Deployment Type * (Required)
- **Type:** Multi-select checkboxes
- **Options:**
  - All
  - Automation Cloud
  - Automation Suite
  - Desktop \ Virtual Desktop Client
  - Gov Cloud
  - None
  - Standalone Server Product
- **Validation:** Must select at least one
- **Behavior:** Allow multiple selections

#### Main Affected Product * (Required)
- **Type:** Dropdown (single select, searchable recommended)
- **Options:** (alphabetically sorted)
  - Action Center
  - Activities
  - Agentic Orchestration
  - Agents
  - AI Center
  - All
  - Automation Cloud Deployment
  - Automation Hub
  - Automation Ops
  - Automation Suite Deployment
  - Autopilot
  - Clipboard AI
  - CloudRobots
  - Communications Mining
  - Computer Vision
  - Contact Center
  - Customer Portal
  - Data Manager
  - Data Service
  - Desktop Installer
  - Document Understanding
  - FedRamp
  - GenAI
  - Global Notification Service
  - Identity
  - Insights
  - Integration Service
  - License
  - Maestro
  - Orchestrator
  - Other
  - Partner Product
  - Process Mining
  - Robot
  - Solution Management
  - Studio
  - Studio Web
  - StudioX
  - Task Capture
  - Task Mining
  - Test Manager
  - Test Suite
  - UI Systems
  - UiPath Apps
  - UiPath Assistant
  - UiPath CLI
  - Unified Admin Portal
- **Placeholder:** "Select the main affected product..."
- **Validation:** Must select one option

#### Additional Affected Product (Optional)
- **Type:** Multi-select checkboxes with search/filter
- **Options:** Same as Main Affected Product list
- **Behavior:** 
  - Allow multiple selections
  - Show selected items as tags/pills
  - Include search box to filter long list
  - Optional field - can submit with none selected

---

### Section 3: Request Information

#### Summary * (Required)
- **Type:** Resizable textarea
- **Max Length:** 250 characters
- **Features:**
  - Character counter (e.g., "0/250") bottom-right
  - Resizable with drag handle at bottom-right corner
  - Show counter in red when approaching/at limit
- **Placeholder:** "Brief summary of the feedback..."
- **Validation:** Required, max 250 chars

#### Description * (Required)
- **Type:** Resizable textarea
- **Max Length:** 250 characters
- **Features:**
  - Character counter (e.g., "0/250") bottom-right
  - Resizable with drag handle at bottom-right corner
  - Show counter in red when approaching/at limit
- **Placeholder:** "Detailed description of the feedback..."
- **Validation:** Required, max 250 chars

#### Desired Outcome * (Required)
- **Type:** Resizable textarea
- **Max Length:** 250 characters
- **Features:**
  - Character counter (e.g., "0/250") bottom-right
  - Resizable with drag handle at bottom-right corner
  - Show counter in red when approaching/at limit
- **Placeholder:** "What outcome would you like to see?..."
- **Validation:** Required, max 250 chars

#### Impact Type * (Required)
- **Type:** Dropdown (single select)
- **Options:**
  - Churn (-iARR) Impact
  - Renewal (ARR) Impact
  - Upsell (iARR) Impact
  - Ease of Use
  - Internal Process Efficiency
  - Leadership Commitment
  - License Utilization
  - Market Differentiation
  - Migration and Upgrade
  - Performance & Reliability
  - Product or Feature Adoption
  - User Friction
- **Placeholder:** "Select impact type..."
- **Validation:** Must select one option

#### Impact Type Summary * (Required)
- **Type:** Resizable textarea
- **Max Length:** 250 characters
- **Features:**
  - Character counter (e.g., "0/250") bottom-right
  - Resizable with drag handle at bottom-right corner
  - Show counter in red when approaching/at limit
- **Placeholder:** "Explain the impact..."
- **Validation:** Required, max 250 chars

#### Priority * (Required)
- **Type:** Dropdown (single select)
- **Options:**
  - Blocker
  - Critical
  - Major
  - Normal
  - Minor
- **Placeholder:** "Select priority..."
- **Validation:** Must select one option

---

## Design Specifications (Based on "TIF landing page_02")

### Layout & Spacing
- **Max Form Width:** 800px, centered on page
- **Section Spacing:** 48px between major sections
- **Field Spacing:** 24px between fields within a section
- **Input Padding:** 12px vertical, 16px horizontal
- **Container Padding:** 40px (desktop), 24px (mobile)

### Section Headers
- **Style:** Bold, 18px, uppercase, dark gray (#374151)
- **Bottom Border:** 2px solid light gray (#E5E7EB)
- **Margin Below:** 24px

### Typography
- **Font Family:** Inter, -apple-system, system-ui, sans-serif
- **Body Text:** 16px, #374151
- **Labels:** 14px, font-weight: 500, #1F2937
- **Required Asterisk:** Red (#EF4444), 14px
- **Help Text:** 14px, #6B7280
- **Character Counter:** 12px, #6B7280 (normal), #EF4444 (at limit)

### Form Elements

#### Text Inputs & Dropdowns
```css
- Border: 1px solid #D1D5DB
- Border-radius: 6px
- Height: 44px (inputs), auto (textareas)
- Font-size: 16px
- Padding: 12px 16px
- Background: white

On Focus:
- Border: 2px solid #FA4616 (UiPath orange)
- Outline: none
- Box-shadow: 0 0 0 3px rgba(250, 70, 22, 0.1)

On Error:
- Border: 2px solid #EF4444
- Background: #FEF2F2
```

#### Checkboxes
```css
- Size: 20px × 20px
- Border: 2px solid #D1D5DB
- Border-radius: 4px
- Checked background: #FA4616
- Checkmark: white

On Focus:
- Box-shadow: 0 0 0 3px rgba(250, 70, 22, 0.1)
```

#### Textareas (Resizable)
```css
- Min-height: 100px
- Resize: vertical (show resize handle bottom-right)
- Font-family: inherit
- Line-height: 1.5

Character Counter:
- Position: absolute, bottom-right
- Padding: 8px
- Color: #6B7280
- Color at 90%+: #F59E0B
- Color at 100%: #EF4444
```

#### Submit Button
```css
- Background: #FA4616 (UiPath orange)
- Color: white
- Font-weight: 600
- Padding: 14px 32px
- Border-radius: 6px
- Border: none
- Font-size: 16px
- Cursor: pointer
- Min-width: 160px

On Hover:
- Background: #E63E0F (darker orange)
- Box-shadow: 0 4px 12px rgba(250, 70, 22, 0.2)

On Active:
- Transform: scale(0.98)

On Disabled:
- Background: #D1D5DB
- Cursor: not-allowed
```

### Color Palette
- **Primary (UiPath Orange):** #FA4616
- **Primary Hover:** #E63E0F
- **Success:** #10B981
- **Error:** #EF4444
- **Warning:** #F59E0B
- **Background:** #F9FAFB
- **Surface (cards):** #FFFFFF
- **Text Primary:** #111827
- **Text Secondary:** #6B7280
- **Border:** #E5E7EB
- **Border Dark:** #D1D5DB

---

## Validation Rules

### Required Field Validation
All fields marked with * are required:
- Email (with format validation)
- Role
- Deployment Type (at least one)
- Main Affected Product
- Summary
- Description
- Desired Outcome
- Impact Type
- Impact Type Summary
- Priority

### Field-Specific Validation

**Email:**
- Regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- Error: "Please enter a valid email address"

**All Textareas:**
- Max 250 characters
- Error: "Maximum 250 characters exceeded"
- Show character count in real-time

**Dropdowns:**
- Must select a value (not placeholder)
- Error: "Please select an option"

**Deployment Type (Checkboxes):**
- Must select at least one
- Error: "Please select at least one deployment type"

### Validation Timing
- **On Blur:** Validate individual field when user leaves it
- **On Change:** Update character counters in real-time for textareas
- **On Submit:** Validate all required fields, show all errors at once
- **Scroll to First Error:** Auto-scroll to first validation error on submit

---

## UI States & Interactions

### Initial State
- Clean form, all fields empty
- Show placeholder text in all inputs
- Submit button enabled
- No validation errors visible

### Active/Filling State
- **Field Focus:** Blue border glow on current field
- **Typing:** Character counters update in real-time
- **Checkbox Selection:** Visual feedback (checkmark appears)
- **Dropdown Open:** Show all options, highlight on hover

### Error State
- **Visual Indicators:**
  - Red border on invalid field (2px solid #EF4444)
  - Light red background (#FEF2F2)
  - Error icon (⚠️) next to field label
  - Error message below field in red text
  - Red asterisk on required label
- **Behavior:**
  - Show errors on blur after user interaction
  - Show all errors on submit attempt
  - Auto-scroll to first error
  - Remove error styling when field becomes valid

### Success State (Mock)
- **On Submit (if valid):**
  - Show success modal overlay
  - Green checkmark icon
  - Message: "✓ Thank you! Your feedback has been submitted."
  - Auto-close after 3 seconds OR
  - "Submit Another" button to reset form
- **Console Log:** Output all form data to console

### Multi-Select Checkbox Groups
- **Deployment Type:**
  - Show all 7 options
  - Allow multiple selections
  - No search needed (short list)

- **Additional Affected Product:**
  - Show search/filter input at top
  - Filter list as user types
  - Show selected items as removable pills/tags above list
  - Limit visible items to 10, scroll for more

---

## Accessibility Requirements (WCAG 2.1 AA)

### Keyboard Navigation
- **Tab Order:** Logical flow through all fields
- **Enter:** Submit form (when on submit button)
- **Space:** Toggle checkboxes, open dropdowns
- **Arrow Keys:** Navigate dropdown options
- **Escape:** Close dropdowns

### Screen Reader Support
- All inputs have associated `<label>` elements
- Required fields announced as "required"
- Error messages linked via `aria-describedby`
- Character counters announced on focus
- Section headers use proper heading levels (h2, h3)
- Form has `<form>` semantic element with role="form"

### Visual Accessibility
- Color contrast ratio ≥ 4.5:1 for all text
- Focus indicators visible (2px outline, 3px shadow)
- Error states don't rely on color alone (icons + text)
- Touch targets ≥ 44×44px
- Font size ≥ 16px (prevents mobile zoom on iOS)

### ARIA Attributes
```html
<input 
  aria-required="true"
  aria-invalid="false"
  aria-describedby="field-error field-help"
/>
<span id="field-error" role="alert">Error message</span>
```

---

## Component Architecture

### Suggested Component Structure

```
App
├── Header (UiPath logo, title, description)
├── FeedbackForm
│   ├── RequesterInfoSection
│   │   ├── EmailInput
│   │   └── RoleDropdown
│   ├── ProductInfoSection
│   │   ├── DeploymentTypeCheckboxes
│   │   ├── MainProductDropdown
│   │   └── AdditionalProductMultiSelect
│   ├── RequestInfoSection
│   │   ├── ResizableTextarea (Summary)
│   │   ├── ResizableTextarea (Description)
│   │   ├── ResizableTextarea (Desired Outcome)
│   │   ├── ImpactTypeDropdown
│   │   ├── ResizableTextarea (Impact Type Summary)
│   │   └── PriorityDropdown
│   └── FormActions (Submit button)
├── FormField (reusable wrapper with label, error, help text)
├── ValidationMessage (error/success display)
└── SuccessModal (confirmation overlay)
```

### Key Reusable Components

**ResizableTextarea Component:**
```javascript
<ResizableTextarea
  label="Summary"
  name="summary"
  required={true}
  maxLength={250}
  placeholder="Brief summary..."
  value={value}
  onChange={handleChange}
  error={errors.summary}
/>
```

**MultiSelectCheckboxes Component:**
```javascript
<MultiSelectCheckboxes
  label="Additional Affected Product"
  name="additionalProducts"
  options={productOptions}
  selected={selectedProducts}
  onChange={handleChange}
  searchable={true}
/>
```

---

## Mock Behavior & Testing

### Form Submission (Mock)
```javascript
const handleSubmit = (e) => {
  e.preventDefault();
  
  // 1. Validate all fields
  const errors = validateForm(formData);
  
  // 2. If errors exist
  if (Object.keys(errors).length > 0) {
    setFormErrors(errors);
    scrollToFirstError();
    return;
  }
  
  // 3. If valid
  console.log('Form Data:', formData);
  
  // 4. Show success modal
  setShowSuccessModal(true);
  
  // 5. Optional: Reset form after 3 seconds
  setTimeout(() => {
    setShowSuccessModal(false);
    resetForm();
  }, 3000);
};
```

### Character Counter Logic
```javascript
const [charCount, setCharCount] = useState(0);
const maxLength = 250;

const handleTextChange = (e) => {
  const text = e.target.value;
  if (text.length <= maxLength) {
    setCharCount(text.length);
    setValue(text);
  }
};

// Counter color
const counterColor = charCount >= maxLength ? '#EF4444' : 
                     charCount >= maxLength * 0.9 ? '#F59E0B' : 
                     '#6B7280';
```

### Searchable Multi-Select
```javascript
const [searchTerm, setSearchTerm] = useState('');
const [selectedProducts, setSelectedProducts] = useState([]);

const filteredProducts = productOptions.filter(product =>
  product.toLowerCase().includes(searchTerm.toLowerCase())
);
```

---

## Responsive Design

### Desktop (≥1024px)
- Form width: 800px, centered
- Two-column layout for checkbox groups
- Full section headers visible
- Generous spacing (40px padding)

### Tablet (768px - 1023px)
- Form width: 90% of viewport
- Single column for all fields
- Comfortable touch targets
- Padding: 32px

### Mobile (≤767px)
- Form width: 100% with 16px margins
- Stack all elements vertically
- Larger touch targets (48×48px minimum)
- Font size: 16px+ (prevents iOS zoom)
- Padding: 16px

---

## Testing Checklist

### Functionality
- [ ] All required fields validate on submit
- [ ] Email validates format correctly
- [ ] All dropdowns populate with correct options
- [ ] Multi-select checkboxes allow multiple selections
- [ ] Character counters update in real-time
- [ ] Character limit enforced (250 chars)
- [ ] Textareas are resizable
- [ ] Form submits successfully when valid
- [ ] Form shows errors when invalid
- [ ] Success modal appears after valid submission
- [ ] Console logs form data correctly

### Accessibility
- [ ] Tab through entire form in logical order
- [ ] All fields keyboard accessible
- [ ] Screen reader announces all labels correctly
- [ ] Required fields announced as required
- [ ] Error messages linked and announced
- [ ] Color contrast meets WCAG AA
- [ ] Focus indicators visible on all interactive elements

### Responsive Design
- [ ] Form displays correctly on desktop (1920px)
- [ ] Form displays correctly on tablet (768px)
- [ ] Form displays correctly on mobile (375px)
- [ ] Touch targets are ≥44px on mobile
- [ ] No horizontal scrolling on any viewport

### Visual Polish
- [ ] Spacing matches design specifications
- [ ] Colors match UiPath brand
- [ ] Hover states work on all interactive elements
- [ ] Error states are clear and consistent
- [ ] Success modal is centered and readable
- [ ] No visual bugs or alignment issues

---

## Implementation Prompt for AI Coding Tool

**Copy this when prompting Zed, Cursor, or Claude:**

> Build a modern, accessible TIF feedback form prototype for UiPath with these requirements:
> 
> **Three Main Sections:**
> 1. **Requester Information:** Email (validated), Role dropdown (5 options)
> 2. **Product Information:** Deployment Type (7 multi-select checkboxes), Main Affected Product (44 options dropdown), Additional Affected Product (same 44 options, multi-select with search)
> 3. **Request Information:** Summary, Description, Desired Outcome, Impact Type Summary (all resizable textareas with 250 char limit and counters), Impact Type dropdown (12 options), Priority dropdown (5 options)
> 
> **Design Style:**
> - Clean, modern aesthetic like image "TIF landing page_02"
> - UiPath orange primary color (#FA4616)
> - Section headers with bottom borders
> - Generous spacing (48px between sections, 24px between fields)
> - Resizable textareas with character counters in bottom-right
> - Form max-width 800px, centered
> 
> **Key Features:**
> - All required fields marked with red asterisk
> - Inline validation on blur
> - Real-time character counters (red at limit)
> - Multi-select checkboxes with search for long product list
> - Success modal on valid submission
> - WCAG AA accessible (keyboard nav, screen reader support)
> - Fully responsive (mobile/tablet/desktop)
> 
> **Tech:** React + TypeScript or vanilla HTML/CSS/JS. No backend. Mock submission only (console.log data).
> 
> Make it production-quality with smooth interactions and excellent accessibility.

---

**Next Steps:** Use this updated PRD with your AI coding tool to build the form with the exact fields and design aesthetic you need!