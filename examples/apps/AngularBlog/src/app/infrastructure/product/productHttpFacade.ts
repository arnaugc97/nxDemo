// Angular Modules
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// RxJS
import { lastValueFrom } from 'rxjs';

// Infrastructure
import { ProductFacade } from './productFacade';

// Exceptions
import { GetProductsException } from './exceptions';

// Entities
import { Product } from '../../domain/product/product';

// Types
import { NewProduct, ProductResponse } from '../../shared/types/product';

@Injectable({
  providedIn: 'root', // Ensure it's provided in the root injector
})
export class ProductHttpFacade implements ProductFacade {
  constructor(private _httpClient: HttpClient) {}

  async getProducts(): Promise<Product[]> {
    try {
      const response$ = this._httpClient.get<ProductResponse>(`/products`);
      return lastValueFrom(response$).then((response: ProductResponse) => {
        return response.products.map((product: NewProduct) => {
          return Product.create(product);
        });
      });
    } catch (e) {
      throw new GetProductsException(e);
    }
  }
}
