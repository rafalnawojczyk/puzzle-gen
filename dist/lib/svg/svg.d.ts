import { IColor } from "../geometry/color";
import { Vector3 } from "../math/vector";
export declare function createSVGElement(width: number, height: number, minx: number, miny: number, svgWidth: number, svgHeight: number): SVGSVGElement;
export declare function createPolygonElement(points: Vector3[], color?: IColor, strokeWidth?: string): SVGPolygonElement;
export declare function createArrowLineElement(start: Vector3, end: Vector3, color?: IColor, strokeWidth?: string): SVGLineElement;
export declare function updatePolygonElement(polygon: SVGPolygonElement, points: Vector3[], color?: IColor, strokeWidth?: string): void;
export declare function clearSVG(svg: SVGSVGElement): void;
export declare function createMarkers(color: IColor): SVGDefsElement;
//# sourceMappingURL=svg.d.ts.map