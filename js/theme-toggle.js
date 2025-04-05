const toggleBtn = document.getElementById('theme-toggle');
const root = document.documentElement;
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

const currentTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
setTheme(currentTheme);

toggleBtn.addEventListener('click', () => {
  const newTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
});

function setTheme(theme) {
  root.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  toggleBtn.textContent = theme === 'dark' ? '🌙' : '☀️';

  // Update all the icons that have "theme-logo" class
  document.querySelectorAll('.theme-logo').forEach((img) => {
    const newSrc = img.getAttribute(`data-${theme}`);
    if (newSrc) img.src = newSrc;
  });
}
