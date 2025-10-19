
import { initializeTheme } from './modules/theme.js';
import { initializeShare } from './modules/share.js';
import { initializeContact } from './modules/contact.js';

document.addEventListener("DOMContentLoaded", () => {
    initializeTheme();
    initializeShare();
    initializeContact();
});
