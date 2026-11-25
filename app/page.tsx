import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import Typewriter from "@/components/Typewriter";
import Projects from "@/components/Projects";
import StoreLinks from "@/components/StoreLinks";
import {
  profile, stats, whyHire, experience, education, certifications, skills, marquee, projects, liveApps,
} from "@/data/resume";

const featured = projects.filter((p) => p.featured);
const mailto = `mailto:${profile.email}?subject=${encodeURIComponent("Opportunity for Prayul Bolya — FlutterFlow / Flutter Engineer")}`;
const whatsapp = `https://wa.me/${profile.phoneRaw}?text=${encodeURIComponent("Hi Prayul, I saw your portfolio and would like to talk about an opportunity.")}`;

function SectionHead({ kicker, title, sub }: { kicker: string; title: React.ReactNode; sub?: string }) {
  return (
    <Reveal className="shead">
      <span className="kicker">{kicker}</span>
      <h2>{title}</h2>
      {sub && <p className="muted">{sub}</p>}
    </Reveal>
  );
}

export default function Home() {
  return (
    <>
      <div className="bg-grid" aria-hidden />
      <div className="blob b1" aria-hidden />
      <div className="blob b2" aria-hidden />
      <div className="blob b3" aria-hidden />
      <Nav />

      <main id="top">
        {/* ---------------- HERO ---------------- */}
        <section className="hero container">
          <div className="hero-copy">
            <Reveal><span className="status"><span className="dot" /> Open to new opportunities</span></Reveal>
            <Reveal delay={80}>
              <h1>
                Hi, I&apos;m <span className="grad">{profile.firstName}</span>.<br />
                I build apps that <span className="underline">ship</span>.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="hero-role">
                <Typewriter words={profile.roles} />
              </p>
            </Reveal>
            <Reveal delay={220}>
              <p className="hero-sub">
                Software Engineer with <b>4+ years</b> and <b>40 mobile & web apps</b> in FlutterFlow, Enterprise FlutterFlow and Flutter, shipped to the{" "}
                <b>App Store and Google Play</b>. I lead a team of 4–6, build the Firebase / Supabase
                backends, integrate <b>OpenAI & Claude</b>, and built <b>ICICI Bank</b> journeys used by <b>millions of customers every day</b>.
              </p>
            </Reveal>
            <Reveal delay={280} className="hero-cta">
              <a href={profile.cv} download className="btn btn-primary btn-lg">
                <span>⬇</span> Download My CV
              </a>
              <a href={mailto} className="btn btn-ghost btn-lg">✉ Hire Me</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost btn-lg btn-in">in LinkedIn</a>
            </Reveal>
            <Reveal delay={340} className="hero-meta">
              <span>📍 {profile.location}</span>
              <span>🌍 Remote / On-site / Relocation</span>
            </Reveal>
          </div>

          <Reveal delay={200} className="hero-visual">
            <div className="orbit">
              <span className="orb o1">Flutter</span>
              <span className="orb o2">FlutterFlow</span>
              <span className="orb o3">OpenAI · Claude</span>
              <span className="orb o4">Firebase</span>
              <span className="orb o5">Supabase</span>
              <span className="orb o6">Stripe</span>
            </div>
            <div className="phone">
              <div className="notch" />
              <div className="screen">
                <div className="app-head">
                  <span className="avatar">PB</span>
                  <div>
                    <div className="app-name">{profile.name}</div>
                    <div className="app-small">Software Engineer</div>
                  </div>
                </div>
                <div className="app-card glow">
                  <div className="app-small">Apps delivered</div>
                  <div className="app-big">40</div>
                  <div className="bars">{[40, 65, 50, 80, 70, 95, 88].map((h, i) => <span key={i} style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }} />)}</div>
                </div>
                <div className="app-row">
                  <div className="app-mini"><span>🏦</span>ICICI Bank</div>
                  <div className="app-mini"><span>🤖</span>AI Apps</div>
                </div>
                <div className="app-row">
                  <div className="app-mini"><span>🎓</span>9.9 CGPA</div>
                  <div className="app-mini"><span>👥</span>Leads 4–6 devs</div>
                </div>
                <a href={profile.cv} download className="app-btn">Download CV →</a>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ---------------- STATS ---------------- */}
        <section className="container">
          <div className="stats">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80} className="stat">
                <div className="stat-num grad"><Counter value={s.value} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals} /></div>
                <div className="stat-label">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------------- MARQUEE ---------------- */}
        <div className="marquee" aria-hidden>
          <div className="marquee-track">
            {[...marquee, ...marquee].map((m, i) => <span key={i}>{m} <i>✦</i></span>)}
          </div>
        </div>

        {/* ---------------- WHY HIRE ---------------- */}
        <section id="why" className="section container">
          <SectionHead
            kicker="Why hire me"
            title={<>Six reasons I&apos;m the <span className="grad">right engineer</span> for your team</>}
            sub="Not just code — I deliver products, lead people and keep clients happy."
          />
          <div className="why-grid">
            {whyHire.map((w, i) => (
              <Reveal key={w.title} delay={(i % 3) * 90} className="why">
                <span className="why-icon">{w.icon}</span>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------------- EXPERIENCE ---------------- */}
        <section id="experience" className="section container">
          <SectionHead kicker="Experience" title={<>Where I&apos;ve been <span className="grad">making impact</span></>} />
          {experience.map((e) => (
            <Reveal key={e.company} className="exp">
              <div className="exp-head">
                <div>
                  <h3>{e.role}</h3>
                  <p className="exp-co">{e.company}</p>
                </div>
                <div className="exp-when">
                  <span className="pill live"><span className="dot" /> {e.period}</span>
                  <span className="muted small">📍 {e.location}</span>
                </div>
              </div>
              <div className="exp-grid">
                {e.highlights.map(([h, t], i) => (
                  <Reveal key={h} delay={(i % 2) * 80} className="exp-item">
                    <h4>{h}</h4>
                    <p>{t}</p>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          ))}

          <div className="edu-grid">
            {education.map((ed, i) => (
              <Reveal key={ed.school} delay={i * 100} className="edu">
                <span className="edu-icon">🎓</span>
                <div>
                  <h4>{ed.degree}</h4>
                  <p className="muted">{ed.school}</p>
                  <p className="small"><span className="pill">{ed.score}</span> <span className="muted">{ed.period}</span></p>
                </div>
              </Reveal>
            ))}
            {certifications.map((c) => (
              <Reveal key={c.name} delay={200} className="edu">
                <span className="edu-icon">🏅</span>
                <div>
                  <h4>{c.name}</h4>
                  <p className="muted">{c.issuer}</p>
                  <p className="small"><span className="pill">Certification</span> <span className="muted">{c.status}</span></p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------------- FEATURED PROJECTS ---------------- */}
        <section id="projects" className="section container">
          <SectionHead
            kicker="Featured work"
            title={<>Products I&apos;m <span className="grad">proud of</span></>}
            sub={`Highlights from the ${profile.appsDelivered} apps I have delivered.`}
          />
          <div className="featured">
            {featured.map((p, i) => (
              <Reveal key={p.name} delay={(i % 2) * 100} className="fcard" >
                <div className="fcard-inner" style={{ ["--h" as any]: p.hue }}>
                  <div className="fcard-art">
                    <span className="fcard-emoji">{p.icon}</span>
                    <span className="fcard-ring" />
                  </div>
                  <div className="fcard-body">
                    {p.badge && <span className="badge">{p.badge}</span>}
                    <h3>{p.name}</h3>
                    <p className="pcard-tag">{p.tagline}</p>
                    <p className="fcard-desc">{p.desc}</p>
                    <div className="chips">{p.tags.map((t) => <span key={t} className="chip">{t}</span>)}</div>
                    <StoreLinks links={p.links} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="shead sub">
            <span className="kicker">Try them yourself</span>
            <h3 className="h3big">Download my apps from the stores</h3>
            <p className="muted">Real, published products — tap to open them on Google Play, the App Store or the web.</p>
          </Reveal>
          <div className="live-grid">
            {liveApps.map((p, i) => (
              <Reveal key={p.name} delay={(i % 4) * 60} className="live" >
                <div className="live-inner" style={{ ["--h" as any]: p.hue }}>
                  <span className="pcard-icon">{p.icon}</span>
                  <div className="live-body">
                    <h4>{p.name}</h4>
                    <p className="pcard-tag">{p.tagline}</p>
                    <StoreLinks links={p.links} compact />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="shead sub">
            <h3 className="h3big">Explore all projects</h3>
            <p className="muted">Filter by domain or search by technology.</p>
          </Reveal>
          <Projects />
        </section>

        {/* ---------------- SKILLS ---------------- */}
        <section id="skills" className="section container">
          <SectionHead kicker="Tech stack" title={<>The <span className="grad">toolkit</span> behind every launch</>} />
          <div className="skills-grid">
            {skills.map((s, i) => (
              <Reveal key={s.group} delay={(i % 4) * 70} className="skill">
                <h4><span>{s.icon}</span> {s.group}</h4>
                <div className="chips">{s.items.map((it) => <span key={it} className="chip">{it}</span>)}</div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------------- CONTACT ---------------- */}
        <section id="contact" className="section container">
          <Reveal className="cta">
            <div className="cta-glow" aria-hidden />
            <span className="kicker">Let&apos;s work together</span>
            <h2>Looking for a FlutterFlow / Flutter engineer <br />who <span className="grad">delivers</span>?</h2>
            <p className="muted">
              I&apos;m open to full-time roles, contract work and remote opportunities. Grab my CV or reach out — I usually reply within a day.
            </p>
            <div className="hero-cta center-row">
              <a href={profile.cv} download className="btn btn-primary btn-lg">⬇ Download CV</a>
              <a href={profile.cv} target="_blank" rel="noreferrer" className="btn btn-ghost btn-lg">👁 View CV</a>
            </div>
            <div className="contact-grid">
              <a href={mailto} className="contact"><span>✉️</span><div><small>Email</small>{profile.email}</div></a>
              <a href={`tel:+${profile.phoneRaw}`} className="contact"><span>📞</span><div><small>Phone</small>{profile.phone}</div></a>
              <a href={whatsapp} target="_blank" rel="noreferrer" className="contact"><span>💬</span><div><small>WhatsApp</small>Chat with me</div></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact"><span className="in-badge">in</span><div><small>LinkedIn</small>Connect with me</div></a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="footer container">
        <p>© {new Date().getFullYear()} {profile.name} · Built with Next.js</p>
        <a href="#top" className="muted">Back to top ↑</a>
      </footer>

      <a href={profile.cv} download className="fab" aria-label="Download CV">
        ⬇ <span>CV</span>
      </a>
    </>
  );
}
