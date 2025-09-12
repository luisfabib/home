
interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  link?: string;
}

export const contactInfo: ContactInfo[] = [
    {
      icon: 'pi pi-envelope',
      label: 'Email',
      value: 'mail@luisfabregas.com',
      link: 'mailto:mail@luisfabregas.com'
    },
    {
      icon: 'pi pi-map-marker',
      label: 'Location',
      value: 'Zurich, Switzerland'
    },
    {
      icon: 'pi pi-linkedin',
      label: 'LinkedIn',
      value: 'linkedin.com/in/luisfabib',
      link: 'https://linkedin.com/in/luisfabib'
    },
    {
      icon: 'pi pi-github',
      label: 'GitHub',
      value: 'github.com/luisfabib',
      link: 'https://github.com/luisfabib'
    }
  ];