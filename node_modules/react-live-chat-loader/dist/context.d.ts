/// <reference types="react" />
import { Provider, State } from './types';
interface Context {
    provider: Provider;
    providerKey: string;
    state: State;
    setState: (state: State) => void;
    appID?: string;
    locale?: string;
    idlePeriod?: number;
    baseUrl?: string;
    beforeInit?: () => void;
    onReady?: () => void;
}
export declare const LiveChatLoaderContext: import("react").Context<Context>;
export {};
