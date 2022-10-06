'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./trpc-client-links-httpLink.cjs.prod.js");
} else {
  module.exports = require("./trpc-client-links-httpLink.cjs.dev.js");
}
