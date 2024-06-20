/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { ProductFacade } from '../../../infrastructure/product/productFacade';
import { Query } from '../../../shared/third-party-lib/query';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  // let productFacadeMock: jest.Mocked<ProductFacade>;
  // let queryMock: jest.Mocked<Query>;

  beforeEach(async () => {
    const mockFacade = {
      getProducts: jest.fn(),
    };

    const mockQuery = {
      queryFetch: jest.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [DashboardComponent],
      providers: [
        { provide: ProductFacade, useValue: mockFacade },
        { provide: Query, useValue: mockQuery },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // productFacadeMock = TestBed.inject(
    //   ProductFacade
    // ) as jest.Mocked<ProductFacade>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
