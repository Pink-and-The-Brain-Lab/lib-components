import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, StateToken } from "@ngxs/store";
import { IDashboardVisualizationControl } from '../models/dashboard-visualization-control.interface';
import { DashboardVisualizationControlAction } from '../actions/dashboard-visualization-control.action';

const STATE_TOKEN = new StateToken<IDashboardVisualizationControl>('dashboard');

@State<IDashboardVisualizationControl>({
    name: STATE_TOKEN,
    defaults: {
        showDashboard: true,
    }
})
@Injectable()
export class DashboardVisualizationControlState {

    constructor () {}

    @Action(DashboardVisualizationControlAction)
    updateProfile(ctx: StateContext<IDashboardVisualizationControl>, action: DashboardVisualizationControlAction): void {
        ctx.setState({
            ...action.control
        });
    }

    @Selector()
    static showDashboard(state: IDashboardVisualizationControl): IDashboardVisualizationControl {
        return state;
    }
}
