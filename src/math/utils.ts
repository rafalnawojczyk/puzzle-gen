import { vec2, vec3 } from "gl-matrix";

export function degreesToRadians(degrees: number): number {
  return (Math.PI * degrees) / 180;
}

export function polarToCartesian(radius: number, theta: number): vec2 {
  const x = radius * Math.cos(theta);
  const y = radius * Math.sin(theta);

  return [x, y];
}

export function lineSegmentLength(p1: vec2, p2: vec2): number {
  return Math.sqrt(Math.pow(p2[1] - p1[1], 2) + Math.pow(p2[0] - p1[0], 2));
}

/**
 * Calculates the radius of a circle inscribing a regular
 * pentagon given the side length
 */
export function pentagonInRadius(length: number): number {
  return length / (2 * Math.tan(Math.PI / 5));
}

/**
 * Calculates the radius of a circle circumscribing a
 * regular pentagon given the side length
 */
export function pentagonOutRadius(length: number): number {
  return length / (2 * Math.sin(Math.PI / 5));
}

/**
 * Calculates the radius of the sphere that inscribes a
 * regular dodecahedron given the side length
 */
export function dodecahedronInRadius(length: number): number {
  return (length / 2) * Math.sqrt(5 / 2 + (11 / 10) * Math.sqrt(5));
}

export function calculateCentroid(vertices: vec3[]): vec3 {
  let cx = 0,
    cy = 0,
    cz = 0;
  vertices.forEach((vertex) => {
    cx += vertex[0];
    cy += vertex[1];
    cz += vertex[2];
  });

  cx /= vertices.length;
  cy /= vertices.length;
  cz /= vertices.length;

  return vec3.clone([cx, cy, cz]);
}

/**
 * generates an array with values in a given range by step
 *
 * ex. range(1, 5) -> [1, 2, 3, 4, 5]
 * ex. range(5, 2) -> [5, 4, 3, 2]
 *
 * @param from start of range
 * @param to end of range
 */
export function range(from: number, to: number): number[] {
  if (from === to) {
    return [from];
  }

  const increment: number = from < to ? 1 : -1;
  let values = [];

  for (let current = from; current != to; current += increment) {
    values.push(current);
  }

  values.push(to);
  return values;
}
