// src/App.tsx
import CONFIG from './config';
import './styles.css';

export default function App() {
  const name = CONFIG.github?.username || 'Your Name';
  const social = CONFIG.social || {};
  const skills: string[] = CONFIG.skills || [];
  const projects = CONFIG.projects?.external?.projects || [];
  const experiences: any[] = (CONFIG as any).experiences || [];
  const certs: any[] = (CONFIG as any).certifications || [];// src/App.tsx 상단의 다른 const들 옆에 추가
  const timeline: any[] = (CONFIG as any).timeline || [];
  
  

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="avatar-wrap">
          <img className="avatar" src="https://avatars.githubusercontent.com/u/9919?s=200&v=4" alt="avatar" />
        </div>
        <div>
          <h1 className="title">{name}</h1>
          <p className="subtitle">Developer • Portfolio</p>
          <div className="actions">
            <a className="btn primary" href={`https://github.com/${name}`} target="_blank" rel="noreferrer">GitHub</a>
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

      {/* Projects (있으면 표시) */}
      {projects.length > 0 && (
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

      {/* ✅ Experience */}
      {experiences.length > 0 && (
        <section className="section">
          <h2>Experience</h2>
          <div className="grid">
            {experiences.map((e, i) => (
              <article className="card" key={i}>
                <h3 style={{marginBottom:6}}>{e.position} @ {e.company}</h3>
                <p className="meta">
                  {e.from} – {e.to}{e.url ? ` • ${e.url}` : ''}
                </p>
                {e.summary && <p style={{marginTop:8}}>{e.summary}</p>}
                {Array.isArray(e.stack) && e.stack.length > 0 && (
                  <div className="tags" style={{marginTop:12}}>
                    {e.stack.map((t: string) => <span className="tag" key={t}>{t}</span>)}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      )}

      {/* ✅ Certifications */}
      {certs.length > 0 && (
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
      )}{/* Timeline */}
      {timeline.length > 0 && (
        <section className="section">
          <h2>Timeline</h2>
          <div className="card">
            <div className="timeline">
              {timeline.map((t, i) => (
                <div className="ti" key={i}>
                  <h3 style={{margin:'0 0 4px'}}>{t.title}</h3>
                  <p className="meta">{t.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      
      

      <footer className="footer">
        © {new Date().getFullYear()} {name}. Powered by Vite • GitHub Pages
      </footer>
    </div>
  );
}
