import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  // This code sets the items using the CartService getItems() method. You defined this method when you created cart.service.ts.
  items = this.cartService.getItems();

  // To gather the user's name and address, use the FormBuilder group() method to set the checkoutForm property to a form model containing name and address fields
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(
    //Inject the CartService so that the CartComponent can use it by adding it to the constructor().
    private cartService: CartService,
    //Inject the FormBuilder service in the CartComponent constructor().
    private formBuilder: FormBuilder,
  ) { }

  // Define an onSubmit() method to process the form. This method allows users to submit their name and address. In addition, this method uses the clearCart() method of the CartService to reset the form and clear the cart.
  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

}