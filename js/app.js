
import { initializeTheme } from './modules/theme.js';
import { initializeShare } from './modules/share.js';
import { initializeContact } from './modules/contact.js';
import { initializeEasterEggs } from './modules/easterEggs.js';

document.addEventListener("DOMContentLoaded", () => {
    initializeTheme();
    initializeShare();
    initializeContact();
    initializeEasterEggs();
});
