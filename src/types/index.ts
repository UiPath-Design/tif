// Form data structure
export interface FormData {
  // Requester Information
  email: string;
  role: string;

  // Product Information
  deploymentType: string[];
  mainAffectedProduct: string;
  additionalAffectedProducts: string[];

  // Request Information
  summary: string;
  description: string;
  desiredOutcome: string;
  impactType: string;
  impactTypeSummary: string;
  priority: string;
}

// Form errors structure
export interface FormErrors {
  email?: string;
  role?: string;
  deploymentType?: string;
  mainAffectedProduct?: string;
  additionalAffectedProducts?: string;
  summary?: string;
  description?: string;
  desiredOutcome?: string;
  impactType?: string;
  impactTypeSummary?: string;
  priority?: string;
}

// Role options
export interface RoleOption {
  value: string;
  label: string;
}

// Product options
export interface ProductOption {
  value: string;
  label: string;
}

// Deployment type options
export interface DeploymentTypeOption {
  value: string;
  label: string;
}

// Impact type options
export interface ImpactTypeOption {
  value: string;
  label: string;
}

// Priority options
export interface PriorityOption {
  value: string;
  label: string;
}

// Form field props
export interface FormFieldProps {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  help?: string;
  children: React.ReactNode;
}

// Text input props
export interface TextInputProps {
  label: string;
  name: string;
  type?: "text" | "email";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  help?: string;
  disabled?: boolean;
}

// Textarea props
export interface TextareaProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  help?: string;
  maxLength?: number;
  disabled?: boolean;
}

// Select props
export interface SelectProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
  options: Array<{ value: string; label: string }>;
  placeholder?: string;
  required?: boolean;
  error?: string;
  help?: string;
  disabled?: boolean;
}

// Checkbox group props
export interface CheckboxGroupProps {
  label: string;
  name: string;
  options: Array<{ value: string; label: string }>;
  selected: string[];
  onChange: (selected: string[]) => void;
  required?: boolean;
  error?: string;
  help?: string;
  disabled?: boolean;
}

// Multi-select with search props
export interface MultiSelectProps {
  label: string;
  name: string;
  options: Array<{ value: string; label: string }>;
  selected: string[];
  onChange: (selected: string[]) => void;
  searchable?: boolean;
  required?: boolean;
  error?: string;
  help?: string;
  disabled?: boolean;
  placeholder?: string;
  maxSelections?: number;
}

// Success modal props
export interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitAnother?: () => void;
}

// Character counter props
export interface CharacterCounterProps {
  current: number;
  max: number;
}

// Form validation result
export interface ValidationResult {
  isValid: boolean;
  errors: FormErrors;
}

// Constants for form options
export const ROLE_OPTIONS: RoleOption[] = [
  {
    value: "automation-business-analyst",
    label: "Automation Business Analyst",
  },
  { value: "automation-developer", label: "Automation Developer" },
  {
    value: "automation-infrastructure-engineer",
    label: "Automation Infrastructure Engineer",
  },
  { value: "automation-project-manager", label: "Automation Project Manager" },
  {
    value: "automation-solution-architect",
    label: "Automation Solution Architect",
  },
];

export const DEPLOYMENT_TYPE_OPTIONS: DeploymentTypeOption[] = [
  { value: "all", label: "All" },
  { value: "automation-cloud", label: "Automation Cloud" },
  { value: "automation-suite", label: "Automation Suite" },
  {
    value: "desktop-virtual-desktop-client",
    label: "Desktop \\ Virtual Desktop Client",
  },
  { value: "gov-cloud", label: "Gov Cloud" },
  { value: "none", label: "None" },
  { value: "standalone-server-product", label: "Standalone Server Product" },
];

export const PRODUCT_OPTIONS: ProductOption[] = [
  { value: "action-center", label: "Action Center" },
  { value: "activities", label: "Activities" },
  { value: "agentic-orchestration", label: "Agentic Orchestration" },
  { value: "agents", label: "Agents" },
  { value: "ai-center", label: "AI Center" },
  { value: "all", label: "All" },
  {
    value: "automation-cloud-deployment",
    label: "Automation Cloud Deployment",
  },
  { value: "automation-hub", label: "Automation Hub" },
  { value: "automation-ops", label: "Automation Ops" },
  {
    value: "automation-suite-deployment",
    label: "Automation Suite Deployment",
  },
  { value: "autopilot", label: "Autopilot" },
  { value: "clipboard-ai", label: "Clipboard AI" },
  { value: "cloudrobots", label: "CloudRobots" },
  { value: "communications-mining", label: "Communications Mining" },
  { value: "computer-vision", label: "Computer Vision" },
  { value: "contact-center", label: "Contact Center" },
  { value: "customer-portal", label: "Customer Portal" },
  { value: "data-manager", label: "Data Manager" },
  { value: "data-service", label: "Data Service" },
  { value: "desktop-installer", label: "Desktop Installer" },
  { value: "document-understanding", label: "Document Understanding" },
  { value: "fedramp", label: "FedRamp" },
  { value: "genai", label: "GenAI" },
  {
    value: "global-notification-service",
    label: "Global Notification Service",
  },
  { value: "identity", label: "Identity" },
  { value: "insights", label: "Insights" },
  { value: "integration-service", label: "Integration Service" },
  { value: "license", label: "License" },
  { value: "maestro", label: "Maestro" },
  { value: "orchestrator", label: "Orchestrator" },
  { value: "other", label: "Other" },
  { value: "partner-product", label: "Partner Product" },
  { value: "process-mining", label: "Process Mining" },
  { value: "robot", label: "Robot" },
  { value: "solution-management", label: "Solution Management" },
  { value: "studio", label: "Studio" },
  { value: "studio-web", label: "Studio Web" },
  { value: "studiox", label: "StudioX" },
  { value: "task-capture", label: "Task Capture" },
  { value: "task-mining", label: "Task Mining" },
  { value: "test-manager", label: "Test Manager" },
  { value: "test-suite", label: "Test Suite" },
  { value: "ui-systems", label: "UI Systems" },
  { value: "uipath-apps", label: "UiPath Apps" },
  { value: "uipath-assistant", label: "UiPath Assistant" },
  { value: "uipath-cli", label: "UiPath CLI" },
  { value: "unified-admin-portal", label: "Unified Admin Portal" },
];

export const IMPACT_TYPE_OPTIONS: ImpactTypeOption[] = [
  { value: "churn-iarr-impact", label: "Churn (-iARR) Impact" },
  { value: "renewal-arr-impact", label: "Renewal (ARR) Impact" },
  { value: "upsell-iarr-impact", label: "Upsell (iARR) Impact" },
  { value: "ease-of-use", label: "Ease of Use" },
  {
    value: "internal-process-efficiency",
    label: "Internal Process Efficiency",
  },
  { value: "leadership-commitment", label: "Leadership Commitment" },
  { value: "license-utilization", label: "License Utilization" },
  { value: "market-differentiation", label: "Market Differentiation" },
  { value: "migration-and-upgrade", label: "Migration and Upgrade" },
  { value: "performance-reliability", label: "Performance & Reliability" },
  { value: "product-feature-adoption", label: "Product or Feature Adoption" },
  { value: "user-friction", label: "User Friction" },
];

export const PRIORITY_OPTIONS: PriorityOption[] = [
  { value: "blocker", label: "Blocker" },
  { value: "critical", label: "Critical" },
  { value: "major", label: "Major" },
  { value: "normal", label: "Normal" },
  { value: "minor", label: "Minor" },
];
