
import { showToast } from './utils.js';

const initializeShare = () => {
    document.querySelectorAll(".share-trigger").forEach((btn) => {
        btn.addEventListener("click", async function(e) {
            e.preventDefault();
            const link = this.getAttribute("data-link");
            
            if (navigator.share) {
                try {
                    await navigator.share({
                        title: "Check this out!",
                        text: "I wanted to share this link with you",
                        url: link,
                    });
                } catch (err) {
                    if (err.name !== "AbortError") {
                        showToast("Share failed", true);
                    }
                }
            } else {
                showToast("Sharing not supported on this device", true);
            }
        });
    });
};

export { initializeShare };
