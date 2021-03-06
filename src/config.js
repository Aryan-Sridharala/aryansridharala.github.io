module.exports = {
  siteTitle: 'Aryan Sridharala | CSE student at Bennett University',
  siteDescription:
    'Aryan Sridharala is a Software Engineer at Amdocs, who loves learning new things and helping tech beginners.',
  siteKeywords:
    'Chandrika Deb, Chandrika, Deb, chandrikadeb7, software engineer, face mask, face mask detection, web developer, javascript, girlscript, jamshedpur, amdocs, bit, mesra, deoghar',
  siteUrl: 'https://aryansridharala.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Aryan Sridharala',
  location: 'Visakhapatnam, India',
  email: 'sridharala.aryan@gmail.com',
  github: 'https://github.com/Aryan-Sridharala',
  twitterHandle: '@Aryanrocky1',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/Aryan-Sridharala',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/aryan-sridharala/',
    },
    
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/_aryaaaaan__s_/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/Aryanrocky1',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
