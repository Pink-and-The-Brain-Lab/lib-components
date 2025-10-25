import { IDashboardVisualizationControl } from "../models/dashboard-visualization-control.interface";

export class DashboardVisualizationControlAction {
    static readonly type = '[Dashboard] DashboardVisualizationControl';
    constructor (public control: IDashboardVisualizationControl) {}
}
