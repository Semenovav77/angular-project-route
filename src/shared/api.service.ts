import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}
export interface IGetTodosRequest {
  limit: string
}

const buildParams = (params: IGetTodosRequest | undefined) => {
  let paramsReq = new HttpParams();
  if (!params) return paramsReq
  Object.entries(params).forEach(([key, value]) => {
    paramsReq = paramsReq.append(key, value)
  })
  return paramsReq
}

@Injectable({providedIn: 'root'})
export class apiService {
  public todos: Todo[] =[]

  constructor(private http: HttpClient) {}

  getTodos(params?: IGetTodosRequest): Observable<Todo[]> {
    let paramsReq = buildParams(params)
    return this.http.get<Todo[]>('http://translate.google.ru/translate_a/t?client=x&text=bye&hl=en&sl=en&tl=ru', {params: paramsReq})
      .pipe(res => {
        console.log(res)
        return res
      })
  }


}
