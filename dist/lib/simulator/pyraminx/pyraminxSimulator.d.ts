import { Turn } from "../../algorithms/algorithm";
import { Simulator } from "./../simulator";
export declare class PyraminxSimulator extends Simulator {
    constructor();
    U(reverse?: boolean): void;
    R(reverse?: boolean): void;
    L(reverse?: boolean): void;
    B(reverse?: boolean): void;
    u(reverse?: boolean): void;
    r(reverse?: boolean): void;
    l(reverse?: boolean): void;
    b(reverse?: boolean): void;
    alg(alg: string): void;
    case(alg: string): void;
    doTurns(turns: Turn[]): void;
}
//# sourceMappingURL=pyraminxSimulator.d.ts.map