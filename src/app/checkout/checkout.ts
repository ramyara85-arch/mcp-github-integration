import { Component } from '@angular/core';

declare var Razorpay : any;

@Component({
  selector: 'app-checkout',
  standalone: true,
  template: `<button (click)="pay()">Pay</button>`
})
export class Checkout {
  pay() {
     const options = {
      key: 'rzp_test_TnMvuVhC8aZJ4j', // test Key ID only, never the secret
      amount: 50000,                // in paise (₹500)
      currency: 'INR',
      name: 'My Test App',
      description: 'Test transaction',
      handler: (response: any) => {
        console.log('Payment ID:', response.razorpay_payment_id);
      },
      theme: { color: '#3399cc' },
    };
    new Razorpay(options).open();
  }
  }

