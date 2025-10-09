const CONFIG = {
  base: '/',
  github: { username: 'hh22qq', sortBy: 'stars', limit: 8 },
  projects: { github: { display: true, header: 'GitHub Projects', mode: 'automatic',
    automatic: { sortBy: 'stars', limit: 8, exclude: { forks: false, projects: [] } },
    manual: { projects: ['arifszn/gitprofile'] } },
    external: { header: 'My Projects', projects: [] } },
  seo: { title: 'Portfolio of hh22qq', description: 'Personal site powered by GitProfile', imageURL: '' },
  social: { linkedin: '', x: '', website: '', email: '' },
  resume: { fileUrl: '' },
  skills: ['TypeScript','React','Node.js','Git'],
  experiences: [], certifications: [], educations: [], publications: [],
  blog: { source: 'dev', username: '', limit: 2 },
  googleAnalytics: { id: '' }, hotjar: { id: '', snippetVersion: 6 },
  themeConfig: { defaultTheme: 'lofi', disableSwitch: false, respectPrefersColorScheme: false, displayAvatarRing: true,
    themes: ['light','dark','lofi','nord','sunset','business','dracula'] },
  footer: `Made with <a class="text-primary" href="https://github.com/arifszn/gitprofile" target="_blank" rel="noreferrer">GitProfile</a> and ❤️`,
  enablePWA: false, // 캐시 꼬임 방지
};
export default CONFIG;
