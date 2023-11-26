import { ConnectedPosition } from "@angular/cdk/overlay";
import { PositionOption, positionsMap } from "./popover-positions.map";

export abstract class PopoverPositions {

    static getPosition(position: PositionOption = 'EBSB'): ConnectedPosition {
        return positionsMap[position];
    }

    
}