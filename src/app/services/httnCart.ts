import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { iCart } from "../iCart";

@Injectable({ providedIn: 'root' })
//@Injectable()
export class HttpCart {
    private baseUrl = 'https://dummyjson.com';
    constructor(private http: HttpClient) { }
    items: iCart[] = [];
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

    removeToCart(sp: any) {

        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].id === sp.id) {
                this.items.splice(i, 1);
                console.log(this.items);
            }
        }
    }

    // ... other HTTP methods (PUT, DELETE, PATCH)
}