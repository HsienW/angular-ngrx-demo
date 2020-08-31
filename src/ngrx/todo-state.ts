/** 原本就有的 TodoItem **/
export interface ToDoItem {
  title: string;
  isCompleted: boolean;
}

export interface ToDoAPIRespond {
  status: number;
  body: ToDoItem[];
}

/** 新增的 TodoItem **/
export interface IsCreateToDoItem {
  title: string;
  isCompleted: boolean;
  time: number;
  description: string;
}

export interface CreateToDoItemAPIRespond {
  state: number;
  items: IsCreateToDoItem[];
}

/** Root TodoItem **/
export interface ToDoRootState {
  ToDoAPIRespond: ToDoAPIRespond;
  CreateToDoItemAPIRespond: CreateToDoItemAPIRespond;
  ToDoError: Error;
}

/** 初始化用的 TodoItem **/
export const initializeState: ToDoRootState = {
  ToDoAPIRespond: null,
  CreateToDoItemAPIRespond: null,
  ToDoError: null
};
