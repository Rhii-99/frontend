import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {CartModelServer} from "../../models/cart.model";
import {Router} from "@angular/router";
import {OrderService} from "../../services/order.service";
import {NgxSpinnerService} from "ngx-spinner";
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartTotal: Number;
  cartData: CartModelServer;
  userId;

  constructor(private cartService: CartService,
              private orderService: OrderService,
              private router: Router,
              private spinner: NgxSpinnerService,
              private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.cartService.cartDataObs$.subscribe(data => this.cartData = data);
    this.cartService.cartTotal$.subscribe(total => this.cartTotal = total);
    this.userService.userData$.subscribe(data => {
      // @ts-ignore
      this.userId = data.userId || data.id;
      console.log(this.userId);
    });

  }
  onCheckout() {
    this.spinner.show().then(p => {
       this.cartService.CheckoutFromCart(1);
     });
    }

  // onCheckout() {
  //   if (this.cartTotal > 0) {
  //     this.spinner.show().then(p => {
  //       this.cartService.CheckoutFromCart(this.userId);
  //     });
  //   } else {
  //     return;
  //   }
  // }
}
