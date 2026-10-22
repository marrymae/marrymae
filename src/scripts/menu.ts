// Phone menu: a square black button opens a full-screen black menu.
const menu = document.getElementById('menu');
const openBtn = document.querySelector<HTMLButtonElement>('[data-menu-open]');
const closeBtn = document.querySelector<HTMLButtonElement>('[data-menu-close]');

if (menu && openBtn && closeBtn) {
  menu.querySelectorAll<HTMLElement>('.menu__link').forEach((link, i) => link.style.setProperty('--i', String(i)));

  const focusables = () =>
    Array.from(menu.querySelectorAll<HTMLElement>('a[href], button')).filter((el) => el.offsetParent !== null);

  const onKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape') close();
    if (e.key !== 'Tab') return;
    const items = focusables();
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  const open = () => {
    menu.hidden = false;
    openBtn.setAttribute('aria-expanded', 'true');
    document.documentElement.classList.add('menu-open');
    document.addEventListener('keydown', onKey);
    requestAnimationFrame(() => {
      menu.classList.add('is-open');
      closeBtn.focus();
    });
  };

  const close = () => {
    menu.classList.remove('is-open');
    openBtn.setAttribute('aria-expanded', 'false');
    document.documentElement.classList.remove('menu-open');
    document.removeEventListener('keydown', onKey);
    const hide = () => { if (!menu.classList.contains('is-open')) menu.hidden = true; };
    menu.addEventListener('transitionend', hide, { once: true });
    setTimeout(hide, 700);
    openBtn.focus();
  };

  openBtn.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  matchMedia('(min-width: 1081px)').addEventListener('change', (e) => { if (e.matches && !menu.hidden) close(); });
}
