import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ToDoAPIRespond, CreateToDoItemAPIRespond} from './todo-state';

@Injectable({
  providedIn: 'root'
})
export class ToDoHttpService {
  private ApiURL = 'http://localhost:4000/posts';

  constructor(private httpclient: HttpClient) {
  }

  getToDos(): Observable<ToDoAPIRespond> {
    return this.httpclient.get<ToDoAPIRespond>(this.ApiURL);
  }

  createToDoItem(payload: CreateToDoItemAPIRespond): Observable<CreateToDoItemAPIRespond> {
    return this.httpclient.post<CreateToDoItemAPIRespond>(this.ApiURL, JSON.stringify(payload), {
      headers: {'Content-Type': 'application/json'}
    });
  }
}
