import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { iCart } from "../iCart";

@Injectable({ providedIn: 'root' })
//@Injectable()
export class HttpService {
  private baseUrl = 'https://dummyjson.com';

  constructor(private http: HttpClient) { }
  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();
  items: iCart[] = [];
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

  getUsers() {
    return this.http.get<any>(`${this.baseUrl}/users`);
  }

  getOneUser(id: any) {
    return this.http.get<any>(`${this.baseUrl}/users/${id}`);
  }

  getProd() {
    return this.http.get<any>('https://dummyjson.com/products');
  }

  getAllProd() {
    return this.http.get<any>(`${this.baseUrl}/products`);
  }

  addToCart(sp: any) {
    var c: iCart;
    var index = this.items.findIndex(i => i.id == sp.id)
    if (index >= 0) {
      this.items[index].order_quantity++
    } else {
      c = {
        id: sp.id,
        name: sp.name,
        img: sp.img,
        cost: sp.cost,
        order_quantity: 1
      }
      this.items.push(c);
    }
  }

  getItemsCart() {
    return this.items;
  }

  clearCart() {
    this.items = []
    return this.items;
  }

  // ... other HTTP methods (PUT, DELETE, PATCH)
}