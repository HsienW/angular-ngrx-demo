import {Component, OnInit, OnDestroy} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';
import {ToDoRootState, ToDoAPIRespond} from '../ngrx/todo-state';
import * as ToDoActions from '../ngrx/todo-actions';
import * as ToDoSelectors from '../ngrx/todo-selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  todo: Observable<ToDoRootState>;
  ToDoSubscription: Subscription;
  ToDoData;

  Title = '';
  IsCompleted = false;

  todoError: Error = null;

  constructor(private store: Store<{ todos: ToDoRootState }>) {
    this.todo = store.pipe(select('todos'));
    this.ToDoSubscription = this.store.pipe(select('todos')).subscribe();
  }

  ngOnInit() {

    // this.ToDoSubscription = this.todo.pipe(select(ToDoSelectors.selectToDoAPIRespond)).subscribe();
    this.store.dispatch(ToDoActions.GetToDoStart());

    this.ToDoData = this.todo.pipe(select(ToDoSelectors.selectToDoAPIRespond).map(item => {
          this.ToDoList = item.ToDoItems;
          this.todoError = item.ToDoError;
        }))


    // this.ToDoSubscription = this.todo$
    //   .pipe(
    //     map(x => {
    //       this.ToDoList = x.ToDos;
    //       this.todoError = x.ToDoError;
    //     })
    //   )
    //   .subscribe();


    console.log('11111111111111111111111');
    console.log(this.ToDoData);

    // map(item => {
      //     this.ToDoList = item.ToDoItems;
      //     this.todoError = item.ToDoError;
      //   });
    // this.ToDoSubscription = this.todo.pipe(
    //   map(item => {
    //     this.ToDoList = item.ToDoItems;
    //     this.todoError = item.ToDoError;
    //   })
    // )
    //   .subscribe();

    // this.store.dispatch(ToDoActions.GetToDoStart());
    //
    // this.store.select(store.getTodoRootState)
    //   .map(state => state.pizzas)
    //   .map(pizzas => pizza.entities);
  }

  // createToDo() {
  //   const todo: ToDo = {Title: this.Title, IsCompleted: this.IsCompleted};
  //   this.store.dispatch(ToDoActions.BeginCreateToDoAction({payload: todo}));
  //   this.Title = '';
  //   this.IsCompleted = false;
  // }

  ngOnDestroy() {
    if (this.ToDoSubscription) {
      this.ToDoSubscription.unsubscribe();
    }
  }
}
