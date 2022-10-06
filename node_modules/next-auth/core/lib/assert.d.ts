import { MissingAdapter, MissingAPIRoute, MissingAuthorize, MissingSecret, UnsupportedStrategy } from "../errors";
import type { NextAuthHandlerParams, RequestInternal } from "..";
import type { WarningCode } from "../../utils/logger";
declare type ConfigError = MissingAPIRoute | MissingSecret | UnsupportedStrategy | MissingAuthorize | MissingAdapter;
/**
 * Verify that the user configured `next-auth` correctly.
 * Good place to mention deprecations as well.
 *
 * REVIEW: Make some of these and corresponding docs less Next.js specific?
 */
export declare function assertConfig(params: NextAuthHandlerParams & {
    req: RequestInternal;
}): ConfigError | WarningCode | undefined;
export {};
