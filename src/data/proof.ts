// Proof on the homepage. Add trainings and anonymous quotes here; the section shows them when the lists are not empty.
// Never client names, stories or photos.
export const trainings: string[] = [];

export interface Quote {
  text: string;
  /** Anonymous context only, e.g. "couples work · 2025". */
  context?: string;
}

export const quotes: Quote[] = [];
