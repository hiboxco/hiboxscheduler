import { AsnArray } from "@peculiar/asn1-schema";
import { GeneralName } from "@peculiar/asn1-x509";
import { IssuerSerial } from "./issuer_serial";
import { ObjectDigestInfo } from "./object_digest_info";
/**
 * ```
 * TargetCert  ::= SEQUENCE {
 *      targetCertificate  IssuerSerial,
 *      targetName         GeneralName OPTIONAL,
 *      certDigestInfo     ObjectDigestInfo OPTIONAL
 * }
 * ```
 */
export declare class TargetCert {
    targetCertificate: IssuerSerial;
    targetName?: GeneralName;
    certDigestInfo?: ObjectDigestInfo;
    constructor(params?: Partial<TargetCert>);
}
/**
 * ```
 * Target  ::= CHOICE {
 *      targetName     [0] GeneralName,
 *      targetGroup    [1] GeneralName,
 *      targetCert     [2] TargetCert
 * }
 * ```
 */
export declare class Target {
    targetName?: GeneralName;
    targetGroup?: GeneralName;
    targetCert?: TargetCert;
    constructor(params?: Partial<Target>);
}
/**
 * ```
 * Targets ::= SEQUENCE OF Target
 * ```
 */
export declare class Targets extends AsnArray<Target> {
    constructor(items?: Target[]);
}
