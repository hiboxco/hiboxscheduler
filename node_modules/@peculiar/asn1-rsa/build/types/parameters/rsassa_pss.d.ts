import { AlgorithmIdentifier } from "@peculiar/asn1-x509";
/**
 * ```
 * TrailerField ::= INTEGER { trailerFieldBC(1) }
 * ```
 */
export declare type TrailerField = number;
/**
 * RSASSA-PSS-params ::= SEQUENCE {
 *   hashAlgorithm      [0] HashAlgorithm      DEFAULT sha1,
 *   maskGenAlgorithm   [1] MaskGenAlgorithm   DEFAULT mgf1SHA1,
 *   saltLength         [2] INTEGER            DEFAULT 20,
 *   trailerField       [3] TrailerField       DEFAULT trailerFieldBC
 * }
 */
export declare class RsaSaPssParams {
    hashAlgorithm: AlgorithmIdentifier;
    maskGenAlgorithm: AlgorithmIdentifier;
    saltLength: number;
    trailerField: TrailerField;
    constructor(params?: Partial<RsaSaPssParams>);
}
/**
 * ```
 * { OID id-RSASSA-PSS   PARAMETERS RSASSA-PSS-params }
 * ```
 */
export declare const RSASSA_PSS: AlgorithmIdentifier;
