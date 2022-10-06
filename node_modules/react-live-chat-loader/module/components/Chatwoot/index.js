function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import useChat from "../../hooks/useChat";
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
  const [state, loadChat] = useChat({
    loadWhenIdle: true
  });
  if (state === 'complete') return null;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
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
  }, state === 'initial' ? /*#__PURE__*/React.createElement("img", {
    style: styles.img,
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAUVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////8IN+deAAAAGnRSTlMAAwgJEBk0TVheY2R5eo+ut8jb5OXs8fX2+cjRDTIAAADsSURBVHgBldZbkoMgFIThRgQv8SKKgGf/C51UnJqaRI30/9zfe+NQUQ3TvG7bOk9DVeCmshmj/CuOTYnrdBfkUOg0zlOtl9OWVuEk4+QyZ3DIevmSt/ioTvK1VH/s5bY3YdM9SBZ/mUUyWgx+U06ycgp7D8msxSvtc4HXL9BLdj2elSEfhBJAI0QNgJEBI1BEBsQClVBVGDgwYOLAhJkDM1YOrNg4sLFAsLJgZsHEgoEFFQt0JAFGFjQsKAMJ0LFAexKgZYFyJIDxJIBNJEDNAtSJBLCeBDCOBFAPzwFA94ED+zmhwDO9358r8ANtIsMXi7qVAwAAAABJRU5ErkJggg==",
    alt: "bubble-icon"
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: _objectSpread(_objectSpread({}, styles.close), {}, {
      transform: 'rotate(45deg)'
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: _objectSpread(_objectSpread({}, styles.close), {}, {
      transform: 'rotate(-45deg)'
    })
  }))));
};

Provider.defaultProps = {
  color: '#1f93ff'
};
export default Provider;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NoYXR3b290L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNoYXQiLCJzdHlsZXMiLCJidXR0b24iLCJib3JkZXJSYWRpdXMiLCJib3R0b20iLCJyaWdodCIsImJveFNoYWRvdyIsImN1cnNvciIsImhlaWdodCIsInBvc2l0aW9uIiwid2lkdGgiLCJ6SW5kZXgiLCJ1c2VyU2VsZWN0IiwiaW1nIiwibWFyZ2luIiwiY2xvc2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsZWZ0IiwidG9wIiwiUHJvdmlkZXIiLCJjb2xvciIsInN0YXRlIiwibG9hZENoYXQiLCJsb2FkV2hlbklkbGUiLCJvcGVuIiwidHJhbnNmb3JtIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQXFDLE9BQXJDO0FBRUEsT0FBT0MsT0FBUDtBQUVBLE1BQU1DLE1BSUwsR0FBRztBQUNGQyxFQUFBQSxNQUFNLEVBQUU7QUFDTkMsSUFBQUEsWUFBWSxFQUFFLE9BRFI7QUFFTkMsSUFBQUEsTUFBTSxFQUFFLE1BRkY7QUFHTkMsSUFBQUEsS0FBSyxFQUFFLE1BSEQ7QUFJTkMsSUFBQUEsU0FBUyxFQUFFLDZCQUpMO0FBS05DLElBQUFBLE1BQU0sRUFBRSxTQUxGO0FBTU5DLElBQUFBLE1BQU0sRUFBRSxNQU5GO0FBT05DLElBQUFBLFFBQVEsRUFBRSxPQVBKO0FBUU5DLElBQUFBLEtBQUssRUFBRSxNQVJEO0FBU05DLElBQUFBLE1BQU0sRUFBRSxVQVRGO0FBU2M7QUFDcEJDLElBQUFBLFVBQVUsRUFBRTtBQVZOLEdBRE47QUFhRkMsRUFBQUEsR0FBRyxFQUFFO0FBQ0hMLElBQUFBLE1BQU0sRUFBRSxNQURMO0FBRUhNLElBQUFBLE1BQU0sRUFBRSxNQUZMO0FBR0hKLElBQUFBLEtBQUssRUFBRTtBQUhKLEdBYkg7QUFrQkZLLEVBQUFBLEtBQUssRUFBRTtBQUNMQyxJQUFBQSxlQUFlLEVBQUUsTUFEWjtBQUVMUixJQUFBQSxNQUFNLEVBQUUsTUFGSDtBQUdMUyxJQUFBQSxJQUFJLEVBQUUsTUFIRDtBQUlMUixJQUFBQSxRQUFRLEVBQUUsVUFKTDtBQUtMUyxJQUFBQSxHQUFHLEVBQUUsTUFMQTtBQU1MUixJQUFBQSxLQUFLLEVBQUU7QUFORjtBQWxCTCxDQUpKOztBQW9DQSxNQUFNUyxRQUFRLEdBQUcsQ0FBQztBQUFFQyxFQUFBQTtBQUFGLENBQUQsS0FBMEM7QUFDekQsUUFBTSxDQUFDQyxLQUFELEVBQVFDLFFBQVIsSUFBb0J0QixPQUFPLENBQUM7QUFBRXVCLElBQUFBLFlBQVksRUFBRTtBQUFoQixHQUFELENBQWpDO0FBRUEsTUFBSUYsS0FBSyxLQUFLLFVBQWQsRUFBMEIsT0FBTyxJQUFQO0FBRTFCLHNCQUNFLDhDQUNFO0FBQ0UsSUFBQSxJQUFJLEVBQUMsUUFEUDtBQUVFLGtCQUFXLFdBRmI7QUFHRSxpQkFBVSxNQUhaO0FBSUUsaUJBQVUsUUFKWjtBQUtFLElBQUEsT0FBTyxFQUFFLE1BQU1DLFFBQVEsQ0FBQztBQUFFRSxNQUFBQSxJQUFJLEVBQUU7QUFBUixLQUFELENBTHpCO0FBTUUsSUFBQSxZQUFZLEVBQUUsTUFBTUYsUUFBUSxDQUFDO0FBQUVFLE1BQUFBLElBQUksRUFBRTtBQUFSLEtBQUQsQ0FOOUI7QUFPRSxJQUFBLEtBQUssa0NBQ0F2QixNQUFNLENBQUNDLE1BRFA7QUFFSGMsTUFBQUEsZUFBZSxFQUFFSTtBQUZkO0FBUFAsS0FZR0MsS0FBSyxLQUFLLFNBQVYsZ0JBQ0M7QUFDRSxJQUFBLEtBQUssRUFBRXBCLE1BQU0sQ0FBQ1ksR0FEaEI7QUFFRSxJQUFBLEdBQUcsRUFBQyxnbEJBRk47QUFHRSxJQUFBLEdBQUcsRUFBQztBQUhOLElBREQsZ0JBT0MsdURBQ0U7QUFBSyxJQUFBLEtBQUssa0NBQU9aLE1BQU0sQ0FBQ2MsS0FBZDtBQUFxQlUsTUFBQUEsU0FBUyxFQUFFO0FBQWhDO0FBQVYsSUFERixlQUVFO0FBQUssSUFBQSxLQUFLLGtDQUFPeEIsTUFBTSxDQUFDYyxLQUFkO0FBQXFCVSxNQUFBQSxTQUFTLEVBQUU7QUFBaEM7QUFBVixJQUZGLENBbkJKLENBREYsQ0FERjtBQTZCRCxDQWxDRDs7QUFvQ0FOLFFBQVEsQ0FBQ08sWUFBVCxHQUF3QjtBQUN0Qk4sRUFBQUEsS0FBSyxFQUFFO0FBRGUsQ0FBeEI7QUFJQSxlQUFlRCxRQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENTU1Byb3BlcnRpZXMgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHVzZUNoYXQgZnJvbSAnLi4vLi4vaG9va3MvdXNlQ2hhdCdcblxuY29uc3Qgc3R5bGVzOiB7XG4gIGJ1dHRvbjogQ1NTUHJvcGVydGllc1xuICBpbWc6IENTU1Byb3BlcnRpZXNcbiAgY2xvc2U6IENTU1Byb3BlcnRpZXNcbn0gPSB7XG4gIGJ1dHRvbjoge1xuICAgIGJvcmRlclJhZGl1czogJzEwMHB4JyxcbiAgICBib3R0b206ICcyMHB4JyxcbiAgICByaWdodDogJzIwcHgnLFxuICAgIGJveFNoYWRvdzogJzAgOHB4IDI0cHggcmdiKDAgMCAwIC8gMTYlKScsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgaGVpZ2h0OiAnNjRweCcsXG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgd2lkdGg6ICc2NHB4JyxcbiAgICB6SW5kZXg6IDIxNDc0ODMwMDEsIC8vIDEgbW9yZSB0aGFuIHRoZSBhY3R1YWwgd2lkZ2V0XG4gICAgdXNlclNlbGVjdDogJ25vbmUnXG4gIH0sXG4gIGltZzoge1xuICAgIGhlaWdodDogJzI0cHgnLFxuICAgIG1hcmdpbjogJzIwcHgnLFxuICAgIHdpZHRoOiAnMjRweCdcbiAgfSxcbiAgY2xvc2U6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICBoZWlnaHQ6ICcyNHB4JyxcbiAgICBsZWZ0OiAnMzJweCcsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAnMjBweCcsXG4gICAgd2lkdGg6ICcycHgnXG4gIH1cbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgY29sb3I/OiBzdHJpbmdcbn1cblxuY29uc3QgUHJvdmlkZXIgPSAoeyBjb2xvciB9OiBQcm9wcyk6IEpTWC5FbGVtZW50IHwgbnVsbCA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgbG9hZENoYXRdID0gdXNlQ2hhdCh7IGxvYWRXaGVuSWRsZTogdHJ1ZSB9KVxuXG4gIGlmIChzdGF0ZSA9PT0gJ2NvbXBsZXRlJykgcmV0dXJuIG51bGxcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICBhcmlhLWxhYmVsPVwiTG9hZCBDaGF0XCJcbiAgICAgICAgYXJpYS1idXN5PVwidHJ1ZVwiXG4gICAgICAgIGFyaWEtbGl2ZT1cInBvbGl0ZVwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGxvYWRDaGF0KHsgb3BlbjogdHJ1ZSB9KX1cbiAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBsb2FkQ2hhdCh7IG9wZW46IGZhbHNlIH0pfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIC4uLnN0eWxlcy5idXR0b24sXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvclxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7c3RhdGUgPT09ICdpbml0aWFsJyA/IChcbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzdHlsZT17c3R5bGVzLmltZ31cbiAgICAgICAgICAgIHNyYz1cImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBREFBQUFBd0NBTUFBQUJnM0FtMUFBQUFVVkJNVkVVQUFBRC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy84SU4rZGVBQUFBR25SU1RsTUFBd2dKRUJrMFRWaGVZMlI1ZW8rdXQ4amI1T1hzOGZYMitjalJEVElBQUFEc1NVUkJWSGdCbGRaYmtvTWdGSVRoUmdRdjhTS0tnR2YvQzUxVW5KcWFSSTMwLzl6ZmUrTlFVUTNUdkc3Yk9rOURWZUNtc2htai9DdU9UWW5yZEJma1VPZzB6bE90bDlPV1Z1RWs0K1F5WjNESWV2bVN0L2lvVHZLMVZIL3M1YlkzWWRNOVNCWi9tVVV5V2d4K1UwNnljZ3A3RDhtc3hTdnRjNEhYTDlCTGRqMmVsU0VmaEJKQUkwUU5nSkVCSTFCRUJzUUNsVkJWR0Rnd1lPTEFoSmtETTFZT3JOZzRzTEZBc0xKZ1pzSEVnb0VGRlF0MEpBRkdGalFzS0FNSjBMRkFleEtnWllGeUpJRHhKSUJOSkVETkF0U0pCTENlQkRDT0JGQVB6d0ZBOTRFRCt6bWh3RE85MzU4cjhBTnRJc01YaTdxVkF3QUFBQUJKUlU1RXJrSmdnZz09XCJcbiAgICAgICAgICAgIGFsdD1cImJ1YmJsZS1pY29uXCJcbiAgICAgICAgICAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IC4uLnN0eWxlcy5jbG9zZSwgdHJhbnNmb3JtOiAncm90YXRlKDQ1ZGVnKScgfX0gLz5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgLi4uc3R5bGVzLmNsb3NlLCB0cmFuc2Zvcm06ICdyb3RhdGUoLTQ1ZGVnKScgfX0gLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cblByb3ZpZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgY29sb3I6ICcjMWY5M2ZmJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm92aWRlclxuIl19