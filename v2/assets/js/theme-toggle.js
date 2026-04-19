// ════════════════════════════════════════════════════════════
// THEME TOGGLE - Light/Dark Mode Management
// ════════════════════════════════════════════════════════════

class ThemeManager {
    constructor() {
        this.html = document.documentElement;
        this.themeToggle = document.getElementById('themeToggle');
        this.themeIcon = document.getElementById('themeIcon');
        this.storageKey = 'portfolio-theme-v2';
        
        this.init();
    }

    init() {
        // Load saved theme or use system preference
        const savedTheme = localStorage.getItem(this.storageKey);
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        const theme = savedTheme || (prefersDark ? 'dark' : 'light');
        this.setTheme(theme);
        
        // Listen for theme toggle button
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => this.toggleTheme());
        }
        
        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem(this.storageKey)) {
                this.setTheme(e.matches ? 'dark' : 'light');
            }
        });
    }

    setTheme(theme) {
        this.html.setAttribute('data-theme', theme);
        this.updateIcon(theme);
        
        // Update meta theme-color
        const metaTheme = document.querySelector('meta[name="theme-color"]');
        if (metaTheme) {
            metaTheme.setAttribute('content', theme === 'dark' ? '#1a1a2e' : '#f8f9fa');
        }
    }

    toggleTheme() {
        const currentTheme = this.html.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        this.setTheme(newTheme);
        localStorage.setItem(this.storageKey, newTheme);
        
        // Animate transition
        this.animateThemeChange();
    }

    updateIcon(theme) {
        if (this.themeIcon) {
            this.themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
            this.themeIcon.style.animation = 'none';
            setTimeout(() => {
                this.themeIcon.style.animation = 'fadeInUp 300ms ease-out';
            }, 10);
        }
    }

    animateThemeChange() {
        document.body.style.opacity = '0.95';
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 150);
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ThemeManager;
}
