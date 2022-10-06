"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _useChat = _interopRequireDefault(require("../../hooks/useChat"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const styles = {
  button: {
    borderRadius: '100px',
    bottom: '20px',
    right: '20px',
    boxShadow: '0 8px 24px rgb(0 0 0 / 16%)',
    cursor: 'pointer',
    height: '64px',
    position: 'fixed',
    width: '64px',
    zIndex: 2147483001,
    // 1 more than the actual widget
    userSelect: 'none'
  },
  img: {
    height: '24px',
    margin: '20px',
    width: '24px'
  },
  close: {
    backgroundColor: '#fff',
    height: '24px',
    left: '32px',
    position: 'absolute',
    top: '20px',
    width: '2px'
  }
};

const Provider = ({
  color
}) => {
  const [state, loadChat] = (0, _useChat.default)({
    loadWhenIdle: true
  });
  if (state === 'complete') return null;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    role: "button",
    "aria-label": "Load Chat",
    "aria-busy": "true",
    "aria-live": "polite",
    onClick: () => loadChat({
      open: true
    }),
    onMouseEnter: () => loadChat({
      open: false
    }),
    style: _objectSpread(_objectSpread({}, styles.button), {}, {
      backgroundColor: color
    })
  }, state === 'initial' ? /*#__PURE__*/_react.default.createElement("img", {
    style: styles.img,
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAUVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////8IN+deAAAAGnRSTlMAAwgJEBk0TVheY2R5eo+ut8jb5OXs8fX2+cjRDTIAAADsSURBVHgBldZbkoMgFIThRgQv8SKKgGf/C51UnJqaRI30/9zfe+NQUQ3TvG7bOk9DVeCmshmj/CuOTYnrdBfkUOg0zlOtl9OWVuEk4+QyZ3DIevmSt/ioTvK1VH/s5bY3YdM9SBZ/mUUyWgx+U06ycgp7D8msxSvtc4HXL9BLdj2elSEfhBJAI0QNgJEBI1BEBsQClVBVGDgwYOLAhJkDM1YOrNg4sLFAsLJgZsHEgoEFFQt0JAFGFjQsKAMJ0LFAexKgZYFyJIDxJIBNJEDNAtSJBLCeBDCOBFAPzwFA94ED+zmhwDO9358r8ANtIsMXi7qVAwAAAABJRU5ErkJggg==",
    alt: "bubble-icon"
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    style: _objectSpread(_objectSpread({}, styles.close), {}, {
      transform: 'rotate(45deg)'
    })
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: _objectSpread(_objectSpread({}, styles.close), {}, {
      transform: 'rotate(-45deg)'
    })
  }))));
};

Provider.defaultProps = {
  color: '#1f93ff'
};
var _default = Provider;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NoYXR3b290L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJzdHlsZXMiLCJidXR0b24iLCJib3JkZXJSYWRpdXMiLCJib3R0b20iLCJyaWdodCIsImJveFNoYWRvdyIsImN1cnNvciIsImhlaWdodCIsInBvc2l0aW9uIiwid2lkdGgiLCJ6SW5kZXgiLCJ1c2VyU2VsZWN0IiwiaW1nIiwibWFyZ2luIiwiY2xvc2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsZWZ0IiwidG9wIiwiUHJvdmlkZXIiLCJjb2xvciIsInN0YXRlIiwibG9hZENoYXQiLCJsb2FkV2hlbklkbGUiLCJvcGVuIiwidHJhbnNmb3JtIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7QUFFQSxNQUFNQSxNQUlMLEdBQUc7QUFDRkMsRUFBQUEsTUFBTSxFQUFFO0FBQ05DLElBQUFBLFlBQVksRUFBRSxPQURSO0FBRU5DLElBQUFBLE1BQU0sRUFBRSxNQUZGO0FBR05DLElBQUFBLEtBQUssRUFBRSxNQUhEO0FBSU5DLElBQUFBLFNBQVMsRUFBRSw2QkFKTDtBQUtOQyxJQUFBQSxNQUFNLEVBQUUsU0FMRjtBQU1OQyxJQUFBQSxNQUFNLEVBQUUsTUFORjtBQU9OQyxJQUFBQSxRQUFRLEVBQUUsT0FQSjtBQVFOQyxJQUFBQSxLQUFLLEVBQUUsTUFSRDtBQVNOQyxJQUFBQSxNQUFNLEVBQUUsVUFURjtBQVNjO0FBQ3BCQyxJQUFBQSxVQUFVLEVBQUU7QUFWTixHQUROO0FBYUZDLEVBQUFBLEdBQUcsRUFBRTtBQUNITCxJQUFBQSxNQUFNLEVBQUUsTUFETDtBQUVITSxJQUFBQSxNQUFNLEVBQUUsTUFGTDtBQUdISixJQUFBQSxLQUFLLEVBQUU7QUFISixHQWJIO0FBa0JGSyxFQUFBQSxLQUFLLEVBQUU7QUFDTEMsSUFBQUEsZUFBZSxFQUFFLE1BRFo7QUFFTFIsSUFBQUEsTUFBTSxFQUFFLE1BRkg7QUFHTFMsSUFBQUEsSUFBSSxFQUFFLE1BSEQ7QUFJTFIsSUFBQUEsUUFBUSxFQUFFLFVBSkw7QUFLTFMsSUFBQUEsR0FBRyxFQUFFLE1BTEE7QUFNTFIsSUFBQUEsS0FBSyxFQUFFO0FBTkY7QUFsQkwsQ0FKSjs7QUFvQ0EsTUFBTVMsUUFBUSxHQUFHLENBQUM7QUFBRUMsRUFBQUE7QUFBRixDQUFELEtBQTBDO0FBQ3pELFFBQU0sQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLElBQW9CLHNCQUFRO0FBQUVDLElBQUFBLFlBQVksRUFBRTtBQUFoQixHQUFSLENBQTFCO0FBRUEsTUFBSUYsS0FBSyxLQUFLLFVBQWQsRUFBMEIsT0FBTyxJQUFQO0FBRTFCLHNCQUNFLHVEQUNFO0FBQ0UsSUFBQSxJQUFJLEVBQUMsUUFEUDtBQUVFLGtCQUFXLFdBRmI7QUFHRSxpQkFBVSxNQUhaO0FBSUUsaUJBQVUsUUFKWjtBQUtFLElBQUEsT0FBTyxFQUFFLE1BQU1DLFFBQVEsQ0FBQztBQUFFRSxNQUFBQSxJQUFJLEVBQUU7QUFBUixLQUFELENBTHpCO0FBTUUsSUFBQSxZQUFZLEVBQUUsTUFBTUYsUUFBUSxDQUFDO0FBQUVFLE1BQUFBLElBQUksRUFBRTtBQUFSLEtBQUQsQ0FOOUI7QUFPRSxJQUFBLEtBQUssa0NBQ0F2QixNQUFNLENBQUNDLE1BRFA7QUFFSGMsTUFBQUEsZUFBZSxFQUFFSTtBQUZkO0FBUFAsS0FZR0MsS0FBSyxLQUFLLFNBQVYsZ0JBQ0M7QUFDRSxJQUFBLEtBQUssRUFBRXBCLE1BQU0sQ0FBQ1ksR0FEaEI7QUFFRSxJQUFBLEdBQUcsRUFBQyxnbEJBRk47QUFHRSxJQUFBLEdBQUcsRUFBQztBQUhOLElBREQsZ0JBT0MseUVBQ0U7QUFBSyxJQUFBLEtBQUssa0NBQU9aLE1BQU0sQ0FBQ2MsS0FBZDtBQUFxQlUsTUFBQUEsU0FBUyxFQUFFO0FBQWhDO0FBQVYsSUFERixlQUVFO0FBQUssSUFBQSxLQUFLLGtDQUFPeEIsTUFBTSxDQUFDYyxLQUFkO0FBQXFCVSxNQUFBQSxTQUFTLEVBQUU7QUFBaEM7QUFBVixJQUZGLENBbkJKLENBREYsQ0FERjtBQTZCRCxDQWxDRDs7QUFvQ0FOLFFBQVEsQ0FBQ08sWUFBVCxHQUF3QjtBQUN0Qk4sRUFBQUEsS0FBSyxFQUFFO0FBRGUsQ0FBeEI7ZUFJZUQsUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDU1NQcm9wZXJ0aWVzIH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB1c2VDaGF0IGZyb20gJy4uLy4uL2hvb2tzL3VzZUNoYXQnXG5cbmNvbnN0IHN0eWxlczoge1xuICBidXR0b246IENTU1Byb3BlcnRpZXNcbiAgaW1nOiBDU1NQcm9wZXJ0aWVzXG4gIGNsb3NlOiBDU1NQcm9wZXJ0aWVzXG59ID0ge1xuICBidXR0b246IHtcbiAgICBib3JkZXJSYWRpdXM6ICcxMDBweCcsXG4gICAgYm90dG9tOiAnMjBweCcsXG4gICAgcmlnaHQ6ICcyMHB4JyxcbiAgICBib3hTaGFkb3c6ICcwIDhweCAyNHB4IHJnYigwIDAgMCAvIDE2JSknLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIGhlaWdodDogJzY0cHgnLFxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHdpZHRoOiAnNjRweCcsXG4gICAgekluZGV4OiAyMTQ3NDgzMDAxLCAvLyAxIG1vcmUgdGhhbiB0aGUgYWN0dWFsIHdpZGdldFxuICAgIHVzZXJTZWxlY3Q6ICdub25lJ1xuICB9LFxuICBpbWc6IHtcbiAgICBoZWlnaHQ6ICcyNHB4JyxcbiAgICBtYXJnaW46ICcyMHB4JyxcbiAgICB3aWR0aDogJzI0cHgnXG4gIH0sXG4gIGNsb3NlOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgaGVpZ2h0OiAnMjRweCcsXG4gICAgbGVmdDogJzMycHgnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogJzIwcHgnLFxuICAgIHdpZHRoOiAnMnB4J1xuICB9XG59XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNvbG9yPzogc3RyaW5nXG59XG5cbmNvbnN0IFByb3ZpZGVyID0gKHsgY29sb3IgfTogUHJvcHMpOiBKU1guRWxlbWVudCB8IG51bGwgPT4ge1xuICBjb25zdCBbc3RhdGUsIGxvYWRDaGF0XSA9IHVzZUNoYXQoeyBsb2FkV2hlbklkbGU6IHRydWUgfSlcblxuICBpZiAoc3RhdGUgPT09ICdjb21wbGV0ZScpIHJldHVybiBudWxsXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdlxuICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgYXJpYS1sYWJlbD1cIkxvYWQgQ2hhdFwiXG4gICAgICAgIGFyaWEtYnVzeT1cInRydWVcIlxuICAgICAgICBhcmlhLWxpdmU9XCJwb2xpdGVcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBsb2FkQ2hhdCh7IG9wZW46IHRydWUgfSl9XG4gICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gbG9hZENoYXQoeyBvcGVuOiBmYWxzZSB9KX1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAuLi5zdHlsZXMuYnV0dG9uLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge3N0YXRlID09PSAnaW5pdGlhbCcgPyAoXG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5pbWd9XG4gICAgICAgICAgICBzcmM9XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURBQUFBQXdDQU1BQUFCZzNBbTFBQUFBVVZCTVZFVUFBQUQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOElOK2RlQUFBQUduUlNUbE1BQXdnSkVCazBUVmhlWTJSNWVvK3V0OGpiNU9YczhmWDIrY2pSRFRJQUFBRHNTVVJCVkhnQmxkWmJrb01nRklUaFJnUXY4U0tLZ0dmL0M1MVVuSnFhUkkzMC85emZlK05RVVEzVHZHN2JPazlEVmVDbXNobWovQ3VPVFlucmRCZmtVT2cwemxPdGw5T1dWdUVrNCtReVozRElldm1TdC9pb1R2SzFWSC9zNWJZM1lkTTlTQlovbVVVeVdneCtVMDZ5Y2dwN0Q4bXN4U3Z0YzRIWEw5QkxkajJlbFNFZmhCSkFJMFFOZ0pFQkkxQkVCc1FDbFZCVkdEZ3dZT0xBaEprRE0xWU9yTmc0c0xGQXNMSmdac0hFZ29FRkZRdDBKQUZHRmpRc0tBTUowTEZBZXhLZ1pZRnlKSUR4SklCTkpFRE5BdFNKQkxDZUJEQ09CRkFQendGQTk0RUQrem1od0RPOTM1OHI4QU50SXNNWGk3cVZBd0FBQUFCSlJVNUVya0pnZ2c9PVwiXG4gICAgICAgICAgICBhbHQ9XCJidWJibGUtaWNvblwiXG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyAuLi5zdHlsZXMuY2xvc2UsIHRyYW5zZm9ybTogJ3JvdGF0ZSg0NWRlZyknIH19IC8+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IC4uLnN0eWxlcy5jbG9zZSwgdHJhbnNmb3JtOiAncm90YXRlKC00NWRlZyknIH19IC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5Qcm92aWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbG9yOiAnIzFmOTNmZidcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvdmlkZXJcbiJdfQ==