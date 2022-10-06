import { AlgorithmIdentifier } from "@peculiar/asn1-x509";
import { OctetString } from "@peculiar/asn1-schema";
/**
 * ```
 * DigestInfo ::= SEQUENCE {
 *   digestAlgorithm DigestAlgorithm,
 *   digest OCTET STRING
 * }
 * ```
 */
export declare class DigestInfo {
    digestAlgorithm: AlgorithmIdentifier;
    digest: OctetString;
    constructor(params?: Partial<DigestInfo>);
}
