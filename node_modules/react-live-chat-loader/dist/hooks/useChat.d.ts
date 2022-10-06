import { State } from '../types';
declare const useChat: ({ loadWhenIdle }?: {
    loadWhenIdle: boolean;
}) => [State, ({ open }: {
    open: boolean;
}) => void];
export default useChat;
