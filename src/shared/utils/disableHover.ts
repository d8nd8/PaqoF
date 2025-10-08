export function disableHoverOnTouchDevices() {
  const isTouchDevice =
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0;

  if (isTouchDevice) {
    try {
      const style = document.createElement("style");
      style.innerHTML = `
        *:hover {
          pointer-events: none !important;
        }
      `;
      document.head.appendChild(style);
    } catch (e) {
      console.warn("Failed to disable hover:", e);
    }
  }
}
