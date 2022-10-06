import { AsnArray } from "@peculiar/asn1-schema";
import { Attribute } from "@peculiar/asn1-x509";
/**
 * ```
 * Attributes { ATTRIBUTE:IOSet } ::= SET OF Attribute{{ IOSet }}
 * ```
 */
export declare class Attributes extends AsnArray<Attribute> {
    constructor(items?: Attribute[]);
}
