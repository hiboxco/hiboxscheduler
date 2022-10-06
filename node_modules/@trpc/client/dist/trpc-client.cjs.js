'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./trpc-client.cjs.prod.js");
} else {
  module.exports = require("./trpc-client.cjs.dev.js");
}
