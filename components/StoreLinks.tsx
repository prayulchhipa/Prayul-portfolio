import type { StoreLink } from "@/data/resume";

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden><path fill="currentColor" d="M3.6 1.8c-.3.3-.4.7-.4 1.2v18c0 .5.1.9.4 1.2l10-10.2L3.6 1.8Zm11.1 9.1 2.8-2.9-12.2-7c-.4-.2-.8-.3-1.1-.2l10.5 10.1Zm0 2.2L4.2 23.2c.3.1.7 0 1.1-.2l12.2-7-2.8-2.9Zm6.5-2.3-2.9-1.7-3.1 3 3.1 3 2.9-1.7c.8-.5.8-2.1 0-2.6Z" /></svg>
);
const AppleIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden><path fill="currentColor" d="M16.4 12.6c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.4-.9-1.7 0-3.3 1-4.2 2.6-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.2 2.6 1.3-.1 1.8-.8 3.3-.8 1.6 0 2 .8 3.4.8 1.4 0 2.3-1.3 3.1-2.5 1-1.4 1.4-2.8 1.4-2.9 0 0-2.7-1-2.7-4.1ZM13.9 4.9c.7-.9 1.2-2 1-3.2-1 0-2.3.7-3 1.6-.7.8-1.2 2-1.1 3.1 1.2.1 2.3-.6 3.1-1.5Z" /></svg>
);
const WebIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden><path fill="none" stroke="currentColor" strokeWidth="2" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-10 10h20M12 2c2.8 3 2.8 17 0 20M12 2c-2.8 3-2.8 17 0 20" /></svg>
);

const meta = {
  play: { label: "Google Play", Icon: PlayIcon },
  ios: { label: "App Store", Icon: AppleIcon },
  web: { label: "Visit site", Icon: WebIcon },
};

export default function StoreLinks({ links, compact = false }: { links?: StoreLink[]; compact?: boolean }) {
  if (!links?.length) return null;
  return (
    <div className="store-links">
      {links.map((l) => {
        const { label, Icon } = meta[l.type];
        return (
          <a key={l.url} href={l.url} target="_blank" rel="noreferrer" className={`store ${l.type}`} aria-label={label}>
            <Icon /> {compact ? (l.type === "play" ? "Android" : l.type === "ios" ? "iOS" : "Web") : label}
          </a>
        );
      })}
    </div>
  );
}
