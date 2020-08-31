import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {ToDoRootState} from '../ngrx/todo-state';
import * as ToDoActions from '../ngrx/todo-actions';
import * as fromTodoStore from '../ngrx/todo-selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  todo$: Observable<ToDoRootState>;
  toDoListIsLoad;
  todoError: Error = null;

  constructor(private store: Store<{ todos: ToDoRootState }>) {
    this.todo$ = store.pipe(select('todos'));
  }

  ngOnInit() {
    try {
      this.store.dispatch(ToDoActions.GetToDoStart());
      this.toDoListIsLoad = this.store.select(fromTodoStore.selectToDoItems);
    } catch (error) {
      alert('error');
    }
  }

}
