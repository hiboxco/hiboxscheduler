import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { CollectionResponsePublicAuditLog } from '../models/CollectionResponsePublicAuditLog';
export declare class AuditLogsApiRequestFactory extends BaseAPIRequestFactory {
    getPage(objectId?: Array<string>, userId?: Array<string>, after?: string, before?: string, sort?: Array<string>, eventType?: Array<string>, limit?: number, objectType?: Array<string>, _options?: Configuration): Promise<RequestContext>;
}
export declare class AuditLogsApiResponseProcessor {
    getPage(response: ResponseContext): Promise<CollectionResponsePublicAuditLog>;
}
