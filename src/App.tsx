// src/App.tsx
import CONFIG from './config';
import './styles.css';

export default function App() {
  const name = CONFIG.github.username || 'Your Name';
  const skills = CONFIG.skills || [];
  const social = CONFIG.social || {};
  const certs = (CONFIG as any).certifications || [];

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <img className="avatar" src="https://avatars.githubusercontent.com/u/9919?s=200&v=4" alt="avatar" />
        <div>
          <h1 className="title">{name}</h1>
          <p className="subtitle">Developer • Portfolio</p>
          <div className="actions">
            <a className="btn primary" href={`https://github.com/${name}`} target="_blank" rel="noreferrer">GitHub</a>
            {social.email && <a className="btn" href={`mailto:${social.email}`}>Email</a>}
          </div>
        </div>
      </header>

      <hr className="sep" />

      {/* Skills */}
      {skills.length > 0 && (
        <section className="section">
          <h2>Skills</h2>
          <div className="tags">
            {skills.map((s) => <span key={s} className="tag">{s}</span>)}
          </div>
        </section>
      )}

      {/* ✅ Certifications (자격사항) */}
      {certs.length > 0 && (
        <section className="section">
          <h2>Certifications</h2>
          <div className="card-grid">
            {certs.map((c: any, i: number) => (
              <article key={i} className="card">
                <h3 style={{margin:'0 0 6px'}}>{c.name}</h3>
                <p className="muted" style={{margin:'0 0 8px'}}>
                  {c.issuer}{c.date ? ` • ${c.date}` : ''}
                </p>
                {c.id && <p className="muted" style={{margin:'0 0 10px'}}>ID: {c.id}</p>}
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
