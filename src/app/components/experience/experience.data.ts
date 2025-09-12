export interface Experience {
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  duration: string;
  employmentType: 'Full-time' | 'Part-time' | 'Contract' | 'Internship' | 'Freelance';
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  companyLogo?: string;
  companyWebsite?: string;
  teamSize?: string;
  reportingTo?: string;
}

export const experience: Experience[] = [
    {
      position: 'Biomedical Software Engineer',
      company: 'University Hospital Zurich',
      location: 'Zurich, Switzerland',
      startDate: 'April 2023',
      endDate: 'Present',
      duration: 'Ongoing',
      employmentType: 'Full-time',
      description: 'Design and development of an open-source data platform for precision oncology research. Promotion and piloting of interoperability standards within the hospital ecosystem.',
      responsibilities: [
        'Develop and maintain a robust data platform for managing and analyzing biomedical data',
        'Support infrastructure and data needs for the first clinical trial data collaboration between a hospital and a pharmaceutical company in Switzerland',
        'Proof-of-concept implementations of interoperability standards (FHIR, OpenAPI, etc.) within the hospital ecosystem',
        'Design and support the implementation of APIs for data exchange of genomics and clinical data',
      ],
      achievements: [
        'Developed and open-sourced Onconova, a web-based data platform for precision oncology research, enabling efficient data management and analysis.',
        'Successfully completed the Precision Oncology Program (POP) study, facilitating data collaboration between University Hospital Zurich and a leading pharmaceutical company.',
        'Piloted the implementation of interoperability standards and supported the deployment of APIs for seamless data exchange within the hospital ecosystem.',
      ],
      technologies: [
        'Python',
        'Typescript',
        'SQL',
        'OpenAPI',
        'FHIR',
        'Docker',
        'Kubernetes',        
        'Django',
        'Angular',
        'PostgreSQL',
      ],
      companyLogo: 'images/usz-logo.png',
      companyWebsite: 'https://www.usz.ch/',
    },
    {
      position: 'Physical Chemistry Researcher',
      company: 'ETH Zurich',
      location: 'Zurich, Switzerland',
      startDate: 'September 2018',
      endDate: 'December 2022',
      duration: '4 years',
      employmentType: 'Full-time',
      description: 'Conductred cutting-edge research in physical chemistry, focusing on the development of advanced data analysis methods and theoretical models for spectroscopic data interpretation.',
      responsibilities: [
        'Managing own research, from project planning and research strategy to data analysis and manuscript preparation',
        'Present research at international conferences and workshops',
        'Maintain network and code infrastructure for research group',
        'Teach advanced courses in physical chemistry and signal processing',
        'Visit and collaborate with researchers at the University of Washington, Seattle, USA.'
      ],
      achievements: [
        'Developed Deerlab, a state-of-the-art, open-source software package in Python for rigorous and robust statistical analysis of arbitrary data models.',
        'Headed organization and instruction of a successful international workshop in Seattle, attracting 100+ attendees and featuring multiple instructors.',
        'Developed other software with graphical user interfaces for signal processing and analysis of spectroscopic signals.',
        'Earned doctorate with a data science dissertation "that met the highest standards of scholarship", as noted by Prof. Dr. Jeschke.',
      ],
      technologies: [
        'Python',
        'MATLAB',
        'C++',
        'NumPy',
        'SciPy',
        'Jupyter',
        'Git',
        'LaTeX',

      ],
      companyLogo: 'images/eth-logo.png',
      companyWebsite: 'https://ethz.ch',
    },
  ];