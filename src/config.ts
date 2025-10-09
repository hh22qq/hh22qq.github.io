const CONFIG = {
  // user site라 base는 '/'지만, App에서는 사용하지 않아요.
  base: '/',

  github: { username: 'hh22qq', sortBy: 'stars', limit: 8 },

  social: {
    linkedin: '',
    website: '',
    email: 'you@example.com', // 필요시 수정
  },

  skills: ['TypeScript', 'React', 'Node.js', 'Git'],

  projects: {
    external: {
      header: 'My Projects',
      projects: [
        { title: 'Portfolio Site', description: 'Vite + GitHub Pages', link: 'https://hh22qq.github.io/' },
        { title: 'GitHub Repo', description: 'Site source code', link: 'https://github.com/hh22qq/hh22qq.github.io' },
      ],
    },
  },
};

export default CONFIG;
