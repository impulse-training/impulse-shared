export interface PrivacyPolicySection {
  title: string;
  paragraphs: string[];
}

export const PRIVACY_POLICY_LAST_UPDATED = "April 14, 2025";

export const PRIVACY_POLICY_INTRO =
  "Your privacy is important to us. This Privacy Policy explains how Impulse collects, uses, and protects your information when you use our application.";

export const PRIVACY_POLICY_SECTIONS: PrivacyPolicySection[] = [
  {
    title: "1. Information We Collect",
    paragraphs: [
      "We collect information in the following ways:",
      "• Information you provide: This includes data you input while using the app, such as impulse moments, strategies, and journal entries.",
      "• Device information: We collect device-specific information such as your device model, operating system, and unique device identifiers.",
      "• Usage data: Information about how you use our application, including features you access and time spent on the app.",
    ],
  },
  {
    title: "2. How We Use Information",
    paragraphs: [
      "We use the collected information to:",
      "• Provide, maintain, and improve our services",
      "• Personalize your experience with the app",
      "• Analyze usage patterns to enhance functionality",
      "• Develop new features and services",
    ],
  },
  {
    title: "3. Data Security",
    paragraphs: [
      "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Your data is stored in Firebase with industry-standard security protocols.",
    ],
  },
  {
    title: "4. Anonymous Usage",
    paragraphs: [
      "If you choose to use Impulse anonymously, we still collect non-personally identifiable information to provide and improve our services. This data is associated with a randomly generated identifier rather than personal information like your name or email.",
    ],
  },
  {
    title: "5. Data Retention",
    paragraphs: [
      "We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.",
    ],
  },
  {
    title: "6. Your Rights",
    paragraphs: [
      "You have the right to access, correct, or delete your personal information. You can also request a copy of the data we hold about you. To exercise these rights, please contact us.",
    ],
  },
  {
    title: "7. Changes to This Policy",
    paragraphs: [
      "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the \"Last Updated\" date.",
    ],
  },
];

export const PRIVACY_POLICY_FOOTER =
  "If you have any questions about this Privacy Policy, please contact us.";
