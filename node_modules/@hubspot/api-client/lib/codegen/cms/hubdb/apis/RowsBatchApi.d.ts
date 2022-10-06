import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { BatchInputHubDbTableRowV3Request } from '../models/BatchInputHubDbTableRowV3Request';
import { BatchInputJsonNode } from '../models/BatchInputJsonNode';
import { BatchInputString } from '../models/BatchInputString';
import { BatchResponseHubDbTableRowV3 } from '../models/BatchResponseHubDbTableRowV3';
import { BatchResponseHubDbTableRowV3WithErrors } from '../models/BatchResponseHubDbTableRowV3WithErrors';
export declare class RowsBatchApiRequestFactory extends BaseAPIRequestFactory {
    batchCloneDraftTableRows(tableIdOrName: string, batchInputString: BatchInputString, _options?: Configuration): Promise<RequestContext>;
    batchCreateDraftTableRows(tableIdOrName: string, batchInputHubDbTableRowV3Request: BatchInputHubDbTableRowV3Request, _options?: Configuration): Promise<RequestContext>;
    batchPurgeDraftTableRows(tableIdOrName: string, batchInputString: BatchInputString, _options?: Configuration): Promise<RequestContext>;
    batchReadDraftTableRows(tableIdOrName: string, batchInputString: BatchInputString, _options?: Configuration): Promise<RequestContext>;
    batchReadTableRows(tableIdOrName: string, batchInputString: BatchInputString, _options?: Configuration): Promise<RequestContext>;
    batchReplaceDraftTableRows(tableIdOrName: string, batchInputHubDbTableRowV3Request: BatchInputHubDbTableRowV3Request, _options?: Configuration): Promise<RequestContext>;
    batchUpdateDraftTableRows(tableIdOrName: string, batchInputJsonNode: BatchInputJsonNode, _options?: Configuration): Promise<RequestContext>;
}
export declare class RowsBatchApiResponseProcessor {
    batchCloneDraftTableRows(response: ResponseContext): Promise<BatchResponseHubDbTableRowV3>;
    batchCreateDraftTableRows(response: ResponseContext): Promise<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors>;
    batchPurgeDraftTableRows(response: ResponseContext): Promise<void>;
    batchReadDraftTableRows(response: ResponseContext): Promise<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors>;
    batchReadTableRows(response: ResponseContext): Promise<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors>;
    batchReplaceDraftTableRows(response: ResponseContext): Promise<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors>;
    batchUpdateDraftTableRows(response: ResponseContext): Promise<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors>;
}
