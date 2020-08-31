import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {ToDoHttpService} from '../app/httpservice';
import {ToDoAPIRespond, CreateToDoItemAPIRespond, ToDoItem} from './todo-state';

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
      switchMap(action =>
        // Call API
        this.todoService.getToDos().pipe(
          map((data: ToDoAPIRespond) => {
            return ToDoActions.GetToDoSuccess({ status: data.status, body: data.body });
          }),
          catchError((error: Error) => {
            return of(ToDoActions.GetToDoFail(error));
          })
        )
      )
    )
  );

  // CreateToDoItem$: Observable<Action> = createEffect(() =>
  //   this.action.pipe(
  //     ofType(ToDoActions.CreateToDoItemStart),
  //     switchMap(action =>
  //       // Call API
  //       this.todoService.createToDoItem(action.payload).pipe(
  //         map((data: CreateToDoItemAPIRespond) => {
  //           return ToDoActions.CreateToDoItemSuccess({
  //             payload: {
  //               state: 200,
  //               items: [
  //                 {
  //                   title: '000',
  //                   isCompleted: false,
  //                   time: 1594644801,
  //                   description: 'test'
  //                 },
  //               ]
  //             }
  //           });
  //         }),
  //         catchError((error: Error) => {
  //           return of(ToDoActions.CreateToDoItemFail(error));
  //         })
  //       )
  //     )
  //   )
  // );
}
