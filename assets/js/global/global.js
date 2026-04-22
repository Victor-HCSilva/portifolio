// Centralized Theme Logic - Tailwind Compatible
const THEME_KEY = 'theme_preference';

function getPreferredTheme() {
    const storedTheme = localStorage.getItem(THEME_KEY);
    if (storedTheme) {
        return storedTheme;
    }
    // Check user's system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
    const root = document.documentElement;
    if (theme === 'dark') {
        root.classList.add('dark');
    } else {
        root.classList.remove('dark');
    }
    localStorage.setItem(THEME_KEY, theme);
}

function toggleTheme() {
    const isDark = document.documentElement.classList.contains('dark');
    const newTheme = isDark ? 'light' : 'dark';
    applyTheme(newTheme);
}

// Initial execution - Run as fast as possible to prevent flicker
(function() {
    const theme = getPreferredTheme();
    applyTheme(theme);
})();

document.addEventListener('DOMContentLoaded', () => {
    // Setup Toggle Button if it exists (using querySelectorAll for all potential buttons)
    const changeColorBtns = document.querySelectorAll("#change-color");
    changeColorBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            toggleTheme();
        });
    });
});

window.change_color = toggleTheme;