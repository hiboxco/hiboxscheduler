function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import useChat from "../../hooks/useChat";
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
  const [state, loadChat] = useChat({
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

  return /*#__PURE__*/React.createElement("div", {
    style: _objectSpread(_objectSpread(_objectSpread({}, styles.container), positionStyles), shapeStyle)
  }, /*#__PURE__*/React.createElement("button", {
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
  }, /*#__PURE__*/React.createElement("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 36 36",
    fill: "none",
    style: _objectSpread(_objectSpread({}, styles.icon), {}, {
      color
    })
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 36c2.893 0 5.626-.682 8.047-1.895h5.11a2 2 0 002-2v-4.393A17.916 17.916 0 0036 18c0-9.941-8.059-18-18-18S0 8.059 0 18s8.059 18 18 18zM9.5 22a1.5 1.5 0 000 3h17a1.5 1.5 0 000-3h-17zm1.5-4a1.5 1.5 0 011.5-1.5h14a1.5 1.5 0 010 3h-14A1.5 1.5 0 0111 18zm-1.5-7a1.5 1.5 0 000 3h17a1.5 1.5 0 000-3h-17z",
    fill: "currentColor"
  }))));
};

export default Userlike;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1VzZXJsaWtlL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNoYXQiLCJzdHlsZXMiLCJjb250YWluZXIiLCJ6SW5kZXgiLCJwb3NpdGlvbiIsImJvcmRlciIsIndpZHRoIiwiaGVpZ2h0IiwiYm94U2hhZG93IiwibGVmdCIsImJ1dHRvbiIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJtaW5XaWR0aCIsIm1pbkhlaWdodCIsInBhZGRpbmciLCJjdXJzb3IiLCJpY29uIiwiZm9udFNpemUiLCJVc2VybGlrZSIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwidk9mZnNldCIsImhPZmZzZXQiLCJzdHlsZSIsInN0YXRlIiwibG9hZENoYXQiLCJsb2FkV2hlbklkbGUiLCJwb3NpdGlvblN0eWxlcyIsImJvdHRvbSIsInJpZ2h0Iiwic2hhcGVTdHlsZSIsImJvcmRlclJhZGl1cyIsIm9wZW4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBcUMsT0FBckM7QUFFQSxPQUFPQyxPQUFQO0FBRUEsTUFBTUMsTUFJTCxHQUFHO0FBQ0ZDLEVBQUFBLFNBQVMsRUFBRTtBQUNUQyxJQUFBQSxNQUFNLEVBQUUsVUFEQztBQUNXO0FBQ3BCQyxJQUFBQSxRQUFRLEVBQUUsT0FGRDtBQUdUQyxJQUFBQSxNQUFNLEVBQUUsR0FIQztBQUlUQyxJQUFBQSxLQUFLLEVBQUUsTUFKRTtBQUtUQyxJQUFBQSxNQUFNLEVBQUUsTUFMQztBQU1UQyxJQUFBQSxTQUFTLEVBQUUsc0NBTkY7QUFPVEMsSUFBQUEsSUFBSSxFQUFFO0FBUEcsR0FEVDtBQVVGQyxFQUFBQSxNQUFNLEVBQUU7QUFDTk4sSUFBQUEsUUFBUSxFQUFFLFVBREo7QUFFTk8sSUFBQUEsT0FBTyxFQUFFLE1BRkg7QUFHTkMsSUFBQUEsY0FBYyxFQUFFLFFBSFY7QUFJTkMsSUFBQUEsVUFBVSxFQUFFLFFBSk47QUFLTlAsSUFBQUEsS0FBSyxFQUFFLE1BTEQ7QUFNTlEsSUFBQUEsUUFBUSxFQUFFLE1BTko7QUFPTlAsSUFBQUEsTUFBTSxFQUFFLE1BUEY7QUFRTlEsSUFBQUEsU0FBUyxFQUFFLE1BUkw7QUFTTkMsSUFBQUEsT0FBTyxFQUFFLEdBVEg7QUFVTkMsSUFBQUEsTUFBTSxFQUFFLFNBVkY7QUFXTlosSUFBQUEsTUFBTSxFQUFFO0FBWEYsR0FWTjtBQXVCRmEsRUFBQUEsSUFBSSxFQUFFO0FBQ0pDLElBQUFBLFFBQVEsRUFBRTtBQUROO0FBdkJKLENBSko7O0FBeUNBLE1BQU1DLFFBQVEsR0FBRyxDQUFDO0FBQ2hCQyxFQUFBQSxLQUFLLEdBQUcsT0FEUTtBQUVoQkMsRUFBQUEsZUFBZSxHQUFHLFNBRkY7QUFHaEJsQixFQUFBQSxRQUFRLEdBQUcsT0FISztBQUloQm1CLEVBQUFBLE9BQU8sR0FBRyxNQUpNO0FBS2hCQyxFQUFBQSxPQUFPLEdBQUcsTUFMTTtBQU1oQkMsRUFBQUEsS0FBSyxHQUFHO0FBTlEsQ0FBRCxLQU9nQjtBQUMvQixRQUFNLENBQUNDLEtBQUQsRUFBUUMsUUFBUixJQUFvQjNCLE9BQU8sQ0FBQztBQUFFNEIsSUFBQUEsWUFBWSxFQUFFO0FBQWhCLEdBQUQsQ0FBakM7QUFDQSxRQUFNQyxjQUFjLEdBQUc7QUFDckJDLElBQUFBLE1BQU0sRUFBRVAsT0FEYTtBQUVyQlEsSUFBQUEsS0FBSyxFQUFFM0IsUUFBUSxLQUFLLE1BQWIsR0FBc0IsTUFBdEIsR0FBK0JvQixPQUZqQjtBQUdyQmYsSUFBQUEsSUFBSSxFQUFFTCxRQUFRLEtBQUssT0FBYixHQUF1QixNQUF2QixHQUFnQ29CO0FBSGpCLEdBQXZCO0FBS0EsUUFBTVEsVUFBVSxHQUFHO0FBQ2pCQyxJQUFBQSxZQUFZLEVBQUVSLEtBQUssS0FBSyxPQUFWLEdBQW9CLEtBQXBCLEdBQTRCO0FBRHpCLEdBQW5COztBQUlBLE1BQUlDLEtBQUssS0FBSyxVQUFkLEVBQTBCO0FBQ3hCLFdBQU8sSUFBUDtBQUNEOztBQUVELHNCQUNFO0FBQUssSUFBQSxLQUFLLGdEQUFPekIsTUFBTSxDQUFDQyxTQUFkLEdBQTRCMkIsY0FBNUIsR0FBK0NHLFVBQS9DO0FBQVYsa0JBQ0U7QUFDRSxJQUFBLElBQUksRUFBQyxRQURQO0FBRUUsa0JBQVcsV0FGYjtBQUdFLGlCQUFVLE1BSFo7QUFJRSxpQkFBVSxRQUpaO0FBS0UsSUFBQSxPQUFPLEVBQUUsTUFBTUwsUUFBUSxDQUFDO0FBQUVPLE1BQUFBLElBQUksRUFBRTtBQUFSLEtBQUQsQ0FMekI7QUFNRSxJQUFBLFlBQVksRUFBRSxNQUFNUCxRQUFRLENBQUM7QUFBRU8sTUFBQUEsSUFBSSxFQUFFO0FBQVIsS0FBRCxDQU45QjtBQU9FLElBQUEsS0FBSyxnREFDQWpDLE1BQU0sQ0FBQ1MsTUFEUCxHQUVBc0IsVUFGQTtBQUdIVixNQUFBQTtBQUhHO0FBUFAsa0JBYUU7QUFDRSxJQUFBLEtBQUssRUFBQyxLQURSO0FBRUUsSUFBQSxNQUFNLEVBQUMsS0FGVDtBQUdFLElBQUEsT0FBTyxFQUFDLFdBSFY7QUFJRSxJQUFBLElBQUksRUFBQyxNQUpQO0FBS0UsSUFBQSxLQUFLLGtDQUFPckIsTUFBTSxDQUFDaUIsSUFBZDtBQUFvQkcsTUFBQUE7QUFBcEI7QUFMUCxrQkFPRTtBQUNFLElBQUEsUUFBUSxFQUFDLFNBRFg7QUFFRSxJQUFBLFFBQVEsRUFBQyxTQUZYO0FBR0UsSUFBQSxDQUFDLEVBQUMsNlNBSEo7QUFJRSxJQUFBLElBQUksRUFBQztBQUpQLElBUEYsQ0FiRixDQURGLENBREY7QUFnQ0QsQ0F0REQ7O0FBd0RBLGVBQWVELFFBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ1NTUHJvcGVydGllcyB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgdXNlQ2hhdCBmcm9tICcuLi8uLi9ob29rcy91c2VDaGF0J1xuXG5jb25zdCBzdHlsZXM6IHtcbiAgY29udGFpbmVyOiBDU1NQcm9wZXJ0aWVzXG4gIGJ1dHRvbjogQ1NTUHJvcGVydGllc1xuICBpY29uOiBDU1NQcm9wZXJ0aWVzXG59ID0ge1xuICBjb250YWluZXI6IHtcbiAgICB6SW5kZXg6IDIxNDc0ODM2NDgsIC8vIG9uZSBtb3JlIHRoYW4gcHJvdmlkZXJcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICBib3JkZXI6ICcwJyxcbiAgICB3aWR0aDogJzY0cHgnLFxuICAgIGhlaWdodDogJzY0cHgnLFxuICAgIGJveFNoYWRvdzogJ3JnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDhweCAxNnB4IDBweCcsXG4gICAgbGVmdDogJ2F1dG8nXG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgd2lkdGg6ICc2NHB4JyxcbiAgICBtaW5XaWR0aDogJzY0cHgnLFxuICAgIGhlaWdodDogJzY0cHgnLFxuICAgIG1pbkhlaWdodDogJzY0cHgnLFxuICAgIHBhZGRpbmc6ICcwJyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICBib3JkZXI6ICcwJ1xuICB9LFxuICBpY29uOiB7XG4gICAgZm9udFNpemU6ICczNnB4J1xuICB9XG59XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNvbG9yPzogc3RyaW5nXG4gIGJhY2tncm91bmRDb2xvcj86IHN0cmluZ1xuICBwb3NpdGlvbj86IHN0cmluZ1xuICB2T2Zmc2V0Pzogc3RyaW5nXG4gIGhPZmZzZXQ/OiBzdHJpbmdcbiAgc3R5bGU/OiBzdHJpbmdcbn1cblxuY29uc3QgVXNlcmxpa2UgPSAoe1xuICBjb2xvciA9ICd3aGl0ZScsXG4gIGJhY2tncm91bmRDb2xvciA9ICcjMGQ4Y2ZmJyxcbiAgcG9zaXRpb24gPSAncmlnaHQnLFxuICB2T2Zmc2V0ID0gJzI0cHgnLFxuICBoT2Zmc2V0ID0gJzI0cHgnLFxuICBzdHlsZSA9ICdyb3VuZCdcbn06IFByb3BzKTogSlNYLkVsZW1lbnQgfCBudWxsID0+IHtcbiAgY29uc3QgW3N0YXRlLCBsb2FkQ2hhdF0gPSB1c2VDaGF0KHsgbG9hZFdoZW5JZGxlOiB0cnVlIH0pXG4gIGNvbnN0IHBvc2l0aW9uU3R5bGVzID0ge1xuICAgIGJvdHRvbTogdk9mZnNldCxcbiAgICByaWdodDogcG9zaXRpb24gPT09ICdsZWZ0JyA/ICdhdXRvJyA6IGhPZmZzZXQsXG4gICAgbGVmdDogcG9zaXRpb24gPT09ICdyaWdodCcgPyAnYXV0bycgOiBoT2Zmc2V0XG4gIH1cbiAgY29uc3Qgc2hhcGVTdHlsZSA9IHtcbiAgICBib3JkZXJSYWRpdXM6IHN0eWxlID09PSAncm91bmQnID8gJzUwJScgOiAnMCdcbiAgfVxuXG4gIGlmIChzdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgLi4uc3R5bGVzLmNvbnRhaW5lciwgLi4ucG9zaXRpb25TdHlsZXMsIC4uLnNoYXBlU3R5bGUgfX0+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICBhcmlhLWxhYmVsPVwiTG9hZCBDaGF0XCJcbiAgICAgICAgYXJpYS1idXN5PVwidHJ1ZVwiXG4gICAgICAgIGFyaWEtbGl2ZT1cInBvbGl0ZVwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGxvYWRDaGF0KHsgb3BlbjogdHJ1ZSB9KX1cbiAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBsb2FkQ2hhdCh7IG9wZW46IGZhbHNlIH0pfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIC4uLnN0eWxlcy5idXR0b24sXG4gICAgICAgICAgLi4uc2hhcGVTdHlsZSxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3JcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPHN2Z1xuICAgICAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMzYgMzZcIlxuICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICBzdHlsZT17eyAuLi5zdHlsZXMuaWNvbiwgY29sb3IgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgIGQ9XCJNMTggMzZjMi44OTMgMCA1LjYyNi0uNjgyIDguMDQ3LTEuODk1aDUuMTFhMiAyIDAgMDAyLTJ2LTQuMzkzQTE3LjkxNiAxNy45MTYgMCAwMDM2IDE4YzAtOS45NDEtOC4wNTktMTgtMTgtMThTMCA4LjA1OSAwIDE4czguMDU5IDE4IDE4IDE4ek05LjUgMjJhMS41IDEuNSAwIDAwMCAzaDE3YTEuNSAxLjUgMCAwMDAtM2gtMTd6bTEuNS00YTEuNSAxLjUgMCAwMTEuNS0xLjVoMTRhMS41IDEuNSAwIDAxMCAzaC0xNEExLjUgMS41IDAgMDExMSAxOHptLTEuNS03YTEuNSAxLjUgMCAwMDAgM2gxN2ExLjUgMS41IDAgMDAwLTNoLTE3elwiXG4gICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJsaWtlXG4iXX0=