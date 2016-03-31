import { default as EventsDispatcher } from "core/events/dispatcher";
import ConnectionState from 'core/connection/state';
import TransportHooks from 'core/transports/transport_hooks';
import Socket from 'core/socket';
export default class IsomorphicTransportConnection extends EventsDispatcher {
    hooks: TransportHooks;
    name: string;
    priority: number;
    key: string;
    options: any;
    state: ConnectionState;
    timeline: any;
    activityTimeout: number;
    id: string;
    socket: Socket;
    beforeOpen: Function;
    constructor(hooks: TransportHooks, name: string, priority: number, key: string, options: any);
    handlesActivityChecks(): boolean;
    supportsPing(): boolean;
    initialize(): void;
    connect(): boolean;
    close(): boolean;
    send(data: any): boolean;
    ping(): void;
    onOpen(): void;
    onError(error: any): void;
    onClose(closeEvent?: any): void;
    onMessage(message: any): void;
    onActivity(): void;
    bindListeners(): void;
    unbindListeners(): void;
    changeState(state: ConnectionState, params?: any): void;
    buildTimelineMessage(message: any): any;
}
