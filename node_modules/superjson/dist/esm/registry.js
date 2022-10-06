import { DoubleIndexedKV } from './double-indexed-kv';
var Registry = /** @class */ (function () {
    function Registry(generateIdentifier) {
        this.generateIdentifier = generateIdentifier;
        this.kv = new DoubleIndexedKV();
    }
    Registry.prototype.register = function (value, identifier) {
        if (this.kv.getByValue(value)) {
            return;
        }
        if (!identifier) {
            identifier = this.generateIdentifier(value);
        }
        if (process.env.NODE_ENV !== 'production') {
            var alreadyRegistered = this.kv.getByKey(identifier);
            if (alreadyRegistered && alreadyRegistered !== value) {
                console.debug("Ambiguous class \"" + identifier + "\", provide a unique identifier.");
            }
        }
        this.kv.set(identifier, value);
    };
    Registry.prototype.clear = function () {
        this.kv.clear();
    };
    Registry.prototype.getIdentifier = function (value) {
        return this.kv.getByValue(value);
    };
    Registry.prototype.getValue = function (identifier) {
        return this.kv.getByKey(identifier);
    };
    return Registry;
}());
export { Registry };
//# sourceMappingURL=registry.js.map