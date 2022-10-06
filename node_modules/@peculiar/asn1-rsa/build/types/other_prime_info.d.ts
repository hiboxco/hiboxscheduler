import { AsnArray } from "@peculiar/asn1-schema";
/**
 * ```
 * OtherPrimeInfo ::= SEQUENCE {
 *     prime             INTEGER,  -- ri
 *     exponent          INTEGER,  -- di
 *     coefficient       INTEGER   -- ti
 * }
 * ```
 */
export declare class OtherPrimeInfo {
    prime: ArrayBuffer;
    exponent: ArrayBuffer;
    coefficient: ArrayBuffer;
    constructor(params?: Partial<OtherPrimeInfo>);
}
/**
 * ```
 * OtherPrimeInfos ::= SEQUENCE SIZE(1..MAX) OF OtherPrimeInfo
 * ```
 */
export declare class OtherPrimeInfos extends AsnArray<OtherPrimeInfo> {
    constructor(items?: OtherPrimeInfo[]);
}
