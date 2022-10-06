/**
 * ```
 * CertBag ::= SEQUENCE {
 *   certId    BAG-TYPE.&id   ({CertTypes}),
 *   certValue [0] EXPLICIT BAG-TYPE.&Type ({CertTypes}{@certId})
 * }
 * ```
 */
export declare class CertBag {
    certId: string;
    certValue: ArrayBuffer;
    constructor(params?: Partial<CertBag>);
}
/**
 * ```
 * certTypes                          OBJECT IDENTIFIER ::= {pkcs-9 22}
 * ```
 */
export declare const id_certTypes: string;
/**
 * ```
 * x509Certificate BAG-TYPE ::=
 *   {OCTET STRING IDENTIFIED BY {certTypes 1}}
 *   -- DER-encoded X.509 certificate stored in OCTET STRING
 * ```
 */
export declare const id_x509Certificate: string;
/**
 * ```
 * sdsiCertificate BAG-TYPE ::=
 *   {IA5String IDENTIFIED BY {certTypes 2}}
 *   -- Base64-encoded SDSI certificate stored in IA5String
 * ```
 */
export declare const id_sdsiCertificate: string;
