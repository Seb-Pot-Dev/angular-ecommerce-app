import { HttpClient } from '@angular/common/http';
import { Product } from './products';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // défini un tableau de Product(s) nommé "items"
  items: Product[] = [];

  constructor(private http: HttpClient) { 
  }

  // Défini une fonction addToCart pour ajouter un Product à items
  addToCart(product: Product) {
    this.items.push(product);
  }

  // Défini une fonction qui retourne le tableau d'items de l'utilisateur
  getItems() {
    return this.items;
  }

  // Défini une fonction qui vide le tableau items et le retourne
  clearCart() {
    this.items = [];
    return this.items;
  }
  
  // Défini une fonction qui retourne les frais de livraison
  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
}
