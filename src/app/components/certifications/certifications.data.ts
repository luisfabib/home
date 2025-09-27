export interface Certification {
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  verificationUrl?: string;
  skills: string[];
  description: string;
  category: string;
  logo?: string;
  score?: number;
  maxScore?: number;
}

export const certifications: Certification[] = [
    {
      title: 'HL7 FHIR Foundational Implementer',
      issuer: 'HL7 International',
      issueDate: 'September 2025',
      verificationUrl: 'https://www.hl7.org/implement/certificationdirectory.cfm?ref=nav?ref=nav',
      skills: ['FHIR', 'FHIRPath', 'FHIR IG', 'Terminologies'],
      description: 'Certifies a basic understanding of the FHIR specifications and FHIR, working with resources, RESTFul Operations, conformance and terminology and security basics.',
      category: 'Healthcare Interoperability',
      logo: 'images/hl7-logo.png'
    },
    {
      title: 'Machine Learning with Python',
      issuer: 'FreeCodeCamp',
      issueDate: 'January 2023',
      verificationUrl: 'https://freecodecamp.org/certification/luisfabib/machine-learning-with-python-v7',
      skills: ['PyTorch', 'TensorFlow', 'SciKit-Learn', 'Pandas'],
      description: 'Developer certification representing approximately 300 hours of coursework and projects in machine learning using Python.',
      category: 'Machine Learning',
      logo: 'images/freecodecamp_logo.svg',
    },
    {
      title: 'Relational Databases',
      issuer: 'FreeCodeCamp',
      issueDate: 'February 2023',
      verificationUrl: 'https://freecodecamp.org/certification/luisfabib/relational-database-v8',
      skills: ['SQL', 'PostgreSQL', 'Database Design', 'Query Optimization'],
      description: 'Developer certification representing approximately 300 hours of coursework and projects in relational database management.',
      category: 'Databases',
      logo: 'images/freecodecamp_logo.svg',
    },
    {
      title: 'Responsive Web Design',
      issuer: 'FreeCodeCamp',
      issueDate: 'February 2023',
      verificationUrl: 'https://freecodecamp.org/certification/luisfabib/responsive-web-design',
      skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      description: 'Developer certification representing approximately 300 hours of coursework and projects in responsive web design.',
      category: 'Frontend Development',
      logo: 'images/freecodecamp_logo.svg',
    },
    {
      title: 'Frontend Development Libraries',
      issuer: 'FreeCodeCamp',
      issueDate: 'March 2023',
      verificationUrl: 'https://freecodecamp.org/certification/luisfabib/frontend-development-libraries',
      skills: ['React', 'Vue.js', 'Angular', 'Bootstrap'],
      description: 'Developer certification representing approximately 300 hours of coursework and projects in frontend development libraries.',
      category: 'Frontend Development',
      logo: 'images/freecodecamp_logo.svg',
    },
    {
      title: 'Data Visualization',
      issuer: 'FreeCodeCamp',
      issueDate: 'March 2023',
      verificationUrl: 'https://freecodecamp.org/certification/luisfabib/data-visualization',
      skills: ['D3.js', 'Chart.js', 'Data Analysis', 'Data Storytelling'],
      description: 'Developer certification representing approximately 300 hours of coursework and projects in data visualization.',
      category: 'Frontend Development',
      logo: 'images/freecodecamp_logo.svg',
    },
    {
      title: 'Legacy JavaScript Algorithms and Data Structures',
      issuer: 'FreeCodeCamp',
      issueDate: 'March 2023',
      verificationUrl: 'https://freecodecamp.org/certification/luisfabib/legacy-javascript-algorithms-and-data-structures',
      skills: ['JavaScript', 'Algorithms', 'Data Structures'],
      description: 'Developer certification representing approximately 300 hours of coursework and projects in legacy JavaScript algorithms and data structures.',
      category: 'Frontend Development',
      logo: 'images/freecodecamp_logo.svg',
    },
    {
      title: 'Project management for research',
      issuer: 'ETH Zurich',
      issueDate: 'March 2021',
      skills: ['Project Management', 'Research Methods', 'Team Collaboration'],
      description: 'Certification representing a three-day course on project management tailored for research environments.',
      category: 'Project Management',
      logo: 'images/eth-logo.png',
    },
  ];