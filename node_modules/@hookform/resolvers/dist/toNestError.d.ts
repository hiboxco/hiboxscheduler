import { FieldError, FieldErrors, ResolverOptions } from 'react-hook-form';
export declare const toNestError: <TFieldValues>(errors: Record<string, FieldError>, options: ResolverOptions<TFieldValues>) => import("react-hook-form").DeepMap<import("react-hook-form").DeepPartial<TFieldValues>, FieldError>;
