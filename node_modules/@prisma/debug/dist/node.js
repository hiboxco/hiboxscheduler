var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  default: () => node_default
});
var import_tty = __toModule(require("tty"));
var import_util = __toModule(require("util"));
var import_common = __toModule(require("./common"));
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.destroy = import_util.default.deprecate(() => {
}, "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
exports.colors = [6, 2, 3, 4, 5, 1];
exports.inspectOpts = Object.keys(process.env).filter((key) => {
  return /^debug_/i.test(key);
}).reduce((obj, key) => {
  const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k) => {
    return k.toUpperCase();
  });
  let val = process.env[key];
  if (/^(yes|on|true|enabled)$/i.test(val)) {
    val = true;
  } else if (/^(no|off|false|disabled)$/i.test(val)) {
    val = false;
  } else if (val === "null") {
    val = null;
  } else {
    val = Number(val);
  }
  obj[prop] = val;
  return obj;
}, {});
function useColors() {
  var _a;
  return "colors" in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : import_tty.default.isatty((_a = process.stderr) == null ? void 0 : _a.fd);
}
__name(useColors, "useColors");
__name2(useColors, "useColors");
function formatArgs(args) {
  const { namespace: name, useColors: useColors2 } = this;
  if (useColors2) {
    const c = this.color;
    const colorCode = "[3" + (c < 8 ? c : "8;5;" + c);
    const prefix = `  ${colorCode};1m${name} [0m`;
    args[0] = prefix + args[0].split("\n").join("\n" + prefix);
    args.push(colorCode + "m+" + module.exports.humanize(this.diff) + "[0m");
  } else {
    args[0] = getDate() + name + " " + args[0];
  }
}
__name(formatArgs, "formatArgs");
__name2(formatArgs, "formatArgs");
function getDate() {
  if (exports.inspectOpts.hideDate) {
    return "";
  }
  return new Date().toISOString() + " ";
}
__name(getDate, "getDate");
__name2(getDate, "getDate");
function log(...args) {
  return process.stderr.write(import_util.default.format(...args) + "\n");
}
__name(log, "log");
__name2(log, "log");
function save(namespaces) {
  if (namespaces) {
    process.env.DEBUG = namespaces;
  } else {
    delete process.env.DEBUG;
  }
}
__name(save, "save");
__name2(save, "save");
function load() {
  return process.env.DEBUG;
}
__name(load, "load");
__name2(load, "load");
function init(debug) {
  debug.inspectOpts = {};
  const keys = Object.keys(exports.inspectOpts);
  for (let i = 0; i < keys.length; i++) {
    debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
  }
}
__name(init, "init");
__name2(init, "init");
const mod = (0, import_common.setup)(exports);
module.exports = mod;
var node_default = mod;
const { formatters } = mod;
formatters.o = function(v) {
  this.inspectOpts.colors = this.useColors;
  return import_util.default.inspect(v, this.inspectOpts).split("\n").map((str) => str.trim()).join(" ");
};
formatters.O = function(v) {
  this.inspectOpts.colors = this.useColors;
  return import_util.default.inspect(v, this.inspectOpts);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
