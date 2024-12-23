import * as React from 'react';
import * as OGL from 'ogl';
import type { Instance, RootState, RootStore, Subscription } from './types';
/**
 * An SSR-friendly useLayoutEffect.
 *
 * React currently throws a warning when using useLayoutEffect on the server.
 * To get around it, we can conditionally useEffect on the server (no-op) and
 * useLayoutEffect elsewhere.
 *
 * @see https://github.com/facebook/react/issues/14927
 */
export declare const useIsomorphicLayoutEffect: typeof React.useLayoutEffect;
/**
 * Exposes an object's {@link Instance}.
 *
 * **Note**: this is an escape hatch to react-internal fields. Expect this to change significantly between versions.
 */
export declare function useInstanceHandle<O>(ref: React.MutableRefObject<O>): React.MutableRefObject<Instance>;
/**
 * Internal OGL context.
 */
export declare const OGLContext: React.Context<RootStore>;
/**
 * Returns the internal OGL store.
 */
export declare function useStore(): RootStore;
/**
 * Returns the internal OGL state.
 */
export declare function useOGL<T = RootState>(selector?: (state: RootState) => T, equalityFn?: <T>(state: T, newState: T) => boolean): T;
export interface ObjectMap {
    nodes: Record<string, OGL.Mesh>;
    programs: Record<string, OGL.Program>;
}
/**
 * Creates an `ObjectMap` from an object.
 */
export declare function useGraph(object: OGL.Transform): ObjectMap;
/**
 * Subscribe an element into a shared render loop.
 */
export declare function useFrame(callback: Subscription, renderPriority?: number): void;
export declare type LoaderRepresentation = {
    load(gl: OGL.OGLRenderingContext, url: string): Promise<any>;
} | Pick<typeof OGL.TextureLoader, 'load'>;
export declare type LoaderResult<L extends LoaderRepresentation> = Awaited<ReturnType<L['load']>>;
/**
 * Loads assets suspensefully.
 */
export declare function useLoader<L extends LoaderRepresentation, I extends string | string[], R = LoaderResult<L>>(loader: L, input: I, extensions?: (loader: L) => void): I extends any[] ? R[] : R;
