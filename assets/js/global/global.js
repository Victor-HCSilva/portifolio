
// Centralized Theme Logic
const THEME_KEY = 'theme_preference';
const DARK_MODE_CLASS = 'dark-mode';

function getPreferredTheme() {
    const storedTheme = localStorage.getItem(THEME_KEY);
    if (storedTheme) {
        return storedTheme;
    }
    // Default to dark mode if no preference is stored
    return 'dark';
}

function applyTheme(theme) {
    const body = document.body;
    if (theme === 'dark') {
        body.classList.add(DARK_MODE_CLASS);
    } else {
        body.classList.remove(DARK_MODE_CLASS);
    }
}

function toggleTheme() {
    const body = document.body;
    const isDark = body.classList.contains(DARK_MODE_CLASS);
    const newTheme = isDark ? 'light' : 'dark';
    
    applyTheme(newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
}

// Initialize Theme on Load
document.addEventListener('DOMContentLoaded', () => {
    const preferredTheme = getPreferredTheme();
    applyTheme(preferredTheme);

    // Setup Toggle Button if it exists
    const changeColorBtn = document.querySelector("#change-color");
    if (changeColorBtn) {
        changeColorBtn.addEventListener('click', toggleTheme);
    }
});

// Expose toggle function globally just in case inline onclicks are used
window.change_color = toggleTheme;
