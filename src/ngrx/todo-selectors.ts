import {ToDoRootState} from './todo-state';
import {createSelector, createFeatureSelector} from '@ngrx/store';

export const selectTodoRoot = createFeatureSelector<ToDoRootState>('todos');

export const selectToDoAPIRespond = createSelector(
  selectTodoRoot,
  (state) => state.ToDoAPIRespond
);

export const selectCreateToDoItemAPIRespond = createSelector(
  selectTodoRoot,
  (state) => state.CreateToDoItemAPIRespond
);

export const selectToDoItems = createSelector(
  selectToDoAPIRespond,
  (apiRespond) =>
    Object.values(apiRespond).map((item) => {
      const {title, isCompleted} = item;
      return {title, isCompleted};
    })
);

export const selectCreateToDoItem = createSelector(
  selectCreateToDoItemAPIRespond,
  (apiRespond) =>
    Object.values(apiRespond).map((item) => {
      const {title, isCompleted} = item;
      return {title, isCompleted};
    })
);

export const selectItemById = createSelector(
  selectToDoAPIRespond,
  (state, props) => state.title[props.title]
);
