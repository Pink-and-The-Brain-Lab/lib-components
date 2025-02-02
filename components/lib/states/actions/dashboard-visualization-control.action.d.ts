import { IDashboardVisualizationControl } from "../models/dashboard-visualization-control.interface";
export declare class DashboardVisualizationControlAction {
    control: IDashboardVisualizationControl;
    static readonly type = "[Dashboard] DashboardVisualizationControl";
    constructor(control: IDashboardVisualizationControl);
}
