/* eslint-env node, browser */
const settings = require("./settings");
const ui = require("./ui");

// Main function running all sub-tasks.
function start() {
  const resx = document.querySelector("#resx");
  resx.value = settings.windowWidth;
  const resy = document.querySelector("#resx");
  resy.value = settings.windowHeight;
}

// Start the main function when the page is ready.
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    start();
  });
} else {
  start();
}