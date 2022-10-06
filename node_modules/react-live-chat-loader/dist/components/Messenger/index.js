"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _useProvider = _interopRequireDefault(require("../../hooks/useProvider"));

var _useChat = _interopRequireDefault(require("../../hooks/useChat"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const styles = {
  appearance: 'none',
  background: 'none',
  borderRadius: '50%',
  bottom: '18pt',
  display: 'inline',
  height: '45pt',
  padding: '0px',
  position: 'fixed',
  right: '18pt',
  top: 'auto',
  width: '45pt',
  zIndex: 2147483647,
  // 1 more than the actual widget
  overflow: 'hidden',
  boxShadow: '0 3px 12px rgba(0, 0, 0, .15)',
  transition: 'box-shadow 150ms linear',
  cursor: 'pointer',
  outline: 'none',
  userSelect: 'none'
};
// eslint-disable-next-line react/display-name
const CustomerChat = /*#__PURE__*/(0, _react.memo)(({
  providerKey,
  color,
  loggedInGreeting,
  loggedOutGreeting,
  greetingDialogDisplay,
  greetingDialogDelay
}) => {
  const fields = {
    page_id: providerKey,
    theme_color: color,
    logged_in_greeting: loggedInGreeting,
    logged_out_greeting: loggedOutGreeting,
    greeting_dialog_display: greetingDialogDisplay,
    greeting_dialog_delay: greetingDialogDelay
  };
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", _extends({
    className: "fb-customerchat"
  }, fields)));
});

const Widget = ({
  color
}) => {
  const [state, loadChat] = (0, _useChat.default)({
    loadWhenIdle: true
  });

  if (state === 'complete') {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: styles,
    role: "button",
    "aria-label": "Load Chat",
    "aria-busy": "true",
    "aria-live": "polite",
    onClick: () => loadChat({
      open: true
    }),
    onMouseEnter: () => loadChat({
      open: false
    })
  }, /*#__PURE__*/_react.default.createElement("svg", {
    width: "60px",
    height: "60px",
    viewBox: "0 0 60 60"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    x: "0",
    y: "0",
    width: "60px",
    height: "60px"
  }, /*#__PURE__*/_react.default.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("circle", {
    fill: color ? color : '#0084FF',
    cx: "30",
    cy: "30",
    r: "30"
  }), /*#__PURE__*/_react.default.createElement("svg", {
    x: "10",
    y: "10"
  }, /*#__PURE__*/_react.default.createElement("g", {
    transform: "translate(0.000000, -10.000000)",
    fill: "#FFFFFF"
  }, /*#__PURE__*/_react.default.createElement("g", {
    id: "logo",
    transform: "translate(0.000000, 10.000000)"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M20,0 C31.2666,0 40,8.2528 40,19.4 C40,30.5472 31.2666,38.8 20,38.8 C17.9763,38.8 16.0348,38.5327 14.2106,38.0311 C13.856,37.9335 13.4789,37.9612 13.1424,38.1098 L9.1727,39.8621 C8.1343,40.3205 6.9621,39.5819 6.9273,38.4474 L6.8184,34.8894 C6.805,34.4513 6.6078,34.0414 6.2811,33.7492 C2.3896,30.2691 0,25.2307 0,19.4 C0,8.2528 8.7334,0 20,0 Z M7.99009,25.07344 C7.42629,25.96794 8.52579,26.97594 9.36809,26.33674 L15.67879,21.54734 C16.10569,21.22334 16.69559,21.22164 17.12429,21.54314 L21.79709,25.04774 C23.19919,26.09944 25.20039,25.73014 26.13499,24.24744 L32.00999,14.92654 C32.57369,14.03204 31.47419,13.02404 30.63189,13.66324 L24.32119,18.45264 C23.89429,18.77664 23.30439,18.77834 22.87569,18.45674 L18.20299,14.95224 C16.80079,13.90064 14.79959,14.26984 13.86509,15.75264 L7.99009,25.07344 Z"
  })))))))));
};

const Messenger = (_ref) => {
  let {
    color = ''
  } = _ref,
      props = _objectWithoutProperties(_ref, ["color"]);

  const {
    providerKey
  } = (0, _useProvider.default)();
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(CustomerChat, _extends({
    color: color,
    providerKey: providerKey
  }, props)), /*#__PURE__*/_react.default.createElement(Widget, {
    color: color
  }));
};

var _default = Messenger;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01lc3Nlbmdlci9pbmRleC50c3giXSwibmFtZXMiOlsic3R5bGVzIiwiYXBwZWFyYW5jZSIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJib3R0b20iLCJkaXNwbGF5IiwiaGVpZ2h0IiwicGFkZGluZyIsInBvc2l0aW9uIiwicmlnaHQiLCJ0b3AiLCJ3aWR0aCIsInpJbmRleCIsIm92ZXJmbG93IiwiYm94U2hhZG93IiwidHJhbnNpdGlvbiIsImN1cnNvciIsIm91dGxpbmUiLCJ1c2VyU2VsZWN0IiwiQ3VzdG9tZXJDaGF0IiwicHJvdmlkZXJLZXkiLCJjb2xvciIsImxvZ2dlZEluR3JlZXRpbmciLCJsb2dnZWRPdXRHcmVldGluZyIsImdyZWV0aW5nRGlhbG9nRGlzcGxheSIsImdyZWV0aW5nRGlhbG9nRGVsYXkiLCJmaWVsZHMiLCJwYWdlX2lkIiwidGhlbWVfY29sb3IiLCJsb2dnZWRfaW5fZ3JlZXRpbmciLCJsb2dnZWRfb3V0X2dyZWV0aW5nIiwiZ3JlZXRpbmdfZGlhbG9nX2Rpc3BsYXkiLCJncmVldGluZ19kaWFsb2dfZGVsYXkiLCJXaWRnZXQiLCJzdGF0ZSIsImxvYWRDaGF0IiwibG9hZFdoZW5JZGxlIiwib3BlbiIsIk1lc3NlbmdlciIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBR0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsTUFBTUEsTUFBcUIsR0FBRztBQUM1QkMsRUFBQUEsVUFBVSxFQUFFLE1BRGdCO0FBRTVCQyxFQUFBQSxVQUFVLEVBQUUsTUFGZ0I7QUFHNUJDLEVBQUFBLFlBQVksRUFBRSxLQUhjO0FBSTVCQyxFQUFBQSxNQUFNLEVBQUUsTUFKb0I7QUFLNUJDLEVBQUFBLE9BQU8sRUFBRSxRQUxtQjtBQU01QkMsRUFBQUEsTUFBTSxFQUFFLE1BTm9CO0FBTzVCQyxFQUFBQSxPQUFPLEVBQUUsS0FQbUI7QUFRNUJDLEVBQUFBLFFBQVEsRUFBRSxPQVJrQjtB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TUFBTjtBQUFhLElBQUEsU0FBUyxFQUFDO0FBQXZCLGtCQUNFO0FBQU0sSUFBQSxDQUFDLEVBQUM7QUFBUixJQURGLENBREYsQ0FERixDQUZGLENBREYsQ0FERixDQURGLENBVEYsQ0FERjtBQTRCRCxDQW5DRDs7QUFxQ0EsTUFBTWlCLFNBQVMsR0FBRyxVQUFrRDtBQUFBLE1BQWpEO0FBQUVqQixJQUFBQSxLQUFLLEdBQUc7QUFBVixHQUFpRDtBQUFBLE1BQWhDa0IsS0FBZ0M7O0FBQ2xFLFFBQU07QUFBRW5CLElBQUFBO0FBQUYsTUFBa0IsMkJBQXhCO0FBRUEsc0JBQ0UseUVBQ0UsNkJBQUMsWUFBRDtBQUFjLElBQUEsS0FBSyxFQUFFQyxLQUFyQjtBQUE0QixJQUFBLFdBQVcsRUFBRUQ7QUFBekMsS0FBMERtQixLQUExRCxFQURGLGVBRUUsNkJBQUMsTUFBRDtBQUFRLElBQUEsS0FBSyxFQUFFbEI7QUFBZixJQUZGLENBREY7QUFNRCxDQVREOztlQVdlaUIsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDU1NQcm9wZXJ0aWVzLCBtZW1vIH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vdHlwZXMnXG5pbXBvcnQgdXNlUHJvdmlkZXIgZnJvbSAnLi4vLi4vaG9va3MvdXNlUHJvdmlkZXInXG5pbXBvcnQgdXNlQ2hhdCBmcm9tICcuLi8uLi9ob29rcy91c2VDaGF0J1xuXG5jb25zdCBzdHlsZXM6IENTU1Byb3BlcnRpZXMgPSB7XG4gIGFwcGVhcmFuY2U6ICdub25lJyxcbiAgYmFja2dyb3VuZDogJ25vbmUnLFxuICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICBib3R0b206ICcxOHB0JyxcbiAgZGlzcGxheTogJ2lubGluZScsXG4gIGhlaWdodDogJzQ1cHQnLFxuICBwYWRkaW5nOiAnMHB4JyxcbiAgcG9zaXRpb246ICdmaXhlZCcsXG4gIHJpZ2h0OiAnMThwdCcsXG4gIHRvcDogJ2F1dG8nLFxuICB3aWR0aDogJzQ1cHQnLFxuICB6SW5kZXg6IDIxNDc0ODM2NDcsIC8vIDEgbW9yZSB0aGFuIHRoZSBhY3R1YWwgd2lkZ2V0XG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgYm94U2hhZG93OiAnMCAzcHggMTJweCByZ2JhKDAsIDAsIDAsIC4xNSknLFxuICB0cmFuc2l0aW9uOiAnYm94LXNoYWRvdyAxNTBtcyBsaW5lYXInLFxuICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgb3V0bGluZTogJ25vbmUnLFxuICB1c2VyU2VsZWN0OiAnbm9uZSdcbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcHJvdmlkZXJLZXk6IFByb3ZpZGVyIHwgdW5kZWZpbmVkXG4gIHRoZW1lQ29sb3I/OiBzdHJpbmdcbiAgbG9nZ2VkSW5HcmVldGluZz86IHN0cmluZ1xuICBsb2dnZWRPdXRHcmVldGluZz86IHN0cmluZ1xuICBzaG93Pzogc3RyaW5nXG4gIGhpZGU/OiBzdHJpbmdcbiAgZmFkZT86IHN0cmluZ1xuICBncmVldGluZ0RpYWxvZ0RlbGF5Pzogc3RyaW5nXG4gIGdyZWV0aW5nRGlhbG9nRGlzcGxheT86IHN0cmluZ1xuICBjb2xvcj86IHN0cmluZ1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvZGlzcGxheS1uYW1lXG5jb25zdCBDdXN0b21lckNoYXQgPSBtZW1vKFxuICAoe1xuICAgIHByb3ZpZGVyS2V5LFxuICAgIGNvbG9yLFxuICAgIGxvZ2dlZEluR3JlZXRpbmcsXG4gICAgbG9nZ2VkT3V0R3JlZXRpbmcsXG4gICAgZ3JlZXRpbmdEaWFsb2dEaXNwbGF5LFxuICAgIGdyZWV0aW5nRGlhbG9nRGVsYXlcbiAgfTogUHJvcHMpID0+IHtcbiAgICBjb25zdCBmaWVsZHMgPSB7XG4gICAgICBwYWdlX2lkOiBwcm92aWRlcktleSxcbiAgICAgIHRoZW1lX2NvbG9yOiBjb2xvcixcbiAgICAgIGxvZ2dlZF9pbl9ncmVldGluZzogbG9nZ2VkSW5HcmVldGluZyxcbiAgICAgIGxvZ2dlZF9vdXRfZ3JlZXRpbmc6IGxvZ2dlZE91dEdyZWV0aW5nLFxuICAgICAgZ3JlZXRpbmdfZGlhbG9nX2Rpc3BsYXk6IGdyZWV0aW5nRGlhbG9nRGlzcGxheSxcbiAgICAgIGdyZWV0aW5nX2RpYWxvZ19kZWxheTogZ3JlZXRpbmdEaWFsb2dEZWxheVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZiLWN1c3RvbWVyY2hhdFwiIHsuLi5maWVsZHN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbilcblxuY29uc3QgV2lkZ2V0ID0gKHsgY29sb3IgfTogeyBjb2xvcjogc3RyaW5nIH0pOiBKU1guRWxlbWVudCB8IG51bGwgPT4ge1xuICBjb25zdCBbc3RhdGUsIGxvYWRDaGF0XSA9IHVzZUNoYXQoeyBsb2FkV2hlbklkbGU6IHRydWUgfSlcblxuICBpZiAoc3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17c3R5bGVzfVxuICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICBhcmlhLWxhYmVsPVwiTG9hZCBDaGF0XCJcbiAgICAgIGFyaWEtYnVzeT1cInRydWVcIlxuICAgICAgYXJpYS1saXZlPVwicG9saXRlXCJcbiAgICAgIG9uQ2xpY2s9eygpID0+IGxvYWRDaGF0KHsgb3BlbjogdHJ1ZSB9KX1cbiAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gbG9hZENoYXQoeyBvcGVuOiBmYWxzZSB9KX1cbiAgICA+XG4gICAgICA8c3ZnIHdpZHRoPVwiNjBweFwiIGhlaWdodD1cIjYwcHhcIiB2aWV3Qm94PVwiMCAwIDYwIDYwXCI+XG4gICAgICAgIDxzdmcgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiNjBweFwiIGhlaWdodD1cIjYwcHhcIj5cbiAgICAgICAgICA8ZyBzdHJva2U9XCJub25lXCIgc3Ryb2tlV2lkdGg9XCIxXCIgZmlsbD1cIm5vbmVcIiBmaWxsUnVsZT1cImV2ZW5vZGRcIj5cbiAgICAgICAgICAgIDxnPlxuICAgICAgICAgICAgICA8Y2lyY2xlIGZpbGw9e2NvbG9yID8gY29sb3IgOiAnIzAwODRGRid9IGN4PVwiMzBcIiBjeT1cIjMwXCIgcj1cIjMwXCIgLz5cbiAgICAgICAgICAgICAgPHN2ZyB4PVwiMTBcIiB5PVwiMTBcIj5cbiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMC4wMDAwMDAsIC0xMC4wMDAwMDApXCIgZmlsbD1cIiNGRkZGRkZcIj5cbiAgICAgICAgICAgICAgICAgIDxnIGlkPVwibG9nb1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLjAwMDAwMCwgMTAuMDAwMDAwKVwiPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIwLDAgQzMxLjI2NjYsMCA0MCw4LjI1MjggNDAsMTkuNCBDNDAsMzAuNTQ3MiAzMS4yNjY2LDM4LjggMjAsMzguOCBDMTcuOTc2MywzOC44IDE2LjAzNDgsMzguNTMyNyAxNC4yMTA2LDM4LjAzMTEgQzEzLjg1NiwzNy45MzM1IDEzLjQ3ODksMzcuOTYxMiAxMy4xNDI0LDM4LjEwOTggTDkuMTcyNywzOS44NjIxIEM4LjEzNDMsNDAuMzIwNSA2Ljk2MjEsMzkuNTgxOSA2LjkyNzMsMzguNDQ3NCBMNi44MTg0LDM0Ljg4OTQgQzYuODA1LDM0LjQ1MTMgNi42MDc4LDM0LjA0MTQgNi4yODExLDMzLjc0OTIgQzIuMzg5NiwzMC4yNjkxIDAsMjUuMjMwNyAwLDE5LjQgQzAsOC4yNTI4IDguNzMzNCwwIDIwLDAgWiBNNy45OTAwOSwyNS4wNzM0NCBDNy40MjYyOSwyNS45Njc5NCA4LjUyNTc5LDI2Ljk3NTk0IDkuMzY4MDksMjYuMzM2NzQgTDE1LjY3ODc5LDIxLjU0NzM0IEMxNi4xMDU2OSwyMS4yMjMzNCAxNi42OTU1OSwyMS4yMjE2NCAxNy4xMjQyOSwyMS41NDMxNCBMMjEuNzk3MDksMjUuMDQ3NzQgQzIzLjE5OTE5LDI2LjA5OTQ0IDI1LjIwMDM5LDI1LjczMDE0IDI2LjEzNDk5LDI0LjI0NzQ0IEwzMi4wMDk5OSwxNC45MjY1NCBDMzIuNTczNjksMTQuMDMyMDQgMzEuNDc0MTksMTMuMDI0MDQgMzAuNjMxODksMTMuNjYzMjQgTDI0LjMyMTE5LDE4LjQ1MjY0IEMyMy44OTQyOSwxOC43NzY2NCAyMy4zMDQzOSwxOC43NzgzNCAyMi44NzU2OSwxOC40NTY3NCBMMTguMjAyOTksMTQuOTUyMjQgQzE2LjgwMDc5LDEzLjkwMDY0IDE0Ljc5OTU5LDE0LjI2OTg0IDEzLjg2NTA5LDE1Ljc1MjY0IEw3Ljk5MDA5LDI1LjA3MzQ0IFpcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgPC9nPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvc3ZnPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IE1lc3NlbmdlciA9ICh7IGNvbG9yID0gJycsIC4uLnByb3BzIH06IFByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xuICBjb25zdCB7IHByb3ZpZGVyS2V5IH0gPSB1c2VQcm92aWRlcigpXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEN1c3RvbWVyQ2hhdCBjb2xvcj17Y29sb3J9IHByb3ZpZGVyS2V5PXtwcm92aWRlcktleX0gey4uLnByb3BzfSAvPlxuICAgICAgPFdpZGdldCBjb2xvcj17Y29sb3J9IC8+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVzc2VuZ2VyXG4iXX0=