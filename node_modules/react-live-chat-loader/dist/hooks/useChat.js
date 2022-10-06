"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _context = require("../context");

var Providers = _interopRequireWildcard(require("../providers"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const requestIdleCallback = typeof window !== 'undefined' ? window.requestIdleCallback : null;
const connection = typeof window !== 'undefined' ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
window.navigator && window.navigator.connection : null;

const useChat = ({
  loadWhenIdle
} = {
  loadWhenIdle: false
}) => {
  const {
    provider,
    providerKey,
    idlePeriod,
    state,
    setState,
    appID,
    locale,
    baseUrl,
    beforeInit,
    onReady
  } = (0, _react.useContext)(_context.LiveChatLoaderContext);
  (0, _react.useEffect)(() => {
    // Don't load if idlePeriod is 0, null or undefined
    if (typeof window === 'undefined' || !loadWhenIdle || !idlePeriod) return; // Don't load if 2g connection or save-data is enabled

    if (connection && (connection.saveData || /2g/.test(connection.effectiveType))) return;
    if (isNaN(idlePeriod)) return; // deadline.timeRemaining() has an upper limit of 50 milliseconds
    // We want to ensure the page has been idle for a significant period of time
    // Therefore we count consecutive maximum timeRemaining counts and load chat when we reach our threshold

    let elapsedIdlePeriod = 0;
    let previousTimeRemaining = 0;

    const scheduleLoadChat = deadline => {
      if (elapsedIdlePeriod > idlePeriod) return loadChat({
        open: false
      });
      const timeRemaining = deadline.timeRemaining(); // To ensure browser is idle, only accumalte elapsedIdlePeriod when
      // two consecutive maximum timeRemaining's have been observed

      if (previousTimeRemaining > 49 && timeRemaining > 49) elapsedIdlePeriod += timeRemaining;
      previousTimeRemaining = timeRemaining;
      requestIdleCallback === null || requestIdleCallback === void 0 ? void 0 : requestIdleCallback(scheduleLoadChat);
    };

    if (requestIdleCallback) {
      requestIdleCallback(scheduleLoadChat);
    } else {
      setTimeout(() => loadChat({
        open: false
      }), idlePeriod);
    }
  }, []);
  const chatProvider = Providers[provider];
  const loadChat = (0, _react.useCallback)(({
    open = true
  } = {
    open: true
  }) => {
    if (!providerKey) {
      //eslint-disable-next-line no-console
      console.error('No api key given to react-live-chat-loader');
      return;
    }

    if (!provider) {
      //eslint-disable-next-line no-console
      console.error('No provider given to react-live-chat-loader');
      return;
    }

    chatProvider.load({
      providerKey,
      setState,
      appID,
      locale,
      baseUrl,
      beforeInit,
      onReady
    });

    if (open) {
      chatProvider.open();
      if (state !== 'complete') setState('open');
    }
  }, [state]);
  return [state, loadChat];
};

var _default = useChat;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ob29rcy91c2VDaGF0LnRzIl0sIm5hbWVzIjpbInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJ3aW5kb3ciLCJjb25uZWN0aW9uIiwibmF2aWdhdG9yIiwidXNlQ2hhdCIsImxvYWRXaGVuSWRsZSIsInByb3ZpZGVyIiwicHJvdmlkZXJLZXkiLCJpZGxlUGVyaW9kIiwic3RhdGUiLCJzZXRTdGF0ZSIsImFwcElEIiwibG9jYWxlIiwiYmFzZVVybCIsImJlZm9yZUluaXQiLCJvblJlYWR5IiwiTGl2ZUNoYXRMb2FkZXJDb250ZXh0Iiwic2F2ZURhdGEiLCJ0ZXN0IiwiZWZmZWN0aXZlVHlwZSIsImlzTmFOIiwiZWxhcHNlZElkbGVQZXJpb2QiLCJwcmV2aW91c1RpbWVSZW1haW5pbmciLCJzY2hlZHVsZUxvYWRDaGF0IiwiZGVhZGxpbmUiLCJsb2FkQ2hhdCIsIm9wZW4iLCJ0aW1lUmVtYWluaW5nIiwic2V0VGltZW91dCIsImNoYXRQcm92aWRlciIsIlByb3ZpZGVycyIsImNvbnNvbGUiLCJlcnJvciIsImxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQTs7QUFDQTs7Ozs7O0FBRUEsTUFBTUEsbUJBQW1CLEdBQ3ZCLE9BQU9DLE1BQVAsS0FBa0IsV0FBbEIsR0FBZ0NBLE1BQU0sQ0FBQ0QsbUJBQXZDLEdBQTZELElBRC9EO0FBRUEsTUFBTUUsVUFBVSxHQUNkLE9BQU9ELE1BQVAsS0FBa0IsV0FBbEIsR0FDSTtBQUNBQSxNQUFNLENBQUNFLFNBQVAsSUFBcUJGLE1BQU0sQ0FBQ0UsU0FBUixDQUEwQkQsVUFGbEQsR0FHSSxJQUpOOztBQU1BLE1BQU1FLE9BQU8sR0FBRyxDQUNkO0FBQ0VDLEVBQUFBO0FBREYsSUFJSTtBQUFFQSxFQUFBQSxZQUFZLEVBQUU7QUFBaEIsQ0FMVSxLQU1xQztBQUNuRCxRQUFNO0FBQ0pDLElBQUFBLFFBREk7QUFFSkMsSUFBQUEsV0FGSTtBQUdKQyxJQUFBQSxVQUhJO0FBSUpDLElBQUFBLEtBSkk7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IH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgeyBMaXZlQ2hhdExvYWRlckNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0J1xuaW1wb3J0ICogYXMgUHJvdmlkZXJzIGZyb20gJy4uL3Byb3ZpZGVycydcblxuY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LnJlcXVlc3RJZGxlQ2FsbGJhY2sgOiBudWxsXG5jb25zdCBjb25uZWN0aW9uID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICA/IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICB3aW5kb3cubmF2aWdhdG9yICYmICh3aW5kb3cubmF2aWdhdG9yIGFzIGFueSkuY29ubmVjdGlvblxuICAgIDogbnVsbFxuXG5jb25zdCB1c2VDaGF0ID0gKFxuICB7XG4gICAgbG9hZFdoZW5JZGxlXG4gIH06IHtcbiAgICBsb2FkV2hlbklkbGU6IGJvb2xlYW5cbiAgfSA9IHsgbG9hZFdoZW5JZGxlOiBmYWxzZSB9XG4pOiBbU3RhdGUsICh7IG9wZW4gfTogeyBvcGVuOiBib29sZWFuIH0pID0+IHZvaWRdID0+IHtcbiAgY29uc3Qge1xuICAgIHByb3ZpZGVyLFxuICAgIHByb3ZpZGVyS2V5LFxuICAgIGlkbGVQZXJpb2QsXG4gICAgc3RhdGUsXG4gICAgc2V0U3RhdGUsXG4gICAgYXBwSUQsXG4gICAgbG9jYWxlLFxuICAgIGJhc2VVcmwsXG4gICAgYmVmb3JlSW5pdCxcbiAgICBvblJlYWR5XG4gIH0gPSB1c2VDb250ZXh0KExpdmVDaGF0TG9hZGVyQ29udGV4dClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIERvbid0IGxvYWQgaWYgaWRsZVBlcmlvZCBpcyAwLCBudWxsIG9yIHVuZGVmaW5lZFxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhbG9hZFdoZW5JZGxlIHx8ICFpZGxlUGVyaW9kKSByZXR1cm5cblxuICAgIC8vIERvbid0IGxvYWQgaWYgMmcgY29ubmVjdGlvbiBvciBzYXZlLWRhdGEgaXMgZW5hYmxlZFxuICAgIGlmIChcbiAgICAgIGNvbm5lY3Rpb24gJiZcbiAgICAgIChjb25uZWN0aW9uLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjb25uZWN0aW9uLmVmZmVjdGl2ZVR5cGUpKVxuICAgIClcbiAgICAgIHJldHVyblxuXG4gICAgaWYgKGlzTmFOKGlkbGVQZXJpb2QpKSByZXR1cm5cblxuICAgIC8vIGRlYWRsaW5lLnRpbWVSZW1haW5pbmcoKSBoYXMgYW4gdXBwZXIgbGltaXQgb2YgNTAgbWlsbGlzZWNvbmRzXG4gICAgLy8gV2Ugd2FudCB0byBlbnN1cmUgdGhlIHBhZ2UgaGFzIGJlZW4gaWRsZSBmb3IgYSBzaWduaWZpY2FudCBwZXJpb2Qgb2YgdGltZVxuICAgIC8vIFRoZXJlZm9yZSB3ZSBjb3VudCBjb25zZWN1dGl2ZSBtYXhpbXVtIHRpbWVSZW1haW5pbmcgY291bnRzIGFuZCBsb2FkIGNoYXQgd2hlbiB3ZSByZWFjaCBvdXIgdGhyZXNob2xkXG4gICAgbGV0IGVsYXBzZWRJZGxlUGVyaW9kID0gMFxuICAgIGxldCBwcmV2aW91c1RpbWVSZW1haW5pbmcgPSAwXG4gICAgY29uc3Qgc2NoZWR1bGVMb2FkQ2hhdCA9IChkZWFkbGluZTogSWRsZURlYWRsaW5lKSA9PiB7XG4gICAgICBpZiAoZWxhcHNlZElkbGVQZXJpb2QgPiBpZGxlUGVyaW9kKSByZXR1cm4gbG9hZENoYXQoeyBvcGVuOiBmYWxzZSB9KVxuXG4gICAgICBjb25zdCB0aW1lUmVtYWluaW5nID0gZGVhZGxpbmUudGltZVJlbWFpbmluZygpXG4gICAgICAvLyBUbyBlbnN1cmUgYnJvd3NlciBpcyBpZGxlLCBvbmx5IGFjY3VtYWx0ZSBlbGFwc2VkSWRsZVBlcmlvZCB3aGVuXG4gICAgICAvLyB0d28gY29uc2VjdXRpdmUgbWF4aW11bSB0aW1lUmVtYWluaW5nJ3MgaGF2ZSBiZWVuIG9ic2VydmVkXG4gICAgICBpZiAocHJldmlvdXNUaW1lUmVtYWluaW5nID4gNDkgJiYgdGltZVJlbWFpbmluZyA+IDQ5KVxuICAgICAgICBlbGFwc2VkSWRsZVBlcmlvZCArPSB0aW1lUmVtYWluaW5nXG5cbiAgICAgIHByZXZpb3VzVGltZVJlbWFpbmluZyA9IHRpbWVSZW1haW5pbmdcbiAgICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2s/LihzY2hlZHVsZUxvYWRDaGF0KVxuICAgIH1cblxuICAgIGlmIChyZXF1ZXN0SWRsZUNhbGxiYWNrKSB7XG4gICAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKHNjaGVkdWxlTG9hZENoYXQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gbG9hZENoYXQoeyBvcGVuOiBmYWxzZSB9KSwgaWRsZVBlcmlvZClcbiAgICB9XG4gIH0sIFtdKVxuXG4gIGNvbnN0IGNoYXRQcm92aWRlciA9IFByb3ZpZGVyc1twcm92aWRlcl1cblxuICBjb25zdCBsb2FkQ2hhdCA9IHVzZUNhbGxiYWNrPChhcmdzOiB7IG9wZW46IGJvb2xlYW4gfSkgPT4gdm9pZD4oXG4gICAgKHsgb3BlbiA9IHRydWUgfSA9IHsgb3BlbjogdHJ1ZSB9KSA9PiB7XG4gICAgICBpZiAoIXByb3ZpZGVyS2V5KSB7XG4gICAgICAgIC8vZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgY29uc29sZS5lcnJvcignTm8gYXBpIGtleSBnaXZlbiB0byByZWFjdC1saXZlLWNoYXQtbG9hZGVyJylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICghcHJvdmlkZXIpIHtcbiAgICAgICAgLy9lc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICBjb25zb2xlLmVycm9yKCdObyBwcm92aWRlciBnaXZlbiB0byByZWFjdC1saXZlLWNoYXQtbG9hZGVyJylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNoYXRQcm92aWRlci5sb2FkKHtcbiAgICAgICAgcHJvdmlkZXJLZXksXG4gICAgICAgIHNldFN0YXRlLFxuICAgICAgICBhcHBJRCxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBiYXNlVXJsLFxuICAgICAgICBiZWZvcmVJbml0LFxuICAgICAgICBvblJlYWR5XG4gICAgICB9KVxuXG4gICAgICBpZiAob3Blbikge1xuICAgICAgICBjaGF0UHJvdmlkZXIub3BlbigpXG4gICAgICAgIGlmIChzdGF0ZSAhPT0gJ2NvbXBsZXRlJykgc2V0U3RhdGUoJ29wZW4nKVxuICAgICAgfVxuICAgIH0sXG4gICAgW3N0YXRlXVxuICApXG5cbiAgcmV0dXJuIFtzdGF0ZSwgbG9hZENoYXRdXG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUNoYXRcbiJdfQ==