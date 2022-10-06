import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { AccessTokenInfoResponse } from '../models/AccessTokenInfoResponse';
export declare class AccessTokensApiRequestFactory extends BaseAPIRequestFactory {
    getAccessToken(token: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class AccessTokensApiResponseProcessor {
    getAccessToken(response: ResponseContext): Promise<AccessTokenInfoResponse>;
}
