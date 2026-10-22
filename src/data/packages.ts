// Every price on the site lives here. Change a number once and every page follows.
// Prices are the final amount the client pays (no tax wording until confirmed).

export interface Package {
  hours: number;
  price: number;
  /** Most instalments allowed, with no surcharge. */
  instalments: number;
  recommended?: boolean;
}

export type Ladder = {
  sniff: Package;
  heartAndSex: Package;
  wholeWay: Package;
  craft: Package;
  deepEndOnePath: Package;
  deepEndBothPaths: Package;
};

/** Tier, package and path names, used everywhere. */
export const names = {
  sniff: 'a little sniff',
  heartAndSex: 'Connecting heart and sex', // journey one
  craft: 'Erotic craft', // journey two: 20 more hours, on top of journey one
  wholeWay: 'The whole way', // journey one + Erotic craft together
  deepEnd: 'The deep end', // advanced tier, in Marry's space in Lisbon only
  paths: ['Power and the Feral', 'Ritual and the Mystery'],
};

/** If they continue within this many days, the sniff counts towards Connecting heart and sex or The whole way. */
export const tasterCreditDays = 14;
/** Instalments never carry a surcharge. */
export const instalmentSurcharge = 0;

// Instalments: two for 4 hours, three for 10 hours, up to six for 20 and 30 hours.
export const couples: Ladder = {
  sniff: { hours: 4, price: 590, instalments: 2 },
  heartAndSex: { hours: 10, price: 1190, instalments: 3 },
  wholeWay: { hours: 30, price: 2950, instalments: 6, recommended: true },
  craft: { hours: 20, price: 1950, instalments: 6 }, // only after Connecting heart and sex
  deepEndOnePath: { hours: 10, price: 1590, instalments: 3 },
  deepEndBothPaths: { hours: 20, price: 2550, instalments: 6 },
};

export const oneToOne: Ladder = {
  sniff: { hours: 4, price: 490, instalments: 2 },
  heartAndSex: { hours: 10, price: 1050, instalments: 3 },
  wholeWay: { hours: 30, price: 2650, instalments: 6, recommended: true },
  craft: { hours: 20, price: 1750, instalments: 6 }, // only after Connecting heart and sex
  deepEndOnePath: { hours: 10, price: 1450, instalments: 3 },
  deepEndBothPaths: { hours: 20, price: 2350, instalments: 6 },
};

export const euro = (n: number) =>
  new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n);

/** The taster price, e.g. "€490". */
export const tasterFrom = (ladder: Ladder) => euro(ladder.sniff.price);
