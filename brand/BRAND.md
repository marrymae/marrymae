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

- **Menu:** wordmark left; links The method · 1:1 · Couples · Ritual Theatre · Library; a solid "Start here" button. 2px line under the menu. On phones: a square black menu button (44px) opening a full-screen black menu.
- **Buttons:** `.btn.btn--solid` + `.btn.btn--outline` side by side with no gap (`.btn-pair`). Quiet links: `.link-arrow`.
- **Method steps:** black band, 2px bright red line, numbers 01–05 in mono, step names in the display font, one short line each.
- **Offer cards:** `.card` with a colour or photo block on top, label, title, one line, arrow link. Whole card is one link.
- **Price table:** one outlined box, packages side by side, one recommended package filled blood red with white text.
- **Booking steps:** numbered 01–04 with a 2px line above each: Intake form → Discovery call → Agreement → Sessions.
- **Quote panel:** flesh section, one brand phrase, black-and-white photo of Marry, short paragraph, link.
- **Footer:** black; large wordmark; hi@marrymae.com, @marrymae, Lisbon in mono; FAQ, About, Privacy.
- **Forms (intake):** labels above fields in Hanken Grotesk 700; fields with 2px black border, square, white, 48px tall; help text in `.body-s`; focus = 3px black outline.

## Page plan

Home · 1:1 · Couples · The method · Ritual Theatre · Library · About · FAQ · Start here (intake form, then €50 discovery call). An advanced-tier page comes later (name still open) and uses the darkest "deep end" volume: almost all black, red only in thin lines and single words.

### Section rhythm (homepage)

Blood hero → black method band → white "separate rooms" section → white offer cards → flesh quote panel → black footer.

## Images

Black-and-white or duotone (black on flesh, black on blood), close, unposed, real skin. Until photos exist, use solid colour blocks with a small mono caption describing the intended photo. Never stock photos, spiritual props, glossy retouched sensuality or anything that would break Instagram's nudity rules (the site and social share images).

## Words

Follow the Marry Mae Voice Guide: real, warm, direct, bold, grounded. Short sentences. First person ("I guide…"). Never use "It's not X, it's Y" sentences, or the words "satisfaction" and "desire". No spiritual lingo, no clinical language, no wellness clichés. Keep tantra, kink and Shibari out of headlines; they appear only as credentials on About and FAQ. Copy for each page is written and approved in the Marry Mae Project before it goes into the code; use placeholder text marked [COPY TO COME] rather than inventing claims.

Prices are the final amount the client pays. Do not add "+ IVA" or tax wording until confirmed.

## Legal and safety

- Every hands-on offer page and the FAQ make the education framing clear. Final wording of these pages is checked by a lawyer before launch: mark them `<!-- LEGAL REVIEW -->` in the code.
- Never put client names, stories or photos on the site.
- Contact email: hi@marrymae.com.

## Technical

- Accessible: real `<button>`, `<a href>`, `<label>` for every field, alt text on photos, visible focus, text contrast 4.5:1 (3:1 for headlines 24px+), touch targets 44px.
- Fast: system fonts as fallbacks, `font-display: swap`, images in modern formats and sized for their slot.
- Phones first: every section stacks to one column under 700px.
- No cookie banner needed unless analytics or third-party embeds are added; if they are, ask Marry first.
