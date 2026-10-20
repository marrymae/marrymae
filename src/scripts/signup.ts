// The newsletter tool is still to be chosen, so the form only checks the address for now.
document.querySelectorAll<HTMLFormElement>('[data-signup]').forEach((form) => {
  const status = form.querySelector<HTMLElement>('.signup__status');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector<HTMLInputElement>('input[type="email"]');
    if (!input || !status) return;
    status.textContent = input.checkValidity() ? 'newsletter tool to come' : 'Please enter a valid email address.';
    if (!input.checkValidity()) input.focus();
  });
});
