"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseTokensApi = exports.PromiseRefreshTokensApi = exports.PromiseAccessTokensApi = void 0;
const ObservableAPI_1 = require("./ObservableAPI");
class PromiseAccessTokensApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableAccessTokensApi(configuration, requestFactory, responseProcessor);
    }
    getAccessToken(token, _options) {
        const result = this.api.getAccessToken(token, _options);
        return result.toPromise();
    }
}
exports.PromiseAccessTokensApi = PromiseAccessTokensApi;
const ObservableAPI_2 = require("./ObservableAPI");
class PromiseRefreshTokensApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableRefreshTokensApi(configuration, requestFactory, responseProcessor);
    }
    archiveRefreshToken(token, _options) {
        const result = this.api.archiveRefreshToken(token, _options);
        return result.toPromise();
    }
    getRefreshToken(token, _options) {
        const result = this.api.getRefreshToken(token, _options);
        return result.toPromise();
    }
}
exports.PromiseRefreshTokensApi = PromiseRefreshTokensApi;
const ObservableAPI_3 = require("./ObservableAPI");
class PromiseTokensApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableTokensApi(configuration, requestFactory, responseProcessor);
    }
    createToken(grantType, code, redirectUri, clientId, clientSecret, refreshToken, _options) {
        const result = this.api.createToken(grantType, code, redirectUri, clientId, clientSecret, refreshToken, _options);
        return result.toPromise();
    }
}
exports.PromiseTokensApi = PromiseTokensApi;
//# sourceMappingURL=PromiseAPI.js.map