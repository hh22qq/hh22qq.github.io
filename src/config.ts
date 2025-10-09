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
  certifications: [
    {
      name: '공인회계사',
      issuer: '금융감독원',
      date: '2025-09',
    },
    {
      name: 'ADsP',
      issuer: '한국데이터산업진흥원',
      date: '2024-07',
    },
    {
      name: '투자자산운용사',
      issuer: '한국금융투자협회',
      date: '2022-07',
    }
  ],
};

export default CONFIG;
