import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
    state: () => ({
        theme: 'light',
        sidebar: false,
        menu: 'vertical',
        layout: 'full',
        rtlClass: 'ltr',
        animation: '',
        navbar: 'navbar-sticky',
        locale: 'en',
        mainLayout: 'app',
        semidark: false,
        mainLoader: false,
        languageList: [
            { code: 'en', name: 'English' },
            { code: 'el', name: 'Greek' },
        ],
    }),
    actions: {
        toggleTheme(payload = null) {
            payload = payload || this.theme;
            localStorage.setItem('theme', payload);
            this.theme = payload;
            if (payload === 'light') {
                document.querySelector('body')?.classList.remove('dark');
            } else {
                document.querySelector('body')?.classList.add('dark');
            }
        },
        toggleMenu(payload = null) {
            payload = payload || this.menu;
            this.sidebar = false;
            localStorage.setItem('menu', payload);
            this.menu = payload;
        },
        toggleLayout(payload = null) {
            payload = payload || this.layout;
            localStorage.setItem('layout', payload);
            this.layout = payload;
        },
        toggleRTL(payload = null) {
            payload = payload || this.rtlClass;
            localStorage.setItem('rtlClass', payload);
            this.rtlClass = payload;
            document.querySelector('html')?.setAttribute('dir', payload || 'ltr');
        },
        toggleAnimation(payload = null) {
            payload = payload || this.animation;
            payload = payload?.trim();
            localStorage.setItem('animation', payload);
            this.animation = payload;
        },
        toggleNavbar(payload = null) {
            payload = payload || this.navbar;
            localStorage.setItem('navbar', payload);
            this.navbar = payload;
        },
        toggleSemidark(payload = null) {
            payload = payload || false;
            localStorage.setItem('semidark', payload);
            this.semidark = payload;
        },
        toggleLocale(payload = null) {
            payload = payload || this.locale;
            localStorage.setItem('i18n_locale', payload);
            this.locale = payload;
        },
        toggleSidebar() {
            this.sidebar = !this.sidebar;
        },
        setMainLayout(payload = null) {
            this.mainLayout = payload || 'app';
        },
        toggleMainLoader(payload = null) {
            this.mainLoader = payload !== null ? payload : !this.mainLoader;
        },
    },
});
