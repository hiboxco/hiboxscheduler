"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseTypesApi = exports.PromiseBatchApi = void 0;
const ObservableAPI_1 = require("./ObservableAPI");
class PromiseBatchApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableBatchApi(configuration, requestFactory, responseProcessor);
    }
    archive(fromObjectType, toObjectType, batchInputPublicAssociation, _options) {
        const result = this.api.archive(fromObjectType, toObjectType, batchInputPublicAssociation, _options);
        return result.toPromise();
    }
    create(fromObjectType, toObjectType, batchInputPublicAssociation, _options) {
        const result = this.api.create(fromObjectType, toObjectType, batchInputPublicAssociation, _options);
        return result.toPromise();
    }
    read(fromObjectType, toObjectType, batchInputPublicObjectId, _options) {
        const result = this.api.read(fromObjectType, toObjectType, batchInputPublicObjectId, _options);
        return result.toPromise();
    }
}
exports.PromiseBatchApi = PromiseBatchApi;
const ObservableAPI_2 = require("./ObservableAPI");
class PromiseTypesApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableTypesApi(configuration, requestFactory, responseProcessor);
    }
    getAll(fromObjectType, toObjectType, _options) {
        const result = this.api.getAll(fromObjectType, toObjectType, _options);
        return result.toPromise();
    }
}
exports.PromiseTypesApi = PromiseTypesApi;
//# sourceMappingURL=PromiseAPI.js.map