const THEME_KEY = 'coffee-theme';
const themeToggle = document.getElementById('theme-toggle');

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(THEME_KEY, theme);
}

applyTheme(document.documentElement.dataset.theme);

themeToggle?.addEventListener('click', function () {
  const current = document.documentElement.dataset.theme;
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
});
