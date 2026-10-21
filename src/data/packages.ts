// Every price on the site lives here. Change a number once and every page follows.
// Prices are the final amount the client pays (no tax wording until confirmed).

export interface Package {
  /** Shown in the card label, e.g. "a little sniff". */
  name: string;
  hours: number;
  price: number;
  instalments: number;
  recommended?: boolean;
}

/** If they continue within this many days, the sniff counts towards journey one. */
export const tasterCreditDays = 14;
/** Payment plans have no surcharge. */
export const instalmentSurcharge = 0;

// Journey one is the six steps: Slow, Feel, Speak, Meet, Flow, Tend.
// Journey two is Tend in depth (energy, touch, range, play, pacing, practice). It is NOT the advanced tier.
export const couples: Package[] = [
  { name: 'a little sniff', hours: 4, price: 590, instalments: 2 },
  { name: 'journey one', hours: 10, price: 1190, instalments: 3, recommended: true },
  { name: 'journey two', hours: 20, price: 1950, instalments: 3 },
];

export const oneToOne: Package[] = [
  { name: 'a little sniff', hours: 4, price: 490, instalments: 2 },
  { name: 'journey one', hours: 10, price: 1050, instalments: 3, recommended: true },
  { name: 'journey two', hours: 20, price: 1750, instalments: 3 },
];

// Advanced tier: comes after journey two. In Marry's space only. No page for it yet; not shown anywhere.
export const advanced = {
  oneToOne: [
    { hours: 8, price: 990 },
    { hours: 12, price: 1350 },
    { hours: 16, price: 1650 },
  ],
  couples: [
    { hours: 8, price: 1090 },
    { hours: 12, price: 1490 },
    { hours: 16, price: 1790 },
  ],
};

export const euro = (n: number) =>
  new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n);

/** "a little sniff · 4 hours · €590", with "recommended · " in front of the recommended package. */
export const packageLabel = (p: Package) =>
  `${p.recommended ? 'recommended · ' : ''}${p.name} · ${p.hours} hours · ${euro(p.price)}`;

/** The lowest price in a ladder: the taster. */
export const tasterFrom = (ladder: Package[]) => euro(Math.min(...ladder.map((p) => p.price)));
