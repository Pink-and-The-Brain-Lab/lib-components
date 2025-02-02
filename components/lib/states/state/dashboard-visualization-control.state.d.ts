import { StateContext } from "@ngxs/store";
import { IDashboardVisualizationControl } from '../models/dashboard-visualization-control.interface';
import { DashboardVisualizationControlAction } from '../actions/dashboard-visualization-control.action';
import * as i0 from "@angular/core";
export declare class DashboardVisualizationControlState {
    constructor();
    updateProfile(ctx: StateContext<IDashboardVisualizationControl>, action: DashboardVisualizationControlAction): void;
    static showDashboard(state: IDashboardVisualizationControl): IDashboardVisualizationControl;
    static ɵfac: i0.ɵɵFactoryDeclaration<DashboardVisualizationControlState, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DashboardVisualizationControlState>;
}
