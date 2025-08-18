# Software Developer Portfolio

A modern, responsive portfolio website built with Angular v19 and PrimeNG components.

## Features

- **Modern Design**: Clean, professional design with dark theme
- **Responsive Layout**: Works perfectly on all devices and screen sizes
- **Smooth Animations**: CSS animations and scroll-triggered effects
- **Component-based Architecture**: Modular Angular components for easy maintenance
- **PrimeNG Integration**: Beautiful UI components from PrimeNG library
- **Contact Form**: Working contact form with validation
- **Project Showcase**: Grid layout for displaying projects
- **Skills Section**: Visual representation of technical skills
- **Navigation**: Smooth scrolling navigation with fixed header

## Technologies Used

- **Angular 19**: Latest version of Angular framework
- **PrimeNG**: Premium UI component library
- **TypeScript**: Type-safe JavaScript
- **SCSS**: Enhanced CSS with variables and mixins
- **Angular SSR**: Server-side rendering enabled
- **Responsive Design**: Mobile-first approach

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/           # Navigation header
│   │   ├── hero/             # Hero section with introduction
│   │   ├── about/            # About me section
│   │   ├── skills/           # Skills and technologies
│   │   ├── projects/         # Featured projects
│   │   └── contact/          # Contact form and info
│   ├── app.component.*       # Root component
│   └── app.config.ts         # App configuration
├── styles.scss               # Global styles and PrimeNG theme
└── index.html               # Main HTML file
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd portfolio-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:4200`

### Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Customization

### Personal Information

Update the following files with your personal information:

1. **Hero Section** (`src/app/components/hero/hero.component.html`):
   - Change name, title, and description

2. **About Section** (`src/app/components/about/about.component.html`):
   - Update biography and statistics

3. **Skills Section** (`src/app/components/skills/skills.component.ts`):
   - Modify skill categories and proficiency levels

4. **Projects Section** (`src/app/components/projects/projects.component.ts`):
   - Add your own projects with descriptions and links

5. **Contact Section** (`src/app/components/contact/contact.component.ts`):
   - Update contact information and social links

### Styling

- **Theme**: Modify PrimeNG theme in `src/styles.scss`
- **Colors**: Update CSS custom properties for consistent theming
- **Layout**: Adjust component-specific styles in respective `.scss` files

### Adding New Sections

1. Generate a new component:
   ```bash
   ng generate component components/new-section
   ```

2. Add the component to `app.component.html`
3. Import the component in `app.component.ts`

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run watch` - Build and watch for changes
- `npm test` - Run unit tests
- `npm run lint` - Run linting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or suggestions, please reach out through the contact form on the website or via email.

---

**Note**: Remember to update all placeholder content with your actual information before deploying to production.
