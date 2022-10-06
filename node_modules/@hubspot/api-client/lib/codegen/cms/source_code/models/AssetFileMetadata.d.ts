export declare class AssetFileMetadata {
    'id': string;
    'name': string;
    'folder': boolean;
    'children'?: Array<string>;
    'updatedAt': number;
    'createdAt': number;
    'archivedAt'?: number;
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
