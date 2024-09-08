import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, Routes } from "@angular/router";
import { HttpService } from '../../services/httpService';
import { Iprod } from '../../iprod';
@Component({
    selector: 'app-product',
    standalone: true,
    imports: [],
    templateUrl: './product.component.html',
    styleUrl: './product.component.scss'
})
// export class ProductComponent implements OnInit {
//     listUser: any[] = [];

//     constructor(private product: HttpService) {

//     }

//     // listUser: any[] = [];
//     ngOnInit(): void {
//         this.getProd();
//     }

//     // getProd() {
//     //     this.product.getProd().subscribe((res: any) => {
//     //         console.log(res);
//     //         this.listUser = res.users;
//     //     })
//     // }
// }
export class ProductComponent implements OnInit {

    products: Iprod[] = [];

    constructor(private cartService: HttpService) { }
    ngOnInit(): void {
        this.products = [
            { id: 'ma 1', name:'DRAWSTRING LINEN PANTS', description: 'DRAWSTRING LINEN PANTS', img: "https://laminapparel.com/wp-content/uploads/2024/08/74.png", cost: 200, total_quantity: 10 },
            { id: 'ma 2', name:'DRAWSTRING LINEN PANTS', description: 'FLARED MAXI SKIRT', img: "https://laminapparel.com/wp-content/uploads/2024/08/87-1.png", cost: 400, total_quantity: 10 },
            { id: 'ma 3', name:'DRAWSTRING LINEN PANTS', description: 'MINI DRESS', img: "https://laminapparel.com/wp-content/uploads/2024/08/73.png", cost: 300, total_quantity: 10 },
            { id: 'ma 4', name:'DRAWSTRING LINEN PANTS', description: 'DRAWSTRING LINEN PANTS', img: "https://laminapparel.com/wp-content/uploads/2024/08/47.png", cost: 200, total_quantity: 10 },
            { id: 'ma 5', name:'DRAWSTRING LINEN PANTS', description: 'FLARED MAXI SKIRT', img: "https://laminapparel.com/wp-content/uploads/2024/08/58.png", cost: 400, total_quantity: 10 },
            { id: 'ma 6', name:'DRAWSTRING LINEN PANTS', description: 'LONG SLEEVE SQUARE ', img: "https://laminapparel.com/wp-content/uploads/2024/08/26.png", cost: 300, total_quantity: 10 },
            { id: 'ma 7', name:'DRAWSTRING LINEN PANTS', description: 'DRAWSTRING LINEN PANTS', img: "https://laminapparel.com/wp-content/uploads/2024/08/74.png", cost: 200, total_quantity: 10 },
            { id: 'ma 8', name:'DRAWSTRING LINEN PANTS', description: 'FLARED MAXI SKIRT', img: "https://laminapparel.com/wp-content/uploads/2024/08/87-1.png", cost: 400, total_quantity: 10 },
            { id: 'ma 9', name:'DRAWSTRING LINEN PANTS', description: 'NECK MINI DRESS', img: "https://laminapparel.com/wp-content/uploads/2024/08/34.png", cost: 300, total_quantity: 10 },
            { id: 'ma 10', name:'DRAWSTRING LINEN PANTS', description: 'DRAWSTRING LINEN PANTS', img: "https://laminapparel.com/wp-content/uploads/2024/08/35.png", cost: 200, total_quantity: 10 },
            { id: 'ma 11', name:'DRAWSTRING LINEN PANTS', description: 'FLARED MAXI SKIRT', img: "https://laminapparel.com/wp-content/uploads/2024/08/87-1.png", cost: 400, total_quantity: 10 },
            { id: 'ma 12', name:'DRAWSTRING LINEN PANTS', description: 'LONG SLEEVE MINI DRESS', img: "https://laminapparel.com/wp-content/uploads/2024/08/16-1.png", cost: 300, total_quantity: 10 }
        ];
    }

    addToCart(item: Iprod) {
        this.cartService.addToCart(item);
        console.log(this.cartService.getItemsCart());
    }


}
