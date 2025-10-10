export function disableHoverOnTouchDevices() {
  if (typeof window === "undefined") return;
  document.addEventListener("touchstart", () => {}, true);
  if ("ontouchstart" in window) {
    document.body.classList.add("no-hover");
  }
}
