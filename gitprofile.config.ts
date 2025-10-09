// gitprofile.config.ts
// 👉 이 파일 전체를 그대로 붙여넣으세요.
// 필요에 맞게 username, social, skills 등만 바꿔도 됩니다.

const CONFIG = {
  // ✅ 배포 경로 (User Site: username.github.io 이면 무조건 '/')
  base: '/',

  // ✅ GitHub 정보 (필수: username)
  github: {
    username: 'hh22qq', // 여기에 본인 GitHub ID
    sortBy: 'stars',     // 'stars' | 'updated'
    limit: 8,            // 보여줄 프로젝트 개수
  },

  // ✅ 프로젝트 섹션 (자동/수동 선택 가능)
  projects: {
    github: {
      display: true,             // GitHub 프로젝트 섹션 표시
      header: 'GitHub Projects', // 섹션 제목
      mode: 'automatic',         // 'automatic' | 'manual'
      automatic: {
        sortBy: 'stars',         // 'stars' | 'updated'
        limit: 8,
        exclude: {
          forks: false,
          projects: [],          // 제외할 레포 목록: ['owner/name']
        },
      },
      manual: {
        // mode: 'manual'일 때만 사용
        projects: ['arifszn/gitprofile', 'arifszn/pandora'],
      },
    },
    external: {
      header: 'My Projects',
      projects: [
        {
          title: 'Project Name',
          description: '간단한 프로젝트 설명을 적어보세요.',
          imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },

  // ✅ SEO 메타
  seo: {
    title: 'Portfolio of hh22qq',
    description: 'Personal site powered by GitProfile',
    imageURL: '',
  },

  // ✅ 소셜 링크
  social: {
    linkedin: '',     // 예: 'your-linkedin-id'
    x: '',            // 트위터(X)
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',      // 예: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // 예: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: '',       // 개인 사이트가 따로 있으면
    phone: '',
    email: '',         // 연락 받을 이메일
  },

  // ✅ 이력서 버튼 (파일 URL 없으면 버튼 숨김)
  resume: {
    fileUrl: '', // 예시: 'https://.../resume.pdf'
  },

  // ✅ 스킬
  skills: [
    'LLMs', 'Python', 'NLP'
  ],

  // ✅ 경력
  experiences: [
    {
      company: '디캠프',
      position: '직접투자팀',
      from: 'July 2022',
      to: 'January 2023',
      companyLink: 'https://dcamp.kr/',
    },
    {
      company: '삼일회계법인',
      position: 'Assurance Los',
      from: 'December 2025 입사예정',
      to: '-',
      companyLink: 'https://www.pwc.com/kr/ko/about-us.html',
    }

  ],

  // ✅ 자격/수료
  certifications: [
    {
      name: 'KICPA',
      body: '한국공인회계사',
      year: '2025',
      link: 'https://www.kicpa.or.kr/',
    },
  ],

  // ✅ 학력
  educations: [
    {
      institution: '성균관대학교',
      degree: '학사',
      from: '2018',
      to: '2025',
    },
  ],

  // ✅ 논문/출판
  publications: [
    {
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'Your Name',
      link: 'https://example.com',
      description: '간단 요약',
    },
  ],

  // ✅ 블로그 (원하면 연결)
  blog: {
    source: 'dev',   // 'medium' | 'dev'
    username: '',    // 계정 ID (비우면 섹션 숨김)
    limit: 2,        // 최대 10
  },

  // ✅ 분석/트래킹
  googleAnalytics: { id: '' }, // UA-XXXX or G-XXXX
  hotjar: { id: '', snippetVersion: 6 },

  // ✅ 테마 설정
  themeConfig: {
    defaultTheme: 'lofi',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light','dark','cupcake','bumblebee','emerald','corporate','synthwave','retro','cyberpunk','valentine','halloween','garden','forest','aqua','lofi','pastel','fantasy','wireframe','black','luxury','dracula','cmyk','autumn','business','acid','lemonade','night','coffee','winter','dim','nord','sunset','caramellatte','abyss','silk','procyon',
    ],
  },

  // ✅ 푸터
  footer: `Made with <a class="text-primary" href="https://github.com/arifszn/gitprofile" target="_blank" rel="noreferrer">GitProfile</a> and ❤️`,

  // ✅ PWA 사용 여부
  enablePWA: true,
};

export default CONFIG;
