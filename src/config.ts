// src/config.ts
const CONFIG = {
  github: { username: 'hh22qq', sortBy: 'stars', limit: 8 },

  social: { linkedin: '', website: 'https://hh22qq.github.io', email: 'you@example.com' },

  skills: ['TypeScript','React','Node.js','Git'],

  // Projects: 비워두면 숨겨짐, 넣으면 보여짐
  projects: {
    external: {
      projects: [
        { title: 'Portfolio Site', description: 'Vite + GitHub Pages', link: 'https://hh22qq.github.io/' },
        { title: 'GitHub Repo', description: 'Site source code', link: 'https://github.com/hh22qq/hh22qq.github.io' },
      ],
    },
  },

  // ✅ 경력(타임라인 순)
  experiences: [
    {
      company: '디캠프',
      position: '직접투자팀',
      from: '2022-07',
      to: '2023-01',
      url: '',
      summary: 'Seed, Series A 단계 스타트업 투자 검토 리서치 지원'
    },
    {
      company: '삼일회계법인',
      position: 'Assurance Los',
      from: '2025-12 예정',
      to: '-',
      url: '',
      summary: '법정 감사 수행 및 디지털 툴 관련 용역 수행 예정'
    },
  ],

  // ✅ 자격
  certifications: [
    { name: 'KICPA', issuer: '금융감독원', date: '2025-09' },
    { name: 'ADsP', issuer: '한국데이터산업진흥원', date: '2024-09'
    },{ name: '투자자산운용사', issuer: '한국금융투자협회', date: '2022-09'
    }
  ],
};
export default CONFIG;
