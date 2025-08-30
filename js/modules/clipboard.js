
import { showToast, fallbackCopyTextToClipboard } from './utils.js';

const initializeClipboard = (copyBtn) => {
    const clipboard = new ClipboardJS(copyBtn);

    clipboard.on('success', function (e) {
        showToast("Link copied to clipboard!");
        copyBtn.style.transform = "scale(0.95)";
        setTimeout(() => {
            copyBtn.style.transform = "";
        }, 150);
        e.clearSelection();
    });

    clipboard.on('error', function (e) {
        fallbackCopyTextToClipboard(copyBtn.getAttribute('data-clipboard-text'));
        showToast("Copied using fallback method");
    });
};

export { initializeClipboard };
