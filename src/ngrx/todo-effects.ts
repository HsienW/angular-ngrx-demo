import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {ToDoHttpService} from './todo-httpservice';
import {ToDoAPIRespond, CreateToDoItemAPIRespond} from './todo-state';

import * as ToDoActions from './todo-actions';

@Injectable()
export class ToDoEffects {
  constructor(
    private action: Actions,
    private todoService: ToDoHttpService
  ) {
  }

  getToDosEffect$: Observable<Action> = createEffect(() =>
    this.action.pipe(
      ofType(ToDoActions.GetToDoStart),
      mergeMap(action =>
        // Call API
        this.todoService.getToDos().pipe(
          map((data: ToDoAPIRespond) => {
            return ToDoActions.GetToDoSuccess({
              payload: {
                state: 200,
                items: [
                  {
                    'title': '123',
                    'isCompleted': false
                  },
                  {
                    'title': '456',
                    'isCompleted': false
                  },
                  {
                    'title': '789',
                    'isCompleted': false
                  }
                ]
              }
            });
          }),
          catchError((error: Error) => {
            return of(ToDoActions.GetToDoFail(error));
          })
        )
      )
    )
  );

  CreateToDoItem$: Observable<Action> = createEffect(() =>
    this.action.pipe(
      ofType(ToDoActions.CreateToDoItemStart),
      mergeMap(action =>
        // Call API
        this.todoService.createToDoItem(action.payload).pipe(
          map((data: CreateToDoItemAPIRespond) => {
            return ToDoActions.CreateToDoItemSuccess({
              payload: {
                state: 200,
                items: [
                  {
                    title: '000',
                    isCompleted: false,
                    time: 1594644801,
                    description: 'test'
                  },
                ]
              }
            });
          }),
          catchError((error: Error) => {
            return of(ToDoActions.CreateToDoItemFail(error));
          })
        )
      )
    )
  );
}
