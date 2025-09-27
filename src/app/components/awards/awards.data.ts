
export interface Award {
  title: string;
  organization: string;
  year: number;
  category: string;
  description: string;
  amount?: string;
  level: 'International' | 'National' | 'Regional' | 'Local' | 'Institutional';
  achievements?: string[];
  image?: string;
  link?: string;
  logo?: string;
}

export const awards: Award[] = [
    {
      title: 'IES Best Paper Award',
      organization: 'International EPR Society',
      year: 2021,
      category: 'Research Excellence',
      description: 'Honored for significant advances and breakthrough developments in the field of Electron Paramagnetic Resonance (EPR) spectroscopy.',
      level: 'International',
      link: 'https://ieprs.org/best-paper-award/',
      logo: 'images/ies-logo.png'
    },
    {
      title: 'SCNAT Chemistry Travel Award',
      organization: 'Swiss Academy of Sciences',
      year: 2022,
      category: 'Research Promise',
      description: 'Awarded for outstanding PhD research and academic excellence in Chemistry in Switzerland.',
      level: 'National',
      logo: 'images/scnat-logo.png'
    },
    {
      title: 'JEOL Student Lecture Competition',
      organization: 'JEOL (UK) Ltd.',
      year: 2022,
      category: 'Academic Excellence',
      description: 'Annual award recognizing the best student lectures at the Royal Society of Chemistry ESR Meeting.',
      level: 'International',
      logo: 'images/jeol-logo.png'
    },
    {
      title: 'IES Poster Award',
      organization: 'International EPR Society',
      year: 2021,
      category: 'Academic Excellence',
      description: 'Recognized for presenting one of the top posters at the 54th Annual International Meeting of the ESR Spectroscopy Group of the Royal Society of Chemistry.',
      level: 'International',
      logo: 'images/ies-logo.png'
    },
    {
      title: 'Springer Prize Winner',
      organization: 'Springer Science + Business Media',
      year: 2019,
      category: 'Academic Excellence',
      description: 'Awarded for presenting an outstanding poster at the 6th Annual Rocky Mountain Conference on Magnetic Resonance.',
      level: 'International',
      logo: 'images/springer-logo.png'
    },
    {
      title: 'IES Poster Award',
      organization: 'International EPR Society',
      year: 2019,
      category: 'Academic Excellence',
      description: 'Recognized for presenting one of the top posters at the 54th Annual International Meeting of the ESR Spectroscopy Group of the Royal Society of Chemistry.',
      level: 'International',
      logo: 'images/ies-logo.png'
    },
  ];
