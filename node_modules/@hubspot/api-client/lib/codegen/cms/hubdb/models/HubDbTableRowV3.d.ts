export declare class HubDbTableRowV3 {
    'id'?: string;
    'path'?: string;
    'name'?: string;
    'createdAt'?: Date;
    'updatedAt'?: Date;
    'childTableId'?: string;
    'values': {
        [key: string]: any;
    };
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
