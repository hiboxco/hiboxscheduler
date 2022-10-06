import { State } from '../types';
declare global {
    interface Window {
        Intercom: any;
        intercomSettings: () => void;
    }
}
declare const _default: {
    domain: string;
    load: ({ providerKey, setState, beforeInit, onReady }: {
        providerKey: string;
        setState: (state: State) => void;
        beforeInit?: (() => void) | undefined;
        onReady?: (() => void) | undefined;
    }) => boolean;
    open: () => void;
};
export default _default;
