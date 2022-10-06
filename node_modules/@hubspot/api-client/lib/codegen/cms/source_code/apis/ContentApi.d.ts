import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpFile } from '../http/http';
import { AssetFileMetadata } from '../models/AssetFileMetadata';
export declare class ContentApiRequestFactory extends BaseAPIRequestFactory {
    archive(environment: string, path: string, _options?: Configuration): Promise<RequestContext>;
    create(environment: string, path: string, file?: HttpFile, _options?: Configuration): Promise<RequestContext>;
    get(environment: string, path: string, _options?: Configuration): Promise<RequestContext>;
    replace(environment: string, path: string, file?: HttpFile, _options?: Configuration): Promise<RequestContext>;
}
export declare class ContentApiResponseProcessor {
    archive(response: ResponseContext): Promise<void>;
    create(response: ResponseContext): Promise<AssetFileMetadata>;
    get(response: ResponseContext): Promise<void>;
    replace(response: ResponseContext): Promise<AssetFileMetadata>;
}
