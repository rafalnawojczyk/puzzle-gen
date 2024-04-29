import { IColor } from "../geometry/color";
import { Vector3 } from "../math/vector";
import { Polygon, PolygonRenderer } from "./polygonRenderer";
export declare class HtmlCanvasRenderer extends PolygonRenderer {
    /**
     * dom element containing canvas
     */
    domElement: HTMLElement;
    /**
     * canvas element
     */
    canvasElement: HTMLCanvasElement;
    private ctx;
    private width;
    private height;
    private lineWidth;
    private arrowColor;
    constructor(width: number, height: number, lineWidth?: number, arrowColor?: IColor);
    /**
     * Visualizer point values will be in range (-.9, .9)
     * Convert these values to canvas points (0, imgSize)
     * using linear interpolation
     *
     * really the camera matrix should be set up properly
     * so we don't have to do this...
     */
    private convertRange;
    onBeforeRender(): void;
    drawPolygon(polygon: Polygon): void;
    drawArrow(p1: Vector3, p2: Vector3, uid: string): void;
    setLineWidth(lineWidth: number): void;
    onComplete(): void;
}
//# sourceMappingURL=htmlCanvasRenderer.d.ts.map