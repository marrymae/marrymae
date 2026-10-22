// Micro-animations with GSAP. Runs only when the <html> element has the .motion class,
// which the layout adds when the visitor has not asked for reduced motion.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

const root = document.documentElement;
const header = document.querySelector('.site-header');
const inHero = (el: Element) => !!header?.contains(el);
const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;

const onEnter = (trigger: Element, start = 'top 85%') => ({ trigger, start, once: true });

// Items in the header play in sequence on load; everything else plays as it scrolls into view.
const when = (el: Element, heroDelay: number, start?: string) =>
  inHero(el) ? { delay: heroDelay } : { scrollTrigger: onEnter(el, start) };

const fontsReady = () =>
  Promise.race([document.fonts?.ready ?? Promise.resolve(), new Promise((r) => setTimeout(r, 1200))]);

function navIntro() {
  const navItems = document.querySelectorAll('.nav > .wordmark, .nav__links > li, .menu-toggle');
  gsap.from(navItems, { y: -16, autoAlpha: 0, duration: 0.9, ease: 'expo.out', stagger: 0.05 });
}

function headlines() {
  document.querySelectorAll<HTMLElement>('[data-split]').forEach((el) => {
    gsap.set(el, { autoAlpha: 1 });
    SplitText.create(el, {
      type: 'lines',
      mask: 'lines',
      autoSplit: true,
      onSplit(self) {
        return gsap.from(self.lines, {
          yPercent: 110,
          duration: 1.2,
          ease: 'expo.out',
          stagger: 0.1,
          ...when(el, 0.15),
        });
      },
    });
  });
}

function typed() {
  document.querySelectorAll<HTMLElement>('[data-type]').forEach((el) => {
    const split = SplitText.create(el, { type: 'chars' });
    gsap.set(el, { autoAlpha: 1 });
    gsap.from(split.chars, {
      autoAlpha: 0,
      duration: 0.01,
      stagger: 0.028,
      ease: 'none',
      ...when(el, 0.05, 'top 90%'),
    });
  });
}

function reveals() {
  let heroIndex = 0;
  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    const hero = inHero(el);
    gsap.from(el, {
      y: 28,
      autoAlpha: 0,
      duration: 1,
      ease: 'expo.out',
      ...when(el, 0.55 + (hero ? heroIndex++ : 0) * 0.12, 'top 90%'),
    });
  });

  document.querySelectorAll<HTMLElement>('[data-stagger]').forEach((el) => {
    gsap.from(el.children, {
      y: 48,
      autoAlpha: 0,
      duration: 1.1,
      ease: 'expo.out',
      stagger: 0.12,
      ...when(el, 0.6),
    });
  });
}

function photos() {
  document.querySelectorAll<HTMLElement>('[data-wipe]').forEach((el) => {
    gsap.fromTo(
      el,
      { clipPath: 'inset(100% 0% 0% 0%)' },
      {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 1.4,
        ease: 'expo.inOut',
        ...when(el, 0.1),
      },
    );

    const caption = el.querySelector('[data-parallax]');
    if (caption) {
      gsap.fromTo(caption, { y: -24 }, { y: 0, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true } });
    }
  });

  // The hero photo block leans a little toward the pointer.
  const heroPhoto = document.querySelector<HTMLElement>('.photo--hero');
  if (heroPhoto && header && finePointer) {
    gsap.set(heroPhoto, { transformPerspective: 900 });
    const rx = gsap.quickTo(heroPhoto, 'rotationX', { duration: 0.8, ease: 'power3.out' });
    const ry = gsap.quickTo(heroPhoto, 'rotationY', { duration: 0.8, ease: 'power3.out' });
    header.addEventListener('pointermove', (e) => {
      const r = heroPhoto.getBoundingClientRect();
      ry(((e.clientX - (r.left + r.width / 2)) / window.innerWidth) * 8);
      rx(-((e.clientY - (r.top + r.height / 2)) / window.innerHeight) * 6);
    });
    header.addEventListener('pointerleave', () => { rx(0); ry(0); });
  }
}

function lines() {
  // The bright red method line and the booking-step lines draw left to right.
  document.querySelectorAll<HTMLElement>('[data-draw]').forEach((el) => {
    gsap.from(el, { scaleX: 0, duration: 1.4, ease: 'expo.inOut', scrollTrigger: onEnter(el) });
  });

  document.querySelectorAll<HTMLElement>('[data-steps]').forEach((list) => {
    const steps = list.querySelectorAll('.step');
    gsap.from(steps, { y: 32, autoAlpha: 0, duration: 1, ease: 'expo.out', stagger: 0.1, delay: 0.3, scrollTrigger: onEnter(list) });
    list.querySelectorAll<HTMLElement>('.step__num').forEach((num, i) => {
      const counter = { n: 0 };
      gsap.to(counter, {
        n: i + 1,
        duration: 0.6 + i * 0.15,
        ease: 'power2.out',
        delay: 0.3,
        scrollTrigger: onEnter(list),
        onUpdate: () => { num.textContent = String(Math.round(counter.n)).padStart(2, '0'); },
      });
    });
  });

  document.querySelectorAll<HTMLElement>('.journey').forEach((list) => {
    gsap.from(list.querySelectorAll('.journey__line'), { scaleX: 0, duration: 1.1, ease: 'expo.inOut', stagger: 0.15, scrollTrigger: onEnter(list) });
  });

  // The recommended package fills with blood red from the bottom.
  document.querySelectorAll<HTMLElement>('.pkg__fill').forEach((fill) => {
    gsap.fromTo(
      fill,
      { clipPath: 'inset(100% 0% 0% 0%)' },
      { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.2, ease: 'expo.inOut', delay: 0.35, scrollTrigger: onEnter(fill.parentElement!) },
    );
  });
}

function timeline() {
  // The journey line draws in, then the square nodes and stops follow along it.
  document.querySelectorAll<HTMLElement>('[data-timeline]').forEach((t) => {
    const vertical = matchMedia('(max-width: 700px)').matches;
    const line = t.querySelector('[data-timeline-line]');
    const tl = gsap.timeline({ scrollTrigger: onEnter(t, 'top 80%') });
    if (line) tl.from(line, { [vertical ? 'scaleY' : 'scaleX']: 0, duration: 1.6, ease: 'expo.inOut' }, 0);
    tl.from(t.querySelectorAll('.timeline__stop'), { y: 24, autoAlpha: 0, duration: 0.9, ease: 'expo.out', stagger: 0.22 }, 0.3);
    tl.from(t.querySelectorAll('[data-timeline-node]'), { scale: 0, duration: 0.6, ease: 'back.out(2)', stagger: 0.22 }, 0.4);
    tl.from(t.querySelectorAll('[data-timeline-bracket]'), { [vertical ? 'scaleY' : 'scaleX']: 0, autoAlpha: 0, duration: 0.9, ease: 'expo.inOut' }, 1.1);
  });
}

function scrubWords() {
  // "Nobody performs in my spaces." darkens word by word as it scrolls into view.
  document.querySelectorAll<HTMLElement>('[data-scrub-words]').forEach((el) => {
    const split = SplitText.create(el, { type: 'words' });
    gsap.set(el, { autoAlpha: 1 });
    gsap.fromTo(
      split.words,
      { opacity: 0.12 },
      { opacity: 1, stagger: 0.15, ease: 'none', scrollTrigger: { trigger: el, start: 'top 85%', end: 'top 40%', scrub: true } },
    );
  });
}

function footer() {
  const mark = document.querySelector<HTMLElement>('.wordmark--footer');
  if (!mark) return;
  gsap.set(mark, { autoAlpha: 1 });
  const parts = mark.querySelectorAll('.wordmark__marry, .wordmark__mae');
  gsap.from(parts, { yPercent: 110, duration: 1.3, ease: 'expo.out', stagger: 0.12, scrollTrigger: onEnter(mark, 'top 95%') });
}

function magnetic() {
  if (!finePointer) return;
  document.querySelectorAll<HTMLElement>('[data-magnetic], .nav .btn').forEach((el) => {
    const x = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power3.out' });
    const y = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'power3.out' });
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      x((e.clientX - (r.left + r.width / 2)) * 0.18);
      y((e.clientY - (r.top + r.height / 2)) * 0.3);
    });
    el.addEventListener('pointerleave', () => { x(0); y(0); });
  });
}

async function init() {
  if (!root.classList.contains('motion')) return;
  await fontsReady();
  // The layout's safety timer may have switched motion off while fonts loaded.
  if (!root.classList.contains('motion')) return;

  navIntro();
  headlines();
  typed();
  reveals();
  photos();
  lines();
  scrubWords();
  timeline();
  footer();
  magnetic();

  root.classList.add('motion-ready');
  ScrollTrigger.refresh();
}

init();
