import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { BatchInputPropertyCreate } from '../models/BatchInputPropertyCreate';
import { BatchInputPropertyName } from '../models/BatchInputPropertyName';
import { BatchReadInputPropertyName } from '../models/BatchReadInputPropertyName';
import { BatchResponseProperty } from '../models/BatchResponseProperty';
export declare class BatchApiRequestFactory extends BaseAPIRequestFactory {
    archive(objectType: string, batchInputPropertyName: BatchInputPropertyName, _options?: Configuration): Promise<RequestContext>;
    create(objectType: string, batchInputPropertyCreate: BatchInputPropertyCreate, _options?: Configuration): Promise<RequestContext>;
    read(objectType: string, batchReadInputPropertyName: BatchReadInputPropertyName, _options?: Configuration): Promise<RequestContext>;
}
export declare class BatchApiResponseProcessor {
    archive(response: ResponseContext): Promise<void>;
    create(response: ResponseContext): Promise<BatchResponseProperty>;
    read(response: ResponseContext): Promise<BatchResponseProperty>;
}
