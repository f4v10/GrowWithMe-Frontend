import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {environments} from "../../../environments/environment";

export class BaseService<T> {
  basePath: string = `${environments.serverBasePath}`;
  resourceEndpoint: string = '/resources';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
    })
  }

  constructor(private http: HttpClient) {}

  handleError(error: HttpErrorResponse) {
    // Default error handling
    if (error.error instanceof ErrorEvent) {
      console.log(`An error occurred ${error.error.message}`);
    } else {
      // Unsuccessful response error code returned from backend
      console.log(`Backend returned code ${error.status}, body was ${error.error}`);
    }
    return throwError(() => new Error('Something happened with request, please try again later'));
  }

  private resourcePath() {
    return `${this.basePath}${this.resourceEndpoint}`
  }
  create(item: any): Observable<T> {
    return this.http.post<T>(this.resourcePath(), JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  delete(id: any) {
    return this.http.delete(`${this.resourcePath()}/${id}`, this.httpOptions).pipe(retry(2), catchError(this.handleError));
  }

  update(id: any, item: any) {
    return this.http.put<T>(`${this.resourcePath()}/${id}`, JSON.stringify(item), this.httpOptions).pipe(retry(2), catchError(this.handleError));
  }

  getAll() {
    return this.http.get<T>(this.resourcePath(), this.httpOptions).pipe(retry(2), catchError(this.handleError));
  }

  getById(id: any) {
    return this.http.get<T>(`${this.resourcePath()}/${id}`, this.httpOptions).pipe(retry(2), catchError(this.handleError));
  }

}
