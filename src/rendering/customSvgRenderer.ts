import { Face } from "./../geometry/face";
import { Camera } from "./camera";
import { Scene } from "./scene";
import { mat4, vec3 } from "gl-matrix";
import { Geometry } from "../geometry/geometry";
import { Object3D } from "../geometry/object3d";
import { Group } from "../geometry/group";
import { createSVGElement, clearSVG, createPolygonElement } from "../svg/svg";
import { Renderer } from "./renderer";

/**
 * A renderer that renders a scene viewed by a camera to an svg element.
 */
export class CustomSVGRenderer implements Renderer {
  domElement: HTMLElement;
  svgElement: SVGSVGElement;
  strokeWidth: string = "0.035";

  protected polygons = [];

  /**
   * Creates an SVG renderer. This will create it's own html `<svg>` element. it's
   * the user's job to add this element to the page.
   *
   * @example
   * ```
   * const renderer = new CustomSVGRenderer(width, height, minx, miny, svgWidth, svgHeight)
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
  constructor(
    width: number,
    height: number,
    minx: number,
    miny: number,
    svgWidth: number,
    svgHeight: number
  ) {
    this.domElement = document.createElement("div");
    this.domElement.className = "svg-renderer";
    this.svgElement = createSVGElement(
      width,
      height,
      minx,
      miny,
      svgWidth,
      svgHeight
    );
    this.domElement.appendChild(this.svgElement);
  }

  render(scene: Scene, camera: Camera) {
    this.polygons = [];
    clearSVG(this.svgElement);

    // this.sortObjects(scene.objects, camera, []);

    scene.objects.forEach((object) => {
      this.renderObject3D(object, camera, []);
    });

    this.renderPolygons();
  }

  protected renderPolygons() {
    this.polygons.sort((a, b) => {
      return a.centroid[2] - b.centroid[2];
    });

    this.polygons.forEach((p) => this.svgElement.appendChild(p.polygon));
  }

  protected addPolygon(polygon) {
    this.polygons.push(polygon);
  }

  private renderObject3D(
    object: Object3D,
    camera: Camera,
    transformations: mat4[]
  ) {
    if (object instanceof Geometry) {
      this.renderGeometry(object, camera, transformations);
    } else if (object instanceof Group) {
      let group = <Group>object;
      this.sortObjects(group.objects, camera, [
        group.matrix,
        ...transformations,
      ]);
      group.objects.forEach((object) => {
        this.renderObject3D(object, camera, [group.matrix, ...transformations]);
      });
    }
  }

  private renderGeometry(
    object: Geometry,
    camera: Camera,
    transformations: mat4[]
  ) {
    // this.sortFaces(object.faces, object, transformations);

    object.faces.forEach((face) => {
      let points: vec3[] = [];
      face.indices
        .map((index) => object.vertices[index])
        .forEach((vertex) => {
          let objectToScreen = [
            object.matrix,
            ...transformations,
            camera.matrix,
          ];
          let v: vec3 = this.applyTransformations(vertex, objectToScreen);

          // Need to flip y to look correct on svg viewbox
          let screenPoint = vec3.multiply(v, v, [1, -1, 1]);
          points.push(screenPoint);
        });

      const polygon = createPolygonElement(
        points,
        face.color || object.color,
        this.strokeWidth
      );

      this.addPolygon({
        polygon,
        centroid: this.applyTransformations(face.centroid, [
          object.matrix,
          ...transformations,
        ]),
      });
    });
  }

  private sortFaces(faces: Face[], object: Object3D, transformations: mat4[]) {
    faces.sort((a, b) => {
      let aToWorld = [object.matrix, ...transformations];
      let bToWorld = [object.matrix, ...transformations];

      let aCentroid: vec3 = this.applyTransformations(a.centroid, aToWorld);
      let bCentroid: vec3 = this.applyTransformations(b.centroid, bToWorld);

      // TODO actually use camera, currently only sorting by Z
      return aCentroid[2] - bCentroid[2];
    });
  }

  private sortObjects(
    objects: Object3D[],
    camera: Camera,
    transformations: mat4[]
  ) {
    objects.sort((a, b) => {
      let aToWorld = [a.matrix, ...transformations];
      let bToWorld = [b.matrix, ...transformations];

      let aCentroid: vec3 = this.applyTransformations(a.centroid, aToWorld);
      let bCentroid: vec3 = this.applyTransformations(b.centroid, bToWorld);

      // TODO actually use camera, currently only sorting by Z
      return aCentroid[2] - bCentroid[2];
    });
  }

  private applyTransformations(vertex: vec3, transforms: mat4[]): vec3 {
    return transforms.reduce((v, t) => {
      return vec3.transformMat4(v, v, t);
    }, vec3.clone(vertex));
  }
}
