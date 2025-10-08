export function disableHoverOnTouchDevices() {
  const isTouchDevice =
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0;

  if (isTouchDevice) {
    const style = document.createElement("style");
    style.innerHTML = `
      /* Убираем hover */
      *:hover {
        background: inherit !important;
        color: inherit !important;
        border-color: inherit !important;
        box-shadow: none !important;
        text-decoration: none !important;
        opacity: 1 !important;
        transform: none !important;
        transition: none !important;
      }

      /* Убираем active (когда нажал пальцем) */
      *:active {
        background: inherit !important;
        color: inherit !important;
        border-color: inherit !important;
        box-shadow: none !important;
        opacity: 1 !important;
        transform: none !important;
      }

      /* Убираем focus-обводки, если они не нужны */
      *:focus {
        outline: none !important;
        box-shadow: none !important;
      }
    `;
    document.head.appendChild(style);
  }
}
