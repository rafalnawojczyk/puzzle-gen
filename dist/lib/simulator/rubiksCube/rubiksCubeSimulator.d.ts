import { Simulator } from "../simulator";
import { Turn } from "../../algorithms/algorithm";
export declare class RubiksCubeSimulator extends Simulator {
    private size;
    private gridSize;
    constructor(size: number);
    /**
     * Makes turn definitions for a face of the cube
     *
     * @param faceName the label of the face to make turn definitions
     * @example returning turn definitions for stickers on a 2x2
     * ```
     * addFace(['y', 'y', 'y', 'y'], 'U');
     * // returns { faceId: 'U', stickerIds: ['1','2','3','4'] }
     *
     * makeTurnDefinitions('U');
     * // returns [
     * //   ['1','2'],
     * //   ['2','4'],
     * //   ['3','1'],
     * //   ['4','3']
     * // ]
     * ```
     */
    private makeFaceTurnDefinitions;
    /**
     * Given sticker i return the index it will go to
     * after rotating clockwise
     *
     * ex. stickers are stored in an array but represent a grid
     * so, for a 3x3 sticker index 0 will rotate to 2, 1 to 5, etc...
     *
     * ```
     *  0 | 1 | 2
     *  ----------
     *  3 | 4 | 5
     *  ----------
     *  6 | 7 | 8
     * ```
     */
    private clockwiseSticker;
    /**
     * Given sticker i return the index it will go to
     * after rotating counterclockwise
     */
    private counterClockwiseSticker;
    /**
     * Given sticker i return the index it will go to
     * after rotating 180 degrees
     */
    private oppositeSticker;
    private axisAlignedSticker;
    /**
     * Performs a turn on a given face.
     *
     * @param face the face to turn
     * @param axis axis to perform inner layer turns on
     * @param reverse true if you want to turn the face counter clockwise
     * @param from inner layer to start turning from
     * @param to last inner layer to stop turning
     * @param to last inner layer to stop turning
     */
    private turnFace;
    /**
     * Performs a U turn
     * @param reverse true if you want to turn the face counter clockwise (U')
     * @param layers how many inner layers of the face to turn defaults to 1. Cannot be the cube size or greater
     */
    U(reverse?: boolean, layers?: number): void;
    /**
     * Performs an R turn
     * @param reverse true if you want to turn the face counter clockwise (R')
     * @param layers how many inner layers of the face to turn defaults to 1. Cannot be the cube size or greater
     */
    R(reverse?: boolean, layers?: number): void;
    /**
     * Performs an F turn
     * @param reverse true if you want to turn the face counter clockwise (F')
     * @param layers how many inner layers of the face to turn defaults to 1. Cannot be the cube size or greater
     */
    F(reverse?: boolean, layers?: number): void;
    /**
     * Performs a D turn
     * @param reverse true if you want to turn the face counter clockwise (D')
     * @param layers how many inner layers of the face to turn defaults to 1. Cannot be the cube size or greater
     */
    D(reverse?: boolean, layers?: number): void;
    /**
     * Performs an L turn
     * @param reverse true if you want to turn the face counter clockwise (L')
     * @param layers how many inner layers of the face to turn defaults to 1. Cannot be the cube size or greater
     */
    L(reverse?: boolean, layers?: number): void;
    /**
     * Performs a B turn
     * @param reverse true if you want to turn the face counter clockwise (B')
     * @param layers how many inner layers of the face to turn defaults to 1. Cannot be the cube size or greater
     */
    B(reverse?: boolean, layers?: number): void;
    /**
     * Rotates the middle slice in the direction of an L turn
     * https://ruwix.com/the-rubiks-cube/notation/advanced/
     *
     * Will rotate all middle layers inbetween R and L for larger cubes
     */
    M(reverse?: boolean): void;
    /**
     * Rotates the standing layers in the direction of an F turn
     * https://ruwix.com/the-rubiks-cube/notation/advanced/
     *
     * Will rotate all middle layers inbetween F and B for larger cubes
     */
    S(reverse?: boolean): void;
    /**
     * Rotates the equitorial layers in the direction of a D turn
     * https://ruwix.com/the-rubiks-cube/notation/advanced/
     *
     * Will rotate all middle layers inbetween U and D for larger cubes
     */
    E(reverse?: boolean): void;
    /**
     * rotates the entire cube on R
     */
    X(reverse?: boolean): void;
    /**
     * rotates the entire cube on U
     */
    Y(reverse?: boolean): void;
    /**
     * rotates the entire cube on F
     */
    Z(reverse?: boolean): void;
    alg(alg: string): void;
    /**
     * reverses an algorithm then executes it
     */
    case(alg: string): void;
    doTurns(turns: Turn[]): void;
}
//# sourceMappingURL=rubiksCubeSimulator.d.ts.map