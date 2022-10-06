"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _waitForLoad = _interopRequireDefault(require("../utils/waitForLoad"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const domain = 'https://userlike-cdn-widgets.s3-eu-west-1.amazonaws.com';

/* eslint-disable */
const loadScript = providerKey => {
  if (window.userlike) return false;
  var d = document;

  function l() {
    var _x$parentNode;

    var s = d.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = `${domain}/${providerKey}.js`;
    var x = d.getElementsByTagName('script')[0];
    (_x$parentNode = x.parentNode) === null || _x$parentNode === void 0 ? void 0 : _x$parentNode.insertBefore(s, x);
  }

  l();
  return true;
};
/* eslint-enable */


const load = ({
  providerKey,
  setState,
  beforeInit = () => undefined,
  onReady = () => undefined
}) => {
  const loaded = loadScript(providerKey); // Continue as long as userlike hasn’t already been initialised.

  if (loaded) {
    beforeInit();
    (0, _waitForLoad.default)(() => !!window.userlike, // Allow userlike to complete loading before removing fake widget
    () => setTimeout(() => {
      setState('complete');
      onReady();
    }, 2000));
  }

  return true;
};

const open = () => {
  (0, _waitForLoad.default)(() => {
    var _window$userlike;

    return !!((_window$userlike = window.userlike) !== null && _window$userlike !== void 0 && _window$userlike.userlikeStartChat);
  }, // userlike is slow to show once it has loaded
  () => setTimeout(window.userlike.userlikeStartChat, 1000));
};

var _default = {
  domain,
  load,
  open
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm92aWRlcnMvdXNlcmxpa2UudHMiXSwibmFtZXMiOlsiZG9tYWluIiwibG9hZFNjcmlwdCIsInByb3ZpZGVyS2V5Iiwid2luZG93IiwidXNlcmxpa2UiLCJkIiwiZG9jdW1lbnQiLCJsIiwicyIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwiYXN5bmMiLCJzcmMiLCJ4IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwibG9hZCIsInNldFN0YXRlIiwiYmVmb3JlSW5pdCIsInVuZGVmaW5lZCIsIm9uUmVhZHkiLCJsb2FkZWQiLCJzZXRUaW1lb3V0Iiwib3BlbiIsInVzZXJsaWtlU3RhcnRDaGF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7QUFFQSxNQUFNQSxNQUFNLEdBQUcseURBQWY7O0FBYUE7QUFDQSxNQUFNQyxVQUFVLEdBQUlDLFdBQUQsSUFBa0M7QUFDbkQsTUFBSUMsTUFBTSxDQUFDQyxRQUFYLEVBQXFCLE9BQU8sS0FBUDtBQUVyQixNQUFJQyxDQUFDLEdBQUdDLFFBQVI7O0FBQ0EsV0FBU0MsQ0FBVCxHQUFhO0FBQUE7O0FBQ1gsUUFBSUMsQ0FBQyxHQUFHSCxDQUFDLENBQUNJLGFBQUYsQ0FBZ0IsUUFBaEIsQ0FBUjtBQUNBRCxJQUFBQSxDQUFDLENBQUNFLElBQUYsR0FBUyxpQkFBVDtBQUNBRixJQUFBQSxDQUFDLENBQUNHLEtBQUYsR0FBVSxJQUFWO0FBQ0FILElBQUFBLENBQUMsQ0FBQ0ksR0FBRixHQUFTLEdBQUVaLE1BQU8sSUFBR0UsV0FBWSxLQUFqQztBQUNBLFFBQUlXLENBQUMsR0FBR1IsQ0FBQyxDQUFDUyxvQkFBRixDQUF1QixRQUF2QixFQUFpQyxDQUFqQyxDQUFSO0FBQ0EscUJBQUFELENBQUMsQ0FBQ0UsVUFBRixnRUFBY0MsWUFBZCxDQUEyQlIsQ0FBM0IsRUFBOEJLLENBQTlCO0FBQ0Q7O0FBQ0ROLEVBQUFBLENBQUM7QUFFRCxTQUFPLElBQVA7QUFDRCxDQWZEO0FBZ0JBOzs7QUFFQSxNQUFNVSxJQUFJLEdBQUcsQ0FBQztBQUNaZixFQUFBQSxXQURZO0FBRVpnQixFQUFBQSxRQUZZO0FBR1pDLEVBQUFBLFVBQVUsR0FBRyxNQUFNQyxTQUhQO0FBSVpDLEVBQUFBLE9BQU8sR0FBRyxNQUFNRDtBQUpKLENBQUQsS0FVRTtBQUNiLFFBQU1FLE1BQU0sR0FBR3JCLFVBQVUsQ0FBQ0MsV0FBRCxDQUF6QixDQURhLENBRWI7O0FBQ0EsTUFBSW9CLE1BQUosRUFBWTtBQUNWSCxJQUFBQSxVQUFVO0FBQ1YsOEJBQ0UsTUFBTSxDQUFDLENBQUNoQixNQUFNLENBQUNDLFFBRGpCLEVBRUU7QUFDQSxVQUNFbUIsVUFBVSxDQUFDLE1BQU07QUFDZkwsTUFBQUEsUUFBUSxDQUFDLFVBQUQsQ0FBUjtBQUNBRyxNQUFBQSxPQUFPO0FBQ1IsS0FIUyxFQUdQLElBSE8sQ0FKZDtBQVNEOztBQUVELFNBQU8sSUFBUDtBQUNELENBM0JEOztBQTZCQSxNQUFNRyxJQUFJLEdBQUcsTUFBWTtBQUN2Qiw0QkFDRTtBQUFBOztBQUFBLFdBQU0sQ0FBQyxzQkFBQ3JCLE1BQU0sQ0FBQ0MsUUFBUiw2Q0FBQyxpQkFBaUJxQixpQkFBbEIsQ0FBUDtBQUFBLEdBREYsRUFFRTtBQUNBLFFBQU1GLFVBQVUsQ0FBQ3BCLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQnFCLGlCQUFqQixFQUFvQyxJQUFwQyxDQUhsQjtBQUtELENBTkQ7O2VBUWU7QUFDYnpCLEVBQUFBLE1BRGE7QUFFYmlCLEVBQUFBLElBRmE7QUFHYk8sRUFBQUE7QUFIYSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuLi90eXBlcydcbmltcG9ydCB3YWl0Rm9yTG9hZCBmcm9tICcuLi91dGlscy93YWl0Rm9yTG9hZCdcblxuY29uc3QgZG9tYWluID0gJ2h0dHBzOi8vdXNlcmxpa2UtY2RuLXdpZGdldHMuczMtZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20nXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgLy9lc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgIHVzZXJsaWtlOiB7XG4gICAgICB1c2VybGlrZVJlYWR5OiAoKSA9PiB2b2lkXG4gICAgICB1c2VybGlrZVN0YXJ0Q2hhdDogKCkgPT4gdm9pZFxuICAgICAgdXNlcmxpa2VRdWl0Q2hhdDogKCkgPT4gdm9pZFxuICAgIH1cbiAgfVxufVxuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuY29uc3QgbG9hZFNjcmlwdCA9IChwcm92aWRlcktleTogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gIGlmICh3aW5kb3cudXNlcmxpa2UpIHJldHVybiBmYWxzZVxuXG4gIHZhciBkID0gZG9jdW1lbnRcbiAgZnVuY3Rpb24gbCgpIHtcbiAgICB2YXIgcyA9IGQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcbiAgICBzLnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0J1xuICAgIHMuYXN5bmMgPSB0cnVlXG4gICAgcy5zcmMgPSBgJHtkb21haW59LyR7cHJvdmlkZXJLZXl9LmpzYFxuICAgIHZhciB4ID0gZC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF1cbiAgICB4LnBhcmVudE5vZGU/Lmluc2VydEJlZm9yZShzLCB4KVxuICB9XG4gIGwoKVxuXG4gIHJldHVybiB0cnVlXG59XG4vKiBlc2xpbnQtZW5hYmxlICovXG5cbmNvbnN0IGxvYWQgPSAoe1xuICBwcm92aWRlcktleSxcbiAgc2V0U3RhdGUsXG4gIGJlZm9yZUluaXQgPSAoKSA9PiB1bmRlZmluZWQsXG4gIG9uUmVhZHkgPSAoKSA9PiB1bmRlZmluZWRcbn06IHtcbiAgcHJvdmlkZXJLZXk6IHN0cmluZ1xuICBzZXRTdGF0ZTogKHN0YXRlOiBTdGF0ZSkgPT4gdm9pZFxuICBiZWZvcmVJbml0PzogKCkgPT4gdm9pZFxuICBvblJlYWR5PzogKCkgPT4gdm9pZFxufSk6IGJvb2xlYW4gPT4ge1xuICBjb25zdCBsb2FkZWQgPSBsb2FkU2NyaXB0KHByb3ZpZGVyS2V5KVxuICAvLyBDb250aW51ZSBhcyBsb25nIGFzIHVzZXJsaWtlIGhhc27igJl0IGFscmVhZHkgYmVlbiBpbml0aWFsaXNlZC5cbiAgaWYgKGxvYWRlZCkge1xuICAgIGJlZm9yZUluaXQoKVxuICAgIHdhaXRGb3JMb2FkKFxuICAgICAgKCkgPT4gISF3aW5kb3cudXNlcmxpa2UsXG4gICAgICAvLyBBbGxvdyB1c2VybGlrZSB0byBjb21wbGV0ZSBsb2FkaW5nIGJlZm9yZSByZW1vdmluZyBmYWtlIHdpZGdldFxuICAgICAgKCkgPT5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc2V0U3RhdGUoJ2NvbXBsZXRlJylcbiAgICAgICAgICBvblJlYWR5KClcbiAgICAgICAgfSwgMjAwMClcbiAgICApXG4gIH1cblxuICByZXR1cm4gdHJ1ZVxufVxuXG5jb25zdCBvcGVuID0gKCk6IHZvaWQgPT4ge1xuICB3YWl0Rm9yTG9hZChcbiAgICAoKSA9PiAhIXdpbmRvdy51c2VybGlrZT8udXNlcmxpa2VTdGFydENoYXQsXG4gICAgLy8gdXNlcmxpa2UgaXMgc2xvdyB0byBzaG93IG9uY2UgaXQgaGFzIGxvYWRlZFxuICAgICgpID0+IHNldFRpbWVvdXQod2luZG93LnVzZXJsaWtlLnVzZXJsaWtlU3RhcnRDaGF0LCAxMDAwKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZG9tYWluLFxuICBsb2FkLFxuICBvcGVuXG59XG4iXX0=