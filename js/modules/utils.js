
// Toast helper
function showToast(message, isError = false) {
  Toastify({
    text: `${isError ? "⚠️" : "✅"} ${message}`,
    duration: 3000,
    gravity: "bottom",
    position: "right",
    backgroundColor: isError
      ? "linear-gradient(135deg, #ef4444, #dc2626)"
      : "linear-gradient(135deg, #10b981, #059669)",
    stopOnFocus: true,
    close: true,
  }).showToast();
}

// Optional fallback for clipboard API
function fallbackCopyTextToClipboard(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.top = "-9999px";
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  try {
    document.execCommand("copy");
  } catch (err) {
    console.error("Fallback copy failed", err);
  }
  document.body.removeChild(textarea);
}

export { showToast, fallbackCopyTextToClipboard };
