import * as React from 'react';
import { Options as ResizeOptions } from 'react-use-measure';
import { RenderProps } from './types';
export interface CanvasProps extends Omit<RenderProps, 'size'>, React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    resize?: ResizeOptions;
}
/**
 * A resizeable canvas whose children are declarative OGL elements.
 */
export declare const Canvas: React.ForwardRefExoticComponent<CanvasProps & React.RefAttributes<HTMLCanvasElement>>;
