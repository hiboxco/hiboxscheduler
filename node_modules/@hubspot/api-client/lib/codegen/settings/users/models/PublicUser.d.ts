export declare class PublicUser {
    'id': string;
    'email': string;
    'roleId'?: string;
    'primaryTeamId'?: string;
    'secondaryTeamIds'?: Array<string>;
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
