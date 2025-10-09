// src/App.tsx
import CONFIG from './config';
import './styles.css';

export default function App() {
  const name = CONFIG.github?.username || 'Your Name';
  const social = CONFIG.social || {};
  const skills: string[] = CONFIG.skills || [];
  const projects = CONFIG.projects?.external?.projects || [];
  const certs: any[] = (CONFIG as any).certifications || [];

  const showProjects = projects.length > 0;
  const showCerts = !showProjects && certs.length > 0; // 프로젝트 없으면 자격사항 보여주기

  return (
    <div className="container">
      {/* Header (gitprofile 느낌) */}
      <header className="header">
        <div className="avatar-wrap">
          <img className="avatar" src="https://avatars.githubusercontent.com/u/9919?s=200&v=4" alt="avatar" />
        </div>
        <div>
          <h1 className="title">{name}</h1>
          <p className="subtitle">Developer • Portfolio</p>
          <div className="actions">
            <a className="btn primary" href={`https://github.com/${name}`} target="_blank" rel="noreferrer">GitHub</a>
            {social.linkedin && <a className="btn" href={`https://www.linkedin.com/in/${social.linkedin}`} target="_blank" rel="noreferrer">LinkedIn</a>}
            {social.website && <a className="btn" href={social.website} target="_blank" rel="noreferrer">Website</a>}
            {social.email && <a className="btn ghost" href={`mailto:${social.email}`}>Email</a>}
          </div>
        </div>
      </header>

      <hr className="sep" />

      {/* Skills */}
      {skills.length > 0 && (
        <section className="section">
          <h2>Skills</h2>
          <div className="tags">
            {skills.map((s) => <span className="tag" key={s}>{s}</span>)}
          </div>
        </section>
      )}

      {/* Projects (있으면 우선 표시) */}
      {showProjects && (
        <section className="section">
          <h2>Projects</h2>
          <div className="grid grid-2">
            {projects.map((p: any) => (
              <article className="card" key={p.title}>
                <h3>{p.title}</h3>
                {p.description && <p className="meta">{p.description}</p>}
                <a className="btn" href={p.link} target="_blank" rel="noreferrer">Visit →</a>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Certifications (Projects 없을 때 대체 섹션) */}
      {showCerts && (
        <section className="section">
          <h2>Certifications</h2>
          <div className="grid grid-2">
            {certs.map((c, i) => (
              <article className="card" key={i}>
                <h3>{c.name}</h3>
                <p className="meta">{c.issuer}{c.date ? ` • ${c.date}` : ''}</p>
                {c.id && <p className="meta">ID: {c.id}</p>}
                {c.link && <a className="btn" href={c.link} target="_blank" rel="noreferrer">Verify →</a>}
              </article>
            ))}
          </div>
        </section>
      )}

      <footer className="footer">
        © {new Date().getFullYear()} {name}. Powered by Vite • GitHub Pages
      </footer>
    </div>
  );
}
