import { Action } from "@ngrx/store";

export enum ActionTypes {
    Increment = '[Counter Component] Increment',
    Decrement = '[Counter Component] Decrement',
    Reset = '[counter Component] Reset',
}

export class Increment implements Action {
    readonly type = ActionTypes.Increment;
}

export class Decrement implements Action {
    readonly type = ActionTypes.Decrement;
}

export class Reset implements Action {
    readonly type = ActionTypes.Reset;
}