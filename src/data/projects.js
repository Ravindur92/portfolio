import { image } from "framer-motion/client";

export const projects = [


  {
    id: 'malware-analysis-platform',
    title: 'Malware Analysis Platform',
    description:
      'Full-stack platform that analyses uploaded files through a 5-step pipeline: VirusTotal lookup, static and dynamic analysis, and PDF report generation. Includes MFA, email verification and emailed reports.',
    tags: ['Python', 'Flask', 'SQLite', 'VirusTotal API', 'Railway', 'ReportLab'],
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
    image: '/projects/Malware analysis system.png',
    github: '',
    live: '',


  overview: [
    'The On-Premise Malware Analysis System is a web-based cybersecurity platform designed to provide organizations with a secure internal environment for investigating suspicious files. It allows authorized personnel to submit files for malware analysis while maintaining control over sensitive data and analysis operations within the organization\'s infrastructure.',

    'The platform follows a controlled, token-based analysis workflow. Operations managers generate unique analysis tokens, assign them to designated executives, and define the analysis task. Each token is valid for 48 hours and must be validated before an executive can initiate a malware analysis session.',

    'Malware analysis is performed through a multi-stage pipeline consisting of sandbox environment initialization, file validation and upload, SHA-256 hash generation and VirusTotal comparison, metadata extraction, and dynamic behavioral analysis. Suspicious files are executed within isolated virtual machine environments to reduce the risk of affecting the organization\'s internal infrastructure.',

    'The platform implements centralized identity and access management with four primary user levels: Super Admin, System Admin, Manager, and Executive. Administrative operations follow a maker-checker approval mechanism, where System Admins submit user creation, department assignment and access-level changes for Super Admin approval.',

    'After completing an analysis, the platform generates two separate reports: a technical report containing detailed malware analysis findings for cybersecurity professionals, and a non-technical report designed to communicate security risks and findings to stakeholders without a technical background. Reports are securely stored, protected using SHA-256 integrity verification, and accessible to authorized managers through their associated analysis token IDs.'
  ],

  highlights: [
    'On-premise deployment architecture: Designed to operate within an organization\'s internal infrastructure, providing greater control over suspicious files and sensitive analysis data.',

    'Authentication and account security: Email and password authentication, optional TOTP-based multi-factor authentication using Google Authenticator, password complexity enforcement, 30-day password expiry, prevention of reusing the last 5 passwords, and automatic account lockout after 5 failed login attempts.',

    'Role-based access control: Four primary user levels with distinct permissions, responsibilities and access restrictions across the platform.',

    'Maker-checker approval mechanism: Dual-control administrative workflow requiring Super Admin approval for user creation, department assignments and user-level modifications.',

    'User and department management: Centralized user administration, multiple department assignments, account activation, suspension and deletion, with approval-based department changes.',

    'Token-based task management: Unique, non-sequential analysis tokens generated by managers, assigned to individual executives, monitored through the system and automatically expired after 48 hours.',

    'Controlled malware analysis execution: Authorized executives must provide a valid token before initiating an analysis. The system supports file uploads up to 500 MB and password-protected files.',

    'Sandbox environment management: Isolated virtual machine environments are initialized and reset before and after each malware analysis to maintain a controlled execution environment.',

    'VirusTotal integration: SHA-256 file hash generation and comparison against VirusTotal malware intelligence databases to identify previously recognized malicious files.',

    'Static and dynamic malware analysis: File metadata extraction, hash-based identification and behavioral monitoring within an isolated virtual machine environment.',

    'Automated report generation: Produces two separate analysis documents, including a detailed technical report and an accessible non-technical report for organizational stakeholders.',

    'Report integrity and traceability: SHA-256-based report integrity verification, secure report storage and token-based report retrieval.',

    'Security auditing and monitoring: Records critical activities including user actions, role changes, department modifications, token operations, timestamps, IP addresses, device information and session identifiers.',

    'Email notification system: Email notifications for account creation, password resets, failed login attempts, executive task assignments and other important system events.',

    'Session security: Automatic session termination after 15 minutes of inactivity and forced logout following approved user-level changes.'
  ],

  challenges: [
    'Secure malware execution: Designing an analysis environment that prevents suspicious files from directly interacting with the organization\'s production systems while supporting controlled execution and behavioral monitoring.',

    'Sandbox lifecycle management: Ensuring virtual machine environments are correctly initialized and reset before and after every analysis to prevent contamination between separate malware investigations.',

    'Dual-control authorization: Designing a reliable maker-checker approval workflow that prevents a single administrator from independently completing critical user, department and permission changes.',

    'Token lifecycle management: Implementing unique, non-sequential analysis tokens with executive assignment, expiration, revocation and validation mechanisms while maintaining traceability between tokens and generated reports.',

    'Handling password-protected suspicious files: Supporting encrypted or password-protected file submissions while ensuring that the provided password is handled securely during the analysis process.',

    'Reliable malware analysis execution: Coordinating file validation, hash generation, external threat intelligence lookups, metadata extraction and sandbox-based behavioral analysis within a controlled workflow.',

    'Maintaining report integrity: Ensuring generated technical and non-technical reports remain securely stored and can be verified using SHA-256 integrity checks.',

    'Auditability and accountability: Maintaining detailed audit records of administrative changes, authentication events, token operations and malware analysis activities to support security monitoring and investigations.'
  ],

  images: [
    // Add actual project screenshots here.
    // { src: '/projects/on-premise-malware-analysis/dashboard.png', caption: 'System Dashboard' },
    // { src: '/projects/on-premise-malware-analysis/analysis.png', caption: 'Malware Analysis Interface' },
    // { src: '/projects/on-premise-malware-analysis/sandbox.png', caption: 'Isolated Sandbox Environment' },
    // { src: '/projects/on-premise-malware-analysis/reports.png', caption: 'Technical and Non-Technical Reports' },
    // { src: '/projects/on-premise-malware-analysis/admin.png', caption: 'Administrative Approval Dashboard' }
  ],

  videos: [
    // Add the actual project demonstration video here.
    // '/projects/on-premise-malware-analysis/demo.mp4'
  ]

  },

  
  {
    id: '2d-side-scroller-platformer',
    title: '2D Side Scroller Platformer',
    description:
      'A code-focused 2D platformer game developed using Unity and C#. Features player movement, jumping, collectible coins, health management, med kits, temporary magnet power-ups, dynamic speed progression, persistent high scores and interactive gameplay systems.',

    tags: [
      'Unity',
      'C#',
      'Unity 2D Physics',
      'Rigidbody2D',
      'Collision Detection',
      'Coroutines',
      'PlayerPrefs',
      'UI Systems',
      'Game Development'
    ],

    github: '', // Add your GitHub repository URL
    image: '/projects/Game development.png',
    live: '',

    overview: [
      'A 2D side-scroller platformer developed using the Unity game engine and C#. The player navigates through a side-scrolling environment, collects coins, avoids obstacles, manages health and attempts to reach the finish flag while achieving the highest possible score.',

      'The player movement system uses Rigidbody2D physics to implement horizontal movement and jumping mechanics. Additional functionality includes sprite flipping, animation control, variable jump duration, ground detection and movement-related sound effects.',

      'The scoring system supports two different types of collectible coins. When the player collects a coin, the corresponding score is added automatically, a collection sound is played and the coin disappears from the game environment.',

      'A player health management system starts with five health points. Colliding with stone obstacles reduces health, while collectible med kits restore one health point when the player has less than maximum health. Game Over is triggered when health reaches zero.',

      'A temporary magnet power-up system allows players to attract nearby coins automatically. When the player collects a magnet item, the ability activates for a predefined duration. Nearby coins move towards the player, accompanied by an activation sound, an on-screen notification and a countdown timer.',

      'The game also implements a dynamic speed progression system. Player movement speed increases by 5% when the score reaches 400 and by another 5% for every additional 300 points. The current player speed and speed increase notifications are displayed in the game interface.',

      'A persistent high score system uses Unity PlayerPrefs to save the highest score between game sessions. When the player achieves a new record, a NEW HIGH SCORE notification is displayed. The game also includes game completion and game over screens with restart functionality.'
    ],

    highlights: [
      'Player movement: Rigidbody2D-based horizontal movement, jumping, variable jump duration, ground detection and sprite flipping.',
      
      'Camera system: Smooth camera-follow functionality using interpolation to maintain player visibility throughout the level.',
      
      'Dual coin collection system: Two collectible coin types with score updates, automatic disappearance and collection sound effects.',
      
      'Persistent high score: Uses Unity PlayerPrefs to save and retrieve the highest achieved score across game sessions.',
      
      'New high score notification: Displays a NEW HIGH SCORE popup when the player beats the previously saved record.',
      
      'Health management: Five-point health system with collision-based damage and visual health indicators.',
      
      'Med kit collection: Collectible health restoration items that increase player health by one point without exceeding maximum health.',
      
      'Temporary magnet power-up: Activates a timed coin-attraction ability when the player collects a magnet item.',
      
      'Magnet countdown system: Displays the remaining power-up duration and automatically deactivates the ability when the timer expires.',
      
      'Dynamic speed progression: Increases player movement speed by 5% at score 400 and after every additional 300 points.',
      
      'Real-time speed display: Shows the current movement speed and provides notifications when speed increases.',
      
      'Audio integration: Sound effects for running, jumping, landing, coin collection and magnet activation.',
      
      'Game state management: Game Over and Level Completed screens, gameplay pausing and scene restart functionality.',
      
      'Interactive UI: Real-time score, high score, health, speed, countdown and gameplay notification displays.'
    ],

    challenges: [
      'Implementing responsive player movement and variable jumping using Rigidbody2D while maintaining reliable ground detection and animation transitions.',

      'Managing different collision and trigger interactions between the player, stone obstacles, collectible coins, med kits, magnet items and the finish flag.',

      'Developing a temporary magnet ability using coroutines and physics-based overlap detection to identify nearby coins and attract them towards the player.',

      'Implementing a countdown system that updates the user interface in real time and correctly deactivates the magnet ability after its predefined duration.',

      'Managing player health and preventing health restoration beyond the maximum health value while ensuring collected med kits disappear only when successfully used.',

      'Implementing score-based speed progression while ensuring that speed increases occur at the correct score milestones without repeatedly triggering the same upgrade.',

      'Using PlayerPrefs to maintain persistent high scores between game sessions and implementing new high score detection and notifications.',

      'Coordinating gameplay states, UI panels, audio feedback and scene management to provide a consistent gameplay experience.'
    ],

    /* images: [
      {
        src: '/projects/2d-side-scroller/Screenshot.png',
        caption: 'Main gameplay environment'
      },
      {
        src: '/projects/2d-side-scroller/PlayerMovement.png',
        caption: 'Player movement and jumping mechanics'
      },
      {
        src: '/projects/2d-side-scroller/ScoringSystem.png',
        caption: 'Coin collection and scoring system'
      },
      {
        src: '/projects/2d-side-scroller/HealthSystem.png',
        caption: 'Player health and med kit collection'
      },
      {
        src: '/projects/2d-side-scroller/MagnetPower.png',
        caption: 'Temporary magnet power-up and countdown'
      },
      {
        src: '/projects/2d-side-scroller/SpeedProgression.png',
        caption: 'Dynamic speed progression and UI'
      }
    ], */

    videos: [
      // Add your gameplay demonstration video URL here
      // 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID',
    ],
  },


 
]