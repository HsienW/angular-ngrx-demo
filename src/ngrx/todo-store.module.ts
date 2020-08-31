import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromTodo from './todo-reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(fromTodo.todoFeatureKey, fromTodo.toDoReducer),
  ],
})
export class TodoModule {}
