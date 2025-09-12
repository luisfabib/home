export const professionalSkills = [
    { 
      name: 'Problem-solving', 
      rating: 5, 
      annotation: 'Over 8 years tackling complex scientific and technical challenges',
      icon: 'pi pi-lightbulb'
    },
    { 
      name: 'Technical writing', 
      rating: 4, 
      annotation: 'Published multiple peer-reviewed articles and technical documentations',
      icon: 'pi pi-file-edit'
    },
    { 
      name: 'Teamwork', 
      rating: 4, 
      annotation: 'Collaborated in multidisciplinary teams to achieve shared goals',
      icon: 'pi pi-users'
    },
    { 
      name: 'Training', 
      rating: 5, 
      annotation: 'Imparted over 1,000 hours of advanced university instruction',
      icon: 'pi pi-graduation-cap'
    },
    { 
      name: 'Public communication', 
      rating: 5, 
      annotation: 'Speaker at over 10 international scientific conferences',
      icon: 'pi pi-microphone'
    },
    { 
      name: 'Project management', 
      rating: 3, 
      annotation: 'Over 10 successfully self-managed projects',
      icon: 'pi pi-calendar'
    }
];

export const programmingSkills = [
    { 
        name: 'Python', 
        rating: 5, 
        annotation: 'General-purpose programming',
        frameworks: ['NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'Django', 'FastAPI']
    },
    { 
        name: 'TypeScript', 
        rating: 4, 
        annotation: 'Frontend web development',
        frameworks: ['Angular', 'Node.js', 'RxJS']
    },
    { 
        name: 'HTML/CSS/JS', 
        rating: 4, 
        annotation: 'Frontend web development',
        frameworks: ['HTML', 'SCSS', 'JavaScript']
    },
    { 
        name: 'MATLAB', 
        rating: 5, 
        annotation: 'Scientific computing',
        frameworks: ['Simulink', 'Signal Processing', 'Statistics Toolbox', 'User Interface Design']
    },
    { 
        name: 'SQL', 
        rating: 3, 
        annotation: 'Database queries & optimization',
        frameworks: ['PostgreSQL', 'MySQL', 'SQLite', 'SQLServer']
    },
    { 
        name: 'Docker', 
        rating: 3, 
        annotation: 'Containerization and orchestration',
        frameworks: ['Docker Compose', 'Kubernetes']
    },
    { 
        name: 'R', 
        rating: 2, 
        annotation: 'Statistical analysis',
        frameworks: ['ggplot2', ]
    }
]


export const personalSkills = [
    { name: 'Cultural Intelligence', rating: 5, annotation: 'Aware of diversity in workplaces and society' },
    { name: 'Critical Thinking', rating: 5, annotation: 'Evaluate information or opinions thoroughly to reach accurate and insightful conclusions' },
    { name: 'Curiosity', rating: 5, annotation: 'Aspire to continue learning and growing, both personally and professionally' }
]

export const languageSkills = [
    { name: 'English', rating: 5, annotation: getCEFRAnnotation('C2'), certification: 'C2' },
    { name: 'German', rating: 4, annotation: getCEFRAnnotation('C1'), certification: 'C1' },
    { name: 'French', rating: 2, annotation: getCEFRAnnotation('B2'), certification: 'B2' },
    { name: 'Spanish', rating: 5, annotation: 'Native proficiency', isNative: true },
    { name: 'Catalan', rating: 4, annotation: 'Native proficiency', isNative: true },
]

// Helper method to get automatic annotation based on CEFR level
function getCEFRAnnotation(certification: string): string {
    const cefrAnnotations: { [key: string]: string } = {
        'A1': 'Basic user - Beginner',
        'A2': 'Basic user - Elementary',
        'B1': 'Independent user - Intermediate',
        'B2': 'Independent user - Upper intermediate',
        'C1': 'Proficient user - Advanced',
        'C2': 'Proficient user - Mastery'
    };
    return cefrAnnotations[certification] || 'Certified proficiency';
}