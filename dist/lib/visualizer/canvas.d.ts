import { PuzzleOptions, Visualizer } from ".";
import { VisualizerType } from "./enum";
import { IColor } from "../geometry/color";
export type CanvasVisualizerOptions = {
    width?: number;
    height?: number;
    lineWidth?: number;
    arrowColor?: IColor;
    puzzle?: PuzzleOptions;
};
/**
 * Visualize puzzles with canvas
 */
export declare function Canvas(element: Element | string, type: VisualizerType, options?: CanvasVisualizerOptions): Visualizer;
export declare class CanvasVisualizer extends Visualizer {
    constructor(element: Element | string, type: VisualizerType, options: CanvasVisualizerOptions);
}
//# sourceMappingURL=canvas.d.ts.map