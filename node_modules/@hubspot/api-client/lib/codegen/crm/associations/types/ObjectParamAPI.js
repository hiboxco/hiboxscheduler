"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectTypesApi = exports.ObjectBatchApi = void 0;
const ObservableAPI_1 = require("./ObservableAPI");
class ObjectBatchApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableBatchApi(configuration, requestFactory, responseProcessor);
    }
    archive(param, options) {
        return this.api.archive(param.fromObjectType, param.toObjectType, param.batchInputPublicAssociation, options).toPromise();
    }
    create(param, options) {
        return this.api.create(param.fromObjectType, param.toObjectType, param.batchInputPublicAssociation, options).toPromise();
    }
    read(param, options) {
        return this.api.read(param.fromObjectType, param.toObjectType, param.batchInputPublicObjectId, options).toPromise();
    }
}
exports.ObjectBatchApi = ObjectBatchApi;
const ObservableAPI_2 = require("./ObservableAPI");
class ObjectTypesApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableTypesApi(configuration, requestFactory, responseProcessor);
    }
    getAll(param, options) {
        return this.api.getAll(param.fromObjectType, param.toObjectType, options).toPromise();
    }
}
exports.ObjectTypesApi = ObjectTypesApi;
//# sourceMappingURL=ObjectParamAPI.js.map