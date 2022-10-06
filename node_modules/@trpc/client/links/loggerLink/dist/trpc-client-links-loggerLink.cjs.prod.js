'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _objectSpread = require('@babel/runtime/helpers/objectSpread2');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');

var palette = {
  query: ['72e3ff', '3fb0d8'],
  mutation: ['c5a3fc', '904dfc'],
  subscription: ['ff49e1', 'd83fbe']
};

// maybe this should be moved to it's own package
var defaultLogger = function defaultLogger() {
  var c = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : console;
  return function (props) {
    var direction = props.direction,
        input = props.input,
        type = props.type,
        path = props.path,
        context = props.context,
        id = props.id;

    var _palette$type = _slicedToArray(palette[type], 2),
        light = _palette$type[0],
        dark = _palette$type[1];

    var css = "\n    background-color: #".concat(direction === 'up' ? light : dark, "; \n    color: ").concat(direction === 'up' ? 'black' : 'white', ";\n    padding: 2px;\n  ");
    var parts = ['%c', direction === 'up' ? '>>' : '<<', type, "#".concat(id), "%c".concat(path, "%c"), '%O'];
    var args = [css, "".concat(css, "; font-weight: bold;"), "".concat(css, "; font-weight: normal;")];

    if (props.direction === 'up') {
      args.push({
        input: input,
        context: context
      });
    } else {
      args.push({
        input: input,
        result: props.result,
        elapsedMs: props.elapsedMs,
        context: context
      });
    }

    var fn = props.direction === 'down' && props.result && props.result instanceof Error ? 'error' : 'log';
    c[fn].apply(null, [parts.join(' ')].concat(args));
  };
};

function loggerLink() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _opts$enabled = opts.enabled,
      enabled = _opts$enabled === void 0 ? function () {
    return true;
  } : _opts$enabled;
  var _opts$logger = opts.logger,
      logger = _opts$logger === void 0 ? defaultLogger(opts.console) : _opts$logger;
  return function () {
    return function (_ref) {
      var op = _ref.op,
          next = _ref.next,
          prev = _ref.prev;
      // ->
      enabled(_objectSpread(_objectSpread({}, op), {}, {
        direction: 'up'
      })) && logger(_objectSpread(_objectSpread({}, op), {}, {
        direction: 'up'
      }));
      var requestStartTime = Date.now();
      next(op, function (result) {
        var elapsedMs = Date.now() - requestStartTime;
        enabled(_objectSpread(_objectSpread({}, op), {}, {
          direction: 'down',
          result: result
        })) && logger(_objectSpread(_objectSpread({}, op), {}, {
          direction: 'down',
          elapsedMs: elapsedMs,
          result: result
        })); // <-

        prev(result);
      });
    };
  };
}

exports.loggerLink = loggerLink;
