import {ToDoRootState} from './todo-state';
import {createSelector, createFeatureSelector} from '@ngrx/store';

/** 先產生 select root **/
export const selectTodoRoot = createFeatureSelector<ToDoRootState>('todos');

/** 從 select root 中拿出第一層的 selectToDoAPIRespond **/
export const selectToDoAPIRespond = createSelector(
  selectTodoRoot,
  (state) => state.ToDoAPIRespond
);

/**  從 select root 中拿出第一層的 selectCreateToDoItemAPIRespond **/
export const selectCreateToDoItemAPIRespond = createSelector(
  selectTodoRoot,
  (state) => state.CreateToDoItemAPIRespond
);

/** 從 selectToDoAPIRespond 中拿出我們要的 items **/
export const selectToDoItems = createSelector(
  selectToDoAPIRespond,
  (apiRespond) => {
    if (apiRespond) {
      return apiRespond.body;
    }
  }
);

/** 下面以此類推 **/
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
