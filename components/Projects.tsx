"use client";
import { useMemo, useState } from "react";
import { projects, categories, Project } from "@/data/resume";
import Reveal from "./Reveal";
import StoreLinks from "./StoreLinks";

function Card({ p }: { p: Project }) {
  return (
    <article className="pcard" style={{ ["--h" as any]: p.hue }}>
      <div className="pcard-top">
        <span className="pcard-icon">{p.icon}</span>
        <div>
          <h4>{p.name}</h4>
          <p className="pcard-tag">{p.tagline}</p>
        </div>
      </div>
      <p className="pcard-desc">{p.desc}</p>
      <div className="chips">
        {p.tags.map((t) => <span key={t} className="chip">{t}</span>)}
      </div>
      <StoreLinks links={p.links} />
    </article>
  );
}

export default function Projects() {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const [q, setQ] = useState("");
  const pool = useMemo(() => {
    const s = q.trim().toLowerCase();
    const browsing = cat === "All" && !s;
    return projects.filter((p) =>
      (browsing ? !p.featured : true) &&
      (cat === "All" || p.cats.includes(cat as any)) &&
      (!s || [p.name, p.tagline, p.desc, ...p.tags].join(" ").toLowerCase().includes(s))
    );
  }, [cat, q]);
  const [expanded, setExpanded] = useState(false);
  const filtering = cat !== "All" || q.trim() !== "";
  const shown = expanded || filtering ? pool : pool.slice(0, 9);

  return (
    <div>
      <div className="filters">
        <div className="filter-row">
          {categories.map((c) => {
            const count = c === "All" ? projects.length : projects.filter((p) => p.cats.includes(c as any)).length;
            return (
              <button key={c} className={`filter ${cat === c ? "active" : ""}`} onClick={() => setCat(c)}>
                {c} <span className="count">{count}</span>
              </button>
            );
          })}
        </div>
        <input className="search" placeholder="Search projects, e.g. AI, Stripe, NFC…" value={q} onChange={(e) => setQ(e.target.value)} />
      </div>
      <div className="pgrid">
        {shown.map((p, i) => (
          <Reveal key={p.name} delay={(i % 3) * 70}><Card p={p} /></Reveal>
        ))}
      </div>
      {shown.length < pool.length && (
        <div className="more-wrap">
          <button className="btn btn-ghost btn-lg" onClick={() => setExpanded(true)}>
            Show {pool.length - shown.length} more projects ↓
          </button>
        </div>
      )}
      {pool.length === 0 && <p className="muted center">No projects match — try another filter.</p>}
    </div>
  );
}
