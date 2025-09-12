
export interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  startYear: number;
  endYear: number | 'Present';
  gpa?: string;
  thesis?: string;
  advisor?: string;
  thesisThumbnail?: string;
  thesisUrl?: string;
  courses: string[];
  logo?: string;
}

export const education: Education[] = [
    {
      degree: 'Doctor of Science ETH',
      field: 'Chemistry',
      institution: 'ETH Zurich',
      location: 'Zurich, Switzerland',
      startYear: 2018,
      endYear: 2022,
      thesis: 'Advanced Data Analysis and Modeling in Dipolar EPR Spectroscopy',
      advisor: 'Prof. Dr. Gunnar Jeschke & Prof. Dr. Stefan Stoll',
      thesisThumbnail: 'images/doctoral-thesis-thumbnail.png',
      thesisUrl: 'https://www.research-collection.ethz.ch/entities/publication/24f824b8-28ea-46d0-83e5-5d6d71f66d63',
      courses: [
        'Research Software Engineering',
        'Electron Paramagnetic Resonance',
        'Spectroscopy',
        'Quantum Mechanics',
        'Theoretical Spin Dynamics',
        'Electrical Engineering',
        'Theoretical Statistical Analysis',
      ],
      logo: 'images/eth-logo.png'
    },
    {
      degree: 'Master of Science ETH',
      field: 'Chemistry',
      institution: 'ETH Zurich',
      location: 'Zurich, Switzerland',
      startYear: 2016,
      endYear: 2018,
      gpa: '5.59/6.0',
      thesis: 'Optimization of the Triple Electron Resonance Experiment (TRIER)',
      advisor: 'Prof. Dr. Gunnar Jeschke',
      thesisThumbnail: 'images/ms-thesis-thumbnail.png',
      courses: [
        'Advanced Magnetic Resonance',
        'Spectroscopy',
        'Advanced Quantum Chemistry',
        'Statistical Thermodynamics',
        'Funcational Innorganics',
        'Advanced Strategies in Synthesis',
        'Meta-Science'
      ],
      logo: 'images/eth-logo.png'
    },
    {
      degree: 'Bachelor of Science ETH',
      field: 'Chemistry',
      institution: 'ETH Zurich',
      location: 'Zurich, Switzerland',
      startYear: 2013,
      endYear: 2016,
      gpa: '4.47/6.0',
      courses: [
        'Organic Chemistry',
        'Inorganic Chemistry',
        'Physical Chemistry',
        'Mathematics',
        'Physics',
        'Informatics',
        'Biology',
      ],
      logo: 'images/eth-logo.png'
    }
  ];