import * as React from 'react';
import { ViewProps, ViewStyle, View } from 'react-native';
import { RenderProps } from './types';
export interface CanvasProps extends Omit<RenderProps, 'size' | 'dpr'>, ViewProps {
    children: React.ReactNode;
    style?: ViewStyle;
}
/**
 * A resizeable canvas whose children are declarative OGL elements.
 */
export declare const Canvas: React.ForwardRefExoticComponent<CanvasProps & React.RefAttributes<View>>;
