import { Geometry } from "./geometry";
import { vec3 } from "gl-matrix";
import { IFace, Face } from "./face";

export class Cube extends Geometry {
  /**
   *   0 - - - 1
   *   | \     | \
   *   |   3 - - - 2
   *   |   |   |   |
   *   4 - | - 5   |
   *     \ |     \ |
   *       7 - - - 6
   */
  constructor(width: number) {
    const vertices: vec3[] = [
      [-width / 2, width / 2, width / 2],
      [width / 2, width / 2, width / 2],
      [width / 2, -width / 2, width / 2],
      [-width / 2, -width / 2, width / 2],
      [-width / 2, width / 2, -width / 2],
      [width / 2, width / 2, -width / 2],
      [width / 2, -width / 2, -width / 2],
      [-width / 2, -width / 2, -width / 2],
    ];
    const faces: IFace[] = [
      new Face([0, 1, 2, 3], vertices),
      new Face([3, 2, 6, 7], vertices),
      new Face([2, 1, 5, 6], vertices),
      new Face([7, 6, 5, 4], vertices),
      new Face([1, 0, 4, 5], vertices),
      new Face([0, 3, 7, 4], vertices),
    ];
    super(vertices, faces);
  }
}
