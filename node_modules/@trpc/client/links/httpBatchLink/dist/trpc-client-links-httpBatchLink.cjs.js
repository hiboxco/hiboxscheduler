'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./trpc-client-links-httpBatchLink.cjs.prod.js");
} else {
  module.exports = require("./trpc-client-links-httpBatchLink.cjs.dev.js");
}
