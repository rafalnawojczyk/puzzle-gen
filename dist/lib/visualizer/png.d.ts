import { VisualizerType } from "./enum";
import { SVGVisualizerOptions } from "./svg";
export interface PNGVisualizerOptions extends SVGVisualizerOptions {
}
/**
 * Creates PNG element
 */
export declare function PNG(container: Element | string, type: VisualizerType, options?: PNGVisualizerOptions): void;
//# sourceMappingURL=png.d.ts.map