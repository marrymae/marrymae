# Marry Mae — website brand rules

Read this before building or changing any page. The values live in `brand/tokens.css` (and `brand/tokens.json`); the look of each section is shown in `brand/reference/homepage.html` and `brand/reference/couples.html`. When something here and a reference page disagree, this file wins.

## What the site is

Marry Mae is in-person, embodied erotic education and ritual in Lisbon for singles and couples, led by Marry. The site's job: make the right people feel seen, explain the work and the method clearly, and move them to the intake form and a paid €50 discovery call. It also sells Ritual Theatre tickets and the online library.

## Look in one paragraph

Bold blood red, black, white and flesh pink as full-width blocks with square corners. Headlines in DM Serif Display with one italic word or phrase for heat. Everyday text in Hanken Grotesk, small lowercase labels in IBM Plex Mono. Black-and-white or duotone photography of real, unposed bodies. 2px black lines. Nothing rounded, no shadows, no gradients, no icons, no emoji.

## Colour rules

| Token | Code | Use |
| --- | --- | --- |
| `--blood` | #DB2A14 | Hero sections, recommended price card, primary blocks |
| `--ink` | #000000 | Text on white and pink; black sections; footer |
| `--paper` | #FFFFFF | Reading sections; text on red and black |
| `--flesh` | #FFD3DA | Quote panel, photo grounds |
| `--blood-bright` | #F0442A | Red accents on black only |
| `--ink-soft` / `--paper-soft` | #333333 / #D9D9D9 | Secondary text on white / on black |

- Small text on blood red is **white**. Black on red only for headlines 24px and up.
- Never bright red on white; never red body text on pink.
- Rough balance per page: 40% white, 25% red, 25% black, 10% pink.
- Use the ground classes `.on-blood`, `.on-ink`, `.on-flesh`, `.on-paper`: they set text and italic colours correctly.

## Type rules

- Headlines: `.display-xl` (hero only), `.display-l`, `.display-m`, `.display-s`; prices `.price`. One `<em>` per headline for the italic moment.
- Body: Hanken Grotesk 17px, intro `.body-l`. Nothing people read is smaller than 15px.
- Labels: `.label` (mono, lowercase, items separated by " · ").
- Menu and buttons: Hanken Grotesk 700, normal capitals and lowercase. No all-caps text anywhere, including the name: it is always "Marry *Mae*".

## Logo

- Wordmark: "Marry <em>Mae</em>" as live text in `--font-display`, Mae italic. On white: Marry black, Mae blood. On red: Marry black, Mae white. On black: Marry white, Mae bright red.
- Tab icon and social preview: the m*m* monogram (white m, black italic m, on blood red). Exported PNGs come from Marry (512px icon, 1080px avatar).

## Components

- **Menu:** wordmark left; links The method · 1:1 · Couples · Events · Library (Ritual Theatre lives under Events); a solid "Start here" button. 2px line under the menu. On phones: a square black menu button (44px) opening a full-screen black menu.
- **Buttons:** `.btn.btn--solid` + `.btn.btn--outline` side by side with no gap (`.btn-pair`); the homepage hero has three (solid, outline, outline). Quiet links: `.link-arrow`.
- **Method steps:** black band, 2px bright red line, six steps numbered 01–06 in mono (Slow · Feel · Speak · Meet · Flow · Tend), each with its own 2px bright red line above it, step names in the display font and a short paragraph each. On desktop they sit in two rows of three; on phones they stack. The second journey, Tend in depth with the ground and the six skills, lives on The method page, not the homepage.
- **Offer cards:** `.card` with a colour or photo block on top, label, title, one line, arrow link. Whole card is one link.
- **Price table:** one outlined box, three packages side by side (label, large price, short text, small print), the recommended package filled blood red with white text. On phones the recommended package comes first.
- **Booking steps:** numbered, with a 2px line above each. The Couples page has five: Intake form → Discovery call → Agreement and payment → Questionnaires → Sessions. Start here still shows the earlier four (Intake form → Discovery call → Agreement → Sessions).
- **Questions (accordion):** questions open one at a time; an open question turns italic, with a small mono open / close on the right. No icons.
- **Quote panel:** flesh section, one brand phrase, black-and-white photo of Marry, short paragraph, link.
- **Footer:** black; large wordmark; hi@marrymae.com, @marrymae, Lisbon in mono; Speaking, FAQ, About, Privacy.
- **Forms (intake):** labels above fields in Hanken Grotesk 700; fields with 2px black border, square, white, 48px tall; help text in `.body-s`; focus = 3px black outline.

## Page plan

Home · 1:1 · Couples · The method · Events (with Ritual Theatre at /events/ritual-theatre) · Library · About · FAQ · Start here (intake form, then €50 discovery call) · Privacy · Speaking (not in the menu; linked from the homepage and the footer). An advanced-tier page comes later (name still open) and uses the darkest "deep end" volume: almost all black, red only in thin lines and single words.

### Section rhythm (homepage)

The homepage has eight sections, top to bottom, then the footer:

1. **Hero:** blood. Identity line, intro and three buttons side by side: Come alone (solid) · Come together (outline) · Come watch (outline).
2. **The idea:** white. "Mind-blowing sex can be learned."
3. **The method:** black band, the six steps in two rows of three on desktop, stacked on phones.
4. **Ways in:** white offer cards (1:1 · Couples · Ritual Theatre), with a line to the Library under them.
5. **Proof:** flesh quote panel with the photo of Marry ("the person in the room"). Room for a short list of trainings and two or three anonymous quotes.
6. **Upcoming:** black. A note about Ritual Theatre until there are dates, then the date list.
7. **The letter:** blood newsletter sign-up.
8. **Speaking teaser:** white, linking to the Speaking page.

Then the black footer.

## Packages

All prices live in one file, `src/data/packages.ts`. Change them there only.

| | A little sniff | Journey one (recommended) | Journey two |
| --- | --- | --- | --- |
| Couples | 4 hours · €590 · two instalments | 10 hours · €1,190 · three instalments (usually two 5-hour days) | 20 hours · €1,950 · three instalments (usually four 5-hour days) |
| 1:1 | 4 hours · €490 · two instalments | 10 hours · €1,050 · three instalments | 20 hours · €1,750 · three instalments |

- Taster credit: if they continue within 14 days, the sniff counts towards journey one.
- Payment plans have no surcharge.
- Journey one is the six steps: Slow, Feel, Speak, Meet, Flow, Tend.
- Journey two is Tend in depth (energy, touch, range, play, pacing, practice). Journey two is not the advanced tier.
- Advanced tier, after journey two: 8 / 12 / 16 hours. 1:1 €990 / €1,350 / €1,650; couples €1,090 / €1,490 / €1,790. In Marry's space only. No page for it yet.
- Homepage card labels: "1:1 · taster from €490" and "couples · taster from €590".

## Images

Black-and-white or duotone (black on flesh, black on blood), close, unposed, real skin. Until photos exist, use solid colour blocks with a small mono caption describing the intended photo. Never stock photos, spiritual props, glossy retouched sensuality or anything that would break Instagram's nudity rules (the site and social share images).

## Words

Follow the Marry Mae Voice Guide: real, warm, direct, bold, grounded. Short sentences. First person ("I guide…"). Never use "It's not X, it's Y" sentences, or the words "satisfaction" and "desire". No spiritual lingo, no clinical language, no wellness clichés. Keep tantra and kink out of headlines. Credentials (sex therapist, relationship therapist, tantra teacher and kink educator) appear only on About and FAQ. Copy for each page is written and approved in the Marry Mae Project before it goes into the code; use placeholder text marked [COPY TO COME] rather than inventing claims.

Prices are the final amount the client pays. Do not add "+ IVA" or tax wording until confirmed.

## Legal and safety

- Every hands-on offer page and the FAQ make the education framing clear. Final wording of these pages is checked by a lawyer before launch: mark them `<!-- LEGAL REVIEW -->` in the code.
- Never put client names, stories or photos on the site.
- **The deep end (Couples page, section 7)** is a scope change, wrapped in `<!-- LEGAL REVIEW: scope change -->`. It has one on/off switch, `showDeepEnd` at the top of `src/pages/couples.astro`. It is on in the preview and must be switched off before launch unless Marry confirms the lawyer has cleared it.
- Contact email: hi@marrymae.com.

## Technical

- Accessible: real `<button>`, `<a href>`, `<label>` for every field, alt text on photos, visible focus, text contrast 4.5:1 (3:1 for headlines 24px+), touch targets 44px.
- Fast: system fonts as fallbacks, `font-display: swap`, images in modern formats and sized for their slot.
- Phones first: every section stacks to one column under 700px.
- No cookie banner needed unless analytics or third-party embeds are added; if they are, ask Marry first.
