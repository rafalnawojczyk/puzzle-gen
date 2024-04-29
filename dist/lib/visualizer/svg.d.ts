import { VisualizerType } from "./enum";
import { Visualizer } from "./visualizer";
import { PuzzleOptions } from "./interface";
import { IColor } from "../geometry/color";
export interface SVGVisualizerOptions {
    /**
     * Width of the svg element in pixels
     */
    width?: number;
    /**
     * Height of the svg element in pixels
     */
    height?: number;
    /**
     * SVG viewbox minx value
     */
    minx?: number;
    /**
     * SVG viewbox miny value
     */
    miny?: number;
    /**
     * SVG viewbox width value
     */
    svgWidth?: number;
    /**
     * SVG viewbox height value
     */
    svgHeight?: number;
    /**
     * stroke size for the sticker polygons drawn on the svg
     */
    strokeWidth?: number;
    /**
     * puzzle options for the cube to draw
     */
    puzzle?: PuzzleOptions;
    /**
     * change the default arrow color for drawing arrows
     */
    arrowColor?: IColor;
    /**
     * change the default arrow stroke width
     *
     * @default 0.03
     */
    arrowStrokeWidth?: number;
}
/**
 * Visualize puzzles with svg in a DOM
 */
export declare function SVG(element: Element | string, type: VisualizerType, options?: SVGVisualizerOptions): Visualizer;
export declare class SvgVisualizer extends Visualizer {
    private svgOptions;
    constructor(element: Element | string, type: VisualizerType, options?: SVGVisualizerOptions);
    /**
     * Set the stroke width for the svg elements rendered and re draw the puzzle.
     *
     * @param strokeWidth - value to set the stroke width to. It depends on the svg options and puzzle size,
     *                      but good values are around .01 - .06
     */
    setStrokeWidth(strokeWidth: number): void;
    /**
     * Dynamically update the svg element options
     *
     * @param options - options for the svg element that is being rendered to
     */
    setSvgOptions(options: SVGVisualizerOptions): void;
}
//# sourceMappingURL=svg.d.ts.map