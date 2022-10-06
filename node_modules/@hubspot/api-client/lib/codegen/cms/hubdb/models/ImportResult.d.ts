export declare class ImportResult {
    'errors': Array<Error>;
    'rowsImported': number;
    'duplicateRows': number;
    'rowLimitExceeded': boolean;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
