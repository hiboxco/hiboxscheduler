import { State } from '../types';
declare global {
    interface Window {
        FB: any;
        fbAsyncInit: () => void;
    }
}
declare const _default: {
    domain: string;
    load: ({ appID, locale, setState, beforeInit, onReady }: {
        appID?: string | undefined;
        locale?: string | undefined;
        setState: (state: State) => void;
        beforeInit?: (() => void) | undefined;
        onReady?: (() => void) | undefined;
    }) => boolean;
    open: () => void;
};
export default _default;
