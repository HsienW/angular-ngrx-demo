import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {of} from 'rxjs';
// import {ToDoAPIRespond, CreateToDoItemAPIRespond} from '../ngrx/todo-state';

@Injectable({
  providedIn: 'root'
})

/** 這隻是假的, 表示用而已 **/
export class ToDoHttpService {
  private ApiURL = '';

  constructor(private httpclient: HttpClient) {
  }

  getToDos() {
    return of(new HttpResponse({
      status: 200,
      body: [
        {
          'title': '123',
          'isCompleted': false
        },
        {
          'title': '456',
          'isCompleted': false
        },
        {
          'title': '===',
          'isCompleted': false
        }
      ]
    }));
  }

  // createToDoItem(payload: CreateToDoItemAPIRespond): Observable<CreateToDoItemAPIRespond> {
  //   return this.httpclient.post<CreateToDoItemAPIRespond>(this.ApiURL, JSON.stringify(payload), {
  //     headers: {'Content-Type': 'application/json'}
  //   });
  // }
}
