export declare class UserProvisionRequest {
    'email': string;
    'roleId'?: string;
    'primaryTeamId'?: string;
    'secondaryTeamIds'?: Array<string>;
    'sendWelcomeEmail': boolean;
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
