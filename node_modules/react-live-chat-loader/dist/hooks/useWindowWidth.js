"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = (0, _react.useState)(typeof window !== 'undefined' ? window.innerWidth : 0);

  const handleResize = () => setWindowWidth(window.innerWidth);

  (0, _react.useEffect)(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);
  return windowWidth;
};

var _default = useWindowWidth;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ob29rcy91c2VXaW5kb3dXaWR0aC50cyJdLCJuYW1lcyI6WyJ1c2VXaW5kb3dXaWR0aCIsIndpbmRvd1dpZHRoIiwic2V0V2luZG93V2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaGFuZGxlUmVzaXplIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxjQUFjLEdBQUcsTUFBYztBQUNuQyxRQUFNLENBQUNDLFdBQUQsRUFBY0MsY0FBZCxJQUFnQyxxQkFDcEMsT0FBT0MsTUFBUCxLQUFrQixXQUFsQixHQUFnQ0EsTUFBTSxDQUFDQyxVQUF2QyxHQUFvRCxDQURoQixDQUF0Qzs7QUFJQSxRQUFNQyxZQUFZLEdBQUcsTUFBTUgsY0FBYyxDQUFDQyxNQUFNLENBQUNDLFVBQVIsQ0FBekM7O0FBRUEsd0JBQVUsTUFBTTtBQUNkLFFBQUksT0FBT0QsTUFBUCxLQUFrQixXQUF0QixFQUFtQztBQUNqQ0QsTUFBQUEsY0FBYyxDQUFDQyxNQUFNLENBQUNDLFVBQVIsQ0FBZDtBQUNBRCxNQUFBQSxNQUFNLENBQUNHLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDRCxZQUFsQztBQUNEOztBQUNELFdBQU8sTUFBTTtBQUNYLFVBQUksT0FBT0YsTUFBUCxLQUFrQixXQUF0QixFQUFtQztBQUNqQ0EsUUFBQUEsTUFBTSxDQUFDSSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ0YsWUFBckM7QUFDRDtBQUNGLEtBSkQ7QUFLRCxHQVZELEVBVUcsRUFWSDtBQVlBLFNBQU9KLFdBQVA7QUFDRCxDQXBCRDs7ZUFzQmVELGMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IHVzZVdpbmRvd1dpZHRoID0gKCk6IG51bWJlciA9PiB7XG4gIGNvbnN0IFt3aW5kb3dXaWR0aCwgc2V0V2luZG93V2lkdGhdID0gdXNlU3RhdGUoXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuaW5uZXJXaWR0aCA6IDBcbiAgKVxuXG4gIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHNldFdpbmRvd1dpZHRoKHdpbmRvdy5pbm5lcldpZHRoKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBzZXRXaW5kb3dXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aClcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpXG4gICAgfVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKVxuXG4gIHJldHVybiB3aW5kb3dXaWR0aFxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VXaW5kb3dXaWR0aFxuIl19