import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { RefreshTokenInfoResponse } from '../models/RefreshTokenInfoResponse';
export declare class RefreshTokensApiRequestFactory extends BaseAPIRequestFactory {
    archiveRefreshToken(token: string, _options?: Configuration): Promise<RequestContext>;
    getRefreshToken(token: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class RefreshTokensApiResponseProcessor {
    archiveRefreshToken(response: ResponseContext): Promise<void>;
    getRefreshToken(response: ResponseContext): Promise<RefreshTokenInfoResponse>;
}
