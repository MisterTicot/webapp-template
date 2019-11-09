"use strict"
/**
 * Application code
 */

const html = require("@cosmic-plus/domutils/es5/html")

const main = html.grab("main")
html.append(main, "Hello, World!")
