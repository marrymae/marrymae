// Upcoming events. Add one entry per date; past dates drop off by themselves
// because the site rebuilds once a day.
export interface Event {
  date: string; // YYYY-MM-DD
  title: string;
  place: string;
  href?: string; // page on this site, e.g. 'events/erotic-ritual-art'
}

export const events: Event[] = [];

export const upcoming = () => {
  const today = new Date().toISOString().slice(0, 10);
  return events.filter((e) => e.date >= today).sort((a, b) => a.date.localeCompare(b.date));
};

export const formatDate = (date: string) =>
  new Date(`${date}T12:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Lisbon' }).toLowerCase();
