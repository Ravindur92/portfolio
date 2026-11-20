import { image } from "framer-motion/client";

export const projects = [


  {
    id: 'malware-analysis-platform',
    title: 'Malware Analysis Platform',
    description:
      'Full-stack platform that analyses uploaded files through a 5-step pipeline: VirusTotal lookup, static and dynamic analysis, and PDF report generation. Includes MFA, email verification and emailed reports.',
    tags: ['Python', 'Flask', 'SQLite', 'VirusTotal API', 'ReportLab', 'Railway'],
    github: 'https://github.com/Ravindur92/malware-analysis-platform',
    image: '/projects/Screenshot 2026-06-27 185143.png', 
    live: '', // paste your Railway URL here, or leave empty to hide the button

  overview: [
    'MAP (Malware Analysis Platform) is a full-stack web application where a user uploads a suspicious Windows-based file (EXE, DLL, PDF, Office documents, scripts, archives) and receives a complete analysis report. Each submission gets a unique analysis token, emailed to the user, so results can be found again later.',
    'Every file goes through a 5-step pipeline: sandbox environment reset, VirusTotal hash lookup with a forensic detection tree, static analysis, dynamic analysis, and report generation. Each step unlocks only after the previous one completes and shows live progress.',
    'The static engine is custom-built in Python. It inspects PE headers, section entropy, imports and compilation metadata, extracts strings (URLs, IPs, registry keys, base64, mutex names), detects packers, groups imported APIs by capability, and runs YARA-style pattern rules. It then produces a weighted risk score and a separate obfuscation score.',
    'Dynamic analysis uses Hybrid Analysis (CrowdStrike Falcon Sandbox) behavioral data: processes, network activity, file and registry changes, signatures and MITRE ATT&CK techniques. When no sandbox report exists for a file, it falls back to behavior inferred from static findings.',
    'Results are combined into a final verdict, threat level and malware type (Ransomware, Trojan, Spyware, Rootkit and others) with a confidence level. The platform generates a PDF report for non-technical readers and a JSON report with the full technical data, and emails the PDF on completion. Reports can be downloaded again later from Previous Results by searching with the analysis token or name.',
  ],

  highlights: [
    'Authentication and account security: email verification before first login, TOTP multi-factor authentication, password complexity rules, 90-day password expiry, prevention of reusing the last 5 passwords, token-based password reset, and automatic logout after password or MFA changes',
    'Security monitoring: failed login attempts are recorded with IP address and device, trigger an email alert, and appear in a sidebar security panel alongside password expiry and MFA status',
    'VirusTotal integration: detection ratio across 70+ engines, file properties, and a collapsible forensic tree grouping engines into malicious, suspicious and clean branches',
    'Static analysis: PE structure, entropy, packer detection, import capability analysis, YARA-style pattern matching, string extraction, and a weighted risk score',
    'Obfuscation analysis: a dedicated score built from entropy, packers, dynamic import resolution, string sparsity, TLS callbacks, overlay data, anti-debugging and anti-VM indicators',
    'Dynamic analysis: processes, network, file and registry activity, signatures, and MITRE ATT&CK mapping from Hybrid Analysis, with a static-inference fallback',
    'Malware classification: determines the likely malware type and confidence from VirusTotal detection names, sandbox family data, capabilities and pattern matches',
    'Reporting: a multi-section PDF with a cover page, summary charts (risk gauge, VirusTotal donut, indicator bars), IOC tables, per-stage detection summaries, recommendations and "Page X of Y" numbering, plus a structured JSON export',
    'Professional HTML emails for verification, welcome, password events, failed logins, analysis started and analysis complete (with the PDF attached)',
    'Dark-themed responsive UI with a landing page, a drag-and-drop upload flow, phone number validation with country codes, and a custom favicon',
    'Deployed on Railway with automatic redeploys on every push to GitHub',
  ],

  challenges: [
    'Railway blocks outbound SMTP ports, so I replaced Flask-Mail with Brevo\'s HTTPS email API and moved email sending to background threads. This also meant passing plain values into those threads instead of SQLAlchemy objects, which fail once their session closes.',
    'Fixed Gunicorn worker timeouts during long requests by tuning the timeout, workers and threads.',
    'Escaped dynamic text in the PDF generator so malicious filenames and detection strings cannot break report creation. Also fixed a ReportLab layout error by switching to a canvas-based page counter for "Page X of Y".',
    'Handled Hybrid Analysis API limits and quirks: restricted API access, inconsistent request formats, null threat scores on older reports, and timeouts. I added a threat-score estimate from signatures and a graceful fallback.',
    'Removed a Windows-only dependency (python-magic-bin) and the yara-python build requirement so the app builds cleanly on Linux for deployment.',
    'Diagnosed Railway deployment issues one by one: Procfile parsing, port binding through the PORT variable, and a stuck start command.',
    'Kept secrets out of version control after GitHub push protection caught an API key in a committed .env file, then untracked the file and rotated the key.',
  ],
    images: [
       {src: '/projects/malware-analysis-platform/Screenshot 2026-06-27 185155.png', caption: 'Dashboard' },
       {src: '/projects/malware-analysis-platform/Screenshot 2026-06-27 185032.png', caption: 'Railway.com web hosting environment' },
       {src: '/projects/malware-analysis-platform/Screenshot 2026-06-27 185128.png', caption: 'Brevo email server used to send automatic emails' }
      
    ],
    videos: [
       //'https://www.facebook.com/share/v/1CKrpVyKNF/',
      // '/projects/malware-analysis-platform/MAP Video demo Low bit rate.mp4',
    ],
  },
    
  {
    id: 'on-premise-malware-analysis',
    title: 'On-Premise Malware Analysis System',
    description:
      'Academic group project (2026). Built an isolated environment for static and dynamic malware analysis, observing registry changes, network activity, persistence mechanisms, API calls and file system activity. I also wrote the functional specification, ran system testing and validation, and helped produce technical and non-technical reports.',
    tags: ['Kali Linux', 'Cuckoo Sandbox', 'VirtualBox', 'VirusTotal', 'Docker'],
    image: '/projects/Screenshot 2026-04-21 002533.png',
    github: '',
    live: '',
  },

  

 
]