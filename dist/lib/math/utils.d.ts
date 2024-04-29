import { Vector2, Vector3 } from "./vector";
export declare function degreesToRadians(degrees: number): number;
export declare function polarToCartesian(radius: number, theta: number): Vector2;
export declare function lineSegmentLength(p1: Vector2, p2: Vector2): number;
/**
 * Calculates the radius of a circle inscribing a regular
 * pentagon given the side length
 */
export declare function pentagonInRadius(length: number): number;
/**
 * Calculates the radius of a circle circumscribing a
 * regular pentagon given the side length
 */
export declare function pentagonOutRadius(length: number): number;
/**
 * Calculates the radius of the sphere that inscribes a
 * regular dodecahedron given the side length
 */
export declare function dodecahedronInRadius(length: number): number;
export declare function calculateCentroid(vertices: Vector3[]): Vector3;
/**
 * generates an array with values in a given range by step
 *
 * ex. range(1, 5) -> [1, 2, 3, 4, 5]
 * ex. range(5, 2) -> [5, 4, 3, 2]
 *
 * @param from start of range
 * @param to end of range
 */
export declare function range(from: number, to: number): number[];
//# sourceMappingURL=utils.d.ts.map