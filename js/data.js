// Portfolio Data
window.portfolioData = {
  // ISO date when career started (used to compute years/months of experience)
  "careerStart": "2017-05-01",
  "experience": [
    {
      "id": 6,
      "company": "JP Morgan Chase",
      "logo": "img/jpmorgan-chase-logo.svg",
      "position": "Associate Vice President, Senior Software Engineer",
      "duration": "June 2025 - Present",
      "description": "Leading the development of a portfolio management application for Venture Capitals"
    },
    {
      "id": 5,
      "company": "CodeCraft Technologies Pvt Ltd",
      "logo": "img/codecraft-logo.png",
      "position": "Senior Software Engineer",
      "duration": "June 2023 - June 2025",
      "description": "Led the integration of multiple Point of Sale (POS) systems and delivery platforms, enhancing user experience and accelerating partner onboarding by ~20%."
    },
    {
      "id": 4,
      "company": "Talkpush",
      "logo": "img/talkpush-logo.png",
      "position": "Senior Software Engineer",
      "duration": "May 2022 - Feb 2023",
      "description": "Designed and integrated Oracle, DocuSign & Workday via APIs"
    },
    {
      "id": 3,
      "company": "Talentica Software (I) Pvt. Ltd.",
      "logo": "img/talentica-logo.svg",
      "position": "Senior Software Engineer",
      "duration": "Apr 2021 - Apr 2022",
      "description": "Designed and implemented RESTful APIs and optimized database queries for improved performance."
    },
    {
      "id": 2,
      "company": "Harbinger Group",
      "logo": "img/harbinger-logo.png",
      "position": "Senior Software Engineer",
      "duration": "Jan 2020 - Apr 2021",
      "description": "Designed and implemented integration application, few frontend projects"
    },
    {
      "id": 1,
      "company": "Thoughtmines Infotech Private Limited",
      "logo": "img/tmi-logo.png",
      "position": "Software Engineer",
      "duration": "Jun 2017 - Dec 2019",
      "description": "Designed and developed web applications using Ruby on Rails, MySQL, and JavaScript; collaborated with cross-functional teams to deliver high-quality software solutions."
    }
  ],
  "projects": [
    {
      "id": 8,
      "title": "Portfolio management application",
      "duration": "Jun 2025 to Present",
      "description": "This project is a leading portfolio management application that helps Venture capitals to manage their investment portfolio online and get insights faster.",
      "responsibilities": [
        "Implemented Hotwire/Turbo, server-side validations, and caching to eliminate full page reloads and speed up UX",
        "Simplified legacy backend: refactored and removed ~25% of redundant summarization code, resolved critical defects, and increased reliability",
        "Raised automated test coverage from ~80% to ~95% (rSpec), enforced code quality standards, and ensured data privacy/PAD compliance",
        "Remediated 50+ Dependabot PRs (security and version bumps) across gem/library dependencies; reduced vulnerability exposure"
      ],
      "role": "Associate Vice President, Senior Software Engineer",
      "stack": ["Backend - Ruby on Rails", "Database - MySQL and PostgreSQL"]
    },
    {
      "id": 7,
      "title": "Food ordering and table booking platform",
      "duration": "Jun 2023 to June 2025",
      "description": "This project is a leading food ordering and table booking platform that helps their users to order food online and book tables at their favorite restaurants.",
      "responsibilities": [
        "Integrated multiple Point of Sale (POS) systems Toast, Lightspeed, Yelp, TripAdvisor, Tock, Nash, and delivery platforms, enhancing user experience and accelerated partner onboarding by ~20%.",
        "Directed a cross functional team (dev+QA) to build a full recruitment pipeline application, driving Agile delivery covering job posting, applications, resume parsing, interview orchestration and automated email invites, through to onboarding for a frictionless experience"
      ],
      "role": "Senior Software Engineer",
      "stack": ["Backend - Ruby on Rails", "Database - MySQL and PostgreSQL", "Frontend - HTML, CSS, JS, ReactJS"]
    },
    {
      "id": 6,
      "title": "Recruitment based application",
      "duration": "May 2022 - Feb 2023",
      "description": "This project is a leading automated recruiting solution that helps you engage, nurture and hire talents faster.",
      "responsibilities": [
        "Implemented Oracle, DocuSign and Workday integrations that reduced time-to-sign by ~25% and onboarding TAT by ~20%.",
        "Added CloudWatch logging and Slack alerts, shrinking incident detection time by ~40% and reducing repeat outages by ~30%",
        "Improved p95 endpoint latency by ~35% through caching and query optimization",
        "Improved application performance and reliability"
      ],
      "role": "Senior Software developer",
      "stack": ["Backend - Python", "Database - MySQL and PostgreSQL", "Frontend - HTML, CSS, JS, ReactJS"]
    },
    {
      "id": 5,
      "title": "Home lending platform",
      "duration": "Apr 2021 to May 2022",
      "description": "This project is a leading home lending platform that helps you to apply for home loans online and get approved faster.",
      "responsibilities": [
        "Developed digital home lending platform, streamlined home-lending flows, reduced loan application processing time by~20% and improved user experience",
        "Optimized backend performance (p95 API latency down ~30%); expanded test coverage from ~50% to ~95%, reducing regressions by ~30%"
      ],
      "role": "Senior Software developer",
      "stack": ["Backend - Python", "Database - MySQL and PostgreSQL", "Frontend - HTML, CSS, JS, ReactJS"]
    },
    {
      "id": 4,
      "title": "Connector Application",
      "duration": "Jan to Apr 2021",
      "description": "This project is an API based connector application which exchanges data between two independent applications i.e., functionality to get details from first application and send it to another one and do the vice-versa.",
      "responsibilities": [
        "Designed and implemented a Workday - Talkpush integration (SOAP to REST) on Python based service; automating data ingestion, and lowering schema mismatches by ~30%",
        "Provided APIs for mobile and web synchronization"
      ],
      "role": "Senior Software developer",
      "stack": ["Backend - Python", "Database - PostgreSQL"]
    },
    {
      "id": 3,
      "title": "Project management",
      "duration": "Dec 2018 to Dec 2020",
      "description": "This project is a complete and extensible Redmine upgrade. Redmine is a free and open source, web-based project management and issue tracking tool. It allows users to manage multiple projects and associated sub-projects.",
      "responsibilities": [
        "Worked on requirement analysis, planning, designing database architecture, backend / frontend development",
        "Worked on several features like business units, timesheet, time entry, resource management, recognitions, invoices, data import from backend, webhook development etc.",
        "Upgraded project-management modules and implemented new business modules; increased daily active usage by~15% and lowered support tickets by ~30%",
        "Work for features, bug analysis and fixing live environment errors and issues, client support requests etc.",
        "Worked on Web API: Provided APIs for CRUD operations and worked on mobile team requirements and ensure that web and mobile app are in sync without any issue"
      ],
      "role": "Associate Software Developer",
      "stack": ["Backend - Ruby on Rails", "Database - MySQL and PostgreSQL", "Frontend - HTML, CSS, JS"]
    },
    {
      "id": 2,
      "title": "Student Information Systems",
      "duration": "Oct 2017 to Nov 2018",
      "description": "This application offers implementation and hosting of online learning platforms (Learning Management System), to manage student information from application to graduation (Student Information System), E- library, Online Program Management, Educational Devices, Payment Collection System etc.",
      "responsibilities": [
        "Worked for requirement gathering, understanding and implementation features, testing (manual), bug analysis and fixing, client support requests etc.",
        "Worked with support team for fixing live environment errors and issues",
        "Worked on many major features like upgrading whole applications for 5 different schools single handedly",
        "Lead the team of two developers for feature field of study, Employee check-in-out via biometric device integration, applicant registration, survey, global subjects, data import from backend, worked on several syncing features between School management application and Learning Management System, and many more",
      ],
      "role": "Associate Software Developer",
      "stack": ["Backend - Ruby on Rails", "Database - MySQL", "Frontend - HTML, CSS, JS"]
    },
    {
      "id": 1,
      "title": "Human resource management",
      "duration": "May to Sept 2017",
      "description": "This application manages employee and human resource management features like create/update profiles, leaves (apply, approval, report and notification), appraisal, daily work log creation and listing, apply for job and connect with organization via website.",
      "responsibilities": [
        "Worked on requirement analysis, planning, designing database architecture, backend / frontend development",
        "Designed and develop backend of thoughtmines.com",
        "Reduced manual reconciliation by ~10 hours/week and cut data entry errors by~25%",
        "Worked for features, testing (manual) the newly developed features and enhancements, bug analysis and fixingetc.",
      ],
      "role": "Trainee Software Developer",
      "stack": ["Backend - Ruby on Rails", "Database - MySQL", "Frontend - HTML, CSS, JS"]
    }
  ],
  "skills": [
    {
      "category": "Web Development",
      "level": "Expert"
    },
    {
      "category": "Data Structures",
      "level": "Expert"
    },
    {
      "category": "Algorithms",
      "level": "Expert"
    },
    {
      "category": "Design Patterns",
      "level": "Advanced"
    },
    {
      "category": "DevOps & Cloud",
      "level": "Advanced"
    },
    {
      "category": "Problem Solving",
      "level": "Expert"
    }
  ],
  "social": [
    {
      "name": "LinkedIn",
      "icon": "fab fa-linkedin-in",
      "url": "https://www.linkedin.com/in/shubhamsinghchouhan/",
      "type": "link",
      "tooltip": "Connect with me on LinkedIn"
    },
    {
      "name": "GitHub",
      "icon": "fab fa-github",
      "url": "https://github.com/shubhamsinghchouhan",
      "type": "link",
      "tooltip": "View my GitHub repositories and projects"
    },
    {
      "name": "HackerRank",
      "icon": "fas fa-heading",
      "url": "https://www.hackerrank.com/shubhamschouhan",
      "type": "link",
      "tooltip": "Check my HackerRank profile and coding challenges"
    },
    {
      "name": "Email",
      "icon": "fas fa-paper-plane",
      "url": "mailto:shubhamsinghchouhan@live.com",
      "type": "action",
      "tooltip": "Send me an email"
    },
    {
      "name": "Contact",
      "icon": "fa fa-mobile",
      "url": "tel:+919407119131",
      "type": "action",
      "tooltip": "Call or WhatsApp me"
    },
    {
      "name": "Facebook",
      "icon": "fab fa-facebook-f",
      "url": "https://www.facebook.com/shubh1109",
      "type": "link",
      "tooltip": "Follow me on Facebook"
    },
    {
      "name": "Instagram",
      "icon": "fab fa-instagram",
      "url": "https://www.instagram.com/shubhchouhan/",
      "type": "link",
      "tooltip": "Follow me on Instagram"
    }
  ],
  "skillIcons": [
    {"name": "Python", "icon": "img/icons/python.svg"},
    {"name": "FastAPI", "icon": "img/icons/fastapi.svg"},
    {"name": "Ruby", "icon": "img/icons/ruby.svg"},
    {"name": "Ruby on Rails", "icon": "img/icons/ror.svg"},
    {"name": "MySQL", "icon": "img/icons/mysql.svg"},
    {"name": "PostgreSQL", "icon": "img/icons/postgresql.svg"},
    {"name": "HTML", "icon": "img/icons/html.svg"},
    {"name": "CSS", "icon": "img/icons/css.svg"},
    {"name": "JavaScript", "icon": "img/icons/js.svg"},
    {"name": "jQuery", "icon": "img/icons/jquery.svg"},
    {"name": "VueJS", "icon": "img/icons/vuejs.svg"},
    {"name": "Backbone JS", "icon": "img/icons/backbonejs.svg"},
    {"name": "Git", "icon": "img/icons/git.svg"},
    {"name": "AWS EC2", "icon": "img/icons/aws-ec2.svg"},
    {"name": "Visual Studio Code", "icon": "img/icons/vscode.svg"},
    {"name": "Sublime Text", "icon": "img/icons/sublime.svg"},
    {"name": "Postman", "icon": "img/icons/postman.svg"},
    {"name": "Linux", "icon": "img/icons/linux.svg"}
    // NOTE: Disabled skill icons below (uncomment to enable)
    // {"name": "Heroku", "icon": "img/icons/heroku.svg"}
  ],
  "techStack": [
    {
      "category": "Core skills",
      "technologies": ["Web Development", "Data Structures", "Algorithms", "Problem Solving", "Design Patterns", "DevOps & Cloud"]
    },
    {
      "category": "Language & Frameworks",
      "technologies": ["Python", "FastAPI", "Ruby", "Ruby on Rails"]
    },
    {
      "category": "Testing Frameworks",
      "technologies": ["Pytest", "RSpec"]
    },
    {
      "category": "Web Technologies",
      "technologies": ["HTML", "CSS", "JavaScript", "jQuery", "VueJS", "BackboneJS"]
    },
    {
      "category": "Database",
      "technologies": ["MySQL", "PostgreSQL"]
    },
    {
      "category": "Cloud & DevOps",
      "technologies": ["AWS", "Git", "Jira", "Docker", "Kubernetes", "CI/CD"]
    },
    {
      "category": "API",
      "technologies": ["REST", "SOAP"]
    },
    {
      "category": "IDE",
      "technologies": ["Sublime Text", "VSCode"]
    },
    {
      "category": "Other",
      "technologies": ["Postman", "SoapUI", "Linux OS"]
    }
  ]
};
