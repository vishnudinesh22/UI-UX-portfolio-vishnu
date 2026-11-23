import { useEffect, useState } from "react";
import { profile, projects, designTools, experience, skills, education } from "./content.js";
import Character from "./Character.jsx";

const isTodo = (s) => typeof s === "string" && s.startsWith("TODO");
const isUrl = (s) => /^https?:\/\//.test(s);
const real = projects.filter((p) => !p.locked);

function useRoute() {
  const get = () => window.location.hash.replace(/^#/, "") || "/";
  const [r, setR] = useState(get);
  useEffect(() => {
    const f = () => setR(get());
    addEventListener("hashchange", f);
    return () => removeEventListener("hashchange", f);
  }, []);
  return r;
}

function Xp() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const f = () => {
      const h = document.documentElement.scrollHeight - innerHeight;
      setP(h > 0 ? Math.min(100, Math.round((scrollY / h) * 100)) : 0);
    };
    f();
    addEventListener("scroll", f, { passive: true });
    addEventListener("resize", f);
    return () => { removeEventListener("scroll", f); removeEventListener("resize", f); };
  }, []);
  return (
    <div className="xp" role="progressbar" aria-valuenow={p} aria-label="Page progress">
      <span>XP {p}%</span>
      <div className="xp-bar"><div style={{ width: p + "%" }} /></div>
    </div>
  );
}

function Nav({ route }) {
  return (
    <nav className="top" aria-label="Main">
      <a className="btn" href={profile.gamePortfolioUrl}>← Back to the game</a>
      <a className={"btn" + (route === "/" ? " on" : "")} href="#/">Home</a>
      <a className={"btn" + (route === "/projects" ? " on" : "")} href="#/projects">Projects</a>
      <a className={"btn" + (route === "/contact" ? " on" : "")} href="#/contact">Contact</a>
    </nav>
  );
}

function Hero() {
  return (
    <section className="page home" id="home">
      <div className="hero">
        <div className="hero-text">
          <p className="kicker">UI/UX PORTFOLIO</p>
          <h1>{profile.name}</h1>
          <p className="role">{profile.title}</p>
          <p className="intro">{profile.intro}</p>
          <div className="row">
            <a className="btn primary" href="#/projects">Start the game ↓</a>
            <a className="btn" href={profile.industrialUrl} target="_blank" rel="noopener noreferrer">Industrial Design portfolio ↗</a>
          </div>
        </div>
        <div className="hero-art">
          <p className="bubble">Hi, I'm Vishnu! Pick a level.</p>
          <Character />
          <div className="platform" aria-hidden="true" />
          <div className="idcard">
            <img src={profile.portraitUrl} alt="Photo of Vishnu Dinesh" width="72" height="86" />
            <span>PLAYER 1</span>
          </div>
        </div>
      </div>

      <div className="details">
        <section className="dcard" aria-label="Education">
          <h3>Education</h3>
          <p className="edu"><b>{education.degree}</b></p>
          <p>{education.school}</p>
          <p className="when">{education.cgpa}</p>
        </section>
        <section className="dcard dwide" aria-label="Experience">
          <h3>Experience</h3>
          <ul className="exp exp-grid">
            {experience.map((e) => (
              <li key={e.org}>
                <b>{e.org}</b>
                <span>{e.role}</span>
                <em>{e.when}</em>
                <small>{e.points.join(" · ")}</small>
              </li>
            ))}
          </ul>
        </section>
        <section className="dcard" aria-label="Interests">
          <h3>Interests &amp; focus areas</h3>
          <ul className="chips">{skills.map((s) => <li key={s}>{s}</li>)}</ul>
        </section>
      </div>
    </section>
  );
}

function Contact() {
  const contact = [
    ["Email", profile.email, isUrl(profile.email) ? profile.email : `mailto:${profile.email}`],
    ["LinkedIn", profile.linkedin, profile.linkedin],
    ["Behance / Figma", profile.behance, profile.behance],
  ];
  return (
    <section className="page contact-page" id="contact">
      <h2>Final level: say hello</h2>
      <p className="lead">This doesn't have to end here. Let's discuss the work.</p>
      <ul className="contact">
        {contact.map(([label, val, href]) => (
          <li key={label}>
            <span>{label}</span>
            {isTodo(val) ? <em className="todo">{val}</em> : <a href={href} target="_blank" rel="noopener noreferrer">{val.replace(/^https?:\/\/(www\.)?/, "")}</a>}
          </li>
        ))}
      </ul>
      <div className="row">
        <a className="btn primary" href={`mailto:${profile.email}`}>Email me ↗</a>
        <a className="btn" href="#/">Back to top ↑</a>
      </div>
    </section>
  );
}

function Orbit() {
  const n = real.length;
  return (
    <div className="orbit">
      <div className="center"><Character size={6} /></div>
      <div className="ring tools-ring" style={{ "--d": "36s" }}>
        {designTools.map((t, i) => (
          <div className="node" key={t.name} style={{ "--a": `${(360 / designTools.length) * i + 20}deg`, "--r": "var(--rt)" }}>
            <span className="node-in" title={t.name}>
              {t.img ? <img className="tnode" src={t.img} alt={t.name} width="36" height="36" loading="lazy" /> : <span className="tnode txt">{t.name}</span>}
            </span>
          </div>
        ))}
      </div>
      <div className="ring" style={{ "--d": "36s" }}>
        {real.map((p, i) => (
          <div className="node" key={p.id} style={{ "--a": `${(360 / n) * i + 60}deg`, "--r": "var(--rp)" }}>
            <span className="node-in">
              <a className="pnode" href={`#/${p.id}`}>
                <small>LEVEL {p.level}</small>
                <b>{p.name}</b>
              </a>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section className="page projects" id="projects">
      <h2>Choose a level</h2>
      <p className="hint">Hover to pause the orbit, then open a level.</p>
      <div className="stage">
        <Orbit />
      </div>
      <ul className="level-links" aria-label="All levels">
        {real.map((p) => (
          <li key={p.id}><a className="btn" href={`#/${p.id}`}>Level {p.level}: {p.name}</a></li>
        ))}
      </ul>
    </section>
  );
}

function CaseStudy({ p }) {
  const i = real.findIndex((x) => x.id === p.id);
  const prev = real[(i - 1 + real.length) % real.length];
  const next = real[(i + 1) % real.length];
  const secs = [
    ["overview", "Overview"],
    ...(p.facts.length ? [["details", "Details"]] : []),
    ["next", "Next steps"],
  ];
  const go = (id) => {
    const el = document.getElementById("cs-" + id);
    if (el) el.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  };
  return (
    <main className="case">
      <div className="cs-bar">
        <a className="btn" href="#/projects">← All levels</a>
        <div className="cs-tabs" role="tablist" aria-label="Case study sections">
          {secs.map(([id, label]) => (
            <button key={id} className="btn" onClick={() => go(id)}>{label}</button>
          ))}
        </div>
      </div>

      <section className="cs-sec" id="cs-overview">
        <p className="eyebrow">UI/UX DESIGN · LEVEL {p.level}</p>
        <h1>{p.name}</h1>
        <p className={"tag" + (isTodo(p.tag) ? " todo" : "")}>{p.tag}</p>
        <p className="lead">{p.summary}</p>
        {p.meta.length > 0 && (
          <ul className="meta">
            {p.meta.map(([k, v]) => <li key={k}><b>{k}</b> <span>{v}</span></li>)}
          </ul>
        )}
        {p.tools.length > 0 && (
          <ul className="tools" aria-label="Tools used">
            {p.tools.map((tl) => (
              <li key={tl.name} className="tool">
                {tl.img && <img src={tl.img} alt="" width="28" height="28" loading="lazy" />}
                <span>{tl.name}</span>
              </li>
            ))}
          </ul>
        )}
      </section>

      {p.facts.length > 0 && (
        <section className="cs-sec" id="cs-details">
          <p className="eyebrow">{p.name.toUpperCase()} / DETAILS</p>
          <dl className="facts">
            {p.facts.map(([k, v]) => (
              <div key={k} className="fact"><dt>{k}</dt><dd>{v}</dd></div>
            ))}
          </dl>
        </section>
      )}

      <section className="cs-sec" id="cs-next">
        <p className="eyebrow">{p.name.toUpperCase()} / NEXT STEPS</p>
        {p.todo.length > 0 && (
          <div className="todo-box">
            <h2>Still to add</h2>
            <ul className="todo-list">{p.todo.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
        )}
        {p.link && isUrl(p.link) && (
          <a className="btn primary" href={p.link} target="_blank" rel="noopener noreferrer">{p.linkLabel || "View prototype ↗"}</a>
        )}
        <div className="pager">
          <a className="btn" href={`#/${prev.id}`}>← {prev.name}</a>
          <a className="btn" href="#/projects">All levels</a>
          <a className="btn" href={`#/${next.id}`}>{next.name} →</a>
        </div>
      </section>
    </main>
  );
}

export default function App() {
  const route = useRoute();
  const project = real.find((p) => "/" + p.id === route);

  useEffect(() => {
    if (project) { window.scrollTo(0, 0); return; }
    const id = route === "/projects" ? "projects" : route === "/contact" ? "contact" : "home";
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }, [route, project]);

  return (
    <>
      <Xp />
      <Nav route={project ? "/projects" : route} />
      {project ? (
        <CaseStudy p={project} />
      ) : (
        <main>
          <Hero />
          <Projects />
          <Contact />
        </main>
      )}
      <footer>© {new Date().getFullYear()} {profile.name}</footer>
    </>
  );
}
