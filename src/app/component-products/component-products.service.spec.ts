import { TestBed, inject } from '@angular/core/testing';

import { ComponentProductsService } from './component-products.service';

describe('ComponentProductsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponentProductsService]
    });
  });

  it('should be created', inject([ComponentProductsService], (service: ComponentProductsService) => {
    expect(service).toBeTruthy();
  }));
});
