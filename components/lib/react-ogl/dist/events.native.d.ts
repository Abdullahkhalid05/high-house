import { EventManager } from './types';
/**
 * Base Pressability events and their JSX keys for native & web.
 */
export declare const EVENTS: {
    readonly onPress: "onClick";
    readonly onPressIn: "onPointerDown";
    readonly onPressOut: "onPointerUp";
    readonly onPressMove: "onPointerMove";
};
/**
 * DOM OGL events manager.
 */
export declare const events: EventManager;
