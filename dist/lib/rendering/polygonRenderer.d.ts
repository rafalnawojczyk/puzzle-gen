import { Arrow } from "./../geometry/arrow";
import { Object3D } from "../geometry/object3d";
import { Geometry } from "../geometry/geometry";
import { Camera } from "./camera";
import { Renderer } from "./renderer";
import { Scene } from "./scene";
import { Face, IFace } from "../geometry/face";
import { Vector3 } from "../math/vector";
import { Matrix4 } from "../math/matrix";
export interface Polygon {
    points: Vector3[];
    face: Face;
    object: Geometry;
    centroid: Vector3;
}
/**
 * Renderer class to take scene geometry and render it to 2d
 * polygon coordinates.
 *
 * 1. Takes a scene and camera
 * 2. converts the scene 3d geometry to 2d screen geometry based on the camera
 * 3. tries to render each face in order from furthest from camera to closest
 * 4. finally, draws the lines (arrows) over top of everything
 *
 * Implementers need just implement
 *   - drawPolygon - a method that draws polygons on some 2d graphics area
 *   - drawArrow - a method that draws an arrow
 *   - onBeforeRender - do any prep work necessary before rendering a frame
 *   - onComplete - handle any final logic
 */
export declare abstract class PolygonRenderer implements Renderer {
    protected polygons: Polygon[];
    protected arrows: any[];
    abstract drawPolygon(polygon: Polygon): any;
    abstract drawArrow(p1: Vector3, p2: Vector3, uid: string): any;
    abstract onBeforeRender(): any;
    abstract onComplete(): any;
    render(scene: Scene, camera: Camera): void;
    protected renderPolygons(): void;
    protected renderArrows(): void;
    protected renderObject3D(object: Object3D, camera: Camera, transformations: Matrix4[]): void;
    protected renderGeometry(object: Geometry, camera: Camera, transformations: Matrix4[]): void;
    protected renderArrow(object: Arrow, camera: Camera, transformations: Matrix4[]): void;
    protected addPolygon(points: Vector3[], face: IFace, object: Geometry, transformations: Matrix4[]): void;
    protected sortObjects(objects: Object3D[], camera: Camera, transformations: Matrix4[]): Object3D[];
}
//# sourceMappingURL=polygonRenderer.d.ts.map