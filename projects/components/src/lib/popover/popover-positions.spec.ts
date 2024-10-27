import { PopoverPositions } from "./popover-positions";
import { positionsMap } from "./popover-positions.map";

describe('PopoverPositions', () => {
  it('should return default position', () => {
    const position = PopoverPositions.getPosition();
    expect(position).toEqual(positionsMap['EBSB']);
  });

  it('should return an specific position', () => {
    const position = PopoverPositions.getPosition('CBEC');
    expect(position).toEqual(positionsMap['CBEC']);
  });
});