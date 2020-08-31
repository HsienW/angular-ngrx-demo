import {Action, createReducer, on} from '@ngrx/store';
// import {CreateToDoItemAPIRespond} from './todo-model';
import {initializeState, ToDoRootState, ToDoAPIRespond, CreateToDoItemAPIRespond} from './todo-state';
import * as ToDoActions from './todo-actions';
export const todoFeatureKey = 'todos';

const reducer = createReducer(
  initializeState,

  on(ToDoActions.GetToDo, state => state),

  on(ToDoActions.ToDoError, (state: ToDoRootState, error: Error) => {
    console.error(error);
    return {...state, ToDoError: error};
  }),

  on(ToDoActions.GetToDoSuccess, (state: ToDoRootState, {payload}) => {
    return {...state, ToDoAPIRespond: payload, ToDoError: null};
  }),

  on(ToDoActions.GetToDoFail, (state: ToDoRootState, error: Error) => {
    // remove below line and use different telemetry logging
    console.error(error);
    return {...state, ToDoError: error};
  }),

  on(ToDoActions.CreateToDoItemSuccess, (state: ToDoRootState, {payload}) => {
    return {...state, CreateToDoItemAPIRespond: payload, ToDoError: null};
  }),

  on(ToDoActions.CreateToDoItemFail, (state: ToDoRootState, error: Error) => {
    console.error(error);
    return {...state, ToDoError: error};
  }),
);

export function toDoReducer(state: ToDoRootState | undefined, action: Action): ToDoRootState {
  return reducer(state, action);
}
