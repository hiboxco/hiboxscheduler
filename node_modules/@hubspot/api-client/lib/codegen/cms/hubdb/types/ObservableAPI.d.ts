import { HttpFile } from '../http/http';
import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
import { BatchInputHubDbTableRowV3Request } from '../models/BatchInputHubDbTableRowV3Request';
import { BatchInputJsonNode } from '../models/BatchInputJsonNode';
import { BatchInputString } from '../models/BatchInputString';
import { BatchResponseHubDbTableRowV3 } from '../models/BatchResponseHubDbTableRowV3';
import { BatchResponseHubDbTableRowV3WithErrors } from '../models/BatchResponseHubDbTableRowV3WithErrors';
import { CollectionResponseWithTotalHubDbTableRowV3ForwardPaging } from '../models/CollectionResponseWithTotalHubDbTableRowV3ForwardPaging';
import { CollectionResponseWithTotalHubDbTableV3ForwardPaging } from '../models/CollectionResponseWithTotalHubDbTableV3ForwardPaging';
import { HubDbTableCloneRequest } from '../models/HubDbTableCloneRequest';
import { HubDbTableRowV3 } from '../models/HubDbTableRowV3';
import { HubDbTableRowV3Request } from '../models/HubDbTableRowV3Request';
import { HubDbTableV3 } from '../models/HubDbTableV3';
import { HubDbTableV3Request } from '../models/HubDbTableV3Request';
import { ImportResult } from '../models/ImportResult';
import { RowsApiRequestFactory, RowsApiResponseProcessor } from "../apis/RowsApi";
export declare class ObservableRowsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: RowsApiRequestFactory, responseProcessor?: RowsApiResponseProcessor);
    cloneDraftTableRow(tableIdOrName: string, rowId: string, _options?: Configuration): Observable<HubDbTableRowV3>;
    createTableRow(tableIdOrName: string, hubDbTableRowV3Request: HubDbTableRowV3Request, _options?: Configuration): Observable<HubDbTableRowV3>;
    getDraftTableRowById(tableIdOrName: string, rowId: string, _options?: Configuration): Observable<HubDbTableRowV3>;
    getTableRow(tableIdOrName: string, rowId: string, _options?: Configuration): Observable<HubDbTableRowV3>;
    getTableRows(tableIdOrName: string, sort?: Array<string>, after?: string, limit?: number, properties?: Array<string>, _options?: Configuration): Observable<CollectionResponseWithTotalHubDbTableRowV3ForwardPaging>;
    purgeDraftTableRow(tableIdOrName: string, rowId: string, _options?: Configuration): Observable<void>;
    readDraftTableRows(tableIdOrName: string, sort?: Array<string>, after?: string, limit?: number, properties?: Array<string>, _options?: Configuration): Observable<CollectionResponseWithTotalHubDbTableRowV3ForwardPaging>;
    replaceDraftTableRow(tableIdOrName: string, rowId: string, hubDbTableRowV3Request: HubDbTableRowV3Request, _options?: Configuration): Observable<HubDbTableRowV3>;
    updateDraftTableRow(tableIdOrName: string, rowId: string, hubDbTableRowV3Request: HubDbTableRowV3Request, _options?: Configuration): Observable<HubDbTableRowV3>;
}
import { RowsBatchApiRequestFactory, RowsBatchApiResponseProcessor } from "../apis/RowsBatchApi";
export declare class ObservableRowsBatchApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: RowsBatchApiRequestFactory, responseProcessor?: RowsBatchApiResponseProcessor);
    batchCloneDraftTableRows(tableIdOrName: string, batchInputString: BatchInputString, _options?: Configuration): Observable<BatchResponseHubDbTableRowV3>;
    batchCreateDraftTableRows(tableIdOrName: string, batchInputHubDbTableRowV3Request: BatchInputHubDbTableRowV3Request, _options?: Configuration): Observable<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors>;
    batchPurgeDraftTableRows(tableIdOrName: string, batchInputString: BatchInputString, _options?: Configuration): Observable<void>;
    batchReadDraftTableRows(tableIdOrName: string, batchInputString: BatchInputString, _options?: Configuration): Observable<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors>;
    batchReadTableRows(tableIdOrName: string, batchInputString: BatchInputString, _options?: Configuration): Observable<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors>;
    batchReplaceDraftTableRows(tableIdOrName: string, batchInputHubDbTableRowV3Request: BatchInputHubDbTableRowV3Request, _options?: Configuration): Observable<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors>;
    batchUpdateDraftTableRows(tableIdOrName: string, batchInputJsonNode: BatchInputJsonNode, _options?: Configuration): Observable<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors>;
}
import { TablesApiRequestFactory, TablesApiResponseProcessor } from "../apis/TablesApi";
export declare class ObservableTablesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: TablesApiRequestFactory, responseProcessor?: TablesApiResponseProcessor);
    archiveTable(tableIdOrName: string, _options?: Configuration): Observable<void>;
    cloneDraftTable(tableIdOrName: string, hubDbTableCloneRequest: HubDbTableCloneRequest, _options?: Configuration): Observable<HubDbTableV3>;
    createTable(hubDbTableV3Request: HubDbTableV3Request, _options?: Configuration): Observable<HubDbTableV3>;
    exportDraftTable(tableIdOrName: string, format?: string, _options?: Configuration): Observable<HttpFile>;
    exportTable(tableIdOrName: string, format?: string, _options?: Configuration): Observable<HttpFile>;
    getAllDraftTables(sort?: Array<string>, after?: string, limit?: number, createdAt?: Date, createdAfter?: Date, createdBefore?: Date, updatedAt?: Date, updatedAfter?: Date, updatedBefore?: Date, archived?: boolean, _options?: Configuration): Observable<CollectionResponseWithTotalHubDbTableV3ForwardPaging>;
    getAllTables(sort?: Array<string>, after?: string, limit?: number, createdAt?: Date, createdAfter?: Date, createdBefore?: Date, updatedAt?: Date, updatedAfter?: Date, updatedBefore?: Date, archived?: boolean, _options?: Configuration): Observable<CollectionResponseWithTotalHubDbTableV3ForwardPaging>;
    getDraftTableDetailsById(tableIdOrName: string, archived?: boolean, includeForeignIds?: boolean, _options?: Configuration): Observable<HubDbTableV3>;
    getTableDetails(tableIdOrName: string, archived?: boolean, includeForeignIds?: boolean, _options?: Configuration): Observable<HubDbTableV3>;
    importDraftTable(tableIdOrName: string, config?: string, file?: HttpFile, _options?: Configuration): Observable<ImportResult>;
    publishDraftTable(tableIdOrName: string, includeForeignIds?: boolean, _options?: Configuration): Observable<HubDbTableV3>;
    resetDraftTable(tableIdOrName: string, includeForeignIds?: boolean, _options?: Configuration): Observable<HubDbTableV3>;
    unpublishTable(tableIdOrName: string, includeForeignIds?: boolean, _options?: Configuration): Observable<HubDbTableV3>;
    updateDraftTable(tableIdOrName: string, hubDbTableV3Request: HubDbTableV3Request, archived?: boolean, includeForeignIds?: boolean, _options?: Configuration): Observable<HubDbTableV3>;
}
