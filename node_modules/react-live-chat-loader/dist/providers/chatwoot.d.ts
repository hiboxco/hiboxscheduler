import { State } from '../types';
declare global {
    interface Window {
        chatwootSettings: any;
        $chatwoot: any;
        chatwootSDK: {
            run: (options: {
                websiteToken: string;
                baseUrl: string;
                locale?: string;
                type?: 'standard' | 'expanded_bubble';
                position?: 'left' | 'right';
            }) => void;
        };
    }
}
declare const _default: {
    domain: string;
    load: ({ providerKey, locale, setState, baseUrl, beforeInit, onReady }: {
        providerKey: string;
        locale?: string | undefined;
        setState: (state: State) => void;
        baseUrl?: string | undefined;
        beforeInit?: (() => void) | undefined;
        onReady?: (() => void) | undefined;
    }) => void;
    open: () => void;
};
export default _default;
