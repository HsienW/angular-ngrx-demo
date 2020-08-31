import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {ToDoEffects} from './todo-effects';
import * as fromTodo from './todo-reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(fromTodo.todoFeatureKey, fromTodo.toDoReducer),
    EffectsModule.forRoot([ToDoEffects])
  ],
})
export class TodoModule {
}
