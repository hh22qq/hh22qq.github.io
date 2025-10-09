// src/App.tsx
import CONFIG from './config';
import './styles.css';

type ExtProj = { title: string; description: string; imageUrl?: string; link: string };

export default function App() {
  const gh = CONFIG.github;
  const social = CONFIG.social || {};
  const skills: string[] = CONFIG.skills || [];
  const external: ExtProj[] = CONFIG.projects?.external?.projects || [];

  const name = gh?.username ?? 'Your Name';

  return (
    <div className="container">
      {/* Hero */}
      <section className="hero">
        <img className="avatar" src="https://avatars.githubusercontent.com/u/9919?s=200&v=4" alt="avatar" />
        <div>
          <h1>{name}</h1>
          <div className="muted">Frontend • React • Vite • GitHub Pages</div>
          <div style={{marginTop:12, display:'flex', gap:10, flexWrap:'wrap'}}>
            <a className="button primary" href={`https://github.com/${name}`} target="_blank" rel="noreferrer">GitHub</a>
            {social.linkedin && <a className="button" href={`https://www.linkedin.com/in/${social.linkedin}`} target="_blank" rel="noreferrer">LinkedIn</a>}
            {social.website && <a className="button" href={social.website} target="_blank" rel="noreferrer">Website</a>}
            {social.email && <a className="button" href={`mailto:${social.email}`}>Email</a>}
          </div>
        </div>
      </section>

      {/* Skills */}
      {skills.length > 0 && (
        <section className="section">
          <h2>Skills</h2>
          <div>
            {skills.map((s) => <span key={s} className="tag">{s}</span>)}
          </div>
        </section>
      )}

      {/* Projects (External) */}
      {external.length > 0 && (
        <section className="section">
          <h2>Projects</h2>
          <div className="grid grid-3">
            {external.map((p) => (
              <article key={p.title} className="card">
                <h3 style={{margin:'0 0 8px'}}>{p.title}</h3>
                <p className="muted" style={{marginTop:0}}>{p.description}</p>
                <a className="link" href={p.link} target="_blank" rel="noreferrer">Visit →</a>
              </article>
            ))}
          </div>
        </section>
      )}

      <div className="footer">Made with Vite • Deployed on GitHub Pages</div>
    </div>
  );
}
