export function initializeContact() {
    const contactOverlay = document.getElementById('contactOverlay');
    const contactTriggers = document.querySelectorAll('.contact-trigger');
    const closeContactBtn = document.getElementById('closeContactBtn');
    const contactForm = document.getElementById('contactForm');

    // Open contact overlay
    contactTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            contactOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close contact overlay
    const closeOverlay = () => {
        contactOverlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    closeContactBtn.addEventListener('click', closeOverlay);

    // Close on overlay click (outside popup)
    contactOverlay.addEventListener('click', (e) => {
        if (e.target === contactOverlay) {
            closeOverlay();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && contactOverlay.classList.contains('active')) {
            closeOverlay();
        }
    });

    // Handle form submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        
        // Submit using fetch with no-cors mode
        fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            mode: 'no-cors'
        })
        .then(() => {
            // Show success message
            showToast('Thank you! I\'ll get back to you as soon as possible.', 'success');
            
            // Reset form and close overlay
            contactForm.reset();
            setTimeout(() => {
                closeOverlay();
            }, 1500);
        })
        .catch(error => {
            console.error('Error submitting form:', error);
            showToast('There was an error. Please try again.', 'error');
        });
    });
}

function showToast(message, type = 'success') {
    if (typeof Toastify !== 'undefined') {
        Toastify({
            text: message,
            duration: 3000,
            gravity: "top",
            position: "center",
            style: {
                background: type === 'success' 
                    ? "linear-gradient(to right, #00b09b, #96c93d)" 
                    : "linear-gradient(to right, #ff5f6d, #ffc371)",
            }
        }).showToast();
    } else {
        alert(message);
    }
}
