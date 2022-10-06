'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./trpc-react-ssg.cjs.prod.js");
} else {
  module.exports = require("./trpc-react-ssg.cjs.dev.js");
}
