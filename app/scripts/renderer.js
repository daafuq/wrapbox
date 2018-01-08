/* eslint-env node, browser */
const settings = require("./settings");
const EventEmitter = require("events");
const addWindowButtons = require("./add-window-buttons");
const addWebviews = require("./add-webviews");
const addWebviewButtons = require("./add-webview-buttons");
const PerfectScrollbar = require("./perfect-scrollbar.common");

// Event aggregator. Passed to functions as argument.
const watcher = new EventEmitter();
watcher.setMaxListeners(0);

// Main function running all sub-tasks.
function start() {
  // Do not display control buttons on MacOS, it has own inset buttons
  if (process.platform !== "darwin") {
    addWindowButtons("#titlebar", settings.windowButtonsPosition);
  }
  addWebviews("#content", settings.webviews, watcher);
  addWebviewButtons("#leftpanel", settings.webviews, watcher);
  // eslint-disable-next-line no-new
  new PerfectScrollbar("#leftpanel");
}

// Start the main function when the page is ready.
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    start();
  });
} else {
  start();
}
