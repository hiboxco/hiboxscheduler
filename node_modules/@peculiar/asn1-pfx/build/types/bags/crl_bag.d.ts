/**
 * ```
 * CRLBag ::= SEQUENCE {
 *   crlId     BAG-TYPE.&id ({CRLTypes}),
 *   crltValue [0] EXPLICIT BAG-TYPE.&Type ({CRLTypes}{@crlId})
 * }
 * ```
 */
export declare class CRLBag {
    crlId: string;
    crltValue: ArrayBuffer;
    constructor(params?: Partial<CRLBag>);
}
/**
 * ```
 * crlTypes                           OBJECT IDENTIFIER ::= {pkcs-9 23}
 * ```
 */
export declare const id_crlTypes: string;
/**
 * ```
 * x509CRL BAG-TYPE ::=
 *   {OCTET STRING IDENTIFIED BY {crlTypes 1}}
 *   -- DER-encoded X.509 CRL stored in OCTET STRING
 * ```
 */
export declare const id_x509CRL: string;
