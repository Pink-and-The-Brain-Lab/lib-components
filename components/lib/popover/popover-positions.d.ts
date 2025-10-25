import { ConnectedPosition } from "@angular/cdk/overlay";
import { PositionOption } from "./popover-positions.map";
export declare abstract class PopoverPositions {
    static getPosition(position?: PositionOption): ConnectedPosition;
}
