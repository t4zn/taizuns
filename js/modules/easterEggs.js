// Simple toast notification (works without Toastify)
function showNotification(message) {
  const notification = document.createElement('div');
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: linear-gradient(135deg, #10b981, #059669);
    color: white;
    padding: 16px 24px;
    border-radius: 8px;
    font-family: 'Nunito', sans-serif;
    font-weight: 600;
    z-index: 10000;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    animation: slideIn 0.3s ease-out;
  `;
  
  // Add animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from { transform: translateX(400px); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
  `;
  document.head.appendChild(style);
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.transition = 'all 0.3s ease-out';
    notification.style.transform = 'translateX(400px)';
    notification.style.opacity = '0';
    setTimeout(() => {
      notification.remove();
      style.remove();
    }, 300);
  }, 3000);
}

// Single click on Profile Image - Confetti Effect + Screen Shake
function initProfileImageClick() {
  const profileImage = document.querySelector('.blob-image');
  
  if (profileImage) {
    profileImage.style.cursor = 'pointer';
    profileImage.addEventListener('click', () => {
      activateConfetti();
      activateShakeEffect();
    });
  }
}





function activateConfetti() {
  // Check if light mode is active
  const isLightMode = document.body.classList.contains('light-mode');
  const confettiColor = isLightMode ? '#000000' : '#ffffff';
  
  // Add confetti effect
  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      const confetti = document.createElement('div');
      confetti.style.cssText = `
        position: fixed;
        left: ${Math.random() * 100}%;
        top: -10px;
        width: ${Math.random() * 8 + 4}px;
        height: ${Math.random() * 8 + 4}px;
        background-color: ${confettiColor};
        z-index: 9999;
        pointer-events: none;
        transition: all 4s ease-in;
        border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
      `;
      document.body.appendChild(confetti);

      setTimeout(() => {
        confetti.style.top = '110%';
        confetti.style.transform = `rotate(${Math.random() * 1080}deg)`;
        confetti.style.opacity = '0';
      }, 50);

      setTimeout(() => confetti.remove(), 4100);
    }, i * 40);
  }
}

// Quick cursor movement detection
function initShakeDetection() {
  let shakeCount = 0;
  let lastX = 0;
  let lastY = 0;
  let shakeTimer = null;

  // Mouse shake detection
  document.addEventListener('mousemove', (e) => {
    const deltaX = Math.abs(e.clientX - lastX);
    const deltaY = Math.abs(e.clientY - lastY);

    if (deltaX > 50 || deltaY > 50) {
      shakeCount++;
      clearTimeout(shakeTimer);

      if (shakeCount > 20) {
        activateShakeEffect();
        shakeCount = 0;
      } else {
        shakeTimer = setTimeout(() => {
          shakeCount = 0;
        }, 1000);
      }
    }

    lastX = e.clientX;
    lastY = e.clientY;
  });
}

function activateShakeEffect() {
  const mainContainer = document.querySelector('.main-container');
  
  if (!document.getElementById('shake-style')) {
    const style = document.createElement('style');
    style.id = 'shake-style';
    style.textContent = `
      @keyframes shake {
        0% { transform: translate(0); }
        2% { transform: translate(-3px, 3px); }
        4% { transform: translate(3px, -3px); }
        6% { transform: translate(-3px, -3px); }
        8% { transform: translate(3px, 3px); }
        10% { transform: translate(-3px, 3px); }
        12% { transform: translate(3px, -3px); }
        14% { transform: translate(-3px, -3px); }
        16% { transform: translate(3px, 3px); }
        18% { transform: translate(-3px, 3px); }
        20% { transform: translate(3px, -3px); }
        22% { transform: translate(-3px, -3px); }
        24% { transform: translate(3px, 3px); }
        26% { transform: translate(-3px, 3px); }
        28% { transform: translate(3px, -3px); }
        30% { transform: translate(-3px, -3px); }
        32% { transform: translate(3px, 3px); }
        34% { transform: translate(-3px, 3px); }
        36% { transform: translate(3px, -3px); }
        38% { transform: translate(-3px, -3px); }
        40% { transform: translate(3px, 3px); }
        42% { transform: translate(-2px, 2px); }
        44% { transform: translate(2px, -2px); }
        46% { transform: translate(-2px, -2px); }
        48% { transform: translate(2px, 2px); }
        50% { transform: translate(-2px, 2px); }
        52% { transform: translate(2px, -2px); }
        54% { transform: translate(-2px, -2px); }
        56% { transform: translate(2px, 2px); }
        58% { transform: translate(-2px, 2px); }
        60% { transform: translate(2px, -2px); }
        62% { transform: translate(-1px, 1px); }
        64% { transform: translate(1px, -1px); }
        66% { transform: translate(-1px, -1px); }
        68% { transform: translate(1px, 1px); }
        70% { transform: translate(-1px, 1px); }
        72% { transform: translate(1px, -1px); }
        74% { transform: translate(-1px, -1px); }
        76% { transform: translate(1px, 1px); }
        78% { transform: translate(-1px, 1px); }
        80% { transform: translate(1px, -1px); }
        82% { transform: translate(-1px, -1px); }
        84% { transform: translate(1px, 1px); }
        86% { transform: translate(-1px, 1px); }
        88% { transform: translate(1px, -1px); }
        90% { transform: translate(-1px, -1px); }
        92% { transform: translate(1px, 1px); }
        94% { transform: translate(-1px, 1px); }
        96% { transform: translate(1px, -1px); }
        98% { transform: translate(-1px, -1px); }
        100% { transform: translate(0); }
      }
    `;
    document.head.appendChild(style);
  }
  
  mainContainer.style.animation = 'shake 3s ease-in-out';

  setTimeout(() => {
    mainContainer.style.animation = '';
  }, 3000);
}



// Initialize all easter eggs
export function initializeEasterEggs() {
  initProfileImageClick();
  initShakeDetection();
}
