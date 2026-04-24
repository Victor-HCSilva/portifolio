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
    // Setup Theme Toggle
    const changeColorBtns = document.querySelectorAll("#change-color");
    changeColorBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            toggleTheme();
        });
    });

    // Mobile Menu Logic
    const menuBtn = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuLinks = document.querySelectorAll('.mobile-link');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('translate-x-full');
            document.body.style.overflow = 'hidden';
        });

        const closeMenu = () => {
            mobileMenu.classList.add('translate-x-full');
            document.body.style.overflow = 'auto';
        };

        if (closeBtn) closeBtn.addEventListener('click', closeMenu);
        
        menuLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }
});

window.change_color = toggleTheme;