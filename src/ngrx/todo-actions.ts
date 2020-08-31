import {createAction, props} from '@ngrx/store';
import {ToDoAPIRespond, ToDoItem, CreateToDoItemAPIRespond} from './todo-state';

/** UI **/
export const GetToDo = createAction(
  '[ToDo/UI] Get-ToDo'
);

export const ToDoError = createAction(
  '[ToDo/UI] Error',
  props<Error>()
);

export const CreateToDoItem = createAction(
  '[ToDo/UI] Create-ToDo-Item',
  props<ToDoItem>()
);

/** Call API **/
export const GetToDoStart = createAction(
  '[ToDo/API] Get-ToDo-Start'
);

export const GetToDoSuccess = createAction(
  '[ToDo/API] Get-ToDo-Success',
  props<{ status: number; body: ToDoItem[]; }>()
);

export const GetToDoFail = createAction(
  '[ToDo/API] Get-ToDo-Fail',
  props<Error>()
);

export const CreateToDoItemStart = createAction(
  '[ToDo/API] Create-ToDo-Item-Start',
  props<{ payload: CreateToDoItemAPIRespond }>()
);

export const CreateToDoItemSuccess = createAction(
  '[ToDo/API] Create-ToDo-Item-Success',
  props<{ payload: CreateToDoItemAPIRespond }>()
);

export const CreateToDoItemFail = createAction(
  '[ToDo/API] Create-ToDo-Item-Fail',
  props<Error>()
);

