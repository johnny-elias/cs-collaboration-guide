# Brown CS Course Collaboration Guide

## Overview
This web application provides a comprehensive, searchable dashboard of collaboration policies across Brown University's Computer Science department. It helps students quickly understand and compare the collaboration rules for different CS courses, making it easier to stay in compliance with academic policies.

## Features
- **Interactive Dashboard**: A responsive grid layout showcasing all CS courses
- **Search Functionality**: Quick search by course number or name
- **Category Filtering**: Filter courses by collaboration policy type:
  - Open/Permissive
  - Moderate/Structured
  - Tiered/Phased
  - Strict/Limited
  - Project-Based
- **Visual Indicators**:
  - Color-coded borders for policy categories
  - Icons for key features (AI usage, collaboration level, etc.)
  - Direct links to official course policies where available

## Technical Stack
- React.js
- Tailwind CSS
- Lucide React (for icons)

## Setup
1. Clone the repository:
```bash
git clone https://github.com/[username]/cs-collaboration-guide.git
cd cs-collaboration-guide
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

## Project Structure
```
src/
  ├── components/
  │   └── CollaborationDashboard.js
  ├── App.js
  ├── index.js
  └── index.css
```

## Deployment
This site is deployed using GitHub Pages. To deploy:

1. Add homepage to package.json:
```json
{
  "homepage": "https://[username].github.io/cs-collaboration-guide"
}
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Add deployment scripts to package.json:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

4. Deploy:
```bash
npm run deploy
```

## Maintenance
To update course policies:
1. Modify the `courses` array in `CollaborationDashboard.js`
2. Each course object follows this structure:

```javascript
{
  id: "course_number",
  name: "Course Name",
  category: "policy_category",
  description: "Policy description",
  features: ["Feature1", "Feature2"],
  link: "URL to policy",
  details: "Additional details"
}
```

## Credits
Developed to help Brown CS students navigate course collaboration policies more easily. Data sourced from official Brown University course websites and documentation.

## Contact
For updates or corrections to course policies, please submit an issue or pull request.