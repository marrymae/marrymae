# Marry Mae — website brand rules

Read this before building or changing any page. The values live in `brand/tokens.css` (and `brand/tokens.json`); the look of each section is shown in `brand/reference/homepage.html` and `brand/reference/couples.html`. When something here and a reference page disagree, this file wins.

## What the site is

Marry Mae is in-person, embodied erotic education and ritual in Lisbon for singles and couples, led by Marry. The site's job: make the right people feel seen, explain the work and the method clearly, and move them to the intake form and a paid €50 discovery call. It also sells Erotic Ritual Art tickets and the online library.

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

- **Menu:** wordmark left; links What's possible here · 1:1 · Couples · Events · Library (Erotic Ritual Art lives under Events); a solid "Book a call" button (to /start: the intake form and the €50 discovery call). 2px line under the menu. Below 1080px wide: a square black menu button (44px) opening a full-screen black menu.
- **Buttons:** `.btn.btn--solid` + `.btn.btn--outline` side by side with no gap (`.btn-pair`); the homepage hero has three (solid, outline, outline). Quiet links: `.link-arrow`.
- **Polaroid** (`src/components/Polaroid.astro`): a photo slot inside a flesh-pink frame, square corners, an even border on three sides and a thicker bottom border, with a static tilt of about 2 degrees. Used for the homepage hero photo (duotone, black on blood red) and Marry's portrait in Proof (black and white).
- **Photo slot** (`src/components/PhotoSlot.astro`): one slot for every image. Put the photo in `public/photos/` and pass `src`; CSS turns it into the brand look: `tone="blood"` duotone black on blood red, `tone="flesh"` duotone black on flesh pink, `tone="ink"` black and white; `tone="original"` keeps the photo's own colours (only where Marry asks for it, like the homepage hero still life, whose background was recoloured pink). Until a photo exists the slot shows a solid block in its tone with a short mono caption describing the shot (from the shoot list below). Every slot has alt text. Above-the-fold slots load straight away; everything else lazy-loads.
- **Timeline** (What's possible here, under the hero): the journey as four stops — a little sniff (4h) → Connecting heart and sex (10h) → Erotic craft (20h) → The deep end (10 or 20h). A 2px line with square nodes (never circles); each stop shows its name in DM Serif Display and its hours as a mono label; the tiles deepen paper → flesh → ink → blood. "credited if you continue" sits between the first two stops; a bracket under the middle two reads "The whole way · 30h". Each stop links to its section. Horizontal on desktop, vertical on phones. Draws in on scroll; still for reduced motion.
- **Method steps** (homepage): black band, six steps numbered 01–06 in mono (Slow · Feel · Speak · Meet · Flow · Tend), each with its own 2px bright red line above it, step names in the display font and a short paragraph each. Two rows of three on desktop; stacked on phones.
- **Accordion:** items open one at a time on tap; an open item turns italic, with a small mono open / close on the right. No icons. Used for questions, and on What's possible here for the six steps and the six skills (the first line always shows; the rest opens).
- **Doors** (the deep end): the two paths, Power and the Feral and Ritual and the Mystery, side by side as two tall outlined "doors" (stacked on phones), with the one path / both paths prices under them. On blood red they darken to black on hover; on black they fill blood red.
- **Offer cards:** `.card` with a tall photo slot on top, label, title, one line, arrow link. Whole card is one link.
- **Price table:** one outlined box, three cards side by side: a little sniff · Connecting heart and sex · The whole way (recommended, filled blood red with white text). Each card: label, large price, short text, small print. Erotic craft on its own appears only in the small line under the table. On phones the recommended card comes first.
- **Price line:** "couples €… · 1:1 €… · …" in bold with a 2px line above, built from the price file using the copy's exact words.
- **Booking steps:** numbered, with a 2px line above each. Five steps: Intake form → Discovery call → Agreement and payment → Questionnaires → Sessions (wording per page). Start here still shows the earlier four.
- **Quote panel:** flesh section, one brand phrase, black-and-white photo of Marry, short paragraph, link.
- **Footer:** black; large wordmark; hi@marrymae.com, @marrymae, Lisbon in mono; Speaking, FAQ, About, Privacy. Footer line: "Eroticism that lasts, because it's real."
- **Forms (intake):** labels above fields in Hanken Grotesk 700; fields with 2px black border, square, white, 48px tall; help text in `.body-s`; focus = 3px black outline.

## Page plan

Home · What's possible here (/whats-possible-here; /method forwards there) · 1:1 · Couples · Events (with Erotic Ritual Art at /events/erotic-ritual-art; /events/ritual-theatre forwards there) · Library · About · FAQ · Start here (intake form, then €50 discovery call) · Privacy · Speaking (not in the menu; linked from the homepage and the footer). The deep end has no page of its own yet; it lives on What's possible here and Couples.

All current copy lives in `content/website-copy.md`. Use it word for word.

### Homepage

Copy: `content/homepage-copy.md`, word for word. (The homepage section in `content/website-copy.md` is older; `homepage-copy.md` wins.)

Hero line: **"Eroticism that lasts, because it's real."** (italic: because it's real.) The footer line stays the same.

Top to bottom, then the footer:

1. **Hero:** blood. Label "lisbon · erotic education · 1:1 · couples". Text left, the photo in a pink Polaroid right on desktop (Polaroid first on phones). Three buttons: Come alone (solid) · Come together (outline) · Come watch (outline).
2. **The idea:** white. The flatness, then what's possible. The headline stays put while the story scrolls on desktop.
3. **Image band:** full width (skin, hands, slow light).
4. **The journeys:** black. The timeline (white line, borders and bracket on black; stops link to What's possible here), then the four journey blocks (name and hours in DM Serif Display, text in Hanken Grotesk), "Alone or with a partner, it's the same road.", three buttons and the Library line. The method lives inside this section.
5. **Proof:** white. Label "your guide". Marry's portrait in a pink Polaroid left, text right (Polaroid first on phones), a "Book a call →" button and "Meet Marry →".
6. **Upcoming events:** black. Label "events · lisbon", headline, one atmospheric image and the Erotic Ritual Art note until there are dates, then the date list.
7. **The bedside letter:** blood newsletter sign-up ("Send me the bedside letter").
8. **Speaking teaser:** white, linking to the Speaking page.

**Text layout (homepage):** body text is justified on desktop with `hyphens: auto` (the page is `lang="en"`); under 700px it is left-aligned. Headlines, labels and buttons are always left-aligned. Text columns stay at the brand text width (560px, about 65 characters) so justified lines don't open gaps.

Sections have generous space between them (96px, and 96 + 72px for storytelling sections) so the stories have room to breathe.

## Tiers, packages and prices

All prices live in one file, `src/data/packages.ts`. Change them there only.

**Names, used everywhere:**
- Journey one = **Connecting heart and sex** (10 hours): the six steps, Slow, Feel, Speak, Meet, Flow, Tend.
- Journey two = **Erotic craft** (20 more hours, on top of journey one): energy, touch, range, play, pacing, practice.
- **The whole way** = Connecting heart and sex + Erotic craft together (30 hours).
- Advanced tier = **The deep end**, with two paths: **Power and the Feral** and **Ritual and the Mystery**. In Marry's space in Lisbon only.
- The 4-hour taster = **a little sniff**.

| | A little sniff | Connecting heart and sex | The whole way (recommended) | Erotic craft on its own | The deep end: one path | The deep end: both paths |
| --- | --- | --- | --- | --- | --- | --- |
| Couples | 4h · €590 | 10h · €1,190 | 30h · €2,950 | 20h · €1,950 | 10h · €1,590 | 20h · €2,550 |
| 1:1 | 4h · €490 | 10h · €1,050 | 30h · €2,650 | 20h · €1,750 | 10h · €1,450 | 20h · €2,350 |

- Instalments, never with a surcharge: two for 4 hours, three for 10 hours, up to six for 20 and 30 hours.
- The sniff counts towards Connecting heart and sex or The whole way if they continue within 14 days.
- Erotic craft on its own is only for people who have walked Connecting heart and sex.
- Price tables show three cards: sniff · Connecting heart and sex · The whole way (recommended).
- Homepage card labels: "1:1 · taster from €490" and "couples · taster from €590".

## Images

**Style:** black-and-white or duotone, close, unposed, real skin. Black and white for portraits of Marry and for hands, skin and closeness. Duotone (black on flesh pink, or black on blood red) for hero images. Real light: window daylight or low evening light; grain is welcome. Marry: direct gaze, mid-laugh, mid-sentence, teaching, unretouched.

**First shoot list:**
- Marry, portrait, direct gaze (About page)
- Marry, laughing, unposed (homepage proof)
- Marry teaching or explaining with their hands (What's possible here, "How I work")
- Two hands meeting on skin (homepage hero, couples)
- A couple, foreheads touching (couples page)
- One body in slow light, shoulder or back (1:1 card and page)
- Performers in low light, bodies in motion (Erotic Ritual Art)
- Details: oil on skin, fabric, a mattress on the floor, a room in daylight (image band, textures)

**Avoid:** stock photos, lotus flowers, chakras, sunsets, incense, Buddha statues, spiritual props, glossy or posed sensuality, lingerie-catalogue looks, candles as the main subject, warm earthy colour grades, anything that breaks Instagram's nudity rules.

Until photos exist, every photo slot shows its tone with a mono caption naming the shot from this list.

## Words

Follow the Marry Mae Voice Guide: real, warm, direct, bold, grounded. Short sentences. First person ("I guide…"). Never use "It's not X, it's Y" sentences, or the words "satisfaction" and "desire". No spiritual lingo, no clinical language, no wellness clichés. Keep tantra and kink out of headlines. Credentials (sex therapist, relationship therapist, tantra teacher and kink educator) appear only on About and FAQ.

- No comma before "and" or "or".
- Use "hot" sparingly: at most once per page in any microcopy (alt text, labels, captions).
- Never write new marketing copy. Copy is written and approved in the Marry Mae Project and lives in `content/website-copy.md`; use it word for word. Anything missing shows as [COPY TO COME].

Prices are the final amount the client pays. Do not add "+ IVA" or tax wording until confirmed.

## Legal and safety

- Every hands-on offer page and the FAQ make the education framing clear. Final wording of these pages is checked by a lawyer before launch: mark them `<!-- LEGAL REVIEW -->` in the code. The deep end on Couples also carries `<!-- LEGAL REVIEW: scope change -->`.
- Never put client names, stories or photos on the site.
- Contact email: hi@marrymae.com.

## Technical

- Accessible: real `<button>`, `<a href>`, `<label>` for every field, alt text on photos, visible focus, text contrast 4.5:1 (3:1 for headlines 24px+), touch targets 44px.
- Fast: system fonts as fallbacks, `font-display: swap`, images in modern formats and sized for their slot.
- Phones first: every section stacks to one column under 700px.
- No cookie banner needed unless analytics or third-party embeds are added; if they are, ask Marry first.
