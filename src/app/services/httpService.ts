import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
//@Injectable()
export class HttpService {
  private baseUrl = 'https://dummyjson.com';

  constructor(private http: HttpClient) {}
  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();

  showLoading() {
    this.loadingSubject.next(true);
  }

  hideLoading() {
    this.loadingSubject.next(false);
  }

  getData(): Observable<any> {

    return this.http.get<any>(`${this.baseUrl}/data`);
  }

  postData(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/data`, data);
  }

  getUsers (){
    return this.http.get<any>(`${this.baseUrl}/users`);
  }

  getOneUser (id: any){
    return this.http.get<any>(`${this.baseUrl}/users/${id}`);
  }

  getProd(){
    return this.http.get<any>('https://dummyjson.com/products');
  }

  getAllProd (){
    return this.http.get<any>(`${this.baseUrl}/products`);
  }

  // ... other HTTP methods (PUT, DELETE, PATCH)
}