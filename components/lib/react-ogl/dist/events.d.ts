import { EventManager } from './types';
/**
 * Base DOM events and their JSX keys with passive args.
 */
export declare const EVENTS: {
    readonly click: readonly ["onClick", false];
    readonly pointerup: readonly ["onPointerUp", true];
    readonly pointerdown: readonly ["onPointerDown", true];
    readonly pointermove: readonly ["onPointerMove", true];
};
/**
 * DOM OGL events manager.
 */
export declare const events: EventManager;
