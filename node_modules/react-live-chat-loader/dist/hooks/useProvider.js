"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _context = require("../context");

const useProvider = () => {
  const {
    provider,
    providerKey
  } = (0, _react.useContext)(_context.LiveChatLoaderContext);
  return {
    provider,
    providerKey
  };
};

var _default = useProvider;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ob29rcy91c2VQcm92aWRlci50cyJdLCJuYW1lcyI6WyJ1c2VQcm92aWRlciIsInByb3ZpZGVyIiwicHJvdmlkZXJLZXkiLCJMaXZlQ2hhdExvYWRlckNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQTs7QUFFQSxNQUFNQSxXQUFXLEdBQUcsTUFHZjtBQUNILFFBQU07QUFBRUMsSUFBQUEsUUFBRjtBQUFZQyxJQUFBQTtBQUFaLE1BQTRCLHVCQUFXQyw4QkFBWCxDQUFsQztBQUVBLFNBQU87QUFBRUYsSUFBQUEsUUFBRjtBQUFZQyxJQUFBQTtBQUFaLEdBQVA7QUFDRCxDQVBEOztlQVNlRixXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJy4uL3R5cGVzJ1xuaW1wb3J0IHsgTGl2ZUNoYXRMb2FkZXJDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dCdcblxuY29uc3QgdXNlUHJvdmlkZXIgPSAoKToge1xuICBwcm92aWRlcjogUHJvdmlkZXJcbiAgcHJvdmlkZXJLZXk6IHN0cmluZ1xufSA9PiB7XG4gIGNvbnN0IHsgcHJvdmlkZXIsIHByb3ZpZGVyS2V5IH0gPSB1c2VDb250ZXh0KExpdmVDaGF0TG9hZGVyQ29udGV4dClcblxuICByZXR1cm4geyBwcm92aWRlciwgcHJvdmlkZXJLZXkgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VQcm92aWRlclxuIl19