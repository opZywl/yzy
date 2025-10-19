const script = `(() => {
  const applyTheme = (nextTheme) => {
    const root = document.documentElement;
    const body = document.body;
    root.classList.remove('light', 'dark');
    root.classList.add(nextTheme);
    root.style.colorScheme = nextTheme;
    root.dataset.theme = nextTheme;
    if (body) {
      body.classList.remove('light', 'dark');
      body.classList.add(nextTheme);
      body.dataset.theme = nextTheme;
    }
  };

  try {
    const storageKey = 'theme';
    const stored = localStorage.getItem(storageKey);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = stored === 'light' || stored === 'dark' ? stored : prefersDark ? 'dark' : 'light';
    applyTheme(theme);
  } catch (error) {
    applyTheme('light');
  }
})();`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
