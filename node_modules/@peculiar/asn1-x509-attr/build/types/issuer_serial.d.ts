import { GeneralNames, CertificateSerialNumber, UniqueIdentifier } from "@peculiar/asn1-x509";
/**
 * ```
 * IssuerSerial  ::=  SEQUENCE {
 *      issuer         GeneralNames,
 *      serial         CertificateSerialNumber,
 *      issuerUID      UniqueIdentifier OPTIONAL
 * }
 * ```
 */
export declare class IssuerSerial {
    issuer: GeneralNames;
    serial: CertificateSerialNumber;
    issuerUID: UniqueIdentifier;
    constructor(params?: Partial<IssuerSerial>);
}
