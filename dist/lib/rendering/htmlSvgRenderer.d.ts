import { IColor } from "../geometry/color";
import { Polygon, PolygonRenderer } from "./polygonRenderer";
import { Vector3 } from "../math/vector";
/**
 * Renderer to draw puzzles using html svg elements
 */
export declare class HtmlSvgRenderer extends PolygonRenderer {
    domElement: HTMLElement;
    svgElement: SVGSVGElement;
    strokeWidth: string;
    arrowStrokeWidth: string;
    arrowColor: IColor;
    protected polygons: any[];
    protected lines: SVGLineElement[];
    protected uidToPolygon: {
        [uid: number]: SVGPolygonElement;
    };
    protected uidToLine: {
        [uid: number]: SVGLineElement;
    };
    /**
     * Creates an SVG renderer. This will create it's own html `<svg>` element. it's
     * the user's job to add this element to the page.
     *
     * @example
     * ```
     * const renderer = new HtmlSvgRenderer(width, height, minx, miny, svgWidth, svgHeight)
     * document.getElementById('my-element').appendChild(renderer.domElement);
     * ```
     *
     * @param width svg element width in pixels
     * @param height svg element height in pixels
     * @param minx min x for the svg element viewbox
     * @param miny min x for the svg element viewbox
     * @param svgWidth svg viewbox width
     * @param svgHeight svg viewbox height
     */
    constructor(width: number, height: number, minx: number, miny: number, svgWidth: number, svgHeight: number, arrowColor?: IColor);
    onBeforeRender(): void;
    drawPolygon({ points, face, object }: Polygon): void;
    drawArrow(p1Screen: Vector3, p2Screen: Vector3, uid: string): void;
    onComplete(): void;
}
//# sourceMappingURL=htmlSvgRenderer.d.ts.map