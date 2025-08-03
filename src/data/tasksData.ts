export const tasksData = [
  {
    id: 1,
    title: 'Omnichannel Lead Nurturing Workflow',
    description: 'Design an automated nurturing journey for incomplete signups using multiple communication channels.',
    icon: 'Workflow',
    color: 'bg-gradient-to-r from-blue-500 to-blue-600',
    tools: ['Diagrams.net', 'WhatsApp API', 'SMS Gateway', 'Email Marketing'],
    deliverables: [
      'Flowchart of the nurturing journey',
      'Public link to the workflow diagram',
      'Documentation of decision points'
    ],
    scenario: "You're on the Marketing Automation team at NxtWave. Users sign up on the platform but many don't complete their profile setup — a crucial step for delivering personalized recommendations and engagement.",
    objectives: [
      'Design an automated nurturing journey for incomplete signups',
      'Implement multi-channel communication strategy',
      'Create conditional logic for profile completion checks',
      'Establish fallback mechanisms for failed message delivery'
    ],
    workflow: [
      'Day 0 (Signup): Send welcome messages via WhatsApp, SMS, and Email simultaneously',
      'Day 1: Check profile completion status - if complete, exit workflow and send congratulatory message; if incomplete, continue',
      'Day 1–3 (Reminder Loop): Send WhatsApp reminder, wait for delivery confirmation, use SMS as backup if failed',
      'After Day 3: Send final reminder via email and end the workflow'
    ],
    resources: [
      { name: 'Diagrams.net Tool', url: 'https://app.diagrams.net' },
      { name: 'Journey Mapping Guide', url: 'https://app.diagrams.net' }
    ]
  },
  {
    id: 2,
    title: 'Chatbot Setup with SwiftSell',
    description: 'Create a lead qualification chatbot for NxtWave\'s Free Career Kickstarter Webinar.',
    icon: 'Bot',
    color: 'bg-gradient-to-r from-purple-500 to-purple-600',
    tools: ['SwiftSell', 'JSON', 'Email Integration', 'Lead Scoring'],
    deliverables: [
      'End-to-end flow video recording',
      'Bot preview link',
      'Lead qualification logic documentation'
    ],
    scenario: "Create a lead qualification chatbot for NxtWave's Free Career Kickstarter Webinar using SwiftSell platform with advanced conditional messaging and automated lead scoring.",
    objectives: [
      'Capture basic lead information (Name, Phone, Email)',
      'Qualify leads through targeted questions about background and career goals',
      'Implement conditional messaging based on user responses',
      'Send qualified lead notifications with structured JSON data'
    ],
    workflow: [
      'Lead Capture: Collect Name, Phone, Email from interested prospects',
      'Qualification Questions: Ask about student/professional status, tech/non-tech background, preferred career path',
      'Conditional Responses: Show tailored messages based on user profile and interests',
      'Lead Scoring: Automatically qualify and route hot leads for immediate follow-up'
    ],
    resources: [
      { name: 'SwiftSell Platform', url: 'https://app.swiftsell.biz/' },
      { name: 'Chatbot Creation Guide', url: 'https://app.swiftsell.biz/' }
    ]
  },
  {
    id: 3,
    title: 'Make Tool Integration',
    description: 'Build an automation using Make (Integromat) to showcase tool integration and webhook handling skills.',
    icon: 'Link',
    color: 'bg-gradient-to-r from-pink-500 to-pink-600',
    tools: ['Make.com', 'Webflow', 'Google Sheets', 'Gmail', 'Webhooks'],
    deliverables: [
      'End-to-end automation video',
      'Public form link',
      'Google Sheets with responses',
      'Make scenario documentation'
    ],
    scenario: "Build a comprehensive automation using Make (Integromat) that demonstrates advanced tool integration, webhook handling, and seamless data flow management across multiple platforms.",
    objectives: [
      'Create a responsive form for lead capture',
      'Integrate form submissions with Google Sheets via Make',
      'Send automated confirmation emails to users',
      'Implement proper webhook handling and data mapping'
    ],
    workflow: [
      'Form Setup: Create lead capture form using Webflow or similar platform',
      'Webhook Integration: Configure Make to receive form data via custom webhook',
      'Google Sheets: Automatically save form responses as new rows in connected spreadsheet',
      'Email Automation: Send personalized confirmation emails using Gmail integration'
    ],
    resources: [
      { name: 'Webflow Forms', url: 'https://webflow.com/' },
      { name: 'Make Automation Platform', url: 'https://www.make.com/' }
    ]
  }
];