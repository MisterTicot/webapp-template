"use strict"
/**
 * Service Worker - Loads every components in browser cache
 */

const ServiceWorker = require("@cosmic-plus/domutils/es5/service-worker")
const pkg = require("../package.json")

new ServiceWorker(pkg.name, pkg.version, "verbose")
  .fromCache([
    // Application"
    "/",
    "app.js",
    "index.css",
    "index.html",
    "index.js",

    // Fonts
    "fonts/SourceSansPro-Regular.ttf",
    "fonts/RobotoSlab-Regular.ttf",

    // Images
    "images/cosmic-link.svg",

    // Vendor configuration
    "browserconfig.xml",
    "manifest.json",

    // Icons
    "favicon.ico",
    "icons/16x16.png",
    "icons/32x32.png",
    "icons/192x192.png",
    "icons/512x512.png",
    "icons/apple-touch.png",
    "icons/mstile.png",
    "icons/safari.svg"
  ])
  .precache()
  .register()
