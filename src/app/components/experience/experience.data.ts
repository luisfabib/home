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
        'Successfully executed the Precision Oncology Program (POP) study, facilitating data collaboration between University Hospital Zurich and a leading pharmaceutical company.',
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
      description: 'Conducted cutting-edge research in physical chemistry, focusing on the development of advanced data analysis methods and theoretical models for spectroscopic data interpretation.',
      responsibilities: [
        'Managing own research, from project planning and research strategy to data analysis and manuscript preparation',
        'Presenting research at international conferences and workshops',
        'Maintaining network and code infrastructure for research group',
        'Teaching advanced courses in physical chemistry and signal processing',
      ],
      achievements: [
        'Developed Deerlab, a state-of-the-art, open-source software package in Python for rigorous and robust statistical analysis of arbitrary data models.',
        'Earned doctorate with a data science dissertation "that met the highest standards of scholarship", as noted by Prof. Dr. Jeschke.',
        'Headed organization and instruction of a successful international workshop in Seattle, attracting 100+ attendees and featuring multiple instructors.',
        'Developed other software with graphical user interfaces for signal processing and analysis of spectroscopic signals.',
        'Published multiple research articles in peer-reviewed journals as first and corresponding author.',
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
    {
      position: 'Visiting Scholar',
      company: 'University of Washington',
      location: 'Seattle, Washington, USA',
      startDate: 'June 2019',
      endDate: 'September 2019',
      duration: '4 months',
      employmentType: 'Full-time',
      description: 'Worked on the initial development of Deerlab, a comprehensive scientific software package for dipolar EPR spectroscopy data analysis, under the supervision of Prof. Dr. Stoll.',
      responsibilities: [
        'Designing and developing Deerlab',
        'Collaborating with Prof. Dr. Stoll and his research group on software features and validation',
        'Presenting research progress and findings to the research group',
      ],
      achievements: [
        'Fully developed the first version of Deerlab, which has since become a widely used tool in the EPR spectroscopy community.',
      ],
      technologies: [
        'MATLAB',
      ],
      companyLogo: 'images/uw-logo.png',
      companyWebsite: 'https://https://www.washington.edu/',
    },
    {
      position: 'Undergrad Teaching Assistant',
      company: 'ETH Zurich',
      location: 'Zurich, Switzerland',
      startDate: 'September 2016',
      endDate: 'June 2018',
      duration: '2 years',
      employmentType: 'Part-time',
      description: 'Assisted in teaching undergraduate courses in physical chemistry, including leading laboratory sessions, grading assignments, and providing support to students.',
      responsibilities: [
        'Assisting in the development of course materials and resources',
        'Holding weekly tutorial sessions to reinforce lecture content',
        'Leading laboratory sessions and providing hands-on support to students',
        'Grading assignments and providing constructive feedback',
        'Holding office hours for additional student support',
      ],
      achievements: [
        'Modernized the signal processing course by introducing Python-based tools and resources, enhancing student engagement and learning outcomes.',
      ],
      technologies: [
        'Python',
        'R',
        'C++',
        'LaTeX',

      ],
      companyLogo: 'images/eth-logo.png',
      companyWebsite: 'https://ethz.ch',
    },
    {
      position: 'Undergrad Research Assistant',
      company: 'ETH Zurich',
      location: 'Zurich, Switzerland',
      startDate: 'February 2016',
      endDate: 'September 2018',
      duration: '2 years',
      employmentType: 'Part-time',
      description: 'Conducted research in physical chemistry, focusing on theoretical modeling and simulations of magnetic resonance pulse sequences.',
      responsibilities: [
        'Researching independently on theoretical modeling and simulations of magnetic resonance pulse sequences',
        'Assisting in manuscript preparation and data analysis',
        'Collaborating with other researchers in the group on various projects',
        'Presenting research findings at group meetings and seminars',
      ],
      achievements: [
        'Published research findings in two peer-reviewed journals as co-author.',
      ],
      technologies: [
        'MATLAB',
        'LaTeX',
      ],
      companyLogo: 'images/eth-logo.png',
      companyWebsite: 'https://ethz.ch',
    },
  ];