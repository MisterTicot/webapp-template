"use strict"
/**
 * Application initialization
 */

async function init () {
  // Service worker
  const worker = navigator.serviceWorker
  if (worker) {
    worker.register("worker.js")
    worker.addEventListener("controllerchange", () => location.reload())
  }

  // Load application
  await import(/* webpackChunkName: "app" */ "./app")
}

init()
