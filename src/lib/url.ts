// Every internal link goes through here, so the site works under /marrymae/ on GitHub Pages
// and at the root once marrymae.com is connected.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const url = (path = '/') => {
  const clean = path.replace(/^\/+/, '');
  return clean ? `${base}/${clean}` : `${base}/`;
};

export const nav = [
  { href: 'whats-possible-here', label: "What's possible here" },
  { href: '1-1', label: '1:1' },
  { href: 'couples', label: 'Couples' },
  { href: 'events', label: 'Events' },
  { href: 'library', label: 'Library' },
];
