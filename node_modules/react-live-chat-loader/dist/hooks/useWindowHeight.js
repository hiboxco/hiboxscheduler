"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

const useWindowHeight = () => {
  const [windowHeight, setWindowHeight] = (0, _react.useState)(typeof window !== 'undefined' ? window.innerHeight : 0);

  const handleResize = () => setWindowHeight(window.innerHeight);

  (0, _react.useEffect)(() => {
    if (typeof window !== 'undefined') {
      setWindowHeight(window.innerHeight);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);
  return windowHeight;
};

var _default = useWindowHeight;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ob29rcy91c2VXaW5kb3dIZWlnaHQudHMiXSwibmFtZXMiOlsidXNlV2luZG93SGVpZ2h0Iiwid2luZG93SGVpZ2h0Iiwic2V0V2luZG93SGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJoYW5kbGVSZXNpemUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLGVBQWUsR0FBRyxNQUFjO0FBQ3BDLFFBQU0sQ0FBQ0MsWUFBRCxFQUFlQyxlQUFmLElBQWtDLHFCQUN0QyxPQUFPQyxNQUFQLEtBQWtCLFdBQWxCLEdBQWdDQSxNQUFNLENBQUNDLFdBQXZDLEdBQXFELENBRGYsQ0FBeEM7O0FBSUEsUUFBTUMsWUFBWSxHQUFHLE1BQU1ILGVBQWUsQ0FBQ0MsTUFBTSxDQUFDQyxXQUFSLENBQTFDOztBQUVBLHdCQUFVLE1BQU07QUFDZCxRQUFJLE9BQU9ELE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7QUFDakNELE1BQUFBLGVBQWUsQ0FBQ0MsTUFBTSxDQUFDQyxXQUFSLENBQWY7QUFDQUQsTUFBQUEsTUFBTSxDQUFDRyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0QsWUFBbEM7QUFDRDs7QUFDRCxXQUFPLE1BQU07QUFDWCxVQUFJLE9BQU9GLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7QUFDakNBLFFBQUFBLE1BQU0sQ0FBQ0ksbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNGLFlBQXJDO0FBQ0Q7QUFDRixLQUpEO0FBS0QsR0FWRCxFQVVHLEVBVkg7QUFZQSxTQUFPSixZQUFQO0FBQ0QsQ0FwQkQ7O2VBc0JlRCxlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCB1c2VXaW5kb3dIZWlnaHQgPSAoKTogbnVtYmVyID0+IHtcbiAgY29uc3QgW3dpbmRvd0hlaWdodCwgc2V0V2luZG93SGVpZ2h0XSA9IHVzZVN0YXRlKFxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LmlubmVySGVpZ2h0IDogMFxuICApXG5cbiAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4gc2V0V2luZG93SGVpZ2h0KHdpbmRvdy5pbm5lckhlaWdodClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgc2V0V2luZG93SGVpZ2h0KHdpbmRvdy5pbm5lckhlaWdodClcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpXG4gICAgfVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKVxuXG4gIHJldHVybiB3aW5kb3dIZWlnaHRcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlV2luZG93SGVpZ2h0XG4iXX0=