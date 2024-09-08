import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, Routes } from "@angular/router";
import { HttpService } from '../../services/httpService';
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
    products: any[] = [];
    ngOnInit(): void {
        this.products = [
            { id: 'ma 1', description: 'DRAWSTRING LINEN PANTS', img: "https://laminapparel.com/wp-content/uploads/2024/08/74.png", cost: 200, },
            { id: 'ma 2', description: 'FLARED MAXI SKIRT', img: "https://laminapparel.com/wp-content/uploads/2024/08/87-1.png", cost: 400, },
            { id: 'ma 3', description: 'MINI DRESS', img: "https://laminapparel.com/wp-content/uploads/2024/08/73.png", cost: 300, },
            { id: 'ma 1', description: 'DRAWSTRING LINEN PANTS', img: "https://laminapparel.com/wp-content/uploads/2024/08/47.png", cost: 200, },
            { id: 'ma 2', description: 'FLARED MAXI SKIRT', img: "https://laminapparel.com/wp-content/uploads/2024/08/58.png", cost: 400, },
            { id: 'ma 3', description: 'LONG SLEEVE SQUARE ', img: "https://laminapparel.com/wp-content/uploads/2024/08/26.png", cost: 300, },
            { id: 'ma 1', description: 'DRAWSTRING LINEN PANTS', img: "https://laminapparel.com/wp-content/uploads/2024/08/74.png", cost: 200, },
            { id: 'ma 2', description: 'FLARED MAXI SKIRT', img: "https://laminapparel.com/wp-content/uploads/2024/08/87-1.png", cost: 400, },
            { id: 'ma 3', description: 'NECK MINI DRESS', img: "https://laminapparel.com/wp-content/uploads/2024/08/34.png", cost: 300, },
            { id: 'ma 1', description: 'DRAWSTRING LINEN PANTS', img: "https://laminapparel.com/wp-content/uploads/2024/08/35.png", cost: 200, },
            { id: 'ma 2', description: 'FLARED MAXI SKIRT', img: "https://laminapparel.com/wp-content/uploads/2024/08/87-1.png", cost: 400, },
            { id: 'ma 3', description: 'LONG SLEEVE MINI DRESS', img: "https://laminapparel.com/wp-content/uploads/2024/08/16-1.png", cost: 300, }
        ];
    }

}
