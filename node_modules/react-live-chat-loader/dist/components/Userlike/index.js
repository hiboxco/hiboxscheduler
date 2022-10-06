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
  container: {
    zIndex: 2147483648,
    // one more than provider
    position: 'fixed',
    border: '0',
    width: '64px',
    height: '64px',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 8px 16px 0px',
    left: 'auto'
  },
  button: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '64px',
    minWidth: '64px',
    height: '64px',
    minHeight: '64px',
    padding: '0',
    cursor: 'pointer',
    border: '0'
  },
  icon: {
    fontSize: '36px'
  }
};

const Userlike = ({
  color = 'white',
  backgroundColor = '#0d8cff',
  position = 'right',
  vOffset = '24px',
  hOffset = '24px',
  style = 'round'
}) => {
  const [state, loadChat] = (0, _useChat.default)({
    loadWhenIdle: true
  });
  const positionStyles = {
    bottom: vOffset,
    right: position === 'left' ? 'auto' : hOffset,
    left: position === 'right' ? 'auto' : hOffset
  };
  const shapeStyle = {
    borderRadius: style === 'round' ? '50%' : '0'
  };

  if (state === 'complete') {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: _objectSpread(_objectSpread(_objectSpread({}, styles.container), positionStyles), shapeStyle)
  }, /*#__PURE__*/_react.default.createElement("button", {
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
    style: _objectSpread(_objectSpread(_objectSpread({}, styles.button), shapeStyle), {}, {
      backgroundColor
    })
  }, /*#__PURE__*/_react.default.createElement("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 36 36",
    fill: "none",
    style: _objectSpread(_objectSpread({}, styles.icon), {}, {
      color
    })
  }, /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 36c2.893 0 5.626-.682 8.047-1.895h5.11a2 2 0 002-2v-4.393A17.916 17.916 0 0036 18c0-9.941-8.059-18-18-18S0 8.059 0 18s8.059 18 18 18zM9.5 22a1.5 1.5 0 000 3h17a1.5 1.5 0 000-3h-17zm1.5-4a1.5 1.5 0 011.5-1.5h14a1.5 1.5 0 010 3h-14A1.5 1.5 0 0111 18zm-1.5-7a1.5 1.5 0 000 3h17a1.5 1.5 0 000-3h-17z",
    fill: "currentColor"
  }))));
};

var _default = Userlike;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1VzZXJsaWtlL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJzdHlsZXMiLCJjb250YWluZXIiLCJ6SW5kZXgiLCJwb3NpdGlvbiIsImJvcmRlciIsIndpZHRoIiwiaGVpZ2h0IiwiYm94U2hhZG93IiwibGVmdCIsImJ1dHRvbiIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJtaW5XaWR0aCIsIm1pbkhlaWdodCIsInBhZGRpbmciLCJjdXJzb3IiLCJpY29uIiwiZm9udFNpemUiLCJVc2VybGlrZSIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwidk9mZnNldCIsImhPZmZzZXQiLCJzdHlsZSIsInN0YXRlIiwibG9hZENoYXQiLCJsb2FkV2hlbklkbGUiLCJwb3NpdGlvblN0eWxlcyIsImJvdHRvbSIsInJpZ2h0Iiwic2hhcGVTdHlsZSIsImJvcmRlclJhZGl1cyIsIm9wZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7Ozs7Ozs7OztBQUVBLE1BQU1BLE1BSUwsR0FBRztBQUNGQyxFQUFBQSxTQUFTLEVBQUU7QUFDVEMsSUFBQUEsTUFBTSxFQUFFLFVBREM7QUFDVztBQUNwQkMsSUFBQUEsUUFBUSxFQUFFLE9BRkQ7QUFHVEMsSUFBQUEsTUFBTSxFQUFFLEdBSEM7QUFJVEMsSUFBQUEsS0FBSyxFQUFFLE1BSkU7QUFLVEMsSUFBQUEsTUFBTSxFQUFFLE1BTEM7QUFNVEMsSUFBQUEsU0FBUyxFQUFFLHNDQU5GO0FBT1RDLElBQUFBLElBQUksRUFBRTtBQVBHLEdBRFQ7QUFVRkMsRUFBQUEsTUFBTSxFQUFFO0FBQ05OLElBQUFBLFFBQVEsRUFBRSxVQURKO0FBRU5PLElBQUFBLE9BQU8sRUFBRSxNQUZIO0FBR05DLElBQUFBLGNBQWMsRUFBRSxRQUhWO0FBSU5DLElBQUFBLFVBQVUsRUFBRSxRQUpOO0FBS05QLElBQUFBLEtBQUssRUFBRSxNQUxEO0FBTU5RLElBQUFBLFFBQVEsRUFBRSxNQU5KO0FBT05QLElBQUFBLE1BQU0sRUFBRSxNQVBGO0FBUU5RLElBQUFBLFNBQVMsRUFBRSxNQVJMO0FBU05DLElBQUFBLE9BQU8sRUFBRSxHQVRIO0FBVU5DLElBQUFBLE1BQU0sRUFBRSxTQVZGO0FBV05aLElBQUFBLE1BQU0sRUFBRTtBQVhGLEdBVk47QUF1QkZhLEVBQUFBLElBQUksRUFBRTtBQUNKQyxJQUFBQSxRQUFRLEVBQUU7QUFETjtBQXZCSixDQUpKOztBQXlDQSxNQUFNQyxRQUFRLEdBQUcsQ0FBQztBQUNoQkMsRUFBQUEsS0FBSyxHQUFHLE9BRFE7QUFFaEJDLEVBQUFBLGVBQWUsR0FBRyxTQUZGO0FBR2hCbEIsRUFBQUEsUUFBUSxHQUFHLE9BSEs7QUFJaEJtQixFQUFBQSxPQUFPLEdBQUcsTUFKTTtBQUtoQkMsRUFBQUEsT0FBTyxHQUFHLE1BTE07QUFNaEJDLEVBQUFBLEtBQUssR0FBRztBQU5RLENBQUQsS0FPZ0I7QUFDL0IsUUFBTSxDQUFDQyxLQUFELEVBQVFDLFFBQVIsSUFBb0Isc0JBQVE7QUFBRUMsSUFBQUEsWUFBWSxFQUFFO0FBQWhCLEdBQVIsQ0FBMUI7QUFDQSxRQUFNQyxjQUFjLEdBQUc7QUFDckJDLElBQUFBLE1BQU0sRUFBRVAsT0FEYTtBQUVyQlEsSUFBQUEsS0FBSyxFQUFFM0IsUUFBUSxLQUFLLE1BQWIsR0FBc0IsTUFBdEIsR0FBK0JvQixPQUZqQjtBQUdyQmYsSUFBQUEsSUFBSSxFQUFFTCxRQUFRLEtBQUssT0FBYixHQUF1QixNQUF2QixHQUFnQ29CO0FBSGpCLEdBQXZCO0FBS0EsUUFBTVEsVUFBVSxHQUFHO0FBQ2pCQyxJQUFBQSxZQUFZLEVBQUVSLEtBQUssS0FBSyxPQUFWLEdBQW9CLEtBQXBCLEdBQTRCO0FBRHpCLEdBQW5COztBQUlBLE1BQUlDLEtBQUssS0FBSyxVQUFkLEVBQTBCO0FBQ3hCLFdBQU8sSUFBUDtBQUNEOztBQUVELHNCQUNFO0FBQUssSUFBQSxLQUFLLGdEQUFPekIsTUFBTSxDQUFDQyxTQUFkLEdBQTRCMkIsY0FBNUIsR0FBK0NHLFVBQS9DO0FBQVYsa0JBQ0U7QUFDRSxJQUFBLElBQUksRUFBQyxRQURQO0FBRUUsa0JBQVcsV0FGYjtBQUdFLGlCQUFVLE1BSFo7QUFJRSxpQkFBVSxRQUpaO0FBS0UsSUFBQSxPQUFPLEVBQUUsTUFBTUwsUUFBUSxDQUFDO0FBQUVPLE1BQUFBLElBQUksRUFBRTtBQUFSLEtBQUQsQ0FMekI7QUFNRSxJQUFBLFlBQVksRUFBRSxNQUFNUCxRQUFRLENBQUM7QUFBRU8sTUFBQUEsSUFBSSxFQUFFO0FBQVIsS0FBRCxDQU45QjtBQU9FLElBQUEsS0FBSyxnREFDQWpDLE1BQU0sQ0FBQ1MsTUFEUCxHQUVBc0IsVUFGQTtBQUdIVixNQUFBQTtBQUhHO0FBUFAsa0JBYUU7QUFDRSxJQUFBLEtBQUssRUFBQyxLQURSO0FBRUUsSUFBQSxNQUFNLEVBQUMsS0FGVDtBQUdFLElBQUEsT0FBTyxFQUFDLFdBSFY7QUFJRSxJQUFBLElBQUksRUFBQyxNQUpQO0FBS0UsSUFBQSxLQUFLLGtDQUFPckIsTUFBTSxDQUFDaUIsSUFBZDtBQUFvQkcsTUFBQUE7QUFBcEI7QUFMUCxrQkFPRTtBQUNFLElBQUEsUUFBUSxFQUFDLFNBRFg7QUFFRSxJQUFBLFFBQVEsRUFBQyxTQUZYO0FBR0UsSUFBQSxDQUFDLEVBQUMsNlNBSEo7QUFJRSxJQUFBLElBQUksRUFBQztBQUpQLElBUEYsQ0FiRixDQURGLENBREY7QUFnQ0QsQ0F0REQ7O2VBd0RlRCxRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENTU1Byb3BlcnRpZXMgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHVzZUNoYXQgZnJvbSAnLi4vLi4vaG9va3MvdXNlQ2hhdCdcblxuY29uc3Qgc3R5bGVzOiB7XG4gIGNvbnRhaW5lcjogQ1NTUHJvcGVydGllc1xuICBidXR0b246IENTU1Byb3BlcnRpZXNcbiAgaWNvbjogQ1NTUHJvcGVydGllc1xufSA9IHtcbiAgY29udGFpbmVyOiB7XG4gICAgekluZGV4OiAyMTQ3NDgzNjQ4LCAvLyBvbmUgbW9yZSB0aGFuIHByb3ZpZGVyXG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgYm9yZGVyOiAnMCcsXG4gICAgd2lkdGg6ICc2NHB4JyxcbiAgICBoZWlnaHQ6ICc2NHB4JyxcbiAgICBib3hTaGFkb3c6ICdyZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCA4cHggMTZweCAwcHgnLFxuICAgIGxlZnQ6ICdhdXRvJ1xuICB9LFxuICBidXR0b246IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIHdpZHRoOiAnNjRweCcsXG4gICAgbWluV2lkdGg6ICc2NHB4JyxcbiAgICBoZWlnaHQ6ICc2NHB4JyxcbiAgICBtaW5IZWlnaHQ6ICc2NHB4JyxcbiAgICBwYWRkaW5nOiAnMCcsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgYm9yZGVyOiAnMCdcbiAgfSxcbiAgaWNvbjoge1xuICAgIGZvbnRTaXplOiAnMzZweCdcbiAgfVxufVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjb2xvcj86IHN0cmluZ1xuICBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmdcbiAgcG9zaXRpb24/OiBzdHJpbmdcbiAgdk9mZnNldD86IHN0cmluZ1xuICBoT2Zmc2V0Pzogc3RyaW5nXG4gIHN0eWxlPzogc3RyaW5nXG59XG5cbmNvbnN0IFVzZXJsaWtlID0gKHtcbiAgY29sb3IgPSAnd2hpdGUnLFxuICBiYWNrZ3JvdW5kQ29sb3IgPSAnIzBkOGNmZicsXG4gIHBvc2l0aW9uID0gJ3JpZ2h0JyxcbiAgdk9mZnNldCA9ICcyNHB4JyxcbiAgaE9mZnNldCA9ICcyNHB4JyxcbiAgc3R5bGUgPSAncm91bmQnXG59OiBQcm9wcyk6IEpTWC5FbGVtZW50IHwgbnVsbCA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgbG9hZENoYXRdID0gdXNlQ2hhdCh7IGxvYWRXaGVuSWRsZTogdHJ1ZSB9KVxuICBjb25zdCBwb3NpdGlvblN0eWxlcyA9IHtcbiAgICBib3R0b206IHZPZmZzZXQsXG4gICAgcmlnaHQ6IHBvc2l0aW9uID09PSAnbGVmdCcgPyAnYXV0bycgOiBoT2Zmc2V0LFxuICAgIGxlZnQ6IHBvc2l0aW9uID09PSAncmlnaHQnID8gJ2F1dG8nIDogaE9mZnNldFxuICB9XG4gIGNvbnN0IHNoYXBlU3R5bGUgPSB7XG4gICAgYm9yZGVyUmFkaXVzOiBzdHlsZSA9PT0gJ3JvdW5kJyA/ICc1MCUnIDogJzAnXG4gIH1cblxuICBpZiAoc3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IC4uLnN0eWxlcy5jb250YWluZXIsIC4uLnBvc2l0aW9uU3R5bGVzLCAuLi5zaGFwZVN0eWxlIH19PlxuICAgICAgPGJ1dHRvblxuICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgYXJpYS1sYWJlbD1cIkxvYWQgQ2hhdFwiXG4gICAgICAgIGFyaWEtYnVzeT1cInRydWVcIlxuICAgICAgICBhcmlhLWxpdmU9XCJwb2xpdGVcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBsb2FkQ2hhdCh7IG9wZW46IHRydWUgfSl9XG4gICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gbG9hZENoYXQoeyBvcGVuOiBmYWxzZSB9KX1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAuLi5zdHlsZXMuYnV0dG9uLFxuICAgICAgICAgIC4uLnNoYXBlU3R5bGUsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxzdmdcbiAgICAgICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDM2IDM2XCJcbiAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgc3R5bGU9e3sgLi4uc3R5bGVzLmljb24sIGNvbG9yIH19XG4gICAgICAgID5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICBkPVwiTTE4IDM2YzIuODkzIDAgNS42MjYtLjY4MiA4LjA0Ny0xLjg5NWg1LjExYTIgMiAwIDAwMi0ydi00LjM5M0ExNy45MTYgMTcuOTE2IDAgMDAzNiAxOGMwLTkuOTQxLTguMDU5LTE4LTE4LTE4UzAgOC4wNTkgMCAxOHM4LjA1OSAxOCAxOCAxOHpNOS41IDIyYTEuNSAxLjUgMCAwMDAgM2gxN2ExLjUgMS41IDAgMDAwLTNoLTE3em0xLjUtNGExLjUgMS41IDAgMDExLjUtMS41aDE0YTEuNSAxLjUgMCAwMTAgM2gtMTRBMS41IDEuNSAwIDAxMTEgMTh6bS0xLjUtN2ExLjUgMS41IDAgMDAwIDNoMTdhMS41IDEuNSAwIDAwMC0zaC0xN3pcIlxuICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VybGlrZVxuIl19