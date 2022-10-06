import { MDXRemoteSerializeResult, SerializeOptions } from './types';
/**
 * Parses and compiles the provided MDX string. Returns a result which can be passed into <MDXRemote /> to be rendered.
 */
export declare function serialize(
/** Raw MDX contents as a string. */
source: string, { scope, mdxOptions, parseFrontmatter, }?: SerializeOptions): Promise<MDXRemoteSerializeResult>;
