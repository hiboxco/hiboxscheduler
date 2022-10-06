"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseAuditLogsApi = void 0;
const ObservableAPI_1 = require("./ObservableAPI");
class PromiseAuditLogsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableAuditLogsApi(configuration, requestFactory, responseProcessor);
    }
    getPage(objectId, userId, after, before, sort, eventType, limit, objectType, _options) {
        const result = this.api.getPage(objectId, userId, after, before, sort, eventType, limit, objectType, _options);
        return result.toPromise();
    }
}
exports.PromiseAuditLogsApi = PromiseAuditLogsApi;
//# sourceMappingURL=PromiseAPI.js.map