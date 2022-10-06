# Installation
> `npm install --save @types/module-alias`

# Summary
This package contains type definitions for module-alias (https://github.com/ilearnio/module-alias/).

# Details
Files were exported from https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/module-alias.
## [index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/module-alias/index.d.ts)
````ts
// Type definitions for module-alias 2.0
// Project: https://github.com/ilearnio/module-alias/
// Definitions by: Kevin Ramharak <https://github.com/KevinRamharak>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = init;

/**
 * Import aliases from package.json
 */
declare function init(options?: string | init.Options): void;

/**
 * Exported functoins
 */
declare namespace init {
    function isPathMatchesAlias(path: string, alias: string): boolean;

    /**
     * Register a custom modules directory
     */
    function addPath(path: string): void;

    /**
     * Register a single alias
     */
    function addAlias(alias: string, path: string): void;

    /**
     * Register mutliple aliases
     */
    function addAliases(aliases: { [alias: string]: string }): void;

    /**
     * Reset any changes maded (resets all registered aliases
     * and custom module directories)
     * The function is undocumented and for testing purposes only
     */
    function reset(): void;

    /**
     * module intialis options type
     */
    interface Options {
        base: string;
    }
}

````

### Additional Details
 * Last updated: Fri, 09 Jul 2021 02:32:35 GMT
 * Dependencies: none
 * Global values: none

# Credits
These definitions were written by [Kevin Ramharak](https://github.com/KevinRamharak).
