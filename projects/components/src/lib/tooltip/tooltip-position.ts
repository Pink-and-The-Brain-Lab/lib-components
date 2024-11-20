import { ConnectedPosition } from '@angular/cdk/overlay';
import { TooltipePlacement } from './tooltip-placement.type';

const TOP: ConnectedPosition = {
  originX: 'center',
  originY: 'top',
  overlayX: 'center',
  overlayY: 'bottom',
  offsetY: -8,
  panelClass: 'tooltip-top',
};

const BOTTOM: ConnectedPosition = {
  originX: 'center',
  originY: 'bottom',
  overlayX: 'center',
  overlayY: 'top',
  offsetY: 8,
  panelClass: 'tooltip-bottom',
};

const RIGHT: ConnectedPosition = {
  originX: 'end',
  originY: 'center',
  overlayX: 'start',
  overlayY: 'center',
  offsetX: 8,
  panelClass: 'tooltip-right',
};

const LEFT: ConnectedPosition = {
  originX: 'start',
  originY: 'center',
  overlayX: 'end',
  overlayY: 'center',
  offsetX: -8,
  panelClass: 'tooltip-left',
};

const BOTTOM_LEFT: ConnectedPosition = {
  originX: 'start',
  originY: 'bottom',
  overlayX: 'center',
  overlayY: 'top',
  offsetX: 8,
  offsetY: 4,
  panelClass: 'tooltip-bottom-left',
};

const BOTTOM_POSITION = [BOTTOM, TOP, LEFT, RIGHT];
const BOTTOM_LEFT_POSITION = [BOTTOM_LEFT, LEFT, TOP, RIGHT];
const RIGHT_POSITION = [RIGHT, TOP, BOTTOM, LEFT];
const LEFT_POSITION = [LEFT, TOP, BOTTOM, RIGHT];
const DEFAULT_POSITION = [TOP, BOTTOM, LEFT, RIGHT];

type PositionMap = {
  [K in TooltipePlacement]: ConnectedPosition[];
};

const POSITION_MAP: PositionMap = {
  top: DEFAULT_POSITION,
  bottom: BOTTOM_POSITION,
  left: LEFT_POSITION,
  right: RIGHT_POSITION,
  auto: DEFAULT_POSITION,
  'bottom-left': BOTTOM_LEFT_POSITION,
};

export function getPositionRoles(
  position: TooltipePlacement
): ConnectedPosition[] {
  return POSITION_MAP[position];
}
