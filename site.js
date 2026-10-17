// ── Shared site scripts: scroll progress + theme toggle ──
// Loaded by every page. Page-specific scripts stay inline in each page.
// Note: top-level `const` names here share the global lexical scope with
// inline scripts, so pages must not redeclare these identifiers.

// Scroll Progress Bar
const progressBar = document.getElementById('scrollProgress');
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = progress + '%';
});

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const iconSun = themeToggle.querySelector('.icon-sun');
const iconMoon = themeToggle.querySelector('.icon-moon');

// Get saved theme or use system preference
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

// Apply initial theme
document.documentElement.setAttribute('data-theme', initialTheme);
updateToggleIcon(initialTheme);

// Toggle function
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateToggleIcon(newTheme);
});

function updateToggleIcon(theme) {
    if (theme === 'dark') {
        iconSun.style.display = 'none';
        iconMoon.style.display = 'block';
    } else {
        iconSun.style.display = 'block';
        iconMoon.style.display = 'none';
    }
}

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        const newTheme = e.matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        updateToggleIcon(newTheme);
    }
});
