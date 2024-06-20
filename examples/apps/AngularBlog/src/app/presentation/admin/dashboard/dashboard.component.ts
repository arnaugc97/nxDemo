import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFacade } from '../../../infrastructure/product/productFacade';
import { Query } from '../../../shared/third-party-lib/query';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  queryResult = this._query.queryFetch('products', () =>
    this._productFacade.getProducts()
  );

  constructor(private _productFacade: ProductFacade, private _query: Query) {}
}
