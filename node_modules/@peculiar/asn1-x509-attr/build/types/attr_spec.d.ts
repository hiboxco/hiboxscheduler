import { AsnArray } from "@peculiar/asn1-schema";
/**
 * ```
 * AttrSpec ::= SEQUENCE OF OBJECT IDENTIFIER
 * ```
 */
export declare class AttrSpec extends AsnArray<string> {
    constructor(items?: string[]);
}
