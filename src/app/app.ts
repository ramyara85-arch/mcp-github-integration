import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Checkout } from "../app/checkout/checkout";
@Component({
  imports: [RouterOutlet, Checkout],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('payment-demo');
}
