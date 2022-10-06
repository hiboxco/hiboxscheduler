import { AlgorithmIdentifier } from "@peculiar/asn1-x509";
import { AttributeCertificateInfo } from "./attribute_certificate_info";
/**
 * ```
 * AttributeCertificate ::= SEQUENCE {
 *      acinfo               AttributeCertificateInfo,
 *      signatureAlgorithm   AlgorithmIdentifier,
 *      signatureValue       BIT STRING
 * }
 * ```
 */
export declare class AttributeCertificate {
    acinfo: AttributeCertificateInfo;
    signatureAlgorithm: AlgorithmIdentifier;
    signatureValue: ArrayBuffer;
    constructor(params?: Partial<AttributeCertificate>);
}
