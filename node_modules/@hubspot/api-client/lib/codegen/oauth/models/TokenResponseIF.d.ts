export declare class TokenResponseIF {
    'refreshToken': string;
    'expiresIn': number;
    'accessToken': string;
    'idToken'?: string;
    'tokenType': string;
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
